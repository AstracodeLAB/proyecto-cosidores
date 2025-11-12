import React, { useEffect, useState } from "react";
import { getLatestNoticias} from "../lib/wp";
import { Link } from "react-router-dom";

const PostListNoticias = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLatestNoticias()
      .then((data) => {
        console.log("Posts cargados:", data);
        setPosts(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!posts.length) return <p>Cargando posts...</p>;

  return (
    <div >
      <h2>Noticias</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          
        >
          {post.featuredImage && (
            <img
              src={post.featuredImage}
              alt={post.title}
              
            />
          )}
          <div >
            <h3             
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
            <p dangerouslySetInnerHTML={{__html: post.date}}></p>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  post.excerpt.length > 100
                    ? post.excerpt.substring(0, 100) + "..."
                    : post.excerpt,
              }}
            />
           
            <Link to={`/post/${post.slug}`}>
              Leer más →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostListNoticias;