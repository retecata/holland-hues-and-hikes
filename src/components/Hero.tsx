import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-netherlands.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful Dutch landscape"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="w-6 h-6 mr-2 text-accent" />
            <span className="text-accent font-medium">
              Exploring the Netherlands
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Discover Hidden Gems
            <span className="block text-accent">& Travel Smart</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto px-4 sm:px-0">
            Your guide to authentic Dutch experiences, insider travel tips, and
            unforgettable adventures in the land of tulips and windmills.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-light text-primary-foreground shadow-strong w-full sm:w-auto"
            >
              <Link to="/blog">
                Explore All Posts
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-accent hover:bg-white/10 backdrop-blur w-full sm:w-auto"
            >
              <Link to="/category/discovering-netherlands">
                Discover Netherlands
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
