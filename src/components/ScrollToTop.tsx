import { useEffect, useState } from 'react'
import { MoveUp } from 'lucide-react';

export function ScrollToTop() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {
                showScrollTop && (
                    <button
                        type='button'
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full cursor-pointer"
                    >
                        <MoveUp />
                    </button>
                )
            }
        </>
    )
}
