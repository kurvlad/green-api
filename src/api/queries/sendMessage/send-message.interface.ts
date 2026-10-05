export interface SendMessagePayload {
    idInstance: string;
    apiTokenInstance: string;
    chatId: string;
    message: string;
}

export interface SendMessageResponse {
    idMessage: string;
}
