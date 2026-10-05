import type { SVGProps } from 'react';

export interface BurgerProps extends SVGProps<SVGSVGElement> {
    className?: string;
    isBurgerActive?: boolean;
}
