import amsterdamCanal from "@/assets/amsterdam-canal.jpg";
import keukenhofTulips from "@/assets/keukenhof-tulips.jpg";
import dutchCountryside from "@/assets/dutch-countryside.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'travel-tips' | 'discovering-netherlands';
  date: string;
  readTime: string;
  slug: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "What to do in Haarlem",
    excerpt: "Discover the charming historic city of Haarlem, just 20 minutes from Amsterdam, with its stunning architecture, museums, and local culture.",
    content: `
      <p>Haarlem is a picturesque Dutch city just 20 minutes from Amsterdam. Perfect for a day trip with all the charm but none of the crowds.</p>
      
      <h2>Must-Visit Attractions</h2>
      <p><strong>Grote Markt & St. Bavo Church:</strong> The heart of Haarlem featuring a Gothic church with a world-famous organ played by Mozart and Handel.</p>
      
      <p><strong>Walking Route:</strong> From Grote Markt, walk to St. Bavo Cathedral (different location, same name). Stop at <em>Willy's Vis</em> for authentic Dutch kibbeling - crispy fried fish bites with garlic sauce.</p>
      
      <p><strong>Cathedral Tower Climb:</strong> Buy a ticket for panoramic views and incredible photos of Haarlem's rooftops.</p>
      
      <h2>Museums & Culture</h2>
      <ul>
        <li><strong>Frans Hals Museum</strong> - Golden Age masterpieces</li>
        <li><strong>Teylers Museum</strong> - Netherlands' oldest museum</li>
        <li><strong>Corrie ten Boom House</strong> - Moving WWII history</li>
      </ul>
      
      <h2>Food & Drinks</h2>
      <p><strong>Jopen Kerk:</strong> Craft brewery in a repurposed church - unique atmosphere with exceptional local beers.</p>
      
      <p><strong>Ratatouille:</strong> Michelin-starred restaurant with a playful chef mouse logo. Perfect for special occasions.</p>
      
      <h2>Activities</h2>
      <ul>
        <li>Explore medieval architecture in the historic center</li>
        <li>Shop at Saturday market on Grote Markt</li>
        <li>Take a canal boat tour</li>
        <li>Walk through Haarlemmerhout (oldest public park in Netherlands)</li>
      </ul>
      
      <h2>Getting There</h2>
      <p>Train from Amsterdam Central: 15-20 minutes. The compact city center is perfect for walking or cycling.</p>
    `,
    image: amsterdamCanal,
    category: "discovering-netherlands",
    date: "2024-01-15",
    readTime: "5 min read",
    slug: "what-to-do-in-haarlem",
    author: "Travel Explorer"
  },
  {
    id: "2",
    title: "Budget Travel Tips for the Netherlands",
    excerpt: "How to explore the Netherlands without breaking the bank. Smart strategies for accommodation, transport, and dining.",
    content: `
      <p>The Netherlands can be expensive, but with the right strategies, you can experience everything this beautiful country has to offer without overspending.</p>
      
      <h2>Accommodation Savings</h2>
      <p>Book accommodations outside city centers and use excellent public transport. Hostels in Amsterdam can cost €30-50/night, while similar quality accommodation in nearby towns costs €15-25.</p>
      
      <h2>Transportation Hacks</h2>
      <ul>
        <li>Buy an OV-chipkaart for cheaper public transport</li>
        <li>Rent a bike - most Dutch cities are incredibly bike-friendly</li>
        <li>Use group tickets for trains when traveling with friends</li>
        <li>Consider a Holland Pass for attractions and transport</li>
      </ul>
      
      <h2>Food & Dining</h2>
      <p>Eat like a local! Visit Albert Heijn supermarkets for affordable groceries. Try local favorites like stroopwafels, herring, and bitterballen from street vendors rather than tourist restaurants.</p>
      
      <h2>Free Activities</h2>
      <ul>
        <li>Walk or bike through Vondelpark in Amsterdam</li>
        <li>Explore the Saturday markets in various cities</li>
        <li>Visit free museums on National Museum Weekend</li>
        <li>Enjoy the beaches in Scheveningen or Zandvoort</li>
      </ul>
    `,
    image: dutchCountryside,
    category: "travel-tips",
    date: "2024-01-10",
    readTime: "7 min read",
    slug: "budget-travel-netherlands-tips",
    author: "Budget Traveler"
  },
  {
    id: "3",
    title: "Keukenhof Gardens: Beyond the Touristy Spots",
    excerpt: "Experience Keukenhof Gardens like a local with insider tips for the best routes, timing, and hidden photo spots.",
    content: `
      <p>Keukenhof is world-famous for its tulip displays, but most visitors follow the same crowded routes. Here's how to experience it differently.</p>
      
      <h2>Timing Your Visit</h2>
      <p>Visit early morning (8-9 AM) or late afternoon (after 4 PM) for the best experience. Mid-April to early May is peak season, but late March offers beautiful early blooms with fewer crowds.</p>
      
      <h2>The Secret Routes</h2>
      <p>Skip the main pavilions initially and head straight to the outer gardens. The English Landscape Garden and Natural Garden offer stunning displays with fewer people.</p>
      
      <h2>Photography Secrets</h2>
      <ul>
        <li>The mill area provides elevated views of the flower fields</li>
        <li>Early morning mist creates ethereal photos</li>
        <li>Use the reflecting pools for unique compositions</li>
        <li>The lake areas offer beautiful water reflections</li>
      </ul>
      
      <h2>Local Insider Tips</h2>
      <p>Combine your visit with the surrounding flower fields. Rent a bike and explore the Bollenstreek region for endless tulip fields without the entrance fee.</p>
      
      <h2>Best Spots for Different Times</h2>
      <ul>
        <li>Sunrise: Mill area and lake views</li>
        <li>Midday: Shaded pavilion areas</li>
        <li>Sunset: Western flower fields</li>
      </ul>
    `,
    image: keukenhofTulips,
    category: "discovering-netherlands",
    date: "2024-01-05",
    readTime: "6 min read",
    slug: "keukenhof-gardens-insider-guide",
    author: "Garden Explorer"
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getFeaturedPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts.slice(0, limit);
};