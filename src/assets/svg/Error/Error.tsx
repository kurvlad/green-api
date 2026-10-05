import type { FC } from 'react';

import type { ErrorProps } from './Error.interface';

export const Error: FC<ErrorProps> = ({ classname }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={200}
            height={200}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            style={{ display: 'block' }}
            className={classname}
        >
            <path d="m14.5 12.5-5-5M9.5 12.5l5-5" />
            <rect width={20} height={14} x={2} y={3} rx={2} />
            <path d="M12 17v4M8 21h8" />
        </svg>
    );
};
