import clsx from 'clsx';
import { type FC, useRef } from 'react';

import { Button } from '../Button';
import type { UploadFileButtonProps } from './UploadFileButton.interface';
import styles from './UploadFileButton.module.css';

export const UploadFileButton: FC<UploadFileButtonProps> = ({
    children,
    accept,
    fileName,
    fileUuid,
    isLoading = false,
    disabled = false,
    onFileChange,
    onClear,
    buttonClassName,
    containerClassName,
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const isButtonDisabled = disabled || isLoading || !!fileName;
    const displayName = fileName || children;

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        onFileChange(file);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!isButtonDisabled) {
            fileInputRef.current?.click();
        }
    };

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onClear && fileUuid) {
            onClear(fileUuid);
        }
    };

    return (
        <div className={clsx(styles.container, containerClassName)}>
            <div className={styles.buttons__section}>
                <input
                    accept={accept ? accept.join(',') : ''}
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                    disabled={isButtonDisabled}
                />
                <Button
                    disabled={isButtonDisabled}
                    onClick={handleButtonClick}
                    isLoading={isLoading}
                    className={clsx(styles.button, buttonClassName)}
                >
                    {displayName}
                </Button>
                {fileName && !isLoading && (
                    <Button
                        type="button"
                        onClick={handleClear}
                        className={styles.clearButton}
                        variant="danger"
                        title="Удалить файл"
                        isLoading={isLoading}
                    >
                        ✖
                    </Button>
                )}
            </div>
            {accept && <span className={styles.description}>Доступные расширения: {accept.join(',')}</span>}
        </div>
    );
};
