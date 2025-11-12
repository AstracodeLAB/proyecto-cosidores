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
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden p-6 my-8">
      <button className="text-blue-600 mb-4" onClick={() => navigate(-1)}>
        ← Volver
      </button>
      {post.featuredImage && <img src={post.featuredImage} alt={post.title} className="w-full h-64 object-cover mb-4" />}
      <h1 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: post.title }} />
      <div className="prose prose-lg text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default PostDetallePrueba;