import { TypeGuard } from '@app/common';

export const setLocalStorageItem = <T>(key: string, value: T): void => {
    const stringifiesPayload = JSON.stringify(value);

    localStorage.setItem(key, stringifiesPayload);
};

export const getLocalStorageItem = <T>(key: string): T | null => {
    const item = localStorage.getItem(key);

    if (TypeGuard.isNull(item)) {
        return null;
    }

    try {
        return JSON.parse(item) as T;
    } catch {
        return item as T;
    }
};

export const clearLocalStorageItem = (...keys: string[]): void => {
    keys.forEach((key: string) => {
        localStorage.removeItem(key);
    });
};

export const resetLocalStorage = (): void => {
    const keys: string[] = [];

    for (let index = 0; index < localStorage.length; index += 1) {
        const key = localStorage.key(index);

        if (key) {
            keys.push(key);
        }
    }

    clearLocalStorageItem(...keys);
};
