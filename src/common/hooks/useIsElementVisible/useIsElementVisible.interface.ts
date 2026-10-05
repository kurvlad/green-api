export interface UseIsElementVisibleProps {
    threshold?: number | number[];
}

export interface UseIsElementVisibleReturn<T extends HTMLElement> {
    isVisible: boolean;
    elementRef: React.MutableRefObject<T | null>;
}
