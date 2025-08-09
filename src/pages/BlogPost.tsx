import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug } from "@/data/blogPosts";
import BlogPostContent from "@/components/BlogPostContent";
import { useSEO } from "@/hooks/useSEO";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  useSEO({
    title: post ? `${post.title} | Holland Hues & Hikes` : "Post Not Found | Holland Hues & Hikes",
    description: post?.excerpt ?? "Discover Netherlands travel tips and guides.",
    keywords: post ? `${post.category}, Netherlands travel, ${post.title}` : "Netherlands travel, blog",
    ogImage: post?.image,
    canonicalUrl: origin + (slug ? `/post/${slug}` : '/blog'),
    structuredData: post ? [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": [post.image],
        "datePublished": post.date,
        "author": { "@type": "Person", "name": post.author },
        "mainEntityOfPage": origin + `/post/${slug}`
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item": origin + "/"},
          {"@type":"ListItem","position":2,"name":"Blog","item": origin + "/blog"},
          {"@type":"ListItem","position":3,"name": post.title, "item": origin + `/post/${slug}`}
        ]
      }
    ] : undefined
  });

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The post you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <article className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="aspect-[16/9] rounded-lg overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Post Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge
                variant="secondary"
                className={`${
                  post.category === "travel-tips"
                    ? "bg-accent/10 text-accent border-accent/20"
                    : "bg-secondary/10 text-secondary border-secondary/20"
                }`}
              >
                {post.category === "travel-tips"
                  ? "Travel Tips"
                  : "Discovering Netherlands"}
              </Badge>

              <div className="flex items-center text-sm text-muted-foreground space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary-light">
            <BlogPostContent html={post.content} />
          </div>

          {/* Post Footer */}
          <footer className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-4 justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Published on{" "}
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                by {post.author}
              </div>

              <Button asChild>
                <Link to="/blog">Read More Posts</Link>
              </Button>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
