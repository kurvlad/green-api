export interface ReceiveNotificationPayload {
    idInstance: string;
    apiTokenInstance: string;
}

export interface ReceiveNotificationResponse {
    receiptId: number;
    body: {
        typeWebhook: string;
        idMessage: string;
        senderData?: {
            chatId: string;
            sender: string;
            senderName?: string;
        };
        messageData?: {
            typeMessage: string;
            textMessageData?: {
                textMessage: string;
            };
        };
        timestamp?: number;
    };
}
