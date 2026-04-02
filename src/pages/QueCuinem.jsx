import { Helmet } from 'react-helmet-async';
import LogoBlack from "../assets/images/logoBlack.png";
import Hero from "../components/Hero";
import CardQueFem from "../components/CardQueFem";
import { useEffect, useState } from "react";
import { getSubcategoriesByParent, getPostsByCategory } from "../lib/wp.js";
import Loader from "../components/Loader";

export default function QueCuinem() {
  const [subcategories, setSubcategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubcats = async () => {
      try {
        const data = await getSubcategoriesByParent("cuina"); // ← slug de Cuina
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
        <title>Cuinem | Cosidores de Salt</title>
        <meta name="description" content="Descobreix les receptes i projectes de cuina de Cosidores de Salt. Cuinem amb productes locals i de temporada, compartint la tradició culinària catalana." />
        <meta property="og:title" content="Cuinem | Cosidores de Salt" />
        <meta property="og:description" content="Cuinem amb productes locals i de temporada, compartint la tradició culinària catalana." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Hero
        logo={LogoBlack}
        text={`CUINEM\nA\nSALT`}
        alt="Logo de la página Cosidores"
      />

      <section className="quefem">
        <div className="quefem__intro">
          <h2 className="quefem__title">El millor de la cuina catalana</h2>
          <p className="quefem__text">
            Cuinem amb productes locals i de temporada, compartint la 
            tradició culinària catalana amb creativitat i bon gust.
          </p>
        </div>

        <h1 className="visually-hidden">Els nostres projectes de cuina</h1>

        {/* NIVEL 1 — Cajones (subcategorías de Cuina) */}
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
                slugBase="cuinem"
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
                slugBase="cuinem" // ← para que el link sea /cuinem/:slug
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}