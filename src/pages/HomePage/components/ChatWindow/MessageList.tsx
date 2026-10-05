import { useEffect, useRef } from 'react';

import type { Message } from '../../HomePage.types';
import MessageItem from './MessageItem';
import styles from './MessageList.module.css';

interface MessageListProps {
    chatId: string;
    messages: Message[];
}

const MessageList = ({ chatId, messages }: MessageListProps) => {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, chatId]);

    return (
        <div className={styles.list}>
            {messages.map((message) => (
                <MessageItem key={`${chatId}-${message.id}`} message={message} />
            ))}
            <div ref={bottomRef} />
        </div>
    );
};

export default MessageList;
