import { type KeyboardEvent, useState } from 'react';

import styles from './MessageInput.module.css';

interface MessageInputProps {
    onSend: (text: string) => void;
}

const MessageInput = ({ onSend }: MessageInputProps) => {
    const [text, setText] = useState('');

    const handleSend = () => {
        const trimmed = text.trim();

        if (!trimmed) {
            return;
        }

        onSend(trimmed);
        setText('');
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSend();
        }
    };

    return (
        <footer className={styles.input}>
            <textarea
                className={styles.field}
                placeholder="Напишите сообщение"
                value={text}
                onChange={(event) => setText(event.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
            />
            <button
                className={styles.send}
                onClick={handleSend}
                disabled={!text.trim()}
                type="button"
                aria-label="Отправить"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
            </button>
        </footer>
    );
};

export default MessageInput;
