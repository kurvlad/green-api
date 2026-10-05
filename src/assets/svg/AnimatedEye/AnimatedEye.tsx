export const AnimatedEye = ({ className, isOpen = true }: { className?: string; isOpen?: boolean }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="#bebebe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            className={className}
            style={{ overflow: 'visible' }}
        >
            <style>
                {`
                .eye-full {
                opacity: ${isOpen ? 1 : 0};
                transition: opacity 0.25s ease-in-out;
                }
                .eye-broken {
                opacity: ${isOpen ? 0 : 1};
                transition: opacity 0.25s ease-in-out;
                }
                .eye-slash {
                stroke-dasharray: 29; /* Длина линии М2 2l20 20 */
                stroke-dashoffset: ${isOpen ? 29 : 0};
                transition: stroke-dashoffset 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
            `}
            </style>

            <g className="eye-full">
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                <circle cx={12} cy={12} r={3} />
            </g>

            <g className="eye-broken">
                <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
            </g>

            <path className="eye-slash" d="M2 2l20 20" />
        </svg>
    );
};
