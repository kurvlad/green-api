import { apiClient } from '@app/api/apiClient';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { endpoints } from '../../queries.constants';
import type { LoginCredentials, LoginResponse } from './login.interface';

export const useLoginMutation = (options?: UseMutationOptions<LoginResponse, AxiosError, LoginCredentials>) =>
    useMutation<LoginResponse, AxiosError, LoginCredentials>({
        mutationFn: async (credentials) => {
            const { data } = await apiClient.post<LoginResponse>(endpoints.users.getLogin(), credentials);

            return data;
        },
        ...options,
    });
