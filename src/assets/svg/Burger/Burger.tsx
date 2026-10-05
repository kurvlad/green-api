import { motion } from 'framer-motion';
import type { FC } from 'react';

import type { BurgerProps } from './Burger.interface';

export const Burger: FC<BurgerProps> = ({ className, isBurgerActive }) => {
    const springTransition = {
        type: 'spring' as const,
        stiffness: 260,
        damping: 20,
    };

    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            style={{ color: '#17AAAB', display: 'block' }}
        >
            <motion.path
                d="M4 5h16"
                animate={{
                    y: isBurgerActive ? 7 : 0,
                    rotate: isBurgerActive ? 45 : 0,
                }}
                style={{ transformOrigin: 'center' }}
                transition={springTransition}
            />
            <motion.path
                d="M4 12h16"
                animate={{
                    opacity: isBurgerActive ? 0 : 1,
                    scaleX: isBurgerActive ? 0 : 1,
                }}
                style={{ transformOrigin: 'center' }}
                transition={{ duration: 0.2 }}
            />
            <motion.path
                d="M4 19h16"
                animate={{
                    y: isBurgerActive ? -7 : 0,
                    rotate: isBurgerActive ? -45 : 0,
                }}
                style={{ transformOrigin: 'center' }}
                transition={springTransition}
            />
        </svg>
    );
};
