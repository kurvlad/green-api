import type { FC } from 'react';

import type { EllipsisProps } from './Ellipsis.interface';

export const Ellipsis: FC<EllipsisProps> = ({ classname }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            className={classname}
            style={{ display: 'block' }}
        >
            <circle cx={12} cy={12} r={1} />
            <circle cx={19} cy={12} r={1} />
            <circle cx={5} cy={12} r={1} />
        </svg>
    );
};
