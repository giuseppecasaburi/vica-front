import { NavLink } from "react-router-dom";

function AppHeader() {
    const navLinks = [
        {
            icon: "",
            path: "/",
            title: "Home page"
        },
        {
            icon: "",
            path: "/collezioni",
            title: "Collezioni"
        },
        {
            icon: "",
            path: "/mobili",
            title: "Mobili"
        },
        {
            icon: "",
            path: "/contatti",
            title: "Contatti"
        },
    ]


    return (
        <>
            <div id="nav-bar">
                <div id="image-search">
                    <a href="">
                        <img src="../images/logo.jpg" alt="" id="logo" />
                    </a>
                    <input type="search" name="" id="" />
                    <button>Cerca</button>
                </div>
                <div id="nav-link" className=" navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
                        {navLinks.map((curLink, index) => {
                            return (
                                <li className="nav-item mx-2" key={index}>
                                    <NavLink
                                        className="nav-link-elem"
                                        aria-current="page"
                                        to={curLink.path}> {curLink.title}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AppHeader;