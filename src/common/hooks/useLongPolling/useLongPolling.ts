import { apiClient } from '@app/api/apiClient';
import { endpoints } from '@app/api/greenApi.constants';
import type { ReceiveNotificationResponse } from '@app/api/queries/receiveNotification/receive-notification.interface';
import { useEffect, useRef } from 'react';

const EMPTY_QUEUE_DELAY = 3000;
const ERROR_DELAY = 5000;

interface UseLongPollingOptions {
    idInstance: string;
    apiTokenInstance: string;
    onNotification: (notification: ReceiveNotificationResponse) => void;
    enabled?: boolean;
}

export const useLongPolling = ({
    idInstance,
    apiTokenInstance,
    onNotification,
    enabled = true,
}: UseLongPollingOptions) => {
    const onNotificationRef = useRef(onNotification);
    const isRunningRef = useRef(false);

    useEffect(() => {
        onNotificationRef.current = onNotification;
    }, [onNotification]);

    useEffect(() => {
        if (!enabled || !idInstance || !apiTokenInstance) {
            return;
        }

        isRunningRef.current = true;

        const sleep = (ms: number) =>
            new Promise<void>((resolve) => {
                setTimeout(resolve, ms);
            });

        const poll = async () => {
            while (isRunningRef.current) {
                try {
                    const { data } = await apiClient.get<ReceiveNotificationResponse | null>(
                        endpoints.receiveNotification(idInstance, apiTokenInstance)
                    );

                    if (!isRunningRef.current) {
                        return;
                    }

                    if (!data) {
                        await sleep(EMPTY_QUEUE_DELAY);
                        continue;
                    }

                    onNotificationRef.current(data);

                    await apiClient.delete(endpoints.deleteNotification(idInstance, apiTokenInstance, data.receiptId));
                } catch {
                    await sleep(ERROR_DELAY);
                }
            }
        };

        poll();

        return () => {
            isRunningRef.current = false;
        };
    }, [idInstance, apiTokenInstance, enabled]);
};
