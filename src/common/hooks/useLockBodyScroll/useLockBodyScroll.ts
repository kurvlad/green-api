import { useEffect, useRef } from 'react';

import type { useLockBodyScrollProps } from './useLockBodyScroll.interface';

export const useLockBodyScroll = ({ shouldLock }: useLockBodyScrollProps): void => {
    const scrollPosition = useRef(0);

    useEffect(() => {
        if (shouldLock) {
            // Сохраняем позицию скролла
            scrollPosition.current = window.scrollY;

            // Сохраняем все оригинальные стили
            const originalStyles = {
                html: {
                    overflow: document.documentElement.style.overflow,
                    height: document.documentElement.style.height,
                },
                body: {
                    overflow: document.body.style.overflow,
                    position: document.body.style.position,
                    top: document.body.style.top,
                    width: document.body.style.width,
                    height: document.body.style.height,
                    paddingRight: document.body.style.paddingRight,
                },
            };

            // Применяем блокировку
            const html = document.documentElement;
            const body = document.body;

            html.style.overflow = 'hidden';
            html.style.height = '100%';

            body.style.overflow = 'hidden';
            body.style.position = 'fixed';
            body.style.top = `-${scrollPosition.current}px`;
            body.style.width = '100%';
            body.style.height = '100%';

            // Компенсация скроллбара
            const scrollBarWidth = window.innerWidth - html.clientWidth;
            if (scrollBarWidth > 0) {
                body.style.paddingRight = `${scrollBarWidth}px`;
            }

            // Множественные обработчики для надежности
            const handlers = ['wheel', 'touchmove', 'keydown'] as const;

            const preventScroll = (e: Event) => {
                if (e.type === 'keydown') {
                    const key = (e as KeyboardEvent).key;
                    // Блокируем только клавиши скролла
                    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(key)) {
                        e.preventDefault();
                    }
                } else {
                    e.preventDefault();
                }
            };

            handlers.forEach((event) => {
                window.addEventListener(event, preventScroll, { passive: false });
            });

            return () => {
                // Восстанавливаем все стили
                html.style.overflow = originalStyles.html.overflow;
                html.style.height = originalStyles.html.height;

                body.style.overflow = originalStyles.body.overflow;
                body.style.position = originalStyles.body.position;
                body.style.top = originalStyles.body.top;
                body.style.width = originalStyles.body.width;
                body.style.height = originalStyles.body.height;
                body.style.paddingRight = originalStyles.body.paddingRight;

                // Удаляем обработчики
                handlers.forEach((event) => {
                    window.removeEventListener(event, preventScroll);
                });

                // Возвращаем скролл
                window.scrollTo(0, scrollPosition.current);
            };
        }
    }, [shouldLock]);
};
