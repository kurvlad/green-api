import type { UploadFile } from '@app/api/queries/file/uploadFile/uploadFile.interface';

export const getDefaultFile = (documents: UploadFile[] | undefined, docType: string) => {
    if (documents) {
        return documents.find((i) => i.doc_type == docType);
    }
};
