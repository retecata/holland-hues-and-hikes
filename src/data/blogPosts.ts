import amsterdamCanal from "@/assets/amsterdam-canal.jpg";
import keukenhofTulips from "@/assets/keukenhof-tulips.jpg";
import dutchCountryside from "@/assets/dutch-countryside.jpg";
import dutchLakeSwimming from "@/assets/dutch-lake-swimming.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: "travel-tips" | "discovering-netherlands";
  date: string;
  readTime: string;
  slug: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "What to do in Haarlem",
    excerpt:
      "Discover the charming historic city of Haarlem, just 20 minutes from Amsterdam, with its stunning architecture, museums, and local culture.",
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
    author: "Travel Explorer",
  },
  {
    id: "2",
    title: "A Guide to Swimming in Dutch Lakes",
    excerpt:
      "Discover the hidden gems of Dutch lakes for swimming, sunbathing, and enjoying nature. Perfect summer activities with insider tips and recommendations.",
    content: `
      <p>The Netherlands might be known for its canals, tulips, and bikes, but come summer, Dutch lakes become hidden gems for swimming, sunbathing, and enjoying nature. Whether you're a local looking for a refreshing dip or a visitor seeking an authentic outdoor experience, Dutch lakes have something for everyone.</p>
      
      <h2>Why Swim in a Dutch Lake?</h2>
      <p><strong>Natural beauty:</strong> Many lakes are surrounded by forests, dunes, or peaceful meadows.</p>
      
      <p><strong>Surprisingly clean:</strong> Water quality is regularly tested and updated throughout the season. I usually check the water quality at <a href="#" target="_blank">Water Map Live</a>.</p>
      
      <p><strong>Warmer than the sea!</strong> When temperatures hit 30°C this summer, lake water reached a pleasant 21–22°C—perfect for swimming. In contrast, the sea at Zandvoort stayed around 18°C.</p>
      
      <p><strong>Free access and easy to reach:</strong> Most lakes are freely accessible and often reachable by bike or public transport.</p>
      
      <h2>My Favourite Lakes Around Haarlem</h2>
      <p>These are the lakes I've personally tested and recommend:</p>
      
      <h3>1. Het Wed</h3>
      <ul>
        <li>Super nice location in the dunes, can get a bit busy but plenty of space</li>
        <li>Bike path and parking space available nearby for both cars and bikes</li>
        <li>Located in the dunes - they warn about swimmer's itch, but it's generally fine. Just shower shortly after swimming</li>
      </ul>
      
      <h3>2. Molenplas</h3>
      <ul>
        <li>Has a beach area, but also quieter spots</li>
        <li>Restaurant nearby with a terrace</li>
        <li>You can have BBQs on the grass with an amazing view of a windmill - feels very Dutch!</li>
        <li>Jumbo supermarket nearby for supplies</li>
      </ul>
      
      <h3>3. Haarlemmerhout</h3>
      <ul>
        <li>Much bigger than the other two</li>
        <li>Quieter areas with super clear water</li>
        <li>Perfect for BBQs and peaceful swimming</li>
      </ul>
      
      <h2>What to Check Before You Go</h2>
      <ul>
        <li><strong>Water quality:</strong> Check real-time updates on bacteria levels and algae warnings</li>
        <li><strong>Facilities:</strong> Not all locations have toilets, lifeguards, or food stands—check in advance</li>
        <li><strong>Rules:</strong> Dogs are often not allowed in swimming areas. Open fires and barbecues are usually prohibited too</li>
      </ul>
      
      <h2>What to Bring</h2>
      <ul>
        <li>Swimwear, towel, and sunscreen</li>
        <li>Flip-flops or water shoes (especially for rocky shores)</li>
        <li>Snacks or a picnic (some lakes may have food trucks)</li>
        <li>Trash bag—always clean up after yourself!</li>
      </ul>
      
      <h2>Pro Tips</h2>
      <ul>
        <li>Arrive early or go on weekdays to avoid the crowds</li>
        <li>Make a full day out of it—combine your swim with a bike ride or nature walk</li>
        <li>Watch out for cheeky ducks... they'll go straight for your lunch if you're not looking!</li>
      </ul>
      
      <p>Swimming in Dutch lakes is a simple and refreshing way to enjoy summer. Whether you're looking for a relaxing solo dip or a fun outing with friends, there's a lake for every vibe. So grab your towel, hop on your bike, and dive in—Dutch summer style!</p>
    `,
    image: dutchLakeSwimming,
    category: "travel-tips",
    date: "2024-01-12",
    readTime: "6 min read",
    slug: "swimming-dutch-lakes-guide",
    author: "Lake Explorer",
  },
  {
    id: "3",
    title: "Keukenhof Gardens: Beyond the Touristy Spots",
    excerpt:
      "Experience Keukenhof Gardens like a local with insider tips for the best routes, timing, and hidden photo spots.",
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
    author: "Garden Explorer",
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter((post) => post.category === category);
};

export const getFeaturedPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts.slice(0, limit);
};
