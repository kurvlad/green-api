export interface Message {
    id: string;
    text: string;
    outgoing: boolean;
    time: string;
    senderName?: string;
}

export interface Chat {
    id: string;
    chatId: string;
    name: string;
    phone: string;
    lastMessage: string;
    lastMessageTime: string;
    unread: number;
    messages: Message[];
}
