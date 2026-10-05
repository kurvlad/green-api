import { apiClient } from '@app/api/apiClient';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { endpoints } from '../../queries.constants';
import type { Credentials, PostTemplateResponseInterface } from './post-template.interface';

export const usePostMutation = (
    uuid: string,
    options?: UseMutationOptions<PostTemplateResponseInterface, AxiosError, Credentials>
) =>
    useMutation<PostTemplateResponseInterface, AxiosError, Credentials>({
        mutationFn: async (credentials) => {
            const { data } = await apiClient.post<PostTemplateResponseInterface>(
                endpoints.template.post(uuid),
                credentials
            );

            return data;
        },
        ...options,
    });
