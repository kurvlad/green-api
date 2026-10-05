import type { Chat } from '../../HomePage.types';
import styles from './ChatWindow.module.css';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

interface ChatWindowProps {
    chat: Chat | null;
    onSendMessage: (chatId: string, text: string) => void;
}

const ChatWindow = ({ chat, onSendMessage }: ChatWindowProps) => {
    if (!chat) {
        return (
            <main className={`${styles.window} ${styles.windowEmpty}`}>
                <p className={styles.placeholder}>Выберите чат, чтобы начать общение</p>
            </main>
        );
    }

    const initials = chat.name
        .split(' ')
        .map((name) => name[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

    return (
        <main className={styles.window}>
            <header className={styles.header}>
                <div className={styles.avatar}>{initials}</div>
                <div className={styles.info}>
                    <div className={styles.name}>{chat.name}</div>
                    <div className={styles.phone}>+{chat.phone}</div>
                </div>
            </header>

            <MessageList key={chat.id} chatId={chat.id} messages={chat.messages} />

            <MessageInput onSend={(text) => onSendMessage(chat.id, text)} />
        </main>
    );
};

export default ChatWindow;
