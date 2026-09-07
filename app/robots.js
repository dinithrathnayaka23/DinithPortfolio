export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.dinithrathnayaka.me/sitemap.xml",
    host: "https://www.dinithrathnayaka.me",
  };
}
