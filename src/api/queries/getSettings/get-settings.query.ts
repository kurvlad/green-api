import { apiClient } from '@app/api/apiClient';
import { endpoints, queryKeys, STALE_TIME } from '@app/api/greenApi.constants';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { GetSettingsResponse } from './get-settings.interface';

export const useGetSettingsQuery = (
    idInstance: string,
    apiTokenInstance: string,
    options?: Partial<UseQueryOptions<GetSettingsResponse, AxiosError>>,
) =>
    useQuery<GetSettingsResponse, AxiosError>({
        queryKey: queryKeys.settings(idInstance),
        queryFn: async () => {
            const { data } = await apiClient.get<GetSettingsResponse>(
                endpoints.getSettings(idInstance, apiTokenInstance),
            );

            return data;
        },
        staleTime: STALE_TIME,
        enabled: Boolean(idInstance && apiTokenInstance),
        ...options,
    });
