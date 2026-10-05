export const formatTime = (timestamp?: number): string => {
    const date = timestamp ? new Date(timestamp * 1000) : new Date();

    return date.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
    });
};
