import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://tushank.dev"; // change to your domain
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${base}/sitemap.xml`,
    host: base
  };
}
