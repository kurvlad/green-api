import type { ReactNode } from 'react';

export interface TooltipProps {
    className?: string;
    sideOffset?: number;
    side?: 'top' | 'right' | 'bottom' | 'left';
    alignOffset?: number;
    align?: 'start' | 'center' | 'end';
    children?: ReactNode;
    parent?: ReactNode;
    asChild?: boolean;
    defaultStyles?: boolean;
    delayDuration?: number;
    trigger?: 'hover' | 'click';
    stopPropagation?: boolean;
}
