import type { APIRoute } from "astro";
import { routes } from "../i18n/ui";

export const GET: APIRoute = ({ site }) => {
  const urls = Object.values(routes).map((r) => {
    const alts = Object.entries(r).map(([l, p]) => `<xhtml:link rel="alternate" hreflang="${l}" href="${new URL(p, site)}"/>`).join("");
    return Object.values(r).map((p) => `<url><loc>${new URL(p, site)}</loc>${alts}</url>`).join("");
  }).join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
};
