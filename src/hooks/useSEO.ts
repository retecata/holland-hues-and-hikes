import { useEffect } from 'react';

interface SEOOptions {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const useSEO = ({
  title = "Holland Hues & Hikes - Discover the Netherlands | Travel Blog",
  description = "Discover the Netherlands through insider travel tips, hidden gems, and authentic local experiences. Your guide to Haarlem, Dutch lakes, tulips, and more.",
  keywords = "Netherlands travel, Dutch travel guide, Haarlem guide, Keukenhof tulips, Dutch lakes swimming, Holland travel tips, Netherlands tourism",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  canonicalUrl
}: SEOOptions = {}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Function to update or create meta tag
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', 'website', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    if (canonicalUrl) {
      let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalElement) {
        canonicalElement = document.createElement('link');
        canonicalElement.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalElement);
      }
      canonicalElement.setAttribute('href', canonicalUrl);
    }

    // Cleanup function to reset title on unmount
    return () => {
      document.title = "Holland Hues & Hikes - Discover the Netherlands | Travel Blog";
    };
  }, [title, description, keywords, ogImage, canonicalUrl]);
};