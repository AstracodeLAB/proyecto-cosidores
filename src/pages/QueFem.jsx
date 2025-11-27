import Header from "../components/Header";
import Footer from "../components/Footer";
import LogoBlack from "../assets/images/logoBlack.png";
import Hero from "../components/Hero";
import CardQueFem from "../components/CardQueFem";
import { useEffect, useState } from "react";
import { getLatestServicios } from "../lib/wp.js";
import Loader from "../components/Loader";

export default function Quefem() {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const data = await getLatestServicios();
        setServicios(data);
      } catch (error) {
        console.error("Error al cargar los servicios:", error);
        setError("Hi ha hagut un error en carregar els serveis.");
      } finally {
        setLoading(false);
      }
    };

    fetchServicios();
  }, []);

  return (
    <>
      <Header />
      <Hero
        logo={LogoBlack}
        text={`QUE\nFEM?`}
        alt="Logo de la página Cosidores"
      />

      <section className="quefem">
        <div className="quefem__intro">
          <h2 className="quefem__title">Donem forma a projectes tèxtils</h2>
          <p className="quefem__text">
            Transformem roba, moments i idees. Les cosidores treballem amb
            creativitat i respecte pel medi ambient, projectant valors a cada
            puntada.
          </p>
        </div>

        <div className="quefem__grid">
          {/* LOADING */}
          {loading && <Loader />}

          {/* ERROR */}
          {!loading && error && <p className="error">{error}</p>}

          {/* NO SERVEIS */}
          {!loading && !error && servicios.length === 0 && (
            <p>No hi han serveis publicats.</p>
          )}

          {/* LLISTAT DE SERVEIS */}
          {!loading &&
            !error &&
            servicios.length > 0 &&
            servicios.map((servicio) => (
              <CardQueFem
                key={servicio.id}
                title={servicio.title}
                excerpt={servicio.excerpt}
                featuredImage={servicio.featuredImage}
                link={servicio.link}
                content={servicio.content}
              />
            ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
