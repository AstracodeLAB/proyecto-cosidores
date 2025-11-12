// src/components/PostListServicios.jsx
import React, { useEffect, useState } from "react";
import { getLatestServicios } from "../lib/wp";
import { Link } from "react-router-dom";

const PostListServicios = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Para controlar "Cargando..."
  const [error, setError] = useState(null);

  useEffect(() => {
    getLatestServicios()
      .then((data) => {
        console.log("Posts de Servicios cargados:", data); // <--- mira aquí
        setPosts(data);
      })
      .catch((err) => {
        console.error("Error al cargar servicios:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando servicios...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!posts.length) return <p>No hay servicios publicados.</p>;

  return (
    <div>
      <h2>Servicios</h2>
      {posts.map((post) => (
        <div key={post.id} className="mb-6 border rounded p-4 shadow-sm">
          {post.featuredImage && (
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
          )}
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: post.title }} className="text-xl font-semibold mb-2" />
            <p className="text-gray-500 text-sm mb-2">{new Date(post.date).toLocaleDateString()}</p>
            <div
  dangerouslySetInnerHTML={{
    __html:
      post.excerpt.length > 100
        ? post.excerpt.rendered.substring(0, 100) + "..."
        : post.excerpt.rendered,
  }}
/>
            <Link
              to={`/post/${post.slug}`}
              className="text-blue-600 text-sm mt-2 inline-block"
            >
              Leer más →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostListServicios;
