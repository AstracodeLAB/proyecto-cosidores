
import { Link } from "react-router-dom";
import LogoFooter from "../assets/images/logoFooter.png";
import MailIcon from "../assets/icons/mail.svg";
import WhatsapIcon from "../assets/icons/whatsapp.svg";
import InstagramIcon from "../assets/icons/instagram.svg";


export default function Footer() {
 

  return (
    <section className="footer">
      <article className="footer__main">
        <div className="footer__content">
          <div className="footer__logo" > 
            <img className="footer__logo-img" src={LogoFooter} alt="Logo de Cosidores de Salt" />
          </div>
          <div className="footer__nav">
            <ul>
              <li><Link to="/">Inici</Link></li>
              <li><Link to="/qui-som">Qui som?</Link></li>
              <li><Link to="/cosim">Cosim</Link></li>
              <li><Link to="/cuinem">Cuinem</Link></li>
              <li><Link to="/noticies">Noticies</Link></li>
              <li><Link to="/contacte">Contacte</Link></li>
            </ul>
          </div>
        </div>
      

        <div className="footer__contact">
          <a href="mailto:cosidoresdesalt@gmail.com" className="footer__contact-link">
            <img src={MailIcon} alt="Icono mail de contacto" />
            cosidoresdesalt@gmail.com
          </a>

          <a href="tel:685482516" className="footer__contact-link">
            <img src={WhatsapIcon} alt="Icono whatsap contacto" />
            685 482 516
          </a>

          <a href="https://instagram.com/cosidoresdesalt" target="_blank" className="footer__contact-link">
            <img src={InstagramIcon} alt="Icono instagram contacto" />
            @cosidoresdesalt
          </a>
        </div>

      </article>
      <article className="footer__legal-copyright">
        <div className="footer__legal">
        <Link to="/politica-de-privacitat">Política de privacitat</Link>
          <span> | </span>
          <Link to="/politica-de-cookies">Política de cookies</Link>
          <span> | </span>
          <Link to="/avis-legal">Avís legal</Link>
        
        </div>
        <div className="footer__copyright">
          <p>© 2025 · Tots els drets reservats</p>
        </div>
      </article>
      <article className="footer__creator">
        <p>Creat per: <a href="/">Astracodelab</a></p>
      </article>
    </section>
  );
}