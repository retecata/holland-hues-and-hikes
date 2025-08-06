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
    title: "What to Do in Haarlem – A Local-Insider Guide",
    excerpt:
      "Discover Haarlem through the eyes of a local, with personal recommendations for the best food, hidden gems, and authentic experiences in this charming Dutch city.",
    content: `
       <p>Not too long ago, I moved to Haarlem, a charming city just a short train ride from Amsterdam. Unlike the bustling capital, Haarlem is peaceful, cozy, and full of character. What makes this city even more special to me is that my boyfriend was born and raised here, so I've had the privilege of discovering Haarlem not just as a newcomer, but through the eyes of someone who knows all the good spots. Here are my favorite things to do in Haarlem, from strolls through picturesque streets to hidden gems for food lovers.</p>
       
       <h2>1. Start at Grote Markt & St. Bavokerk</h2>
       <p>Begin your walk at the Grote Markt, the heart of the city. Here you'll find St. Bavokerk (or Grote Kerk), a stunning Gothic church. Don't confuse it with the St. Bavo Cathedral (I'll get to that one later). You can go inside the church for a small fee, and it's well worth it: it houses an enormous Müller organ, one of the most famous organs in the world, played by none other than Mozart in 1766 when he was just 10 years old. Bach and Handel also admired it!</p>
       
       <p>If you're hungry, grab some fries from Friethoes, one of the oldest and most beloved spots for fries in Haarlem. Dutch people take their fries seriously. Make sure to try them with loads of sauce (my personal favorite is a mix of mayo and satay sauce, aka "patatje oorlog").</p>
       
       <p>Right next to the church, you'll also see Haarlem's City Hall (Stadhuis), a striking building with beautiful architecture. The area is surrounded by terraces, so it's the perfect place to sit down for a drink or bite. What I really love about Haarlem is that you rarely stumble into a tourist trap. Unlike Amsterdam, where finding good food requires serious research, in Haarlem, if you sit down somewhere, chances are it's going to be good.</p>
      
      <h2>2. Shopping Along the Gouden Straatjes</h2>
       <p>From Grote Markt, head toward the Gouden Straatjes ("Golden Streets"), a network of small, boutique-filled shopping streets. Haarlem is known for its independent shops and slow fashion boutiques, so even if you're just window-shopping, it's a fun way to explore.</p>
       
       <p>Some of my favorites include concept stores, little vintage spots, and home decor shops. It's not as cheap as H&M, but it feels good to support local business, and the selection is so much more unique.</p>
      
      <h2>3. Snack Stop: Dutch Kibbeling (Better than Fish & Chips?)</h2>
       <p>As you keep walking toward the Cathedral of St. Bavo (Kathedrale Basiliek Sint Bavo), yes, a different one from the first church, make sure to stop at <strong>Willy's Vis</strong> for some kibbeling (deep-fried chunks of cod with remoulade or garlic sauce). This place serves the best kibbeling I've tried in the Netherlands so far.</p>
       
       <p>As much as I loved fish and chips in Ireland and the UK, kibbeling wins for me, though I do miss the chips or a slice of bread to balance the grease. Still, it's a must-try Dutch street food snack!</p>
      
      <h2>4. Climb the Towers at the Cathedral</h2>
      <p>Once you reach the Cathedral of St. Bavo, you can go inside (tickets required) and even climb up to the top of the towers. The view from up there is absolutely worth it: panoramic scenes of Haarlem's rooftops, canals, and beyond. It's also a great place to take some Instagram-worthy photos if you're into that.</p>
      
      <h2>5. Visit the Koepelgevangenis (The Dome Prison)</h2>
       <p>One of the coolest things I've done here is visit De Koepel, a former prison turned cultural hub. It now hosts a cinema, bar, café, and creative office spaces. The architecture alone is fascinating, and it's just really inspiring to see how a place once used for incarceration has become a space for creativity and community. Definitely worth a look.</p>
      
      <h2>6. Take a Photo at De Adriaan Windmill</h2>
      <p>A short walk from the Koepel is Molen De Adriaan, one of Haarlem's most iconic landmarks. It's a reconstructed windmill that stands along the Spaarne River. You can take a tour inside or simply take beautiful pictures from the nearby bridge. Bonus points if you catch it during golden hour!</p>
      
      <h2>7. Dine Like Royalty (or a Rat): Ratatouille and Other Gems</h2>
       <p>For a special occasion, we celebrated my boyfriend's birthday at Ratatouille Food & Wine, a Michelin-starred restaurant in the city. Yes, it's named just like the movie and even has the mouse in its logo. The food? Absolutely delicious. Refined, elegant, and still warm and welcoming.</p>
       
       <p>If you're looking for something more casual, Haarlem has no shortage of amazing restaurants. A big plus is the Indonesian food scene. I've had Kokilondo on my list for ages. It's a favorite among locals and always fully booked, so definitely reserve in advance.</p>
      
      <h2>8. Swim and Cool Off Nearby</h2>
      <p>If you're visiting in the warmer months and want to take a dip, I've got a <a href="/blog/swimming-dutch-lakes-guide">separate guide on the best places to swim in and around Haarlem</a>, including lakes and local spots that aren't packed with tourists.</p>
      
      <h2>Final Thoughts</h2>
      <p>Haarlem may not have the international fame of Amsterdam, but that's exactly its charm. It's authentic, peaceful, and full of hidden treasures. Perfect for a day trip or even a longer stay. Whether you're walking through its leafy streets, enjoying a plate of kibbeling, or gazing at the city from a cathedral tower, there's something magical about this place.</p>
      
      <p>Let me know if you end up visiting—and if you try that kibbeling, tell me if you agree that it beats fish and chips!</p>
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
      <p>You know what I discovered this summer? Dutch lakes are actually amazing for swimming. I always thought the Netherlands was just canals and tulips, but when the weather got hot, my boyfriend introduced me to these incredible lake spots around Haarlem that completely changed my mind.</p>
      
      <p>First off, the water is surprisingly clean. Way cleaner than I expected! They test it regularly throughout the season, and I always check the water quality on Water Map Live before heading out. But here's the best part: when it was 30°C this summer, the lake water was around 21-22°C, which felt perfect for swimming. Meanwhile, the sea at Zandvoort was still a chilly 18°C.</p>
      
      <p>Plus, most lakes are free to access and you can actually get there by bike or public transport, which feels very Dutch.</p>
      
      <h2>My Favorite Lake Spots</h2>
      <p>I've been to quite a few lakes now, but these three are the ones I keep going back to:</p>
      
      <p><strong>Het Wed</strong> is probably the most Instagram-worthy because it's right in the dunes. It does get busy on weekends, but there's plenty of space to spread out. You can bike there easily, and there's parking if you're coming by car. They do warn about swimmer's itch because of the dune location, but honestly, I've never had issues. Just rinse off when you get home.</p>
      
      <p><strong>Molenplas</strong> has this great beach area, but if you walk around a bit, you'll find quieter spots too. There's a restaurant with a terrace nearby, which is perfect for lunch after swimming. The coolest thing though? You can have BBQs on the grass with this amazing view of a traditional windmill. It's like the most Dutch experience ever. Oh, and there's a Jumbo supermarket close by if you need to grab supplies.</p>
      
      <p><strong>Haarlemmerhout</strong> is the biggest of the three and tends to be quieter overall. The water is super clear here, and it's perfect if you want a more peaceful swimming experience. Great for BBQs too.</p>
      
      <h2>Things to Know Before You Go</h2>
      <p>Water quality is the main thing to check. They update bacteria levels and algae warnings pretty regularly, so just give it a quick look before heading out. Not all spots have toilets or food stands, so plan accordingly. And heads up: most places don't allow dogs in the swimming areas, and open fires are usually a no-go too.</p>
      
      <p>Bring the usual stuff: swimwear, towel, sunscreen. I'd definitely recommend flip-flops or water shoes, especially if you're going somewhere with rocky shores. Pack some snacks or a proper picnic (some lakes have food trucks, but don't count on it). And please, bring a trash bag. Keep these places beautiful for everyone!</p>
      
      <p>My advice? Go early or on weekdays if you want to avoid crowds. Make a whole day of it by combining your swim with a bike ride or nature walk. And watch out for the ducks—they're absolutely shameless about going after your lunch if you're not paying attention!</p>
      
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
    title: "How to See the Tulips in the Netherlands",
    excerpt:
      "Planning to see the iconic Dutch tulips? Here’s what I learned from my Keukenhof adventure, plus tips for exploring the fields like a local.",
    content: `
      <p>A few years ago, I went with my boyfriend to see the tulips in the Netherlands, and it turned out to be one of the most beautiful—and surprisingly educational—day trips we’ve ever taken. If you're planning to see the iconic Dutch tulips, here's what I learned from that experience.</p>
      
      <h2>First Things First: Where to See the Tulips?</h2>
      <p>There are many ways to enjoy tulip season in the Netherlands. You’ll often see tulips growing in vast open fields, especially in regions like Lisse or around Noordwijkerhout. But if you're looking for the most iconic and curated experience, <a href="https://keukenhof.nl/nl/" target="_blank" rel="noopener">Keukenhof Gardens</a> is the place to go.</p>
      <p>Keukenhof is a massive flower park showcasing over 7 million bulbs every spring—think of it as the Disneyland of tulips, with every color and variety imaginable. It’s beautiful, photo-ready, and perfect for first-time visitors.</p>
      
      <h2>Timing Is Everything</h2>
      <p>Keukenhof usually opens from mid-March to mid-May, but here's the catch: nature doesn’t follow the calendar. Sometimes the gardens open before the tulips are in bloom, and sometimes they stay open even after many flowers have already wilted. That’s why it's best to aim for a visit somewhere in the middle of the opening period—typically mid to late April—to catch the tulips at their peak.</p>
      
      <h2>Getting There: Tickets and Transport</h2>
      <p>You can buy your Keukenhof tickets online, which I highly recommend since they often offer combi-tickets that include both entry to the gardens and round-trip bus transport. We took the bus from Haarlem, which was super convenient. From the drop-off point, it’s just a short walk to the park entrance.</p>
      
      <h2>What’s Inside the Gardens?</h2>
      <p>Inside Keukenhof, you’ll find beautifully arranged flower beds, themed gardens, pavilions with rare blooms, and plenty of scenic spots for photos. You can also buy tulip bulbs, flowers, and souvenirs on-site.</p>
      <p><strong>Fun fact:</strong> Although tulips are now a national symbol of the Netherlands, they originally came from the Ottoman Empire (modern-day Turkey) and were introduced to the Dutch in the 16th century. So yes, tulips are adopted, not native!</p>
      
      <h2>My Favorite Discovery: Biking Through the Fields</h2>
      <p>As much as I loved Keukenhof, my favorite part of the day was actually outside the gardens. Right in front of the entrance, you can rent a bike for a few hours and ride through the nearby countryside, where you'll find endless fields of tulips stretching to the horizon. It’s peaceful, colorful, and incredibly Dutch.</p>
      <p>Just a heads-up: don’t walk into the tulip fields, tempting as it may be for the perfect Instagram shot. These are working farms, and the tulips are meant to be harvested. Damaging the flowers really upsets the locals (and understandably so).</p>
      <p>If you're looking for a spot where you're actually allowed to walk among the flowers, check out <a href="https://thetulipbarn.com/" target="_blank" rel="noopener">The Tulip Barn</a>. It’s designed for visitors and photo sessions, and you can book your visit in advance.</p>
      
      <h2>A Hidden Gem: Lisse's Old Train Station</h2>
      <p>If you're biking around Lisse, make a stop at the old train station. It’s no longer in use for trains, but it’s been converted into the cutest café with historical charm and great coffee. It's a lovely break before or after a bike ride, and a great local find.</p>
      <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@catandremy/video/7229032528638692635" data-video-id="7229032528638692635" style="max-width: 605px;min-width: 325px;">
        <section>
          <a target="_blank" title="@catandremy" href="https://www.tiktok.com/@catandremy?refer=embed">@catandremy</a>
          This was a super nice place we found while cycling in the Netherlands in the search for tulip fields!
          <a title="netherlands🇳🇱" target="_blank" href="https://www.tiktok.com/tag/netherlands%F0%9F%87%B3%F0%9F%87%B1?refer=embed">#netherlands🇳🇱</a>
          <a title="netherlands" target="_blank" href="https://www.tiktok.com/tag/netherlands?refer=embed">#netherlands</a>
          <a title="dutchtiktok" target="_blank" href="https://www.tiktok.com/tag/dutchtiktok?refer=embed">#dutchtiktok</a>
          <a title="holland" target="_blank" href="https://www.tiktok.com/tag/holland?refer=embed">#holland</a>
          <a title="restaurant" target="_blank" href="https://www.tiktok.com/tag/restaurant?refer=embed">#restaurant</a>
          <a title="lisse" target="_blank" href="https://www.tiktok.com/tag/lisse?refer=embed">#lisse</a>
          <a title="travel" target="_blank" href="https://www.tiktok.com/tag/travel?refer=embed">#travel</a>
          <a title="traveltiktok" target="_blank" href="https://www.tiktok.com/tag/traveltiktok?refer=embed">#traveltiktok</a>
          <a title="travelenthusiast" target="_blank" href="https://www.tiktok.com/tag/travelenthusiast?refer=embed">#travelenthusiast</a>
          <a target="_blank" title="♬ original sound - Cat and Remy" href="https://www.tiktok.com/music/original-sound-7229032506111085339?refer=embed">♬ original sound - Cat and Remy</a>
        </section>
      </blockquote>
      <script async src="https://www.tiktok.com/embed.js"></script>
      
      <h2>Final Tip: Pack for Dutch Weather</h2>
      <p>We had some rain during our visit (very on-brand for the Netherlands), and I’m glad I brought a raincoat—even if I looked a bit ridiculous in it! Whether it's an umbrella or a waterproof jacket, always be prepared for a sudden downpour, especially in spring.</p>
      <p>If you want a more visual look at our day, check out the video I made on TikTok where I walk through the entire experience—from the bus ride to biking past tulip fields in the rain.</p>
      
      <p>Hope you enjoy your own tulip adventure, and may you catch them in full bloom!</p>
      <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@catandremy/video/7233794860090658074" data-video-id="7233794860090658074" style="max-width: 605px;min-width: 325px;">
        <section>
          <a target="_blank" title="@catandremy" href="https://www.tiktok.com/@catandremy?refer=embed">@catandremy</a>
          Tulips, tulips everywhere! 😁
          <a title="tulips" target="_blank" href="https://www.tiktok.com/tag/tulips?refer=embed">#tulips</a>
          <a title="keukenhof" target="_blank" href="https://www.tiktok.com/tag/keukenhof?refer=embed">#keukenhof</a>
          <a title="thenetherlands" target="_blank" href="https://www.tiktok.com/tag/thenetherlands?refer=embed">#thenetherlands</a>
          <a title="holland" target="_blank" href="https://www.tiktok.com/tag/holland?refer=embed">#holland</a>
          <a title="thenetherlands🇳🇱" target="_blank" href="https://www.tiktok.com/tag/thenetherlands%F0%9F%87%B3%F0%9F%87%B1?refer=embed">#thenetherlands🇳🇱</a>
          <a title="tourism" target="_blank" href="https://www.tiktok.com/tag/tourism?refer=embed">#tourism</a>
          <a title="bucketlist" target="_blank" href="https://www.tiktok.com/tag/bucketlist?refer=embed">#bucketlist</a>
          <a title="traveltiktok" target="_blank" href="https://www.tiktok.com/tag/traveltiktok?refer=embed">#traveltiktok</a>
          <a title="travel" target="_blank" href="https://www.tiktok.com/tag/travel?refer=embed">#travel</a>
          <a title="travelbucketlist" target="_blank" href="https://www.tiktok.com/tag/travelbucketlist?refer=embed">#travelbucketlist</a>
          <a target="_blank" title="♬ Good Vibes (Instrumental) - Ellen Once Again" href="https://www.tiktok.com/music/Good-Vibes-Instrumental-7064643531196860417?refer=embed">♬ Good Vibes (Instrumental) - Ellen Once Again</a>
        </section>
      </blockquote>
      <script async src="https://www.tiktok.com/embed.js"></script>
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
