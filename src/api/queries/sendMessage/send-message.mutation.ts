import { apiClient } from '@app/api/apiClient';
import { endpoints } from '@app/api/greenApi.constants';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { SendMessagePayload, SendMessageResponse } from './send-message.interface';

export const useSendMessageMutation = (
    options?: UseMutationOptions<SendMessageResponse, AxiosError, SendMessagePayload>,
) =>
    useMutation<SendMessageResponse, AxiosError, SendMessagePayload>({
        mutationFn: async ({ idInstance, apiTokenInstance, chatId, message }) => {
            const { data } = await apiClient.post<SendMessageResponse>(
                endpoints.sendMessage(idInstance, apiTokenInstance),
                { chatId, message },
            );

            return data;
        },
        ...options,
    });
