import { apiClient } from '@app/api/apiClient';
import { endpoints } from '@app/api/queries/queries.constants';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { UploadFileCredentionals, UploadFileResponse } from './upload-file-template.interface';

export const useUploadFileTemplateMutation = (
    options?: UseMutationOptions<UploadFileResponse, AxiosError, UploadFileCredentionals>
) =>
    useMutation<UploadFileResponse, AxiosError, UploadFileCredentionals>({
        mutationFn: async ({ options, formData }) => {
            const { data } = await apiClient.post<UploadFileResponse>(
                endpoints.template.uploadFile(options.uuid),
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            return data;
        },
        ...options,
    });
