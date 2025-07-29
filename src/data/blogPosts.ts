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
      <p>Haarlem is a picturesque Dutch city that offers all the charm of Amsterdam without the crowds. This historic city, just a short train ride from the capital, is perfect for a day trip or weekend getaway.</p>
      
      <h2>Must-Visit Attractions</h2>
      <p>The Grote Markt (Great Market Square) is the heart of Haarlem, dominated by the impressive St. Bavo Church. This Gothic church houses one of the world's most famous organs, played by both Mozart and Handel.</p>
      
      
      <p>From the Grote Markt, take a pleasant walk to the St. Bavo Cathedral - despite the similar name, this is a completely different and equally stunning building. Along the way, stop at Willy's Vis, a tiny local food shop that serves some of the best kibbeling you'll ever taste. Kibbeling is a beloved Dutch snack of bite-sized pieces of white fish, lightly battered and fried to golden perfection, typically served with a tangy garlic or tartar sauce - it's comfort food at its finest and a true local favorite.</p>
      
      <p>Once you reach St. Bavo Cathedral, purchase a ticket to climb the cathedral towers for breathtaking panoramic views over Haarlem's historic rooftops and surrounding countryside. It's an incredible photo opportunity that captures the essence of this charming Dutch city from above.</p>
      
      <h2>Museums and Culture</h2>
      <p>Visit the Frans Hals Museum to see masterpieces by the Golden Age painter, or explore the Teylers Museum, the oldest museum in the Netherlands. The Corrie ten Boom House offers a moving glimpse into WWII history.</p>
      
      
      <h2>Food Recommendations</h2>
      <p>Haarlem offers fantastic dining experiences that showcase both traditional Dutch cuisine and modern culinary innovation. For a truly unique experience, visit Jopen Kerk, a craft brewery housed in a beautifully repurposed church. Here you can sample exceptional local beers in a stunning historic setting - the combination of craft brewing and sacred architecture creates an unforgettable atmosphere that perfectly captures Haarlem's blend of tradition and innovation.</p>
      
      <p>For a special occasion, treat yourself to Ratatouille, a Michelin-starred restaurant that playfully embraces its namesake with a charming chef mouse logo. This intimate dining destination offers an extraordinary culinary journey with creative, expertly crafted dishes that make it perfect for celebrating birthdays or romantic evenings. The experience goes beyond just exceptional food - it's a memorable adventure that combines fine dining with a touch of whimsy.</p>
      
      <h2>Best Things to Do</h2>
      <ul>
        <li>Stroll through the historic city center and admire the medieval architecture</li>
        <li>Shop at the Saturday market on Grote Markt square</li>
        <li>Take a canal boat tour to see the city from the water</li>
        <li>Visit local cafes and try Haarlem's craft beer scene</li>
        <li>Explore the Haarlemmerhout, one of the oldest public parks in the Netherlands</li>
      </ul>
      
      <h2>Getting There</h2>
      <p>Haarlem is easily accessible by train from Amsterdam Central Station in just 15-20 minutes. The historic city center is compact and perfect for walking or cycling.</p>
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