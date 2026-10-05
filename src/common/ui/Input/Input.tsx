import { AnimatedEye } from '@app/assets/svg/AnimatedEye';
import clsx from 'clsx';
import { type FC, useId, useState } from 'react';

import type { InputProps } from './Input.interface';
import styles from './Input.module.css';

export const Input: FC<InputProps> = ({
    type = 'text',
    placeholder,
    errorMessage,
    value,
    onChange,
    ref,
    required,
    containerClassName,
    inputClassName,
    labelClassName,
    ...props
}) => {
    const generatedId = useId();

    const [isVisiblePassword, setIsVisiblePassword] = useState(false);

    const onClickEye = () => {
        setIsVisiblePassword((prev) => !prev);
    };

    const getInputType = () => {
        if (type !== 'password') return type;

        return isVisiblePassword ? 'text' : 'password';
    };

    return (
        <div className={clsx(styles.input__container, containerClassName)}>
            <input
                ref={ref}
                {...props}
                className={clsx(styles.input, errorMessage && styles.input__error, inputClassName)}
                id={generatedId}
                placeholder={placeholder}
                type={getInputType()}
                value={value}
                onChange={onChange}
            />

            <label htmlFor={generatedId} className={clsx(styles.label, value && styles.label__none, labelClassName)}>
                {placeholder}
                {required && <span className={styles.input__required}>*</span>}
            </label>

            {errorMessage && <span className={styles.error_message}>{errorMessage}</span>}

            {type === 'password' && (
                <button onClick={onClickEye} type="button" className={styles.eye}>
                    <AnimatedEye isOpen={isVisiblePassword} />
                </button>
            )}
        </div>
    );
};
