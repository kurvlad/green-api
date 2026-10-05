import type { BaseResponse } from '@app/api/baseResponse';

export interface Credentials {
    username: string;
    password: string;
}

export interface VriResponse {
    result: boolean;
}

export type PostTemplateResponseInterface = BaseResponse<VriResponse>;
