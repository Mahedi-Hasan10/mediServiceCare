export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://mediservicecare.com";

  // In a real scenario, you'd fetch dynamic data like products here:
  // const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all-products`).then(res => res.json());
  // const productUrls = products.map(p => ({
  //   url: `${baseUrl}/products/${p.id}`,
  //   lastModified: new Date(),
  // }));

  const staticUrls = [
    "",
    "/about",
    "/contact",
    "/products",
    "/services",
    "/teams",
    "/testimonials",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  return [...staticUrls];
}
