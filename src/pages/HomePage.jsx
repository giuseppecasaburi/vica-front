import { NavLink } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import "./homePage.css"
import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_NODE_ENV === "development" ? import.meta.env.VITE_API_URL_DEV : import.meta.env.VITE_API_URL_PROD

function HomePage() {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const getCollection = () => {
            axios.get(`${apiUrl}/collezioni/navigate`).then((resp) => {
                const collectionModels = resp.data.data
                setCollection(collectionModels);
            })
                .catch((error) => {
                    console.log(error)
                })
        }
        getCollection()
    }, [])

    const images = [
        "./images/foto_3.jpg",
        "./images/foto_4.jpg"
    ];


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
                            <h2>LASCIATI ISPIRARE DAL NOSTRO CATALOGO</h2>
                            <button className="btn-color-p bottone"><NavLink to={"/collezioni"}>Confronta i migliori modelli <i className="fa-solid fa-arrow-right-long"></i></NavLink></button>
                        </div>
                        <div id="image-content">
                            <a href="">
                                <img src="./images/foto_3.jpg" alt="" />
                                <img src="./images/foto_4.jpg" alt="" />
                                <div className="overlay-text">Visualizza il modello BLALALA</div>
                            </a>
                        </div>
                    </div>
                    <div id="second-area">
                        <div id="second-area-content">
                            <img src="./images/foto_1.jpg" alt="" />
                            <p>"Con Vica Linea Bagno, ogni scelta è un passo verso l’eccellenza: design innovativo, materiali di altissima qualità e una tradizione di oltre 50 anni al servizio della tua casa. Scegliamo il meglio, per offrirti soluzioni che durano nel tempo e si adattano perfettamente al tuo stile."</p>
                        </div>
                    </div>
                </section>
                <section id="found-collection">
                    <div className="found-container">
                        <h3>Scopri il catalogo</h3>
                        <div id="card-area">
                            {collection.map((curCollection, index) => {
                                return (
                                    <div className="card" key={index} style={{ backgroundImage: 'url("./images/foto_4.jpg")' }}>
                                        <div className="card-overlay"></div>
                                        <div className="card-content">
                                            <div className="icon">
                                                <i className="fa-solid fa-sink"></i>
                                            </div>
                                            <h4>{curCollection.nome_collezione}</h4>
                                            <p>12 elementi</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomePage;