export interface Destination {
  id: string;
  number: number;
  name: string;
  tagline: string;
  district: string;
  image: string;
  shortDesc: string;
  fullDescription: string;
  highlights: string[];
  bestTimeToVisit: string;
  travelTips: string[];
  howToReach: string;
  idealDuration: string;
}

export const DESTINATIONS: Destination[] = [
  {
    id: "munnar",
    number: 1,
    name: "Munnar",
    tagline: "Rolling Emerald Tea Estates & Misty Western Ghats",
    district: "Idukki District",
    image: "/src/assets/images/munnar_tea_hills_1790745407418.jpg",
    shortDesc: "A postcard-perfect hill station nestled at 1,600 meters, famous for sprawling tea plantations, cool mountain breezes, and rare Neelakurinji blossoms.",
    fullDescription: "Perched high in the Western Ghats mountain range of Kerala, Munnar is a sanctuary of emerald serenity. Once the summer retreat of the British administration in South India, this mountain paradise is defined by endlessly contoured hills blanketed in velvety tea bushes, fragrant eucalyptus groves, cascading waterfalls, and misty peaks often cloaked in early-morning clouds. Munnar is also home to Eravikulam National Park, where the endangered Nilgiri Tahr roams along high-altitude shola grasslands beneath Anamudi, South India's highest peak at 2,695 meters.",
    highlights: [
      "Walk through the Kolukkumalai Tea Estate, the world's highest organic tea garden",
      "Spot the endangered Nilgiri Tahr in Eravikulam National Park",
      "Witness sunset at Top Station with panoramic views across the Tamil Nadu plains",
      "Visit the Tata Tea Museum to learn the art of orthodox tea processing"
    ],
    bestTimeToVisit: "September to March for crisp mornings and clear views; June to August for dramatic monsoon mist and vibrant greenery.",
    travelTips: [
      "Carry light woolens or windcheaters, as temperatures can drop to 10°C in winter evenings.",
      "Book your Eravikulam National Park safari entry slot online in advance during peak season.",
      "Hire a local 4x4 jeep if you plan to visit Kolukkumalai for sunrise over the cloud sea."
    ],
    howToReach: "Cochin International Airport (COK) is 110 km away (~3.5 hours drive via NH85). The nearest major railway station is Aluva (108 km) or Ernakulam (120 km).",
    idealDuration: "3 Days / 2 Nights"
  },
  {
    id: "alleppey",
    number: 2,
    name: "Alleppey (Alappuzha)",
    tagline: "The Venice of the East & Venetian Backwater Canals",
    district: "Alappuzha District",
    image: "/src/assets/images/alleppey_houseboat_1790745422293.jpg",
    shortDesc: "The soul of Kerala's backwaters, where traditional thatched houseboats float down tranquil lagoons fringed by whispering coconut palms and vibrant village life.",
    fullDescription: "Referred to affectionately by Lord Curzon as the 'Venice of the East', Alappuzha is an intricate labyrinth of calm canals, vast lagoons, and emerald paddy fields located below sea level in the Kuttanad farming region. A journey aboard a traditional Kettuvallam (thatched rice barge crafted from wild jackwood planks bound with coir rope) offers an unhurried window into authentic Kerala village life: coir makers spinning golden husk fiber, children paddling canoes to school, and kingfishers darting into mirror-flat waters.",
    highlights: [
      "Overnight stay on a traditional luxury Kettuvallam houseboat with private chef",
      "Canoe through narrow shallow village canals unreachable by larger motorboats",
      "Experience the Nehru Trophy Boat Race if visiting in August on Punnamada Lake",
      "Savor authentic pearl spot fish (Karimeen Pollichathu) cooked in banana leaves"
    ],
    bestTimeToVisit: "October to February for pleasant breezes and comfortable overnight houseboat cruising.",
    travelTips: [
      "Always inspect the houseboat before booking if choosing offline, ensuring it holds a valid green/gold Kerala Tourism certification.",
      "Opt for a canoe or shikara ride early in the morning for birdwatching when waterways are peaceful.",
      "Respect local life by avoiding loud music during evening village anchorages."
    ],
    howToReach: "Cochin International Airport is 85 km north. Alappuzha has its own railway station with direct connections across South India.",
    idealDuration: "2 Days / 1 Night"
  },
  {
    id: "wayanad",
    number: 3,
    name: "Wayanad",
    tagline: "Ancient Caves, Spice Forests & Cloud-Kissed Ridges",
    district: "Wayanad District",
    image: "/src/assets/images/wayanad_nature_1790745446184.jpg",
    shortDesc: "A pristine bio-reserve perched atop the Western Ghats plateau, brimming with Neolithic rock carvings, spice plantations, and dense bamboo forests.",
    fullDescription: "Nestled in the lush elevated plateau of the northern Western Ghats, Wayanad blends rich prehistoric history with wild biodiversity. From the ancient petroglyphs carved into the cavern walls of Edakkal Caves—dating back to 6,000 BCE—to the heart-shaped lake resting near Chembra Peak, Wayanad is a haven for trekkers, naturalists, and those seeking untouched forest tranquility. Its fertile hills are rich in black pepper, cardamom, wild honey, and aromatic Wayanad Gandhakasala rice.",
    highlights: [
      "Trek to the ancient Edakkal Caves with prehistoric Stone Age etchings",
      "Hike towards Chembra Peak and its natural heart-shaped alpine lake",
      "Take a bamboo raft safari across the tranquil waters of Kuruva Island",
      "Spot wild Asiatic elephants and deer in Wayanad Wildlife Sanctuary (Tholpetty/Muthanga)"
    ],
    bestTimeToVisit: "October to May. Nature enthusiasts also love the July-August monsoon when waterfalls roar in full vigor.",
    travelTips: [
      "Wear sturdy walking shoes with good traction for the steep rocky climb to Edakkal Caves.",
      "Prior forest department permits are mandatory for Chembra Peak trekking.",
      "Check sanctuary safari timings early, as token counters close once morning quotas are reached."
    ],
    howToReach: "Calicut International Airport (Kozhikode - CCJ) is 90 km away via the famous Thamarassery Churam mountain pass. Kozhikode railway station is 85 km away.",
    idealDuration: "3 Days / 2 Nights"
  },
  {
    id: "thekkady",
    number: 4,
    name: "Thekkady",
    tagline: "Periyar Wildlife Sanctuary & Aromatic Spice Plantations",
    district: "Idukki District",
    image: "/src/assets/images/thekkady_wildlife_1790745473609.jpg",
    shortDesc: "Home to India's premier tiger reserve, where boat cruises across Periyar Lake reveal wild elephant herds, sambar deer, and rare birds along the water's edge.",
    fullDescription: "Located near the border of Kerala and Tamil Nadu, Thekkady is centered around the Periyar National Park and Tiger Reserve. An artificial lake created by the British-era Mullaperiyar Dam in 1895 forms the focal point of the sanctuary, where dead tree trunks rise eerily from the water like natural sculptures. Here, eco-tourism programs managed by local tribal trackers allow travelers to engage in guided bamboo rafting, border hikes, and visits to spice gardens cultivating cardamom, cloves, cinnamon, and nutmeg.",
    highlights: [
      "Early morning boat safari on Periyar Lake to spot wild elephant herds bathing",
      "Guided spice garden walking tour with organic spice purchasing direct from growers",
      "Watch an authentic Kalaripayattu martial arts demonstration at the Kadathanadan Centre",
      "Full-day bamboo rafting through deep core wilderness zones with armed forest guards"
    ],
    bestTimeToVisit: "September to April when the weather is crisp and lake wildlife sightings are most frequent.",
    travelTips: [
      "Book Periyar boat cruise tickets online well in advance through Kerala Forest Department portal.",
      "Wear leech socks if participating in walking forest trails during or right after monsoon rains.",
      "Buy certified export-quality whole black pepper and green cardamom in Kumily town."
    ],
    howToReach: "Madurai Airport is 136 km away; Cochin International Airport is 155 km. Nearest rail station is Kottayam (114 km).",
    idealDuration: "2 Days / 1 Night"
  },
  {
    id: "kovalam",
    number: 5,
    name: "Kovalam",
    tagline: "Crescent Golden Beaches & Iconic Striped Lighthouse",
    district: "Thiruvananthapuram District",
    image: "/src/assets/images/kovalam_beach_1790745461005.jpg",
    shortDesc: "An internationally acclaimed coastal retreat consisting of three adjacent crescent beaches, famous for its red-and-white lighthouse and coastal Ayurvedic retreats.",
    fullDescription: "Kovalam shot to worldwide prominence in the 1970s along the hippie trail, transforming from a quiet fishing village into one of South Asia's favorite beach destinations. Sheltered by massive rocky promontories, its three curving beaches—Lighthouse Beach, Hawah Beach, and Samudra Beach—provide sheltered sea conditions ideal for swimming and catamaran cruising. Perched atop Kurumkal Hill, the 118-foot red-and-white striped lighthouse offers commanding 360-degree vistas of the sparkling Arabian Sea and coconut palm coastline.",
    highlights: [
      "Climb the 142 steps of the Vizhinjam Lighthouse for sweeping coastal views",
      "Rejuvenate with traditional Kerala Ayurvedic Abhyanga massage at certified wellness centres",
      "Sunset seafood dining along the paved pedestrian promenade of Lighthouse Beach",
      "Surfing lessons at Kovalam Surf Club with experienced local instructors"
    ],
    bestTimeToVisit: "November to February for mild temperatures, calm sea swells, and glorious golden sunsets.",
    travelTips: [
      "Lighthouse visiting hours are strictly between 3:00 PM and 5:00 PM; arrive early to beat queues.",
      "Swim only in designated safe zones monitored by beach lifeguards due to seasonal rip currents.",
      "Sample fresh catch of the day (kingfish or tiger prawns) grilled with local Malabar masala."
    ],
    howToReach: "Trivandrum International Airport (TRV) is just 15 km away (~25 mins). Thiruvananthapuram Central Railway Station is 14 km away.",
    idealDuration: "2 to 3 Days"
  },
  {
    id: "kochi",
    number: 6,
    name: "Fort Kochi",
    tagline: "Historic Spice Harbor, Chinese Fishing Nets & Colonial Heritage",
    district: "Ernakulam District",
    image: "/src/assets/images/kochi_chinese_nets_1790745433665.jpg",
    shortDesc: "A captivating melting pot of Portuguese, Dutch, British, and Jewish history, crowned by the giant cantilevered Chinese fishing nets along the harbor front.",
    fullDescription: "A historic trading port that has welcomed Arabs, Chinese, Portuguese, Dutch, and British merchants for over six centuries, Fort Kochi is Kerala's cultural heart. Stroll along cobblestone streets lined with Portuguese mansions, discover the 16th-century St. Francis Church where explorer Vasco da Gama was originally buried, explore the bustling Jew Town with its 450-year-old Paradesi Synagogue, and watch the synchronized rhythm of fishermen operating the cantilevered shore-operated Chinese fishing nets (Cheena Vala).",
    highlights: [
      "Watch the centuries-old Chinese fishing nets operate along the Vasco da Gama Square harbor",
      "Explore Jew Town spice warehouses, antique galleries, and the Paradesi Synagogue",
      "Visit Mattancherry Dutch Palace with its vivid 16th-century Ramayana murals",
      "Attend the Kochi-Muziris Biennale (during exhibition years) or evening Kathakali performances"
    ],
    bestTimeToVisit: "October to March. The vibrant Cochin Carnival takes place every year during the final week of December.",
    travelTips: [
      "Rent a bicycle to leisurely explore the flat heritage lanes of Fort Kochi and Mattancherry.",
      "Take the 20-minute Ro-Ro ferry from Fort Kochi to Vypeen Island for a scenic local commute.",
      "Check out artisanal cafes on Princess Street and David Hall art gallery for fresh filter coffee."
    ],
    howToReach: "Cochin International Airport (COK) is 42 km away. Ernakulam Junction (South) and Ernakulam Town (North) rail terminals are 12 km away.",
    idealDuration: "2 Days / 2 Nights"
  },
  {
    id: "varkala",
    number: 7,
    name: "Varkala (Papanasam Beach)",
    tagline: "Dramatic Red Laterite Cliffs & Sacred Purifying Waters",
    district: "Thiruvananthapuram District",
    image: "/src/assets/images/varkala_cliff_1790745520817.jpg",
    shortDesc: "A striking seaside setting where precipitous red sandstone cliffs drop sheer into golden sands, known for bohemian cliff-side cafes, yoga sanctuaries, and sacred mineral springs.",
    fullDescription: "Unlike any other coastal spot in South India, Varkala features unique geological formations: dramatic Tertiary sedimentary cliffs running parallel to the Arabian Sea. The cliff top is lined with open-air cafes, yoga studios, and handicraft boutiques, offering front-row sunset views over the ocean. Papanasam Beach at the southern base is considered sacred; its name translates to 'redemption from sins', and natural mineral springs bubbling from the cliff face are believed to possess curative properties.",
    highlights: [
      "Walk the North Cliff footpath at dusk while live acoustic music plays from open-air cafes",
      "Take a holy dip in the natural mineral spring waters of Papanasam Beach",
      "Visit the 2,000-year-old Janardhana Swamy Temple dedicated to Lord Vishnu",
      "Try sea kayaking or stand-up paddleboarding in the calm waters of Kapil Lake"
    ],
    bestTimeToVisit: "October to March when skies are clear, sea breezes are gentle, and cliffside cafes are in full swing.",
    travelTips: [
      "Take extra care while walking the cliff edge path at night, as some sections lack protective railings.",
      "Varkala is exceptionally pedestrian-friendly; most cliff spots are within an easy 15-minute walk.",
      "Respect local customs near the temple ghat section of Papanasam Beach."
    ],
    howToReach: "Trivandrum International Airport is 45 km south (~1 hour drive). Varkala Sivagiri Railway Station is just 3 km from the North Cliff.",
    idealDuration: "2 Days / 1 Night"
  },
  {
    id: "athirappilly",
    number: 8,
    name: "Athirappilly Waterfalls",
    tagline: "The Grand 'Niagara of India' in the Sholayar Forest Range",
    district: "Thrissur District",
    image: "/src/assets/images/athirappilly_falls_1790745533811.jpg",
    shortDesc: "A majestic 80-foot high and 330-foot wide curtain of roaring water cascading through dense Sholayar rainforest into the Chalakudy River.",
    fullDescription: "Widely celebrated as the 'Niagara of India', Athirappilly is the largest and most awe-inspiring waterfall in Kerala. Fed by the Chalakudy River emerging from the high Anamudi ranges, the river crashes down three spectacular plumes over giant granite boulders. The surrounding riparian ecosystem is one of only two places in the Western Ghats where all four South Indian hornbill species—including the majestic Great Hornbill—can be observed in their natural canopy.",
    highlights: [
      "Trek down the stone pathway through rainforest canopy to stand at the roaring base of the falls",
      "Spot the endangered Great Indian Hornbill nesting in the high evergreen canopy",
      "Visit neighboring Vazhachal Falls and the Charpa cascade along the same river system",
      "Drive through the scenic Valparai forest corridor for wild nature photography"
    ],
    bestTimeToVisit: "September to January right after monsoon rains when water volume is at peak majesty and the river is crystal clear.",
    travelTips: [
      "Wear footwear with solid grip; the 15-minute trail down to the bottom can become slippery.",
      "Swimming is strictly prohibited near the edge of the falls due to sudden strong undercurrents.",
      "Carry water and rain gear as humidity in the rainforest canyon is high."
    ],
    howToReach: "Cochin International Airport is only 40 km away (~1 hour drive). Chalakudy Railway Station is 31 km away.",
    idealDuration: "1 Full Day"
  },
  {
    id: "kumarakom",
    number: 9,
    name: "Kumarakom",
    tagline: "Birdwatcher's Sanctuary on the Shore of Vembanad Lake",
    district: "Kottayam District",
    image: "/src/assets/images/alleppey_houseboat_1790745422293.jpg",
    shortDesc: "A serene cluster of backwater islets on Vembanad Lake, world-famous for luxury Ayurvedic heritage resorts and migratory Siberian birds.",
    fullDescription: "Located on the eastern shore of Vembanad Lake—India's longest freshwater lake—Kumarakom is a peaceful contrast to the busier canals of Alleppey. Developed initially around an English rubber plantation established by Alfred George Baker in 1847, Kumarakom is renowned for its 14-acre bird sanctuary where migratory species such as Siberian storks, egrets, herons, and cormorants flock each winter. It is also the birthplace of Kerala's pioneering Responsible Tourism initiative.",
    highlights: [
      "Dawn boat safari inside the Kumarakom Bird Sanctuary for close migratory bird sightings",
      "Indulge in authentic multi-day Ayurvedic Panchakarma treatments at lakeside wellness resorts",
      "Speedboat or country canoe cruise across the vast expanse of Vembanad Lake at twilight",
      "Savor authentic Syrian Christian duck roast (Tharavu Roast) and freshly tapped sweet toddy"
    ],
    bestTimeToVisit: "November to February for migratory birds; June to August for traditional Ayurvedic rejuvenating therapies.",
    travelTips: [
      "A pair of binoculars and telephoto lens are indispensable for birdwatching at dawn.",
      "Plan a lunch stop at a village toddy shop to taste spicy river fish and tapioca (Kappa Meen).",
      "Combine your Kumarakom stay with a visit to the nearby Aymanam heritage village."
    ],
    howToReach: "Cochin International Airport is 78 km away. Kottayam Railway Station is only 14 km away (~25 mins drive).",
    idealDuration: "2 Days / 2 Nights"
  },
  {
    id: "bekal",
    number: 10,
    name: "Bekal",
    tagline: "Ancient Coastal Fortress & Untamed Northern Seascapes",
    district: "Kasaragod District",
    image: "/src/assets/images/bekal_fort_1790745548183.jpg",
    shortDesc: "The largest and best-preserved historic fort in Kerala, rising dramatically from the Arabian Sea with keyhole-shaped ramparts and endless palm-fringed sands.",
    fullDescription: "Dominating the northern tip of Kerala in Kasaragod district, Bekal Fort is a 300-year-old marvel of coastal military architecture. Built in 1650 CE by Shivappa Nayaka of the Keladi dynasty, its keyhole-shaped laterite walls jut directly into the sea, allowing defense against maritime attacks. Unlike many inland forts, Bekal contains no administrative palace; instead, it was conceived purely as a maritime citadel with a grand circular observation tower, underground ammunition depots, and sea-facing gun openings.",
    highlights: [
      "Walk the high laterite battlements for sweeping views of waves crashing against stone walls",
      "Climb the central Observation Tower designed to spot approaching warships from miles away",
      "Stroll the serene Bekal Fort Beach with illuminated walkways and coastal gardens",
      "Experience a traditional Theyyam ritual dance performance in nearby village shrines (seasonal)"
    ],
    bestTimeToVisit: "October to March when coastal winds are gentle and temperatures are pleasant for exploring the open fort grounds.",
    travelTips: [
      "Visit during late afternoon (4:00 PM onwards) to avoid midday heat and enjoy spectacular sunset photography.",
      "Wear a wide-brimmed sun hat, as the open expanse of the fort has minimal natural shade.",
      "Check local temple calendars between December and April to witness an authentic nocturnal Theyyam performance."
    ],
    howToReach: "Mangalore International Airport (IXE) is 65 km north (~1.5 hours drive). Kasaragod (16 km) and Kanhangad (12 km) are the nearest railway stations.",
    idealDuration: "1 to 2 Days"
  }
];

export const EXPLORE_SIX = DESTINATIONS.slice(0, 6);
