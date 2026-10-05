export interface GetSettingsResponse {
    wid: string;
    countryInstance: string;
    typeAccount: string;
    webhookUrl: string;
    webhookUrlToken: string;
    delaySendMessagesMilliseconds: number;
    markIncomingMessagesReaded: string;
    outgoingWebhook: string;
    incomingWebhook: string;
    stateWebhook: string;
    incomingMessageWebhook: string;
    deviceWebhook: string;
    statusInstanceWebhook: string;
}
