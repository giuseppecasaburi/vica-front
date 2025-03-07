import { NavLink } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import "./homePage.css"

function HomePage() {
    return (
        <>
            <main>
                {/* Hero Section */}
                <HeroSection />
                <section id="our-company">
                    <div id="contenitore-our-company">
                        <div id="description">
                            <div id="content">
                                <div className="text-content">
                                    <p className="welcome">WELCOME TO VICA ARREDO BAGNO</p>
                                    <h2>PROFESSIONALITÀ E QUALITÀ DA GENERAZIONI</h2>
                                    <p id="paragraph">Da oltre 50 anni, Vica Linea Bagno rappresenta l’eccellenza nell’arredo bagno, trasformando ogni ambiente in un'oasi di stile e benessere. La nostra missione è creare spazi unici, dove design ricercato e funzionalità impeccabile si fondono armoniosamente.
                                    <br />
                                    <hr />
                                    Ogni nostro prodotto è realizzato con materiali pregiati, selezionati per garantire durata, comfort e un’estetica raffinata. Dalle linee moderne alle soluzioni su misura, ogni dettaglio è pensato per elevare la tua esperienza quotidiana e rendere il bagno un luogo di puro piacere e relax."</p>
                                </div>
                                <div className="visual-group">
                                    <div className="cerchio-immagine">
                                        <img src="./images/album_colori.jpg" alt="" />
                                    </div>
                                    <button className="btn-color-p bottone">
                                        <NavLink to={"/contatti"} id="btn-nav-link">About company <i className="fa-solid fa-arrow-right-long"></i></NavLink>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="collection-section">
                    <div id="first-area">
                        <div id="text-content">
                            <p className="welcome">PIANIFICA IL TUO BAGNO</p>
                            <h2>LASCIATI ISPIRARE DELLE NOSTRE COLLEZIONI</h2>
                            <button className="btn-color-p bottone"><NavLink to={"/collezioni"}>Confronta le collezioni <i className="fa-solid fa-arrow-right-long"></i></NavLink></button>
                        </div>
                        <div id="image-content">
                            <img src="./images/foto_3.jpg" alt="" />
                            <img src="./images/foto_4.jpg" alt="" />
                        </div>
                    </div>
                    <div id="second-area">
                        <div id="second-area-content">
                            <img src="./images/foto_1.jpg" alt="" />
                            <p>"Con Vica Linea Bagno, ogni scelta è un passo verso l’eccellenza: design innovativo, materiali di altissima qualità e una tradizione di oltre 50 anni al servizio della tua casa. Scegliamo il meglio, per offrirti soluzioni che durano nel tempo e si adattano perfettamente al tuo stile."</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomePage;