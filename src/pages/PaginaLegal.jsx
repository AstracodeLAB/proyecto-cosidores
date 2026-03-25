import { useParams } from "react-router-dom";
import { getPageInfo } from "../lib/wp.js";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function PaginaLegal() {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("slug:", slug);
    setLoading(true);
    setPage(null);
    getPageInfo(slug)
      .then(setPage)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Loader />;
  if (error) return <p className="error">{error}</p>;
  if (!page) return null;

  return (
    <section className="pagina-legal">
      <div className="pagina-legal__container">
        <h1
          className="pagina-legal__title"
          dangerouslySetInnerHTML={{ __html: page.title }}
        />
        <div
          className="pagina-legal__content"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </div>
    </section>
  );
}