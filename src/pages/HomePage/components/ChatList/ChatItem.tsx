import type { Chat } from '../../HomePage.types';
import styles from './ChatItem.module.css';

interface ChatItemProps {
    chat: Chat;
    active: boolean;
    onClick: () => void;
}

const ChatItem = ({ chat, active, onClick }: ChatItemProps) => {
    const initials = chat.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

    return (
        <div className={`${styles.item} ${active ? styles.itemActive : ''}`} onClick={onClick}>
            <div className={styles.avatar}>{initials}</div>
            <div className={styles.body}>
                <div className={styles.row}>
                    <span className={styles.name}>{chat.name}</span>
                    <span className={styles.time}>{chat.lastMessageTime}</span>
                </div>
                <div className={styles.row}>
                    <span className={styles.last}>{chat.lastMessage}</span>
                    {chat.unread > 0 && <span className={styles.badge}>{chat.unread}</span>}
                </div>
            </div>
        </div>
    );
};

export default ChatItem;
