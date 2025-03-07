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
                    <p id="hero-text" className="fs-5 animate-text">
                        Scopri la nostra selezione di arredi bagno eleganti e funzionali. <br />Dai lavabo moderni alle docce di lusso, ogni dettaglio è pensato per offrirti comfort e stile.
                    </p>
                    <div className="hero-buttons animate-text">
                        <button className="btn btn-color-p">
                            <Link to={"/collezioni"}>
                                Esplora la nostra collezione
                            </Link>
                        </button>
                        <button className="btn btn-color-s ">
                            <Link to={"/contatti"}>
                                Richiedi un preventivo gratuito
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;