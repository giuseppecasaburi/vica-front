import { useState } from "react"
import { NavLink } from "react-router-dom";
import "./sidebarmenu.css"

const SidebarMenu = ({ navLinks }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    };

    const closeMenu = () => {
        setOpenMenu(false)
    };

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index)
    };

    return (
        <>
            {/* Bottone hamburger */}
            <button className="hamburger-btn" onClick={toggleMenu} aria-label="Open-menu">
                <i className="fa fa-bars"></i>
            </button>

            {/* Overlay - si chiude cliccando sopra */}
            {openMenu && <div className="overlay-hamburger" onClick={closeMenu}></div>}

            {/* Sidebar menu */}
            <aside className={`sidebar-menu ${openMenu ? "open" : ""}`}>
                <button className="close-btn" onClick={closeMenu} aria-label="Close-menu">
                    <i className="fa fa-times"></i>
                </button>
                <h3>Menu</h3>

                <nav>
                    <ul className="hamburger-menu">
                        {navLinks.map((curLink, index) => (
                            <li key={index} className="sidebar-item">
                                <div className="rs-top-row">
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
                                    {curLink.dropdown && (
                                        <button className="rs-dropdown-button-menu" onClick={() => toggleDropdown(index)}>
                                            {curLink.secondIcon}
                                        </button>
                                    )}
                                </div>


                                {/* Dropdown - si apre in verticale e sposta gli elementi sotto */}
                                {curLink.dropdown && (
                                    <div className={`rs-dropdown-menu ${activeDropdown === index ? "show" : ""}`}>
                                        {curLink.dropdown.map((item, subIndex) => (
                                            <div key={subIndex} className="rs-dropdown-section">
                                                <NavLink className="rs-dropdown-header" to={item.path} onClick={closeMenu}>
                                                    <h5>{item.title}</h5>
                                                </NavLink>
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