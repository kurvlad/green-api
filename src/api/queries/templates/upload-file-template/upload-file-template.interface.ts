import type { BaseResponse } from '@app/api/baseResponse';

type UploadFileOptons = {
    uuid: string;
    doc_type: string;
};

export type UploadFileCredentionals = {
    options: UploadFileOptons;
    formData: FormData;
};

export type UploadFile = {
    doc_type: string;
    name: string;
    uuid: string;
};

export type UploadFileResponse = BaseResponse<UploadFile>;
