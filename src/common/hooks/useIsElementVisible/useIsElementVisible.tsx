import { useEffect, useRef, useState } from 'react';

import type { UseIsElementVisibleProps, UseIsElementVisibleReturn } from './useIsElementVisible.interface';

export const useIsElementVisible = <T extends HTMLElement = HTMLDivElement>({
    threshold = 0.5,
}: UseIsElementVisibleProps = {}): UseIsElementVisibleReturn<T> => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [hasBeenVisible, setHasBeenVisible] = useState<boolean>(false);
    const elementRef = useRef<T | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasBeenVisible(true);
                    setIsVisible(true);
                } else if (!hasBeenVisible) {
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        const currentElement = elementRef.current;

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold, hasBeenVisible]);

    return { isVisible, elementRef };
};
