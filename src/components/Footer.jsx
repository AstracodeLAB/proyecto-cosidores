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
            <img className="footer__logo-img" src={LogoFooter} alt="" />
          </div>
          <div className="footer__nav">
            <ul>
            <li><a href="/">Inici</a></li>
            <li><a href="/qui-som">Qui som?</a></li>
            <li><a href="/que-fem">Què fem?</a></li>
            <li><a href="/noticies">Noticies</a></li>
            <li><a href="/contacte">Contacte</a></li>
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
          <a href="/">Política de privacitat
          </a>
          <span> | </span>
          <a href="/">Política de cookies
          </a>
          <span> | </span>
          <a href="/">Avís legal
          </a>
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