export const queryKeys = {
    template: {
        get: (uuid: string) => ['template', uuid],
    },
};

export const endpoints = {
    template: {
        get: (uuid: string) => `template/${uuid}`,
        post: (uuid: string) => `template/${uuid}`,
        put: (uuid: string) => `template/update/${uuid}`,
        delete: (uuid: string) => `template/delete/${uuid}`,
        uploadFile: (uuid: string) => `projects/${uuid}`,
    },
    users: {
        getLogin: () => `users/login`,
        getRefresh: () => `users/refresh`,
    },
};

export const STALE_TIME = 5 * 60 * 1000;
