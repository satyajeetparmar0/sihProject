type Monastery = {
  id: number;
  name: string;
  description?: string;
  image?: string;
  significance: string;
  location: string;
  foundedYear?: number;
  architecturalStyle?: string;
  culturalImportance?: string;
  visitingHours?: string;
  specialEvents?: string[];
  virtualTourAvailable?: boolean;
};

type Monasteries = Monastery[];

export const featuredMonasteries: Monasteries = [
  {
    id: 1,
    name: "Rumtek Monastery",
    description: "The largest monastery in Sikkim and seat of the Karmapa lineage. Known for its stunning architecture and spiritual significance in Tibetan Buddhism.",
    image: "/monastries/rumtek_monastery.jpg",
    significance: "Spiritual Center",
    location: "Gangtok, East Sikkim",
    foundedYear: 1966,
    architecturalStyle: "Tibetan Buddhist",
    culturalImportance: "Highest",
    visitingHours: "6:00 AM - 6:00 PM",
    specialEvents: ["Losar Festival", "Monlam Prayer Festival"],
    virtualTourAvailable: true,
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    description: "One of the oldest monasteries in Sikkim, dating back to the 17th century. Famous for its intricate wood carvings and ancient Buddhist scriptures.",
    image: "/monastries/pemayangtse_monastery.jpg",
    significance: "Historical Heritage",
    location: "Pelling, West Sikkim",
    foundedYear: 1705,
    architecturalStyle: "Nyingma Tradition",
    culturalImportance: "Very High",
    visitingHours: "7:00 AM - 5:00 PM",
    specialEvents: ["Chaam Dance Festival", "Annual Prayer Ceremony"],
    virtualTourAvailable: true,
  },
  {
    id: 3,
    name: "Tashiding Monastery",
    description: "Perched on a hilltop, this monastery offers breathtaking views and is considered one of the most sacred places in Sikkim.",
    image: "/monastries/tashiding_monastery.jpg",
    significance: "Sacred Site",
    location: "Tashiding, West Sikkim",
    foundedYear: 1641,
    architecturalStyle: "Traditional Tibetan",
    culturalImportance: "Very High",
    visitingHours: "6:30 AM - 5:30 PM",
    specialEvents: ["Bhumchu Festival", "Monastic Ceremonies"],
    virtualTourAvailable: false,
  },
  {
    id: 4,
    name: "Enchey Monastery",
    description: "A beautiful monastery in Gangtok known for its peaceful atmosphere and traditional Buddhist architecture.",
    image: "/monastries/enchey_monastery.jpg",
    significance: "Community Center",
    location: "Gangtok, East Sikkim",
    foundedYear: 1909,
    architecturalStyle: "Nyingma Tradition",
    culturalImportance: "High",
    visitingHours: "6:00 AM - 6:00 PM",
    specialEvents: ["Annual Festival", "Prayer Ceremonies"],
    virtualTourAvailable: true,
  },
  {
    id: 5,
    name: "Dubdi Monastery",
    description: "The oldest monastery in Sikkim, established in 1701. Known for its historical significance and traditional architecture.",
    image: "/monastries/dubdi_monastery.jpg",
    significance: "Historical Monument",
    location: "Yuksom, West Sikkim",
    foundedYear: 1701,
    architecturalStyle: "Traditional Tibetan",
    culturalImportance: "Highest",
    visitingHours: "7:00 AM - 5:00 PM",
    specialEvents: ["Founding Anniversary", "Religious Ceremonies"],
    virtualTourAvailable: false,
  },
  {
    id: 6,
    name: "Phodong Monastery",
    description: "A significant monastery in North Sikkim known for its beautiful murals and traditional Buddhist teachings.",
    image: "/monastries/phodong_monastery.jpg",
    significance: "Cultural Heritage",
    location: "Phodong, North Sikkim",
    foundedYear: 1740,
    architecturalStyle: "Tibetan Buddhist",
    culturalImportance: "High",
    visitingHours: "6:30 AM - 5:30 PM",
    specialEvents: ["Annual Festival", "Cultural Programs"],
    virtualTourAvailable: true,
  },
];

type MonasteryCategory = {
  id: number;
  slug: string;
  title: string;
  description?: string;
  image?: string;
  color: string;
}[];

export const monasteryCategories: MonasteryCategory = [
  {
    id: 1,
    slug: "historical",
    title: "Historical Monasteries",
    description: "Explore the ancient monasteries that have stood for centuries, preserving the rich Buddhist heritage of Sikkim.",
    image: "/monastries/dubdi_monastery.jpg",
    color: "white",
  },
  {
    id: 2,
    slug: "spiritual",
    title: "Spiritual Centers",
    description: "Discover the most sacred monasteries where spiritual practices and teachings continue to thrive.",
    image: "/monastries/rumtek_monastery.jpg",
    color: "black",
  },
  {
    id: 3,
    slug: "cultural",
    title: "Cultural Heritage",
    description: "Experience monasteries that showcase traditional architecture, art, and cultural practices.",
    image: "/monastries/phodong_monastery.jpg",
    color: "white",
  },
];