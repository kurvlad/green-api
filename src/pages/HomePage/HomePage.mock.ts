import type { Chat } from './HomePage.types';

export const mockChats: Chat[] = [
    {
        id: '1',
        chatId: '79991234567@c.us',
        name: 'Анна Смирнова',
        phone: '79991234567',
        lastMessage: 'Привет! Как дела?',
        lastMessageTime: '14:32',
        unread: 2,
        messages: [
            { id: '1', text: 'Привет!', outgoing: true, time: '14:20' },
            { id: '2', text: 'Привет! Как дела?', outgoing: false, time: '14:32' },
        ],
    },
    {
        id: '2',
        chatId: '79997654321@c.us',
        name: 'Иван Петров',
        phone: '79997654321',
        lastMessage: 'Отправил файлы, посмотри',
        lastMessageTime: '13:10',
        unread: 0,
        messages: [{ id: '1', text: 'Отправил файлы, посмотри', outgoing: false, time: '13:10' }],
    },
];
