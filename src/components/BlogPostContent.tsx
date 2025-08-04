import { useEffect } from "react";
import BlogPost from "@/components/BlogPostContent";

interface BlogPostContentProps {
  html: string;
}

const BlogPostContent = ({ html }: BlogPostContentProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default BlogPostContent;
