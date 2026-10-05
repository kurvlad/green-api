import clsx from 'clsx';
import type { FC } from 'react';

import { Spinner } from '../Spinner';
import type { ButtonProps } from './Button.interface';
import styles from './Button.module.css';

export const Button: FC<ButtonProps> = ({ children, className, isLoading, variant = 'primary', ...props }) => {
    return (
        <button
            {...props}
            className={clsx(
                styles.button,
                {
                    [styles['button--primary']]: variant === 'primary',
                    [styles['button--secondary']]: variant === 'secondary',
                    [styles['button--danger']]: variant === 'danger',
                },
                className
            )}
        >
            {isLoading ? <Spinner /> : children}
        </button>
    );
};
