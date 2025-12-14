import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HashScroll = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const timeoutId = setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500); // 500ms delay to ensure rendering

            return () => clearTimeout(timeoutId);
        }
    }, [hash]);

    return null;
};

export default HashScroll;
