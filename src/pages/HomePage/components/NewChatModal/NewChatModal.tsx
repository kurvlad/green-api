import { useState } from 'react';

import styles from './NewChatModal.module.css';

interface NewChatModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (phone: string) => void;
}

const NewChatModal = ({ isOpen, onClose, onCreate }: NewChatModalProps) => {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    if (!isOpen) {
        return null;
    }

    const handleSubmit = () => {
        const cleanPhone = phone.replace(/\D/g, '');

        if (cleanPhone.length < 10) {
            setError('Введите корректный номер телефона');
            return;
        }

        onCreate(cleanPhone);
        setPhone('');
        setError('');
        onClose();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
        if (e.key === 'Escape') {
            onClose();
        }
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.title}>Новый чат</h2>
                <p className={styles.hint}>Введите номер телефона получателя в международном формате</p>

                <input
                    className={styles.input}
                    type="tel"
                    placeholder="79991234567"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                        setError('');
                    }}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />

                {error && <span className={styles.error}>{error}</span>}

                <div className={styles.actions}>
                    <button className={styles.cancel} onClick={onClose} type="button">
                        Отмена
                    </button>
                    <button className={styles.create} onClick={handleSubmit} type="button">
                        Создать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewChatModal;
