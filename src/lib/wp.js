const domain = import.meta.env.VITE_WP_DOMAIN;
const apiUrl = `${domain}/wp-json/wp/v2`;

// Traer una página por slug
export const getPageInfo = async (slug) => {
  const response = await fetch(`${apiUrl}/pages?slug=${slug}`);
  if (!response.ok) throw new Error("Error al obtener la página");

  const data = await response.json();
  const page = data[0];
  if (!page) throw new Error(`No se encontró la página con slug: ${slug}`);

  return {
    id: page.id,
    title: page.title.rendered,
    content: page.content.rendered,
    slug: page.slug,
  };
};

export const getPostsByCategory = async (categorySlug, perPage = 10) => {
  const catRes = await fetch(`${apiUrl}/categories?slug=${categorySlug}`);
  const catData = await catRes.json();
  if (!catData[0]) return [];

  const categoryId = catData[0].id;
  console.log("Buscando posts de categoría:", categorySlug, "ID:", categoryId);

  const res = await fetch(
    `${apiUrl}/posts?categories=${categoryId}&status=publish&per_page=${perPage}&_embed`
  );
  if (!res.ok) throw new Error("Error al obtener los posts");

  const posts = await res.json();

  console.log("Posts recibidos:", posts.map(p => ({
    title: p.title.rendered,
    categories: p.categories
  })));

  const filtered = posts.filter((post) =>
    post.categories.includes(categoryId)
  );

  console.log("Posts filtrados:", filtered.map(p => p.title.rendered));

  return filtered.map((post) => ({
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
  const response = await fetch(`${apiUrl}/posts?slug=${slug}&_embed`);
  if (!response.ok) throw new Error("Error al obtener el post");

  const data = await response.json();
  const post = data[0];
  if (!post) throw new Error(`No se encontró el post con slug: ${slug}`);

  return {
    id: post.id,
    title: post.title.rendered,
    content: post.content.rendered,
    excerpt: post.excerpt.rendered,
    link: post.link,
    slug: post.slug,
    featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
    date: post.date,
    seoTitle: post.yoast_head_json?.title || post.title.rendered,
    seoDescription: post.yoast_head_json?.description || post.excerpt.rendered,
    seoImage: post.yoast_head_json?.og_image?.[0]?.url || post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
  };
};

export const getSubcategoriesByParent = async (parentSlug) => {
  const catRes = await fetch(`${apiUrl}/categories?slug=${parentSlug}`);
  const catData = await catRes.json();
  if (!catData[0]) return [];

  const parentId = catData[0].id;

  const res = await fetch(`${apiUrl}/categories?parent=${parentId}&per_page=100`);
  const data = await res.json();

  return data.map((cat) => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
    description: cat.description,
    count: cat.count,
    image: cat.acf?.imatge || null,
  }));
};

export const getLatestCostura = (perPage = 10) => getPostsByCategory("costura-2", perPage);