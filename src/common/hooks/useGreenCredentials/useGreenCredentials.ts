import { getLocalStorageItem } from '@app/app/localStorage/localStorage';
import { API_TOKEN_INSTANCE, ID_INSTANCE } from '@app/app/localStorage/localStorage.constants';

export const useGreenCredentials = () => {
    const idInstance = getLocalStorageItem<string>(ID_INSTANCE) ?? '';
    const apiTokenInstance = getLocalStorageItem<string>(API_TOKEN_INSTANCE) ?? '';

    return { idInstance, apiTokenInstance };
};
