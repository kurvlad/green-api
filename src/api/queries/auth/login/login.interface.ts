import type { BaseResponse } from '@app/api/baseResponse';

export interface LoginCredentials {
    username: string;
    password: string;
}

interface Login {
    status: boolean;
    token: string;
    refresh_token: string;
}

export type LoginResponse = BaseResponse<Login>;
