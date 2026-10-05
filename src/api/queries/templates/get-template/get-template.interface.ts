import type { BaseResponse } from '@app/api/baseResponse';

export interface GetTemplateInterface {
    name: string;
    description: string;
}

export type GetTemplateResponse = BaseResponse<GetTemplateInterface>;
