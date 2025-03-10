import { useState } from "react"
import { NavLink } from "react-router-dom";
import "./sidebarmenu.css"

// Componente che gestisce un menu laterale con supporto per dropdown multipli.
const SidebarMenu = ({ navLinks }) => {

    // Stato che gestisce se il menu è aperto o chiuso
    const [openMenu, setOpenMenu] = useState(false);

    // Stato che tiene traccia dell'indice del dropdown attualmente aperto; null se nessun dropdown è attivo
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Funzione per alternare lo stato del menu (aperto/chiuso)
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    // Funzione per chiudere il menu (utile per chiudere il menu cliccando l'overlay o un link)
    const closeMenu = () => {
        setOpenMenu(false);
    };

    // Funzione per alternare l'apertura di un dropdown specifico.
    // Se il dropdown selezionato è già aperto, lo chiude; altrimenti lo apre.
    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <>
            {/* Bottone hamburger */}
            <button
                className="hamburger-btn"
                onClick={toggleMenu}
                aria-label="Open-menu">
                <i className="fa fa-bars"></i>
            </button>

            {/* Overlay - si chiude cliccando sopra */}
            {openMenu && <div className="overlay-hamburger" onClick={closeMenu}></div>}

            {/* Sidebar menu */}
            <aside className={`sidebar-menu ${openMenu ? "open" : ""}`}>
                <div id="close-menu">
                    <button
                        className="close-btn"
                        onClick={closeMenu}
                        aria-label="Close-menu">
                        <i className="fa fa-times"></i>
                    </button>
                    <h3>Menu</h3>
                </div>

                <nav>
                    <ul className="hamburger-menu">
                        {navLinks.map((curLink, index) => (
                            <li key={index} className="sidebar-item">
                                <div className="rs-top-row">
                                    {/* Link principale del menu:
                                        - Se l'elemento ha un dropdown, il click alterna l'apertura del dropdown.
                                        - Altrimenti, cliccando il link si chiude il menu 
                                    */}
                                    <NavLink
                                        className="sidebar-link"
                                        to={curLink.path}
                                        onClick={() => {
                                            if (curLink.dropdown) {
                                                toggleDropdown(index);
                                            } else {
                                                closeMenu();
                                            }
                                        }}
                                    >
                                        {curLink.icon} {curLink.title}
                                    </NavLink>
                                    {/* Se l'elemento ha un dropdown, mostra anche un pulsante per l'icona del dropdown */}
                                    {curLink.dropdown && (
                                        <button
                                            className="rs-dropdown-button-menu"
                                            onClick={() => toggleDropdown(index)}>
                                            {curLink.secondIcon}
                                        </button>
                                    )}
                                </div>


                                {/* Dropdown - si apre in verticale e sposta gli elementi sotto */}
                                {curLink.dropdown && (
                                    <div className={`rs-dropdown-menu ${activeDropdown === index ? "show" : ""}`}>
                                        {curLink.dropdown.map((item, subIndex) => (
                                            <div key={subIndex} className="rs-dropdown-section">
                                                {/* Header del dropdown: un link che porta alla pagina corrispondente */}
                                                <NavLink
                                                    className="rs-dropdown-header"
                                                    to={item.path}
                                                    onClick={closeMenu}>
                                                    <h5>{item.title}</h5>
                                                </NavLink>
                                                {/* Se esistono ulteriori sotto-dropdown, vengono mappati qui */}
                                                {item.subDropdown && (
                                                    <ul className="rs-dropdown-items">
                                                        {item.subDropdown.slice(0, 3).map((subItem, subItemIndex) => (
                                                            <li key={subItemIndex}>
                                                                <NavLink
                                                                    to={subItem.path}
                                                                    className="rs-dropdown-item"
                                                                    onClick={closeMenu}
                                                                >
                                                                    {subItem.title}
                                                                </NavLink>
                                                            </li>
                                                        ))}
                                                        {/* Link aggiuntivo per visualizzare l'intera collezione */}
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
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default SidebarMenu;