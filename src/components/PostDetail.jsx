import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from "react-router-dom";
import { getPostBySlug } from "../lib/wp";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function PostDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostBySlug(slug)
      .then(setPost)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Loader />;
  if (error) return <p className="error">{error}</p>;
  if (!post) return null;

  return (
    <section className="post-detail">
      <Helmet>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.seoDescription} />
        <meta property="og:title" content={post.seoTitle} />
        <meta property="og:description" content={post.seoDescription} />
        {post.seoImage && <meta property="og:image" content={post.seoImage} />}
        <meta property="og:type" content="article" />
      </Helmet>
      
      <div className="post-detail__container">

        {post.date && (
          <p className="post-detail__date">
            {new Date(post.date).toLocaleDateString("ca-ES", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })}
          </p>
        )}

        <h1
          className="post-detail__title"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />

        {post.excerpt && (
          <div
            className="post-detail__excerpt"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        )}

        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="post-detail__image"
          />
        )}

        <div
          className="post-detail__content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.link && (
           <a 
          
            href={post.link}
            className="post-detail__external-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Més informació al següent enllaç
          </a>
        )}

        <button className="post-detail__back" onClick={() => navigate(-1)}>
        <span className="arrow-triangle">◀</span> Tornar
        </button>

      </div>
    </section>
  );
}