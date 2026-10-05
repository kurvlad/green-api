export const routerNames = {
    HOME: '/',
    PROJECT: '/project/:projectId',
    LOGIN: '/login',
};

export const routerLinks = {
    home: () => '/',
    login: () => '/login',
    project: (projectId: string) => `/project/${projectId}`,
};

export interface ParamsProject extends Record<string, string | undefined> {
    projectId: string | undefined;
}
