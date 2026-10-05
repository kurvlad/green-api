import type { BaseResponse } from '@app/api/baseResponse';

export type Delete = {
    file_mid: string;
    file_mif: string;
    project_uuid: string;
    settlement_uuid: string;
    file_mid_url: string | null;
    file_mif_url: string | null;
    description: string;
    group: number;
    created_at: string;
    updated_at: string;
};

export type DeleteTemplateResponse = BaseResponse<Delete>;
