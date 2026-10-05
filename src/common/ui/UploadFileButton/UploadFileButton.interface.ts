import type { ReactElement } from 'react';

export interface UploadFileButtonProps {
    children: ReactElement | string;
    accept?: string[];
    fileName?: string | null;
    fileUuid?: string | null;
    isLoading?: boolean;
    disabled?: boolean;
    onFileChange: (file: File | null) => void;
    onClear?: (uuid: string) => void;
    buttonClassName?: string;
    containerClassName?: string;
}
