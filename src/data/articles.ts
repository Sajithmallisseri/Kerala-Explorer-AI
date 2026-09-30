import { DESTINATIONS, Destination } from "./destinations";

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Travel" | "Kerala" | "Food" | "Culture" | "Nature" | "Travel Tips";
  tags: string[];
  readTime: string;
  publishedDate: string;
  featuredImage: string;
  author: {
    name: string;
    role: string;
    avatarInitials: string;
  };
  introParagraphs: string[];
  isFlagship?: boolean;
  destinations?: Destination[];
  sections?: {
    heading: string;
    content: string[];
    tips?: string[];
  }[];
  tripPlanner?: {
    overview: string;
    itineraries: {
      duration: string;
      title: string;
      route: string;
      summary: string;
    }[];
    bestSeasons: {
      season: string;
      months: string;
      description: string;
    }[];
    packingChecklist: string[];
  };
}

export const ARTICLES: Article[] = [
  {
    id: "10-beautiful-places-to-visit-in-kerala",
    slug: "10-beautiful-places-to-visit-in-kerala",
    title: "10 Beautiful Places to Visit in Kerala",
    subtitle: "A Curated Odyssey Through God's Own Country – From Mist-Draped Highlands to Tranquil Backwaters",
    category: "Travel",
    tags: ["Kerala", "Travel", "Nature", "Destinations", "Guide"],
    readTime: "8 min read",
    publishedDate: "March 2026",
    isFlagship: true,
    featuredImage: "/src/assets/images/hero_kerala_backwaters_1790745390707.jpg",
    author: {
      name: "Dr. Ananya Nair",
      role: "Senior Travel Editor & Kerala Heritage Specialist",
      avatarInitials: "AN"
    },
    introParagraphs: [
      "Wedged between the turquoise swell of the Arabian Sea and the soaring, biodiversity-rich spine of the Western Ghats, Kerala occupies a uniquely blessed sliver of southwestern India. Known affectionately across the globe as 'God’s Own Country', this verdant state feels distinctly different from any other region on the subcontinent. Here, the pace of life softens to the gentle rhythm of water lapping against wooden canoe hulls, the scent of crushed cardamom and wet earth drifts across misty hill stations, and centuries of maritime commerce have woven a cosmopolitan cultural fabric unlike anywhere else in Asia.",
      "Whether your ideal journey involves watching wild elephant herds bathe at dawn in tranquil forest reservoirs, hiking through rolling organic tea plantations perched above the cloud line, cruising sleepy palm-shaded canals on a handcrafted rice barge, or uncovering the layered colonial legacy of ancient trading ports, Kerala delivers an astonishing breadth of travel experiences within comfortable driving distances.",
      "In this comprehensive travel guide, we have curated the 10 most beautiful and captivating destinations across Kerala. Each entry features honest traveler insights, essential highlights, logistical pointers, and seasonal timing to help you craft an unforgettable itinerary."
    ],
    destinations: DESTINATIONS,
    tripPlanner: {
      overview: "Kerala is remarkably easy to navigate thanks to excellent highways, scenic rail routes, and four international airports (Kochi, Trivandrum, Kozhikode, and Kannur). Depending on your time and interests, here are three field-tested itinerary templates recommended by our editors.",
      itineraries: [
        {
          duration: "5 Days / 4 Nights",
          title: "The Classic Kerala Highlights",
          route: "Kochi → Munnar → Alleppey → Kochi",
          summary: "Perfect for first-time visitors seeking the iconic Kerala duo: the misty tea highlands of Munnar paired with a relaxed backwater cruise in Alleppey, capped by heritage walking tours in Fort Kochi."
        },
        {
          duration: "8 Days / 7 Nights",
          title: "The Hills, Wildlife & Coast Circuit",
          route: "Kochi → Munnar → Thekkady → Kumarakom → Varkala → Trivandrum",
          summary: "A balanced traverse through spice hills, elephant safaris in Periyar, restorative lakeside stays on Vembanad Lake, and dramatic sunset dinners atop the red cliffs of Varkala."
        },
        {
          duration: "12 Days / 11 Nights",
          title: "Grand Trans-Kerala Explorer",
          route: "Kozhikode → Wayanad → Bekal → Athirappilly → Munnar → Alleppey → Kovalam",
          summary: "An in-depth journey through Kerala's wild northern tribal sanctuaries and historic sea citadels, down to the cultural heartland, central waterways, and sun-drenched southern beaches."
        }
      ],
      bestSeasons: [
        {
          season: "Peak Dry Season (Winter)",
          months: "October – March",
          description: "Clear sunny skies, gentle tropical breezes, minimal rainfall, and crisp cool evenings in hill stations like Munnar and Wayanad. The best window for outdoor sightseeing, wildlife safaris, and beach relaxation."
        },
        {
          season: "Southwest Monsoon (Edavappathi)",
          months: "June – August",
          description: "Dramatic monsoonal downpours, raging waterfalls at Athirappilly, lush vibrant paddy fields, and the traditional season for authentic Ayurvedic rejuvenation treatments (Karkidaka Chikitsa)."
        },
        {
          season: "Summer & Inter-Monsoon",
          months: "April – May & September",
          description: "Warm and humid along the coastline, but hill stations remain pleasantly cool. Great for budget travelers with fewer crowds and lower resort tariffs."
        }
      ],
      packingChecklist: [
        "Breathable, lightweight cotton or linen garments for coastal humid days",
        "Light fleece or windbreaker for Munnar and Wayanad high elevations",
        "Modest attire covering shoulders and knees when visiting historic temples and shrines",
        "Slip-on shoes or sandals for easy removal before entering traditional homes and sacred sites",
        "DEET-free mosquito repellent and broad-spectrum sunscreen",
        "Compact umbrella or lightweight rain jacket even during dry season",
        "Universal 3-pin plug adapter and portable power bank for long scenic train rides"
      ]
    }
  },
  {
    id: "authentic-kerala-food-guide",
    slug: "authentic-kerala-food-guide",
    title: "A Food Lover's Guide to Kerala: 8 Authentic Flavors You Must Try",
    subtitle: "From Laced Appams to Karimeen Pollichathu, Delve into the Spices of the Malabar Coast",
    category: "Food",
    tags: ["Food", "Cuisine", "Culture", "Kerala"],
    readTime: "6 min read",
    publishedDate: "February 2026",
    featuredImage: "/src/assets/images/kochi_chinese_nets_1790745390707.jpg",
    author: {
      name: "Chef Rajesh Menon",
      role: "Culinary Historian & Food Writer",
      avatarInitials: "RM"
    },
    introParagraphs: [
      "To understand Kerala, one must taste its coastline and coconut groves. Long before modern geopolitical boundaries existed, seafaring merchants braved the monsoon winds of the Arabian Sea for black pepper, green cardamom, and ginger from the Malabar Coast. This deep spice legacy echoes throughout Kerala's kitchens today.",
      "What sets Kerala cuisine apart is its delicate balance of fresh grated coconut, creamy coconut milk, pungent mustard seeds, sun-dried red chillies, and aromatic fresh curry leaves crackling in golden coconut oil. Here are eight quintessential dishes every visitor must experience."
    ],
    sections: [
      {
        heading: "1. Appam with Creamy Vegetable or Chicken Stew (Ishtu)",
        content: [
          "A breakfast staple without equal, Appam is a bowl-shaped fermented rice pancake with a soft, spongy, thick center and delicate lace-like crispy edges. It is traditionally paired with 'Ishtu'—a comforting, mildly spiced stew of potatoes, carrots, onions, whole peppercorns, and fresh ginger gently simmered in velvety thick coconut milk.",
          "Derived from Portuguese influence during the 16th century, the dish has been perfected across generations by Kerala's Syrian Christian community."
        ],
        tips: ["Best enjoyed fresh and piping hot from a cast-iron appachatti."]
      },
      {
        heading: "2. Karimeen Pollichathu (Pearl Spot Fish in Banana Leaf)",
        content: [
          "Karimeen, or green chromide pearl spot, is Kerala's official state fish, harvested from the brackish backwaters of Alappuzha and Kottayam. In this iconic preparation, the fish is generously coated with a rich, fiery paste of shallots, crushed ginger, garlic, Kashmiri chilli, black pepper, and kudampuli (Malabar kokum), before being wrapped tightly inside a wilted banana leaf and slow-cooked over a heavy tawa.",
          "Unwrapping the steaming leaf at your table releases an unforgettable waft of smoky, caramelized spices and tender, flaky fish."
        ],
        tips: ["Look for authentic backwater toddy shops along the AC Canal in Alleppey for the best rendition."]
      },
      {
        heading: "3. The Grand Kerala Sadya",
        content: [
          "Served traditionally on a vibrant, unblemished plantain leaf during festivals like Onam and Vishu, the Kerala Sadya is a vegetarian feast of epic curatorial precision. Over 24 to 28 distinct dishes are served in a specific geometric order, ranging from sweet banana chips (sharkara varatti) and fiery ginger relish (inchi curry) to sour avial, pachadi, sambar, and velvety payasam."
        ],
        tips: ["Remember the etiquette: the tapering tip of the banana leaf always points to the diner's left."]
      },
      {
        heading: "4. Puttu and Kadala Curry",
        content: [
          "Steamed cylindrical cakes made of coarsely ground roasted rice flour layered with freshly grated coconut, served alongside a spicy, aromatic brown chickpea curry infused with roasted coconut gravy. A beloved breakfast across every household and tea stall."
        ],
        tips: ["Add a ripe Mysore banana (cherupazham) into the mix and mash together with your hand for local style."]
      }
    ]
  },
  {
    id: "backwaters-houseboat-guide",
    slug: "backwaters-houseboat-guide",
    title: "Cruising the Backwaters: What to Know Before Booking a Houseboat",
    subtitle: "Insider Tips on Routes, Certifications, Seasons and Choosing Between Alleppey and Kumarakom",
    category: "Travel Tips",
    tags: ["Travel Tips", "Alleppey", "Houseboat", "Backwaters"],
    readTime: "5 min read",
    publishedDate: "January 2026",
    featuredImage: "/src/assets/images/alleppey_houseboat_1790745422293.jpg",
    author: {
      name: "Sajith K. Varma",
      role: "Eco-Tourism Consultant",
      avatarInitials: "SK"
    },
    introParagraphs: [
      "Floating down the tranquil palm-fringed backwaters aboard an authentic wooden Kettuvallam is on almost every traveler’s global bucket list. But with hundreds of operators operating across Alappuzha and Vembanad Lake, knowing how to choose the right boat, the right route, and the right season makes all the difference between an ordinary boat ride and an extraordinary lifetime memory."
    ],
    sections: [
      {
        heading: "1. Understanding Kettuvallam Architecture",
        content: [
          "Traditional houseboats were originally built to transport rice harvested from the Kuttanad plains to coastal ports. Not a single steel nail was used in their construction: wooden planks of wild jackwood (Anjili) are tied together with sturdy coir ropes and sealed with a natural black resin extracted from boiled cashew nutshells. Modern houseboats retain this rustic external charm while providing air-conditioned bedrooms, ensuite bathrooms, and open-air sundecks."
        ]
      },
      {
        heading: "2. Alleppey vs. Kumarakom: Which Base Should You Choose?",
        content: [
          "Alleppey (Alappuzha) is vibrant, active, and offers access to narrow village canals where you can witness daily riverside life up close.",
          "Kumarakom, situated on the eastern banks of Vembanad Lake, offers a quieter, more luxury-oriented experience with expansive lake vistas and proximity to bird sanctuaries."
        ],
        tips: ["If time permits, opt for a one-way cruise starting in Alleppey and disembarking at Kumarakom."]
      },
      {
        heading: "3. Check for Kerala Tourism Green & Gold Certification",
        content: [
          "Always confirm that your boat holds a verified Gold Star or Green Palm certificate issued by the Department of Tourism, Government of Kerala. This guarantees strict safety compliance, life jackets, onboard sewage bio-digesters, and hygienic kitchen practices."
        ]
      }
    ]
  },
  {
    id: "kathakali-performing-arts",
    slug: "kathakali-performing-arts",
    title: "Kathakali and Beyond: Understanding Kerala's Classical Arts & Rituals",
    subtitle: "The Sacred Synthesis of Drama, Mudras, Elaborate Face Paint and Temple Rhythms",
    category: "Culture",
    tags: ["Culture", "Kathakali", "History", "Heritage"],
    readTime: "7 min read",
    publishedDate: "January 2026",
    featuredImage: "/src/assets/images/kochi_chinese_nets_1790745433665.jpg",
    author: {
      name: "Meera Krishnan",
      role: "Performing Arts Critic",
      avatarInitials: "MK"
    },
    introParagraphs: [
      "In few places on earth has classical performance remained as deeply woven into spiritual life as in Kerala. The state is home to an extraordinary array of dance-dramas, ritualistic temple dances, and martial arts that trace their lineage back centuries.",
      "Among them, Kathakali stands supreme as one of the world's most visually dramatic performing arts, famous for its elaborate makeup, magnificent costumes, precise facial mudras, and hypnotic percussion."
    ],
    sections: [
      {
        heading: "The Art of Chutti: 4 Hours of Sacred Makeup",
        content: [
          "Long before an actor steps onto the stage under the glow of the brass oil lamp (Kalivilakku), an intensive transformation occurs backstage. Using purely organic pigments—indigo, turmeric, crushed red stone (Manayola), and white rice paste—artists spend three to four hours having their facial features sculpted into heroic, virtuous, or demonic archetypes."
        ]
      },
      {
        heading: "The Language of 24 Mudras",
        content: [
          "Kathakali is an entirely non-verbal dialogue. The actor does not speak a single word; instead, vocalists chant ancient poetic verse (Attakkatha) while the actor translates every subtle nuance using twenty-four root hand gestures (mudras) combined with precise eye and eyebrow movements."
        ]
      },
      {
        heading: "Where to Experience Live Performances",
        content: [
          "Fort Kochi hosts daily evening performances and open backstage makeup sessions at the Kerala Kathakali Centre and Greenix Village. For the most authentic temple setting, visit the Kerala Kalamandalam in Cheruthuruthy, the historic university founded by poet Vallathol Narayana Menon."
        ]
      }
    ]
  },
  {
    id: "monsoon-travel-guide-kerala",
    slug: "monsoon-travel-guide-kerala",
    title: "Monsoon in God's Own Country: The Magic of Karkidakam & Ayurveda",
    subtitle: "Why the Rains Bring Kerala's Landscapes and Healing Traditions to Their Peak Glory",
    category: "Nature",
    tags: ["Nature", "Monsoon", "Ayurveda", "Weather"],
    readTime: "5 min read",
    publishedDate: "December 2025",
    featuredImage: "/src/assets/images/wayanad_nature_1790745446184.jpg",
    author: {
      name: "Dr. Ananya Nair",
      role: "Senior Travel Editor",
      avatarInitials: "AN"
    },
    introParagraphs: [
      "While most beach destinations close up shop when monsoon clouds gather, Kerala comes breathtakingly alive during the rains. Beginning in early June with the arrival of the southwest monsoon (Edavappathi), the parched landscape transforms overnight into a symphony of luminous greens, swollen rivers, and sweet petrichor.",
      "The Malayalam month of Karkidakam (July–August) is traditionally considered the ideal season for Ayurvedic healing, as the atmospheric humidity opens the body's pores, allowing herbal oils to penetrate deeply."
    ],
    sections: [
      {
        heading: "Ayurvedic Rejuvenation (Karkidaka Chikitsa)",
        content: [
          "Centuries of Ayurvedic wisdom regard the cool, dust-free monsoon season as the prime period for detoxifying Panchakarma treatments and consuming Karkidaka Kanji—a nutritious medicinal rice porridge brewed with over twenty therapeutic herbs."
        ]
      },
      {
        heading: "Cascading Waterfalls at Full Thunder",
        content: [
          "The Western Ghats undergo an astounding metamorphosis. Waterfalls like Athirappilly, Vazhachal, Meenmutty, and Soochipara swell into thunderous torrents, sending refreshing mist hundreds of meters into surrounding rainforest valleys."
        ]
      }
    ]
  },
  {
    id: "responsible-tourism-kerala",
    slug: "responsible-tourism-kerala",
    title: "Sustainable Travel in Kerala: Exploring Responsible Tourism Villages",
    subtitle: "How Village Life Experiences Support Local Communities and Preserve Traditional Crafts",
    category: "Kerala",
    tags: ["Kerala", "Ecotourism", "Culture", "Sustainability"],
    readTime: "5 min read",
    publishedDate: "November 2025",
    featuredImage: "/src/assets/images/alleppey_houseboat_1790745422293.jpg",
    author: {
      name: "Sajith K. Varma",
      role: "Eco-Tourism Consultant",
      avatarInitials: "SK"
    },
    introParagraphs: [
      "Kerala's Responsible Tourism (RT) Mission has won international acclaim from the United Nations World Tourism Organization (UNWTO) for creating sustainable travel models that directly empower rural communities.",
      "Through Village Life Experience (VLE) tours, travelers are invited into quiet village homesteads in Kumarakom, Aymanam, Olavipe, and Chettikulangara to witness coir spinning, palm leaf weaving, bell-metal casting, and traditional organic farming alongside local artisans."
    ],
    sections: [
      {
        heading: "Living Heritage in Aymanam",
        content: [
          "Made famous by Arundhati Roy's Booker Prize-winning novel 'The God of Small Things', the village of Aymanam allows visitors to walk through ancient temple grounds, meet traditional wooden canoe builders, and sample home-cooked meals prepared with backyard garden herbs."
        ]
      }
    ]
  }
];

export const CATEGORIES = [
  "All",
  "Travel",
  "Kerala",
  "Food",
  "Culture",
  "Nature",
  "Travel Tips"
] as const;

export type CategoryType = typeof CATEGORIES[number];
