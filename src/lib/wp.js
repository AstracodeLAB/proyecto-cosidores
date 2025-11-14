// src/lib/wp.js

const domain = import.meta.env.VITE_WP_DOMAIN;
const apiUrl = `${domain}/wp-json/wp/v2`;

// Traer una página por slug
export const getPageInfo = async (slug) => {
  const response = await fetch(`${apiUrl}/pages?slug=${slug}`);
  if (!response.ok) throw new Error("Error al obtener la página");

  const data = await response.json();
  console.log("RAW WP data:", data);
  const page = data[0];

  if (!page) throw new Error(`No se encontró la página con slug: ${slug}`);

  return {
    id: page.id,
    title: page.title.rendered,
    content: page.content.rendered,
    slug: page.slug,
  };
};

// export const getLatestPosts = async (perPage = 10) => {
//   //si no quiero imagenes destacadas, quito &_embed
//   const response = await fetch(`${apiUrl}/posts?per_page=${perPage}&_embed`);
//   console.log("Status:", response.status);

//   const results = await response.json();
//   console.log("Resultados brutos de WP:", results);

//   if (!response.ok) throw new Error("Error al obtener los posts");

//   if (!Array.isArray(results) || results.length === 0) {
//     console.warn("⚠️ No hay posts publicados o el resultado no es un array");
//     return [];
//   }

//   return results.map((post) => ({
//     id: post.id,
//     title: post.title.rendered,
//     content: post.content.rendered,
//     excerpt: post.excerpt,
//     slug: post.slug,
//     link: post.link,
//     featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
//     date: post.date,
//   }));
// };


//he creado uno para que separe por categoria
export const getPostsByCategory = async (categorySlug, perPage = 10) => {
  // 1️⃣ Obtener el ID de la categoría
  const catRes = await fetch(`${apiUrl}/categories?slug=${categorySlug}`);
  const catData = await catRes.json();
  console.log("catData:", catData);
  if (!catData[0]) return []; // No existe la categoría

  const categoryId = catData[0].id;

  // 2️⃣ Traer posts filtrados por categoría
  const res = await fetch(`${apiUrl}/posts?categories=${categoryId}&status=publish&per_page=${perPage}&_embed`);
  if (!res.ok) throw new Error("Error al obtener los posts");

  const posts = await res.json();
  console.log("posts de category:", posts);

  return posts.map((post) => ({
    id: post.id,
    title: post.title.rendered,
    content: post.content.rendered,
    excerpt: post.excerpt.rendered,
    slug: post.slug,
    link: post.link,
    featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
    date: post.date,
  }));
};

export const getLatestNoticias = (perPage = 10) => getPostsByCategory("noticias", perPage);
export const getLatestServicios = (perPage = 10) => getPostsByCategory("servicios", perPage);

export const getPostBySlug = async (slug) => {
  // Usamos la API de posts y filtramos por 'slug'
  const response = await fetch(`${apiUrl}/posts?slug=${slug}&_embed`);
  if (!response.ok) throw new Error("Error al obtener el post");
  
  const data = await response.json();
  const post = data[0]; // La API siempre devuelve un array, tomamos el primer (y único) resultado
  
  if (!post) throw new Error(`No se encontró el post con slug: ${slug}`);
  
  return {
   id: post.id,
   title: post.title.rendered,
   content: post.content.rendered,
    // Asegúrate de que el excerpt se mapea correctamente como cadena para los detalles también
   excerpt: post.excerpt.rendered, 
   link: post.link,
   slug: post.slug,
   featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
   date: post.date,
   
   };
  };