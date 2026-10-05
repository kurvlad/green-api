import { apiClient } from '@app/api/apiClient';
import { endpoints } from '@app/api/queries';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { DeleteTemplateResponse } from './delete-template.interface';

export const useDeleteTemplateMutation = (options?: UseMutationOptions<DeleteTemplateResponse, AxiosError, string>) =>
    useMutation<DeleteTemplateResponse, AxiosError, string>({
        mutationFn: async (uuid: string): Promise<DeleteTemplateResponse> => {
            const { data } = await apiClient.delete<DeleteTemplateResponse>(endpoints.template.delete(uuid));
            return data;
        },
        ...options,
    });
