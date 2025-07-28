import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-heading font-bold text-primary">
              Netherlands Explorer
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-foreground hover:text-primary transition-colors ${
                isActive('/') ? 'text-primary font-medium' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className={`text-foreground hover:text-primary transition-colors ${
                isActive('/blog') ? 'text-primary font-medium' : ''
              }`}
            >
              All Posts
            </Link>
            <Link 
              to="/category/travel-tips" 
              className={`text-foreground hover:text-primary transition-colors ${
                isActive('/category/travel-tips') ? 'text-primary font-medium' : ''
              }`}
            >
              Travel Tips
            </Link>
            <Link 
              to="/category/discovering-netherlands" 
              className={`text-foreground hover:text-primary transition-colors ${
                isActive('/category/discovering-netherlands') ? 'text-primary font-medium' : ''
              }`}
            >
              Discover Netherlands
            </Link>
            <Link 
              to="/about" 
              className={`text-foreground hover:text-primary transition-colors ${
                isActive('/about') ? 'text-primary font-medium' : ''
              }`}
            >
              About
            </Link>
          </nav>

          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;