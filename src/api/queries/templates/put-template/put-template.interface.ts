import type { BaseResponse } from '@app/api/baseResponse';

export interface Credentials {
    subzones: boolean;
    architectural_urban_appearance: boolean;
    integrated_development: boolean;
    correspondence_of_territorial_zones: boolean;
    project_uuid: string | undefined;
    uuid: string | undefined;
}

export type PutTemplateResponse = BaseResponse<Credentials>;
