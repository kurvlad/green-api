import type { ReceiveNotificationResponse } from '@app/api/queries/receiveNotification/receive-notification.interface';
import { formatTime, fromChatId } from '@app/common';

// import { fromChatId } from '@app/utils/chatId';
// import { formatTime } from '@app/utils/time';
import type { Chat, Message } from './HomePage.types';

interface ParseResult {
    chatId: string;
    phone: string;
    displayName: string;
    message: Message;
}

export const parseIncomingNotification = (notification: ReceiveNotificationResponse): ParseResult | null => {
    const { body } = notification;

    if (body.typeWebhook !== 'incomingMessageReceived') {
        return null;
    }

    const { senderData, messageData, idMessage, timestamp } = body;

    if (!senderData?.chatId || !messageData?.textMessageData?.textMessage) {
        return null;
    }

    const isGroup = senderData.chatType === 'group' || senderData.chatType === 'supergroup';

    const displayName = isGroup
        ? senderData.chatName || 'Группа'
        : senderData.senderName || `+${fromChatId(senderData.chatId)}`;

    const message: Message = {
        id: idMessage,
        text: messageData.textMessageData.textMessage,
        outgoing: false,
        time: formatTime(timestamp),
        senderName: isGroup ? senderData.senderName : undefined,
    };

    return {
        chatId: senderData.chatId,
        phone: fromChatId(senderData.chatId),
        displayName,
        message,
    };
};

export const upsertChatWithMessage = (chats: Chat[], { chatId, phone, displayName, message }: ParseResult): Chat[] => {
    const existingIndex = chats.findIndex((chat) => chat.chatId === chatId);

    if (existingIndex === -1) {
        const newChat: Chat = {
            id: chatId,
            chatId,
            phone,
            name: displayName,
            lastMessage: message.text,
            lastMessageTime: message.time,
            unread: 1,
            messages: [message],
        };

        return [newChat, ...chats];
    }

    return chats.map((chat, index) => {
        if (index !== existingIndex) {
            return chat;
        }

        return {
            ...chat,
            lastMessage: message.text,
            lastMessageTime: message.time,
            unread: chat.unread + 1,
            messages: [...chat.messages, message],
        };
    });
};

export const appendOutgoingMessage = (chats: Chat[], chatId: string, message: Message): Chat[] =>
    chats.map((chat) => {
        if (chat.chatId !== chatId) {
            return chat;
        }

        return {
            ...chat,
            lastMessage: message.text,
            lastMessageTime: message.time,
            messages: [...chat.messages, message],
        };
    });
