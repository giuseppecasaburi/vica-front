function HeroSection() {
    return (
        <>
        <div className="hero position-relative text-white text-center">
                    {/* Background Image */}
                    <img
                        src={"../images/hero.jpg"}
                        alt="Hero Image"
                        className="img-fluid w-100"
                        style={{ objectFit: "cover", height: "450px" }}
                    />

                    {/* Overlay per rendere leggibile il testo */}
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }} // Sfondo nero trasparente
                    ></div>

                    {/* Contenuto sopra l'overlay */}
                    <div className="hero-overlay position-absolute top-50 start-50 translate-middle w-75">
                        <h1 id="hero-title" className="fw-bold animate-title">🏡✨ Trasforma il tuo bagno in un’oasi di design ✨🛁</h1>
                        <p id="hero-text" className="fs-5 animate-text">
                            Scopri la nostra selezione di arredi bagno eleganti e funzionali. Dai lavabo moderni alle docce di lusso, ogni dettaglio è pensato per offrirti comfort e stile.
                        </p>
                    </div>

                    {/* CTA */}
                    <div id="cta" className="cta-container">
                        <button className="btn btn-primary m-2 cta">Esplora la nostra collezione</button>
                        <button className="btn btn-primary m-2 cta">Richiedi un preventivo gratuito</button>
                    </div>
                </div>
        </>
    )
}

export default HeroSection;