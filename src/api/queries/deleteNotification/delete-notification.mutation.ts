import { apiClient } from '@app/api/apiClient';
import { endpoints } from '@app/api/greenApi.constants';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { DeleteNotificationPayload, DeleteNotificationResponse } from './delete-notification.interface';

export const useDeleteNotificationMutation = (
    options?: UseMutationOptions<DeleteNotificationResponse, AxiosError, DeleteNotificationPayload>
) =>
    useMutation<DeleteNotificationResponse, AxiosError, DeleteNotificationPayload>({
        mutationFn: async ({ idInstance, apiTokenInstance, receiptId }) => {
            const { data } = await apiClient.delete<DeleteNotificationResponse>(
                endpoints.deleteNotification(idInstance, apiTokenInstance, receiptId)
            );

            return data;
        },
        ...options,
    });
