// hooks/useScrollToElement.ts
import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useScrollToElement = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToElement = useCallback((elementId: string, behavior: ScrollBehavior = 'smooth') => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior, block: 'start' });
        }
    }, []);

    // Обработка скролла при загрузке страницы
    useEffect(() => {
        const scrollToSection = () => {
            // Проверяем state
            if (location.state && 'scrollTo' in location.state) {
                const sectionId = location.state.scrollTo;
                setTimeout(() => {
                    scrollToElement(sectionId);
                }, 100);

                // Очищаем state
                navigate(location.pathname, { replace: true, state: {} });
            }
            // Проверяем hash
            else if (location.hash) {
                const sectionId = location.hash.replace('#', '');
                setTimeout(() => {
                    scrollToElement(sectionId);
                }, 100);
            }
        };

        scrollToSection();
    }, [location, navigate, scrollToElement]);

    return { scrollToElement };
};
