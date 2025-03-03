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
                        <div id="photo">
                            <div className="video-container">
                                <video loop muted autoPlay>
                                    <source src="../images/video_arredo.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div id="description">
                            <div id="content">
                                <p className="welcome">WELCOME TO VICA ARREDO BAGNO</p>
                                <h2>PROFESSIONISMO E QUALITA' DA GENERAZIONI</h2>
                                <p id="paragraph">"Da oltre 50 anni, Vica Linea Bagno è sinonimo di eccellenza nel settore dell’arredo bagno. <br />I nostri prodotti, realizzati con materiali di alta qualità e design all’avanguardia, sono pensati per durare nel tempo e adattarsi a qualsiasi ambiente."</p>
                                <button className="btn-color-p bottone"><NavLink to={"/contatti"}>About company <i className="fa-solid fa-arrow-right-long"></i></NavLink></button>
                                <div className="cerchio-immagine">
                                    <img src="./images/album_colori.jpg" alt="" />
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