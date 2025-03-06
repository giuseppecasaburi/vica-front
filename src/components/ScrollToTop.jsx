import { useEffect, useState } from "react";
import "./ScrollToTop.css"

function ScrollToTop() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Se l'utente ha scrollato oltre l'altezza del viewport, mostra il pulsante
            if (window.pageYOffset > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            {isVisible && (
                <div className="container-scroll">
                    <button onClick={scrollToTop} className="scroll-to-top">
                        <i className="fa-solid fa-arrow-up"></i>
                    </button>
                </div>
            )}
        </>
    );
}

export default ScrollToTop;