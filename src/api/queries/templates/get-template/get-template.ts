import { apiClient } from '@app/api/apiClient';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { endpoints, queryKeys, STALE_TIME } from '../../queries.constants';
import type { GetTemplateResponse } from './get-template.interface';

export const useGetTemplateQuery = (id: string, options?: Partial<UseQueryOptions<GetTemplateResponse, AxiosError>>) =>
    useQuery<GetTemplateResponse, AxiosError>({
        queryKey: queryKeys.template.get(id),
        queryFn: async () => {
            if (!id) {
                throw new Error('ID is required to fetch project.');
            }
            const { data } = await apiClient.get<GetTemplateResponse>(endpoints.template.get(id));

            return data;
        },
        staleTime: STALE_TIME,
        enabled: false,
        ...options,
    });
