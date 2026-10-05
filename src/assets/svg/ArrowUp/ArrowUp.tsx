import type { FC } from 'react';

import type { ArrowUpProps } from './ArrowUp.interface';

export const ArrowUp: FC<ArrowUpProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={15.498} height={7.225} fill="none">
            <path
                stroke="white"
                strokeLinecap="round"
                strokeWidth={1.5}
                d="M14.748 6.475 8.613 1.05a1.2 1.2 0 0 0-1.562-.025L.75 6.257"
            />
        </svg>
    );
};
