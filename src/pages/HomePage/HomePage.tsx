import { useSendMessageMutation } from '@app/api/queries/sendMessage/send-message.mutation';
import { getLocalStorageItem, resetLocalStorage, setLocalStorageItem } from '@app/app/localStorage/localStorage';
import { CHATS_STORAGE_KEY } from '@app/app/localStorage/localStorage.constants';
import { routerUrls } from '@app/app/router/router.urls';
import { formatTime, useGreenCredentials, useLongPolling } from '@app/common';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChatList from './components/ChatList/ChatList';
import ChatWindow from './components/ChatWindow/ChatWindow';
import NewChatModal from './components/NewChatModal/NewChatModal';
import styles from './HomePage.module.css';
import type { Chat } from './HomePage.types';
import { appendOutgoingMessage, parseIncomingNotification, upsertChatWithMessage } from './HomePage.utils';

const HomePage = () => {
    const { idInstance, apiTokenInstance } = useGreenCredentials();

    const [chats, setChats] = useState<Chat[]>(() => {
        const stored = getLocalStorageItem<Chat[]>(CHATS_STORAGE_KEY);
        return stored ?? [];
    });
    const [activeChatId, setActiveChatId] = useState<string | null>(null);
    const [isNewChatOpen, setIsNewChatOpen] = useState(false);

    const activeChat = chats.find((chat) => chat.id === activeChatId) ?? null;

    const navigate = useNavigate();

    const { mutate: sendMessage } = useSendMessageMutation();

    const handleNotification = useCallback((notification: Parameters<typeof parseIncomingNotification>[0]) => {
        const parsed = parseIncomingNotification(notification);

        if (!parsed) {
            return;
        }

        setChats((prev) => upsertChatWithMessage(prev, parsed));
    }, []);

    useLongPolling({
        idInstance,
        apiTokenInstance,
        onNotification: handleNotification,
    });

    const handleSendMessage = (chatId: string, text: string) => {
        const chat = chats.find((item) => item.id === chatId);

        if (!chat) {
            return;
        }

        const time = formatTime();
        const optimisticMessage = {
            id: `local-${Date.now()}`,
            text,
            outgoing: true,
            time,
        };

        setChats((prev) => appendOutgoingMessage(prev, chat.chatId, optimisticMessage));

        sendMessage({
            idInstance,
            apiTokenInstance,
            chatId: chat.chatId,
            message: text,
        });
    };

    const handleCreateChat = (phone: string) => {
        const chatId = `${phone}@c.us`;
        const existing = chats.find((chat) => chat.chatId === chatId);

        if (existing) {
            setActiveChatId(existing.id);
            return;
        }

        const newChat: Chat = {
            id: chatId,
            chatId,
            phone,
            name: `+${phone}`,
            lastMessage: '',
            lastMessageTime: '',
            unread: 0,
            messages: [],
        };

        setChats((prev) => [newChat, ...prev]);
        setActiveChatId(newChat.id);
    };

    const handleSelectChat = (id: string) => {
        setActiveChatId(id);
        setChats((prev) => prev.map((chat) => (chat.id === id ? { ...chat, unread: 0 } : chat)));
    };

    const handleLogout = () => {
        resetLocalStorage();
        navigate(routerUrls.getLoginPageUrl());
    };

    useEffect(() => {
        setLocalStorageItem(CHATS_STORAGE_KEY, chats);
    }, [chats]);

    return (
        <div className={styles.home}>
            <ChatList
                chats={chats}
                activeChatId={activeChatId}
                onSelectChat={handleSelectChat}
                onNewChat={() => setIsNewChatOpen(true)}
                onLogout={handleLogout}
            />
            <ChatWindow chat={activeChat} onSendMessage={handleSendMessage} />
            <NewChatModal isOpen={isNewChatOpen} onClose={() => setIsNewChatOpen(false)} onCreate={handleCreateChat} />
        </div>
    );
};

export default HomePage;
