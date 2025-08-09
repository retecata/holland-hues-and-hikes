import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getFeaturedPosts } from "@/data/blogPosts";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  const featuredPosts = getFeaturedPosts(3);

  useSEO({
    title: "Holland Hues & Hikes - Discover the Netherlands | Travel Blog",
    description: "Discover the Netherlands through insider travel tips, hidden gems, and authentic local experiences. Your guide to Haarlem, Dutch lakes, tulips, and more.",
    keywords: "Netherlands travel, Dutch travel guide, Haarlem guide, Keukenhof tulips, Dutch lakes swimming, Holland travel tips, Netherlands tourism"
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Featured Posts Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-4">
            Latest Adventures
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Discover our newest travel tips and hidden gems across the Netherlands
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {featuredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" className="shadow-medium">
            <Link to="/blog">
              View All Posts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-muted py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-card rounded-lg p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎒</div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                Travel Tips
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Smart strategies, budget advice, and insider tips to make your Dutch adventure 
                unforgettable and affordable.
              </p>
              <Button asChild variant="outline">
                <Link to="/category/travel-tips">
                  Explore Tips
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-gradient-card rounded-lg p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌷</div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                Discovering Netherlands
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Hidden gems, local secrets, and authentic experiences across the beautiful 
                Netherlands that locals don't want you to miss.
              </p>
              <Button asChild variant="outline">
                <Link to="/category/discovering-netherlands">
                  Discover More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
