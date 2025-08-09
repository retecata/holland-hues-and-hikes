import { useState } from "react";
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { useSEO } from "@/hooks/useSEO";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useSEO({
    title: "Travel Blog - Netherlands Travel Tips & Guides | Holland Hues & Hikes",
    description: "Browse our collection of Netherlands travel guides, insider tips, and local experiences. From Haarlem adventures to Dutch lakes and Keukenhof tulips.",
    keywords: "Netherlands travel blog, Dutch travel tips, Holland travel guide, Haarlem blog, Netherlands tourism, Dutch culture",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item": typeof window !== 'undefined' ? `${window.location.origin}/` : undefined},
          {"@type":"ListItem","position":2,"name":"Blog","item": typeof window !== 'undefined' ? `${window.location.origin}/blog` : undefined}
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Holland Hues & Hikes Blog",
        "url": typeof window !== 'undefined' ? `${window.location.origin}/blog` : undefined
      }
    ]
  });

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4">
            Travel Blog
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Discover insider tips, hidden gems, and authentic experiences across the Netherlands
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            className="px-6"
          >
            All Posts
          </Button>
          <Button
            variant={selectedCategory === 'travel-tips' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('travel-tips')}
            className="px-6"
          >
            Travel Tips
          </Button>
          <Button
            variant={selectedCategory === 'discovering-netherlands' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('discovering-netherlands')}
            className="px-6"
          >
            Discovering Netherlands
          </Button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No posts found in this category yet.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Blog;