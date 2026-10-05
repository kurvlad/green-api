import { IppLoader } from '@app/common';
import type { FC } from 'react';

import type { SpinerDialogProps } from './SpinerDialog.interface';
import styles from './spinerDialog.module.css';

export const SpinerDialog: FC<SpinerDialogProps> = ({ open }) => {
    if (!open) return null;

    return (
        <div className={styles.container}>
            <IppLoader />
        </div>
    );
};
