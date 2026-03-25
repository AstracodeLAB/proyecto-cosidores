import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Aquesta pàgina no existeix.</p>
        <Link to="/" className="not-found__link">
        <span className="arrow-triangle">◀</span>  Tornar a l'inici
        </Link>
      </div>
    </section>
  );
}