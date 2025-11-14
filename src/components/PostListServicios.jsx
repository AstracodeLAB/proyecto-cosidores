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
        <div key={post.id} >
          {post.featuredImage && (
            <img
              src={post.featuredImage}
              alt={post.title}
              
            />
          )}
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: post.title }}  />
            <p>{new Date(post.date).toLocaleDateString()}</p>
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
