import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
      <Link to={`/post/${post.slug}`}>
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge 
              variant="secondary" 
              className={`${
                post.category === 'travel-tips' 
                  ? 'bg-accent/10 text-accent border-accent/20' 
                  : 'bg-secondary/10 text-secondary border-secondary/20'
              }`}
            >
              {post.category === 'travel-tips' ? 'Travel Tips' : 'Discovering Netherlands'}
            </Badge>
            
            <div className="flex items-center text-sm text-muted-foreground space-x-3">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          
          <h3 className="font-heading text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;