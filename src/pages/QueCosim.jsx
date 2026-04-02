import { Helmet } from 'react-helmet-async';
import LogoBlack from "../assets/images/logoBlack.png";
import Hero from "../components/Hero";
import CardQueFem from "../components/CardQueFem";
import { useEffect, useState } from "react";
import { getSubcategoriesByParent, getPostsByCategory } from "../lib/wp.js";
import Loader from "../components/Loader";

export default function QueCosim() {
  const [subcategories, setSubcategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubcats = async () => {
      try {
        const data = await getSubcategoriesByParent("costura-2");
        setSubcategories(data);
      } catch (err) {
        setError("Hi ha hagut un error en carregar les categories.");
      } finally {
        setLoading(false);
      }
    };
    fetchSubcats();
  }, []);

  const handleCatClick = async (cat) => {
    setSelectedCat(cat);
    setLoadingPosts(true);
    try {
      const data = await getPostsByCategory(cat.slug);
      setPosts(data);
    } catch (err) {
      setError("Error en carregar els projectes.");
    } finally {
      setLoadingPosts(false);
    }
  };

  return (
    <>
     <Helmet>
        <title>Cosim | Cosidores de Salt</title>
        <meta name="description" content="Descobreix els projectes tèxtils de Cosidores de Salt. Transformem roba, moments i idees amb creativitat i respecte pel medi ambient." />
        <meta property="og:title" content="Cosim | Cosidores de Salt" />
        <meta property="og:description" content="Descobreix els projectes tèxtils de Cosidores de Salt." />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="visually-hidden">Els nostres projectes de costura</h1>
      
      <Hero
        logo={LogoBlack}
        text={`COSIM\nA\nSALT`}
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

        {/* NIVEL 1 — Cajones (subcategorías) */}
        {!selectedCat && (
          <div className="quefem__grid">
            {loading && <Loader />}
            {!loading && error && <p className="error">{error}</p>}
            {!loading && !error && subcategories.length === 0 && (
              <p>No hi han categories publicades.</p>
            )}
            {!loading && !error && subcategories.map((cat) => (
              <CardQueFem
                key={cat.id}
                title={cat.name}
                excerpt={cat.description}
                featuredImage={cat.image}
                onClick={() => handleCatClick(cat)}
                slugBase="cosim"
              />
            ))}
          </div>
        )}

        {/* NIVEL 2 — Posts de la subcategoría seleccionada */}
        {selectedCat && (
          <div className="quefem__grid">
           <button className="quefem__back" onClick={() => { setSelectedCat(null); setPosts([]); }}>
  <span className="arrow-triangle">◀</span> Tornar
</button>

            {loadingPosts && <Loader />}
            {!loadingPosts && posts.length === 0 && (
              <p>No hi han projectes publicats.</p>
            )}
            {!loadingPosts && posts.map((post) => (
              <CardQueFem
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                featuredImage={post.featuredImage}
                slug={post.slug}
                slugBase="cosim"
                
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}