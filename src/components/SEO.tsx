import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  article?: {
    publishedTime: string;
    author: string;
    tags: string[];
  };
  canonicalUrl?: string;
}

const SEO = ({ 
  title = "Holland Hues & Hikes - Discover the Netherlands | Travel Blog",
  description = "Discover the Netherlands through insider travel tips, hidden gems, and authentic local experiences. Your guide to Haarlem, Dutch lakes, tulips, and more.",
  keywords = "Netherlands travel, Dutch travel guide, Haarlem guide, Keukenhof tulips, Dutch lakes swimming, Holland travel tips, Netherlands tourism",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  article,
  canonicalUrl
}: SEOProps) => {
  const fullTitle = title.includes("Holland Hues & Hikes") ? title : `${title} | Holland Hues & Hikes`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={article ? "article" : "website"} />
      
      {/* Twitter Card */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Article specific meta */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:author" content={article.author} />
          {article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Structured Data */}
      {article && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "description": description,
            "author": {
              "@type": "Person",
              "name": article.author
            },
            "datePublished": article.publishedTime,
            "publisher": {
              "@type": "Organization",
              "name": "Holland Hues & Hikes",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lovable.dev/opengraph-image-p98pqg.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl || window.location.href
            }
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;