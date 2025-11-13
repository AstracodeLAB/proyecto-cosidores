// src/components/CardPrueba.jsx

import React, { useEffect, useState } from "react";
import { getPageInfo } from "../lib/wp";

const PagePrueba = () => {
  const [page, setPage] = useState(null);
  const [error, setError] = useState(null);

  // 👇 cambia “prueba” por el slug real de la página en tu WordPress
  const slug = "pagina-prueba";

  useEffect(() => {
    console.log("VITE_WP_DOMAIN:", import.meta.env.VITE_WP_DOMAIN);
    getPageInfo(slug)
      .then((data) => {
        console.log("Página cargada:", data);
        setPage(data);
      })
      .catch((err) => setError(err.message));
  }, [slug]);
  if (error) return <p>Error: {error}</p>;
  if (!page) return <p>Cargando página...</p>;

  return (
    <div className="page-prueba" >
      <h1
        dangerouslySetInnerHTML={{ __html: page.title }}
      />
      <div
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </div>
  );
};

export default PagePrueba;