import { apiClient } from '@app/api/apiClient';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { endpoints } from '../../queries.constants';
import type { Credentials, PutTemplateResponse } from './put-template.interface';

export const usePutTemplateMutation = (
    uuid: string,
    options?: UseMutationOptions<PutTemplateResponse, AxiosError, Credentials>
) =>
    useMutation<PutTemplateResponse, AxiosError, Credentials>({
        mutationFn: async (credentials) => {
            const { data } = await apiClient.put<PutTemplateResponse>(endpoints.template.put(uuid), credentials);

            return data;
        },
        ...options,
    });
