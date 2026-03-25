import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__container">
        <p className="cookie-banner__text">
          Utilitzem cookies pròpies i necessàries per al funcionament de la web. 
          No utilitzem cookies de tercers ni de seguiment.{" "}
          <Link to="/politica-de-cookies" className="cookie-banner__link">
            Més informació
          </Link>
        </p>
        <div className="cookie-banner__buttons">
          <button className="cookie-banner__btn cookie-banner__btn--accept" onClick={handleAccept}>
            Acceptar
          </button>
        </div>
      </div>
    </div>
  );
}