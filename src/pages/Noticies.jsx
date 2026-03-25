
import LogoBlack from "../assets/images/logoBlack.png";
import Hero from "../components/Hero";
import CardQueFem from "../components/CardQueFem";
import { useEffect, useState } from "react";
import { getLatestNoticias } from "../lib/wp.js";
import Loader from "../components/Loader";

export default function Noticies() {
  const [servicios, setServicios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchServicios = async () => {
        try {
          const data = await getLatestNoticias();
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
      
        <Hero
          logo={LogoBlack}
          text={`NOTI\nCIES`}
          alt="Logo de la página Cosidores"
        />
  
        <section className="quefem">
          <div className="quefem__intro">
            <h2 className="quefem__title">Estigues al dia de tot el que cosim!</h2>
            <p className="quefem__text">
              Descobreix les novetats de la nostra associació i d’altres espais que comparteixen l’amor pel fil i l’agulla. Tallers, esdeveniments, projectes i notícies que ens inspiren dia a dia.
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
                slug={servicio.slug}
                slugBase="noticies"
                />
              ))}
          </div>
        </section>

      </>
    );
}