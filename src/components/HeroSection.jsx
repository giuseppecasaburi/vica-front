import { Link, NavLink } from "react-router-dom";
import "./heroSection.css"

function HeroSection() {

    return (
        <>
            {/* Hero Section */}
            <div className="hero position-relative text-white text-center">
                {/* Background Image */}
                <img src={"/images/hero.jpg"} alt="Hero Image" />

                {/* Overlay per rendere leggibile il testo */}
                <div className="overlay"></div>

                {/* Contenuto sopra l'overlay */}
                <div className="hero-content">
                    <h1 className="fw-bold animate-title">🏡✨ Trasforma il tuo bagno in un’oasi di design ✨🛁</h1>
                    <p id="hero-text" className="animate-text">
                        Scopri la nostra selezione di arredi bagno eleganti e funzionali. <br />Dai lavabo moderni alle docce di lusso, ogni dettaglio è pensato per offrirti comfort e stile.
                    </p>
                    <div className="hero-buttons animate-text">
                        <Link to={"/collezioni"} className="btn btn-color-p" aria-label="Esplora la collezione di arredo bagno">
                            Esplora la nostra collezione
                        </Link>
                        <Link to={"/contatti"} className="btn btn-color-s" aria-label="Richiedi un preventivo gratuito">
                            Richiedi un preventivo gratuito
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;