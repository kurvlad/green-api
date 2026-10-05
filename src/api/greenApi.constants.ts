export const GREEN_API_BASE_URL = 'https://api.green-api.com';

export const STALE_TIME = 5 * 60 * 1000;

export const getGreenApiUrl = (
    idInstance: string,
    apiTokenInstance: string,
    method: string,
): string => `${GREEN_API_BASE_URL}/waInstance${idInstance}/${method}/${apiTokenInstance}`;

export const endpoints = {
    getSettings: (idInstance: string, apiTokenInstance: string) =>
        getGreenApiUrl(idInstance, apiTokenInstance, 'getSettings'),

    sendMessage: (idInstance: string, apiTokenInstance: string) =>
        getGreenApiUrl(idInstance, apiTokenInstance, 'sendMessage'),

    receiveNotification: (idInstance: string, apiTokenInstance: string) =>
        getGreenApiUrl(idInstance, apiTokenInstance, 'receiveNotification'),

    deleteNotification: (idInstance: string, apiTokenInstance: string, receiptId: number) =>
        getGreenApiUrl(idInstance, apiTokenInstance, `deleteNotification/${receiptId}`),
};

export const queryKeys = {
    settings: (idInstance: string) => ['settings', idInstance] as const,
};
