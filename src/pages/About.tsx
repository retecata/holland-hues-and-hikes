import Header from "@/components/Header";
import { MapPin, Heart, Camera } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Netherlands Explorer
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted companion for discovering the authentic Netherlands
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe that the Netherlands has so much more to offer than the typical tourist trails. 
                Our mission is to help travelers discover the authentic Dutch experience through insider 
                knowledge, practical tips, and hidden gems that locals cherish.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're planning your first visit or you're a seasoned Netherlands explorer, 
                we provide the insights you need to create unforgettable memories while traveling 
                smart and responsibly.
              </p>
            </div>
            
            <div className="bg-gradient-card rounded-lg p-8 shadow-soft">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Local Expertise</h3>
                    <p className="text-sm text-muted-foreground">
                      Deep knowledge of Dutch culture, hidden spots, and authentic experiences
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Passionate Travel</h3>
                    <p className="text-sm text-muted-foreground">
                      We love sharing the Netherlands' beauty and helping others fall in love with it too
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Camera className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Visual Stories</h3>
                    <p className="text-sm text-muted-foreground">
                      Beautiful photography and vivid storytelling to inspire your next adventure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-hero rounded-lg p-8 md:p-12 text-center text-white">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Ready to Explore?
            </h2>
            <p className="text-lg mb-6 text-white/90">
              Join thousands of travelers who have discovered the real Netherlands through our guides
            </p>
            <div className="text-4xl">🌷 🚲 🏠</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;