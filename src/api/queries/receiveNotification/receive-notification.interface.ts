export type ChatType = 'user' | 'group' | 'supergroup' | string;
export type SenderType = 'user' | 'group' | 'supergroup' | string;

export interface SenderData {
    chatId: string;
    chatType?: ChatType;
    sender: string;
    senderName?: string;
    senderType?: SenderType;
    senderContactName?: string;
    senderPhoneNumber?: number;
    chatName?: string;
}

export interface TextMessageData {
    textMessage: string;
    forwardingScore?: number;
    isForwarded?: boolean;
}

export interface MessageData {
    typeMessage: string;
    textMessageData?: TextMessageData;
}

export interface InstanceData {
    idInstance: number;
    wid: string;
    typeInstance: string;
}

export interface ReceiveNotificationBody {
    typeWebhook: string;
    instanceData: InstanceData;
    timestamp: number;
    idMessage: string;
    senderData?: SenderData;
    messageData?: MessageData;
}

export interface ReceiveNotificationResponse {
    receiptId: number;
    body: ReceiveNotificationBody;
}

export interface ReceiveNotificationPayload {
    idInstance: string;
    apiTokenInstance: string;
}
