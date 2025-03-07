import { NavLink } from "react-router-dom";
import "./appHeader.css"
import axios from "axios";
import { useEffect, useState } from "react";
import SidebarMenu from "./SidebarMenu";

const apiUrl = import.meta.env.VITE_NODE_ENV === "development" ? import.meta.env.VITE_API_URL_DEV : import.meta.env.VITE_API_URL_PROD

function AppHeader() {
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



    const navLinks = [
        {
            icon: <i className="fa-solid fa-house"></i>,
            path: "/",
            title: "Home page",
        },
        {
            icon: <i className="fa-solid fa-sink"></i>,
            path: "/collezioni",
            title: "Collezioni",
            secondIcon: <i className="fa-solid fa-angle-down"></i>,
            dropdown: collection.map((curCollect) => ({
                path: "/collezioni/navigate",
                title: curCollect.nome_collezione,
                subDropdown: curCollect.modelli.map((curModel) => ({
                    path: "/example",
                    title: curModel.nome_modello
                })),
            })),
        },
        {
            icon: <i className="fa-solid fa-bath"></i>,
            path: "/mobili",
            title: "Modelli",
            secondIcon: <i className="fa-solid fa-angle-down"></i>,
            dropdown: [
                { title: "Opzione Modelli 1", path: "/modelli/opzione1" },
                { title: "Opzione Modelli 2", path: "/modelli/opzione2" }
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
            <header id="header">
                <div id="top-bar">
                    {/* LOGO & SEARCHBAR PART */}
                    <div id="image-search">
                        <div id="image">
                            <a href="">
                                <img src="images/test_foto.svg" alt="" id="logo" />
                            </a>
                            <SidebarMenu navLinks={navLinks } />
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
                            <ul className="nav-list">
                                {navLinks.map((curLink, index) => {
                                    return (
                                        <li key={index} className="nav-item rea-nav-link">
                                            <NavLink
                                                className="nav-link"
                                                aria-current="page"
                                                aria-haspopup={curLink.dropdown ? "true" : "false"}
                                                to={curLink.path}
                                            >
                                                {curLink.icon} {curLink.title} {curLink.secondIcon}
                                            </NavLink>
                                            {curLink.dropdown && (
                                                <div className="dropdown-menu" role="menu">
                                                    {curLink.dropdown.map((item, subIndex) => (
                                                        <div key={subIndex} className="dropdown-column">
                                                            {/* Nome della collezione come header della colonna */}
                                                            <NavLink className="dropdown-header" to={item.path}>
                                                                <h5>
                                                                    {item.title}
                                                                </h5>
                                                            </NavLink>
                                                            {item.subDropdown && item.subDropdown.length > 0 && (
                                                                <ul className="dropdown-items">
                                                                    {item.subDropdown.slice(0, 3).map((subItem, subItemIndex) => (
                                                                        <li key={subItemIndex} role="menuitem">
                                                                            <NavLink to={subItem.path} className="dropdown-item">
                                                                                {subItem.title}
                                                                            </NavLink>
                                                                        </li>
                                                                    ))}
                                                                    <li>
                                                                        <a href="/mobili" className="dropdown-item"><i>INTERA COLLEZIONE...</i></a>
                                                                    </li>
                                                                </ul>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </li>
                                    );
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