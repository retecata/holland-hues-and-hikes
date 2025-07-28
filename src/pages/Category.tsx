import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import { getPostsByCategory } from "@/data/blogPosts";

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const posts = category ? getPostsByCategory(category) : [];

  const getCategoryTitle = (cat: string) => {
    switch (cat) {
      case 'travel-tips':
        return 'Travel Tips';
      case 'discovering-netherlands':
        return 'Discovering Netherlands';
      default:
        return 'Category';
    }
  };

  const getCategoryDescription = (cat: string) => {
    switch (cat) {
      case 'travel-tips':
        return 'Smart strategies, budget advice, and insider tips to make your Dutch adventure unforgettable';
      case 'discovering-netherlands':
        return 'Hidden gems, local secrets, and authentic experiences across the beautiful Netherlands';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {getCategoryTitle(category || '')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {getCategoryDescription(category || '')}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No posts found in this category yet. Check back soon for new content!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Category;