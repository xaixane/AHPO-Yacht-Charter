export interface Yacht {
  id: string;
  slug: string;
  name: string;
  builder: string;
  length: string;
  guests: number;
  cabins: number;
  crew: number;
  speed: string;
  weeklyRate: string;
  image: string;
  badge?: string;
  description: string;
  location: string;
}

export interface DestinationItem {
  id: string;
  number: string;
  title: string;
  regionSlug: string;
  destSlug: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  number: string;
  title: string;
  categorySlug: string;
  slug: string;
  description: string;
  image: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  vessel: string;
  year: string;
}

export interface JournalArticle {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
}

export const FEATURED_YACHTS: Yacht[] = [
  {
    id: "1",
    slug: "azure-one",
    name: "AZURE ONE",
    builder: "Lürssen • 2024",
    length: "85M / 278FT",
    guests: 12,
    cabins: 7,
    crew: 24,
    speed: "18 Knots",
    weeklyRate: "€950,000",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1600&q=80",
    badge: "POPULAR",
    description: "Multi-award winning custom superyacht featuring a duplex owner's suite, glass bottom pool, and certified helipad.",
    location: "French Riviera • Monaco",
  },
  {
    id: "2",
    slug: "luna-sea",
    name: "LUNA SEA",
    builder: "Feadship • 2023",
    length: "74M / 242FT",
    guests: 12,
    cabins: 6,
    crew: 18,
    speed: "16 Knots",
    weeklyRate: "€720,000",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1600&q=80",
    badge: "FEATURED",
    description: "Sleek Dutch craftsmanship boasting a beach club spa, contra-flow swimming pool, and underwater viewing lounge.",
    location: "Amalfi Coast • Italy",
  },
  {
    id: "3",
    slug: "ocean-pearl",
    name: "OCEAN PEARL",
    builder: "Benetti • 2024",
    length: "67M / 220FT",
    guests: 12,
    cabins: 6,
    crew: 15,
    speed: "17 Knots",
    weeklyRate: "€580,000",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80",
    description: "Contemporary Italian luxury with panoramic sun deck jacuzzi, outdoor cinema, and full suite of water toys.",
    location: "Balearics • Ibiza",
  },
  {
    id: "4",
    slug: "solaris",
    name: "SOLARIS V",
    builder: "Oceanco • 2022",
    length: "90M / 295FT",
    guests: 14,
    cabins: 8,
    crew: 28,
    speed: "19 Knots",
    weeklyRate: "€1,200,000",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80",
    badge: "FLAGSHIP",
    description: "Unrivalled mega yacht boasting a full wellness deck, Michelin-starred culinary team, and personal submarine.",
    location: "Greek Isles • Mykonos",
  },
];

export const DESTINATION_HIGHLIGHTS: DestinationItem[] = [
  {
    id: "1",
    number: "01",
    title: "THE MEDITERRANEAN",
    regionSlug: "mediterranean",
    destSlug: "french-riviera",
    subtitle: "Monaco • Saint-Tropez • Amalfi • Balearics",
    description: "Cruise between glamorous harbors, Michelin-starred coastal dining, and historic cliffside fortresses in crystal Mediterranean waters.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
    highlights: ["Monaco Grand Prix Mooring", "Amalfi Cliffside Anchorages", "Ibiza Beach Clubs"],
  },
  {
    id: "2",
    number: "02",
    title: "THE CARIBBEAN",
    regionSlug: "caribbean",
    destSlug: "st-barths",
    subtitle: "St. Barth's • Virgin Islands • Antigua",
    description: "Basking in trade wind breezes, turquoise lagoons, white sand coves, and world-class offshore sailing conditions.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    highlights: ["St. Barth's New Year Regatta", "Virgin Gorda Baths", "Antigua Yacht Club"],
  },
  {
    id: "3",
    number: "03",
    title: "THE BAHAMAS",
    regionSlug: "bahamas",
    destSlug: "exumas",
    subtitle: "Exuma Cays • Harbour Island • Eleuthera",
    description: "Unwind among 365 secluded cays, sapphire waters, swimming pigs, and untouched coral reefs ideal for diving.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    highlights: ["Exuma Cays Land & Sea Park", "Pink Sand Beaches", "Thunderball Grotto"],
  },
  {
    id: "4",
    number: "04",
    title: "FRENCH POLYNESIA",
    regionSlug: "french-polynesia",
    destSlug: "bora-bora",
    subtitle: "Bora Bora • Moorea • Tahiti • Tuamotus",
    description: "Venture to the edge of the Pacific. Volcanic peaks rising over emerald lagoons, manta ray sanctuaries, and total privacy.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80",
    highlights: ["Overwater Lagoon Mooring", "Manta Ray Snorkeling", "Private Atoll Dining"],
  },
];

export const EXPERIENCE_PREVIEWS: ExperienceItem[] = [
  {
    id: "1",
    number: "01",
    title: "CULINARY JOURNEYS",
    categorySlug: "gastronomy",
    slug: "michelin-dining-at-sea",
    description: "Private Michelin-trained chefs crafting tailored multi-course tasting menus, wine pairings, and fresh seafood catches daily.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    tag: "GASTRONOMY",
  },
  {
    id: "2",
    number: "02",
    title: "OCEANIC ADVENTURE",
    categorySlug: "water-sports",
    slug: "deep-sea-expeditions",
    description: "Submersible dives, flyboards, e-foils, underwater photography guides, and jet-ski safaris guided by certified instructors.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
    tag: "ADVENTURE",
  },
  {
    id: "3",
    number: "03",
    title: "HOLISTIC WELLNESS",
    categorySlug: "wellness",
    slug: "onboard-spa-retreats",
    description: "Sunrise deck yoga, onboard masseuses, cryotherapy suites, and customized nutrition plans designed around your rejuvenation.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    tag: "RELAXATION",
  },
];

export const COMPANY_STATS = [
  { value: "50+", label: "SUPER YACHTS WORLDWIDE" },
  { value: "2M+", label: "NAUTICAL MILES CHARTERED" },
  { value: "200+", label: "GLOBAL DESTINATIONS" },
  { value: "24/7", label: "CONCIERGE DESK" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "AHPO delivered an unforgettable charter experience in the Amalfi Coast. The attention to detail from the crew and broker was second to none.",
    author: "Lord Sterling M.",
    role: "Private Charterer",
    vessel: "M/Y AZURE ONE",
    year: "Summer 2025",
  },
  {
    id: "2",
    quote: "Sailing through the Exumas on LUNA SEA was pure paradise. The onboard chef and submersible experience exceeded all expectations.",
    author: "Elena Rostova",
    role: "Repeat Guest",
    vessel: "M/Y LUNA SEA",
    year: "Winter 2025",
  },
];

export const FEATURED_JOURNAL_POSTS: JournalArticle[] = [
  {
    id: "1",
    slug: "mediterranean-summer-preview-2026",
    category: "DESTINATIONS",
    title: "The Ultimate Mediterranean Summer Charter Preview 2026",
    excerpt: "Discover secret anchorages in Corsica, new beach club openings in St. Tropez, and prime berth allocations for the Grand Prix.",
    readTime: "6 Min Read",
    date: "July 24, 2026",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "2",
    slug: "sustainable-superyachting-innovations",
    category: "INNOVATION",
    title: "Hybrid Propulsion & Zero-Emission Superyachting",
    excerpt: "How modern shipbuilders are pairing hydrogen fuel cells and solar sails to preserve pristine oceanic ecosystems.",
    readTime: "8 Min Read",
    date: "July 18, 2026",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1000&q=80",
  },
];
