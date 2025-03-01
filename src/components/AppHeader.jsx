import { NavLink } from "react-router-dom";
import "./appHeader.css"

function AppHeader() {
    const navLinks = [
        {
            icon: <i className="fa-solid fa-house"></i>,
            path: "/",
            title: "Home page",
            secondIcon: <i className="fa-solid fa-angle-down"></i>,
            dropdown: [
                { title: "Opzione 1", path: "/opzione1" },
                { title: "Opzione 2", path: "/opzione2" }
            ]
        },
        {
            icon: <i className="fa-solid fa-sink"></i>,
            path: "/collezioni",
            title: "Collezioni",
            secondIcon: <i className="fa-solid fa-angle-down"></i>,
            dropdown: [
                { title: "Sub Collezione 1", path: "/collezioni/sub1" },
                { title: "Sub Collezione 2", path: "/collezioni/sub2" }
            ]
        },
        {
            icon: <i className="fa-solid fa-bath"></i>,
            path: "/mobili",
            title: "Mobili",
            secondIcon: <i className="fa-solid fa-angle-down"></i>,
            dropdown: [
                { title: "Opzione Mobili 1", path: "/mobili/opzione1" },
                { title: "Opzione Mobili 2", path: "/mobili/opzione2" }
            ]
        },
        {
            icon: <i className="fa-solid fa-circle-info"></i>,
            path: "/contatti",
            title: "Contatti"
        },
    ];


    return (
        <>
            <header>
                <div id="top-bar">
                    {/* LOGO & SEARCHBAR PART */}
                    <div id="image-search">
                        <div id="image">
                            <a href="">
                                <img src="images/test_foto.svg" alt="" id="logo" />
                            </a>
                        </div>
                        <div className="search-bar">
                            <input type="text" name="" placeholder="Cerca nel nostro catalogo" />
                            <button>Cerca <i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>
                    {/* /LOGO & SEARCHBAR PART */}
                    <hr className="custom-hr" />
                    {/* LINKS PART */}
                    <div id="container-nav">
                        <nav>
                            <ul>
                                {navLinks.map((curLink, index) => {
                                    return (
                                        <li key={index} className="nav-item">
                                            <NavLink
                                                className="rea-nav-link"
                                                aria-current="page"
                                                aria-haspopup={curLink.dropdown ? "true" : "false"}
                                                to={curLink.path}
                                            >{curLink.icon} {curLink.title} {curLink.secondIcon}
                                            </NavLink>
                                            {curLink.dropdown && (
                                                <ul className="dropdown" role="menu">
                                                    {curLink.dropdown.map((item, subIndex) => (
                                                        <li key={subIndex} role="menuitem">
                                                            <NavLink
                                                            className="drop-item"
                                                            to={item.path}>
                                                                {item.title}
                                                            </NavLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    )
                                })}
                            </ul>
                            {/* LINKS PART */}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default AppHeader;