import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const apiClient = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ message?: string }>) => {
        if (error.response) {
            const { status } = error.response;
            const message = error.response.data?.message;

            switch (status) {
                case 401:
                    toast.error('Неверный apiTokenInstance');
                    break;
                case 403:
                    toast.error('Доступ запрещён. Проверьте тариф GREEN-API');
                    break;
                case 466:
                    toast.error('Превышен лимит запросов');
                    break;
                default:
                    toast.error(message || `Ошибка запроса (${status})`);
            }
        }

        return Promise.reject(error);
    },
);
