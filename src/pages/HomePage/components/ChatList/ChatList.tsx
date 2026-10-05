import { PlusSvg } from '@app/assets/svg';
import { useState } from 'react';

import type { Chat } from '../../HomePage.types';
import ChatItem from './ChatItem';
import styles from './ChatList.module.css';

interface ChatListProps {
    chats: Chat[];
    activeChatId: string | null;
    onSelectChat: (id: string) => void;
    onNewChat: () => void;
    onLogout?: () => void;
}

const ChatList = ({ chats, activeChatId, onSelectChat, onNewChat, onLogout }: ChatListProps) => {
    const [search, setSearch] = useState('');

    const filtered = chats.filter(
        (chat) => chat.name.toLowerCase().includes(search.toLowerCase()) || chat.phone.includes(search)
    );

    return (
        <aside className={styles.chatList}>
            <header className={styles.header}>
                <input
                    className={styles.search}
                    type="text"
                    placeholder="Поиск"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <button className={styles.newButton} onClick={onNewChat} type="button" aria-label="Новый чат">
                    <PlusSvg />
                </button>
                <button className={styles.logoutButton} onClick={onLogout} type="button" aria-label="Выйти">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                </button>
            </header>

            <div className={styles.items}>
                {filtered.length === 0 && <div className={styles.empty}>Чаты не найдены</div>}
                {filtered.map((chat) => (
                    <ChatItem
                        key={chat.id}
                        chat={chat}
                        active={chat.id === activeChatId}
                        onClick={() => onSelectChat(chat.id)}
                    />
                ))}
            </div>
        </aside>
    );
};

export default ChatList;
