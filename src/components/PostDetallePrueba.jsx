import { useParams, useNavigate } from "react-router-dom";
import { getPostBySlug } from "../lib/wp";
import { useEffect, useState } from "react";

const PostDetallePrueba = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPostBySlug(slug)
      .then(setPost)
      .catch((err) => setError(err.message));
  }, [slug]);

  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>Cargando post...</p>;

  return (
    <div >
      <button  onClick={() => navigate(-1)}>
        ← Volver
      </button>
      {post.featuredImage && <img src={post.featuredImage} alt={post.title} />}
      <h1  dangerouslySetInnerHTML={{ __html: post.title }} />
      <div  dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default PostDetallePrueba;