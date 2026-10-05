import type { Ref } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    type?: 'text' | 'password' | 'email' | 'number' | 'tel';
    ref?: Ref<HTMLInputElement>;
    errorMessage?: string;
    containerClassName?: string;
    inputClassName?: string;
    labelClassName?: string;
}
