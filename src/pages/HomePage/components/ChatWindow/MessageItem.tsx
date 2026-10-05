import type { Message } from '../../HomePage.types';
import styles from './MessageItem.module.css';

interface MessageItemProps {
    message: Message;
}

const MessageItem = ({ message }: MessageItemProps) => (
    <div className={`${styles.message} ${message.outgoing ? styles.outgoing : styles.incoming}`}>
        <div className={styles.bubble}>
            {message.senderName && !message.outgoing && <span className={styles.sender}>{message.senderName}</span>}
            <span className={styles.text}>{message.text}</span>
            <span className={styles.time}>{message.time}</span>
        </div>
    </div>
);

export default MessageItem;
