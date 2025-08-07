import pinterestHaarlem from "@/assets/pinterest-haarlem-guide.jpg";
import pinterestLakes from "@/assets/pinterest-dutch-lakes.jpg";
import pinterestTulips from "@/assets/pinterest-tulips-guide.jpg";
import pinterestNetherlands from "@/assets/pinterest-netherlands-travel.jpg";
import pinterestTips from "@/assets/pinterest-travel-tips.jpg";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const PinterestDownloads = () => {
  const downloadImage = (imageSrc: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const images = [
    {
      src: pinterestHaarlem,
      filename: "pinterest-haarlem-guide.jpg",
      title: "📍 Haarlem Guide",
      description: "What to Do in Haarlem - Local Insider Guide"
    },
    {
      src: pinterestLakes,
      filename: "pinterest-dutch-lakes.jpg",
      title: "🏊 Dutch Lakes Swimming",
      description: "Best Dutch Lakes for Swimming - Hidden Gems Guide"
    },
    {
      src: pinterestTulips,
      filename: "pinterest-tulips-guide.jpg",
      title: "🌷 Tulips Guide",
      description: "How to See Tulips in Netherlands - Keukenhof & Beyond"
    },
    {
      src: pinterestNetherlands,
      filename: "pinterest-netherlands-travel.jpg",
      title: "🇳🇱 Netherlands Travel",
      description: "Netherlands Travel Guide - Hidden Gems & Local Tips"
    },
    {
      src: pinterestTips,
      filename: "pinterest-travel-tips.jpg",
      title: "💡 Travel Tips",
      description: "Netherlands Travel Tips - Like a Local"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Pinterest Images Download</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="bg-card rounded-lg p-4 shadow-soft">
            <img 
              src={image.src} 
              alt={image.description}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{image.description}</p>
            <Button 
              onClick={() => downloadImage(image.src, image.filename)}
              className="w-full"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PinterestDownloads;