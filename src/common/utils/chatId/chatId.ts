const CHAT_ID_SUFFIX = '@c.us';

export const toChatId = (phone: string): string => {
    const cleanPhone = phone.replace(/\D/g, '');

    return `${cleanPhone}${CHAT_ID_SUFFIX}`;
};

export const fromChatId = (chatId: string): string => chatId.replace(CHAT_ID_SUFFIX, '');

export const isChatId = (value: string): boolean => value.endsWith(CHAT_ID_SUFFIX);
