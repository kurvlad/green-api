import { getLocalStorageItem, resetLocalStorage, setLocalStorageItem } from '@app/app/localStorage/localStorage';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@app/app/localStorage/localStorage.constants';
import { TypeGuard } from '@app/common';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import type { LoginResponse } from './queries/auth/login/login.interface';
import { endpoints } from './queries/queries.constants';

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
    },
});

const showErrors = new Set<string>();

let isRefreshing = false;
let failedRequestsQueue: any[] = [];

const processQueue = (error: AxiosError | null, token: string | null = null) => {
    failedRequestsQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedRequestsQueue = [];
};

apiClient.interceptors.request.use(
    (request) => {
        const token = getLocalStorageItem<string>(ACCESS_TOKEN);

        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }

        return request;
    },
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error instanceof AxiosError) {
            const { status, data, config } = error.response || {};

            if (status === 401 && config) {
                const refreshToken = getLocalStorageItem<string>(REFRESH_TOKEN);

                if (TypeGuard.isNull(refreshToken)) {
                    resetLocalStorage();
                    window.location.href = '/login';

                    return Promise.reject(error);
                }

                if (isRefreshing) {
                    return new Promise((resolve, reject) => {
                        failedRequestsQueue.push({ resolve, reject });
                    })
                        .then((token) => {
                            config.headers.Authorization = `Bearer ${token}`;
                            return apiClient(config);
                        })
                        .catch((err) => {
                            return Promise.reject(err);
                        });
                }

                isRefreshing = true;

                return apiClient
                    .post<LoginResponse>(endpoints.users.getRefresh(), {
                        refresh_token: refreshToken,
                    })
                    .then(({ data }) => {
                        const { token } = data.data;

                        setLocalStorageItem(ACCESS_TOKEN, token);
                        processQueue(null, token);
                        config.headers.Authorization = `Bearer ${token}`;
                        return apiClient(config);
                    })
                    .catch((error) => {
                        processQueue(error, null);

                        resetLocalStorage();
                        window.location.href = '/login';

                        return Promise.reject(error);
                    })
                    .finally(() => {
                        isRefreshing = false;
                    });
            }

            if (status === 403) {
                setTimeout(() => {
                    resetLocalStorage();
                    window.location.href = '/login';
                }, 1000);

                toast.error('Доступ запрещен');

                return Promise.reject(error);
            }

            if (status === 500) {
                const errorId = 'server-error-500';
                if (!showErrors.has(errorId)) {
                    showErrors.add(errorId);
                    toast.error('Ошибка сервера. Попробуйте позже', { toastId: errorId });
                }
            }

            if (data && typeof data === 'object' && 'errors' in data && Array.isArray(data.errors)) {
                data.errors.forEach((error: { message: string }) => {
                    if (typeof error.message === 'string' && error.message.trim() !== '') {
                        const errorId = `error-${error.message}`;
                        if (!showErrors.has(errorId)) {
                            showErrors.add(errorId);
                            toast.error(error.message, {
                                toastId: errorId,
                            });
                        }
                    }
                });
            }
        }
        return Promise.reject(error);
    }
);
