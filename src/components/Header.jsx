import { useState, useEffect, useCallback } from "react";
import InstagramIcon from "../assets/icons/iconoInsta.svg";
import iconoAguja from "../assets/icons/iconoAguja.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleMenu = useCallback((open) => {
    setIsMenuOpen(open);
  }, []);

  const toggleSubmenu = useCallback((open) => {
    setIsSubmenuOpen(open);
  }, []);

  // Cerrar menú/submenú al hacer clic fuera o presionar Escape
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

  // Cerrar menú cuando se navega
  useEffect(() => {
    const navLinks = document.querySelectorAll('#nav-menu a[href^="/"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        toggleMenu(false);
        toggleSubmenu(false);
      });
    });
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, [toggleMenu, toggleSubmenu]);

  return (
    <header className="header header__text">
      <nav className="navigation" aria-label="Menú principal">
        <div className="navigation__container">
          
          <div className="navigation__container-logo">
            <p>COSIDORES DE SALT</p>
          </div>

          {/* Botón hamburguesa */}
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

          {/* Menú principal */}
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

            {/* Mega menú */}
            <li className="navigation__container-menu-itemsMap">
              <a href="/sobre-nosotras/" className="navigation__container-menu-itemsMap-link">
                INICI
              </a>
            </li>
            <li className="navigation__container-menu-itemsMap">
              <a href="/sobre-nosotras/" className="navigation__container-menu-itemsMap-link">
                QUI SOM?
              </a>
            </li>
            <li className="navigation__container-menu-itemsMap">
              
              <button
                id="services-btn"
                className="navigation__container-menu-itemsMap-link"
                aria-expanded={isSubmenuOpen}
                aria-controls="submenu-services"
                type="button"
                onClick={() => toggleSubmenu(!isSubmenuOpen)}
              >
                QUÈ FEM?
                {/* <svg
                  id="services-arrow"
                  className="navigation__container-menu-itemsMap-arrow"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: isSubmenuOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}
                >
                  <path d="M5 7l5 5 5-5H5z"></path>
                </svg> */}
                <img src={iconoAguja} alt="" />
              </button>
             

              <div
                id="submenu-services"
                className="navigation__container-megamenu"
                aria-hidden={!isSubmenuOpen}
                hidden={!isSubmenuOpen}
              >
                <div className="megamenu-column">
                  <h3>
                    <a href="/servicios/diseno-web/">Diseño y desarrollo web</a>
                  </h3>
                  <ul>
                    <li><a href="/servicios/web-corporativa/">Web corporativa</a></li>
                    <li><a href="/servicios/tienda-online/">Tienda online / e-commerce</a></li>
                    <li><a href="/servicios/landing-page/">Landing pages</a></li>
                    <li><a href="/servicios/redisenio-web/">Rediseño web</a></li>
                  </ul>
                </div>

                <div className="megamenu-column">
                  <h3>
                    <a href="/servicios/funcionalidades-optimizacion-web/">
                      Funcionalidades y Optimización
                    </a>
                  </h3>
                  <ul>
                    <li><a href="/servicios/web-multilingue/">Web multilingüe</a></li>
                    <li><a href="/servicios/sistemas-de-reservas/">Sistemas de reservas</a></li>
                    <li><a href="/servicios/accesibilidad-web/">Accesibilidad web</a></li>
                    <li><a href="/servicios/cartas-digitales-restaurantes/">Cartas digitales para restaurantes</a></li>
                  </ul>
                </div>

                <div className="megamenu-column">
                  <h3>Mantenimiento y soporte</h3>
                  <ul>
                    <li><a href="/servicios/mantenimiento-web/">Mantenimiento web</a></li>
                    <li><a href="/servicios/hosting-dominio/">Hosting y dominio</a></li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="navigation__container-menu-itemsMap">
              <a href="/sobre-nosotras/" className="navigation__container-menu-itemsMap-link">
                NOTICIES
              </a>
            </li>

            <li className="navigation__container-menu-itemsMap">
              <a href="/contacto/" className="navigation__container-menu-itemsMap-link">
                CONTACTE
              </a>
            </li>

            <li className="navigation__container-menu-itemsMap cta-mobile">
              <a 
                href="https://www.instagram.com/tuusuario" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="icon-link"
                aria-label="Instagram"
              >
                <img src={InstagramIcon} alt="Instagram" className="icon-social" />
              </a>
            </li>
          </ul>

          <div className="button-header">
          <a 
            href="https://www.instagram.com/tuusuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
            aria-label="Instagram"
          >
            <img src={InstagramIcon} alt="Instagram" className="icon-social" />
          </a>
          </div>
        </div>
      </nav>
    </header>
  );
}