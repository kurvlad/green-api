import type { FC } from 'react';

import type { CloseIconWhiteProps } from './CloseIconWhite.interface';

export const CloseIconWhite: FC<CloseIconWhiteProps> = ({ className, ...props }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
            <path fill="white" stroke="white" strokeLinecap="round" strokeWidth={2} d="M20 20 4 4m16 0L4 20" />
        </svg>
    );
};
