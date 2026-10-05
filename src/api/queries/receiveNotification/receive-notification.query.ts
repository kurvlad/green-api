import { apiClient } from '@app/api/apiClient';
import { endpoints } from '@app/api/greenApi.constants';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { ReceiveNotificationPayload, ReceiveNotificationResponse } from './receive-notification.interface';

export const useReceiveNotificationQuery = (
    { idInstance, apiTokenInstance }: ReceiveNotificationPayload,
    options?: Partial<UseQueryOptions<ReceiveNotificationResponse | null, AxiosError>>
) =>
    useQuery<ReceiveNotificationResponse | null, AxiosError>({
        queryKey: ['receiveNotification', idInstance],
        queryFn: async () => {
            const { data } = await apiClient.get<ReceiveNotificationResponse | null>(
                endpoints.receiveNotification(idInstance, apiTokenInstance)
            );

            return data;
        },
        enabled: Boolean(idInstance && apiTokenInstance),
        ...options,
    });
