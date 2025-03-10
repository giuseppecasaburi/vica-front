import { Link } from "react-router-dom";
import "./footer.css"

function AppFooter() {
    return (
        <section id="footer">
            <div id="container-footer">
                <div className="container-col">
                    <div id="photo-area" className="column col-1">
                        <a href="#header">
                            <img id="link-photo" src="../images/test_foto.svg" alt="" />
                        </a>
                    </div>

                    <div className="columns">

                        <div className="column1">
                            <h3>Navigation</h3>
                            <p><Link to={"/"}><i className="fa-solid fa-house"></i> Home</Link> </p>
                            <p><Link to={"/collezioni"}><i className="fa-solid fa-sink"></i> Collezioni</Link></p>
                            <p><Link to={"/mobili"}><i className="fa-solid fa-bath"></i> Modelli</Link></p>
                            <p><Link to={"/contatti"}><i className="fa-solid fa-circle-info"></i> Contatti</Link></p>
                        </div>
                        
                        <div className="column1">
                            <h3>Link utili</h3>
                            <p className="">
                                <a href="">
                                    Facebook <i className="fa-brands fa-facebook"></i>
                                </a>
                            </p>
                            <p className="">
                                <a href="https://www.instagram.com/vica_lineabagno/">
                                    Instagram <i className="fa-brands fa-instagram"></i>
                                </a>
                            </p>
                            <p className="">
                                <a href="">
                                    TikTok <i className="fa-brands fa-tiktok"></i>
                                </a>
                            </p>
                        </div>

                        <div className="column2">
                            <h3>Info</h3>
                            <p className="">
                                <i className="fa-solid fa-location-dot"></i> Strada statale Appia 7/bis Km 18,600 - 80029 Sant'Antimo (NA), Italy
                            </p>
                            <p className="">
                                <i className="fa-solid fa-clock"></i> LUN/VEN 9:00/13:00 16:00/20:00
                            </p>
                            <p className="">
                                <i className="fa-solid fa-envelope-open-text"></i> test@libero.it
                            </p>
                            <p className="">
                                <i className="fa-solid fa-phone-volume"></i> 081 505 8963
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AppFooter;