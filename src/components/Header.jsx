import { useState, useEffect, useCallback } from "react";
import { useLocation, Link } from "react-router-dom";
import InstagramIcon from "../assets/icons/iconoInsta.svg";
import iconoAguja from "../assets/icons/iconoAguja.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  console.log("currentPath:", currentPath); 

  const isActive = (path) => currentPath === path;

  const linkClass = (path) =>
    `navigation__container-menu-itemsMap-link ${isActive(path) ? "navigation__container-menu-itemsMap-link--active" : ""}`;

  const toggleMenu = useCallback((open) => setIsMenuOpen(open), []);
  const toggleSubmenu = useCallback((open) => setIsSubmenuOpen(open), []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const navMenu = document.getElementById("nav-menu");
      const navToggle = document.getElementById("nav-toggle");
      const submenu = document.getElementById("submenu-services");
      const servicesBtn = document.getElementById("services-btn");

      if (isSubmenuOpen && submenu && servicesBtn && !submenu.contains(e.target) && !servicesBtn.contains(e.target)) {
        toggleSubmenu(false);
      }
      if (isMenuOpen && navMenu && navToggle && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        toggleMenu(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        toggleMenu(false);
        toggleSubmenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen, isSubmenuOpen, toggleMenu, toggleSubmenu]);

  useEffect(() => {
    const navLinks = document.querySelectorAll('#nav-menu a[href^="/"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        toggleMenu(false);
        toggleSubmenu(false);
      });
    });
    return () => {
      navLinks.forEach((link) => link.removeEventListener("click", () => {}));
    };
  }, [toggleMenu, toggleSubmenu]);

  return (
    <header className="header header__text">
      <nav className="navigation" aria-label="Menú principal">
        <div className="navigation__container">

          <Link to="/" className="navigation__container-logo">
            <span className="navigation__container-logo-span">COSIDORES DE SALT</span>
          </Link>

          <button
            id="nav-toggle"
            className="navigation__container-button navigation__container-button--open"
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
            aria-label="Abrir menú"
            type="button"
            onClick={() => toggleMenu(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
              <path d="M0 17H18V18C18 19.1046 17.1046 20 16 20H2C0.89543 20 0 19.1046 0 18V17Z" fill="#EFEFEF"/>
              <path d="M18 3H0V2C0 0.895431 0.895431 0 2 0H16C17.1046 0 18 0.895431 18 2V3Z" fill="#EFEFEF"/>
              <path d="M16 11H2V9H16V11Z" fill="#EFEFEF"/>
              <path d="M16 7H2V5H16V7Z" fill="#EFEFEF"/>
              <path d="M16 15H2V13H16V15Z" fill="#EFEFEF"/>
            </svg>
          </button>

          <ul
            id="nav-menu"
            className="navigation__container-menu"
            aria-hidden={!isMenuOpen}
            hidden={!isMenuOpen}
          >
            {/* Botón cerrar */}
            <li className="navigation__container-menu-item navigation__container-menu-item-close">
              <button
                className="navigation__container-button navigation__container-button--close"
                aria-label="Cerrar menú"
                type="button"
                id="close-menu"
                onClick={() => toggleMenu(false)}
              >
                <svg className="navigation__container-button-icon" viewBox="0 0 20 20">
                  <title>Cerrar menú</title>
                  <polygon
                    points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                    transform="rotate(45 10 10)"
                  ></polygon>
                </svg>
              </button>
            </li>

            <li className="navigation__container-menu-itemsMap">
              <Link to="/" className={linkClass("/")}>
                INICI {isActive("/") && <img src={iconoAguja} alt="" className="nav-icon" />}
              </Link>
            </li>
            <li className="navigation__container-menu-itemsMap">
              <Link to="/qui-som" className={linkClass("/qui-som")}>
                QUI SOM? {isActive("/qui-som") && <img src={iconoAguja} alt="" className="nav-icon" />}
              </Link>
            </li>
            <li className="navigation__container-menu-itemsMap">
              <Link to="/cosim" className={linkClass("/que-cosim")}>
                COSIM {isActive("/que-cosim") && <img src={iconoAguja} alt="" className="nav-icon" />}
              </Link>
            </li>
            <li className="navigation__container-menu-itemsMap">
              <Link to="/cuinem" className={linkClass("/que-cuinem")}>
                CUINEM {isActive("/que-cuinem") && <img src={iconoAguja} alt="" className="nav-icon" />}
              </Link>
            </li>
            <li className="navigation__container-menu-itemsMap">
              <Link to="/noticies" className={linkClass("/noticies")}>
                NOTICIES {isActive("/noticies") && <img src={iconoAguja} alt="" className="nav-icon" />}
              </Link>
            </li>
            <li className="navigation__container-menu-itemsMap">
              <Link to="/contacte" className={linkClass("/contacte")}>
                CONTACTE {isActive("/contacte") && <img src={iconoAguja} alt="" className="nav-icon" />}
              </Link>
            </li>

            <li className="navigation__container-menu-itemsMap cta-mobile">
              <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Instagram">
                <img src={InstagramIcon} alt="Instagram" className="icon-social" />
              </a>
            </li>
          </ul>

          <div className="button-header">
            <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Instagram">
              <img src={InstagramIcon} alt="Instagram" className="icon-social" />
            </a>
          </div>

        </div>
      </nav>
    </header>
  );
}