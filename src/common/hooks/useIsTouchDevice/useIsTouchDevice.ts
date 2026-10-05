import { useEffect, useState } from 'react';

export const useIsTouchDevice = () => {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        const media = window.matchMedia('(pointer: coarse)');

        const update = () => {
            setIsTouch(media.matches || 'ontouchstart' in window);
        };

        update();

        media.addEventListener?.('change', update);
        return () => media.removeEventListener?.('change', update);
    }, []);

    return isTouch;
};
