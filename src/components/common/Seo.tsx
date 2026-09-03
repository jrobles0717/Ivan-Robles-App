import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  path: string;
}

const SITE_URL = "https://www.djivanrobles.com";

const setMetaContent = (selector: string, content: string) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", content);
};

// The site is a client-rendered SPA with a single set of meta tags in
// index.html, so every route showed the same title/description in search
// results. This updates them per page after mount (crawlers that matter,
// like Googlebot, execute JS before indexing).
const Seo = ({ title, description, path }: SeoProps) => {
  useEffect(() => {
    document.title = title;

    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', `${SITE_URL}${path}`);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `${SITE_URL}${path}`);
  }, [title, description, path]);

  return null;
};

export default Seo;
