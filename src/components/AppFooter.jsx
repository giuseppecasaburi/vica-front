import { Link } from "react-router-dom";
import "./footer.css"

function AppFooter() {
    return (
        <footer id="footer">
            <div id="container-footer">
                <div className="footer-wrapper">

                    {/* Logo visibile */}
                    <div className="footer-brand">
                        <a href="#header">
                            <img src="../images/test_foto.svg" alt="Logo" />
                        </a>
                    </div>

                    {/* Sezione superiore: Navigation e Link utili */}
                    <div className="footer-top">
                        <div className="footer-links">
                            <nav className="nav-footer">
                                <h3>Navigation</h3>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/collezioni">Collezioni</Link></li>
                                    <li><Link to="/mobili">Modelli</Link></li>
                                    <li><Link to="/contatti">Contatti</Link></li>
                                </ul>
                            </nav>
                            <nav className="nav-footer">
                                <h3>Link utili</h3>
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-facebook"></i> Facebook</a></li>
                                    <li>
                                        <a href="https://www.instagram.com/vica_lineabagno/">
                                            <i className="fa-brands fa-instagram"></i> Instagram
                                        </a>
                                    </li>
                                    <li><a href="#"><i className="fa-brands fa-tiktok"></i> TikTok</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* Sezione inferiore: Info a larghezza intera */}
                    <div className="footer-bottom">
                        <div className="footer-contact">
                            <h3>Info</h3>
                            <address>
                                <p>
                                    <i className="fa-solid fa-location-dot"></i>Strada statale Appia 7/bis Km 18,600 - 80029 Sant'Antimo (NA), Italy
                                </p>
                                <p>
                                    <i className="fa-solid fa-clock"></i>LUN/VEN 9:00/13:00 16:00/20:00
                                </p>
                                <p>
                                    <i className="fa-solid fa-envelope-open-text"></i>test@libero.it
                                </p>
                                <p>
                                    <i className="fa-solid fa-phone-volume"></i>081 505 8963
                                </p>
                            </address>
                        </div>
                    </div>
                </div>
                <div className="credit">
                    <p>Copyright © 2024 www.vica-arredobagno.it Partita IVA 01478963258</p>
                    <span>Proudly made by PeppeB96</span>
                </div>
            </div>
        </footer>


    )
};

export default AppFooter;