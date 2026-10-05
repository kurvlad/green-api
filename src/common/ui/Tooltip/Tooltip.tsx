import { Arrow, Content, Portal, Root, Trigger } from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import { useState } from 'react';

import type { TooltipProps } from './Tooltip.interface';
import styles from './Tooltip.module.css';

export const Tooltip = ({
    className,
    children,
    align,
    alignOffset,
    parent,
    side,
    asChild = false,
    defaultStyles = false,
    delayDuration = 0,
    sideOffset,
    trigger = 'hover',
    ...props
}: TooltipProps) => {
    const [clickOpen, setClickOpen] = useState(false);
    const isClickTrigger = trigger === 'click';

    const rootProps = isClickTrigger
        ? {
              ...props,
              delayDuration,
              open: clickOpen,
              onOpenChange: (next: boolean) => {
                  if (!next) setClickOpen(false);
              },
          }
        : { ...props, delayDuration };

    const triggerProps = {
        className: !defaultStyles ? styles.tooltip__trigger : '',
        asChild,
        onClick: (e: React.MouseEvent) => {
            e.stopPropagation();
            if (isClickTrigger) {
                setClickOpen((v) => !v);
            }
        },
        ...{
            type: 'button' as const,
        },
    };

    const contentProps = {
        className: clsx(styles.tooltip__content, className),
        align,
        alignOffset,
        side,
        sideOffset,
        onClick: (e: React.MouseEvent) => e.stopPropagation(),
        onPointerDownOutside: (e: Event) => e.stopPropagation(),
        ...{},
    };

    return (
        <Root {...rootProps}>
            <Trigger {...triggerProps}>{parent}</Trigger>

            <Portal>
                <Content {...contentProps}>
                    {children}
                    <Arrow className={styles.tooltip__arrow} width={20} height={10} />
                </Content>
            </Portal>
        </Root>
    );
};
