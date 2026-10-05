export interface DeleteNotificationPayload {
    idInstance: string;
    apiTokenInstance: string;
    receiptId: number;
}

export interface DeleteNotificationResponse {
    result: boolean;
}
