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
    title: "Ultimate Guide to Amsterdam's Hidden Canals",
    excerpt: "Discover the secret waterways and hidden gems that most tourists never see in Amsterdam's enchanting canal district.",
    content: `
      <p>Amsterdam's canal ring is a UNESCO World Heritage site, but beyond the famous tourist routes lie hidden waterways that offer a more authentic glimpse into Dutch life.</p>
      
      <h2>The Secret Canals</h2>
      <p>While everyone knows about the Prinsengracht and Herengracht, the smaller canals like Bloemgracht and Egelantiersgracht offer equally stunning views with fewer crowds. These waterways are lined with authentic Dutch houses and local cafes.</p>
      
      <h2>Best Times to Visit</h2>
      <p>Early morning (before 9 AM) or late afternoon (after 5 PM) provide the best lighting and fewer tourists. The golden hour creates magical reflections on the water.</p>
      
      <h2>Hidden Spots to Explore</h2>
      <ul>
        <li>Reguliersgracht - Known as the "canal of seven bridges"</li>
        <li>Brouwersgracht - Often called Amsterdam's most beautiful canal</li>
        <li>Karthuizersstraat - A quiet neighborhood canal with authentic atmosphere</li>
      </ul>
      
      <h2>Photography Tips</h2>
      <p>Use the bridges as natural frames for your shots. The reflections are best captured during the blue hour when street lights begin to twinkle on the water.</p>
    `,
    image: amsterdamCanal,
    category: "discovering-netherlands",
    date: "2024-01-15",
    readTime: "5 min read",
    slug: "amsterdam-hidden-canals-guide",
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