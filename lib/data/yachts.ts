export interface DeckPlan {
  name: string;
  label: string;
  description: string;
  features: string[];
}

export interface YachtFull {
  id: string;
  slug: string;
  name: string;
  builder: string;
  builtYear: number;
  refitYear?: number;
  lengthMeters: number;
  lengthFeet: number;
  guests: number;
  cabins: number;
  crew: number;
  cruisingSpeed: number;
  maxSpeed: number;
  beam: string;
  draft: string;
  grossTonnage: string;
  rangeNauticalMiles: string;
  category: "superyacht" | "motor-yacht" | "sailing-yacht" | "explorer";
  categoryLabel: string;
  weeklyRateHigh: number;
  weeklyRateLow: number;
  currency: string;
  featured: boolean;
  popular: boolean;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  location: string;
  region: string;
  amenities: string[];
  waterToys: string[];
  deckPlans: DeckPlan[];
  captainProfile?: {
    name: string;
    yearsAtSea: number;
    quote: string;
  };
}

export const YACHTS_DATA: YachtFull[] = [
  {
    id: "azure-one",
    slug: "azure-one",
    name: "AZURE ONE",
    builder: "Lürssen",
    builtYear: 2024,
    refitYear: 2026,
    lengthMeters: 85,
    lengthFeet: 278,
    guests: 12,
    cabins: 7,
    crew: 24,
    cruisingSpeed: 16,
    maxSpeed: 18,
    beam: "13.8m / 45.3ft",
    draft: "3.75m / 12.3ft",
    grossTonnage: "2,950 GT",
    rangeNauticalMiles: "6,000 nm @ 12 Knots",
    category: "superyacht",
    categoryLabel: "Mega Superyacht",
    weeklyRateHigh: 980000,
    weeklyRateLow: 950000,
    currency: "€",
    featured: true,
    popular: true,
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1600&q=80",
    ],
    description: "Multi-award winning custom superyacht featuring a duplex owner's suite, glass bottom swimming pool, certified touch-and-go helipad, and zero-speed quantum stabilizers.",
    highlights: [
      "Duplex Owner's Penthouse Suite with private sun deck and dual ensuite spa bathrooms",
      "12-meter glass bottom pool illuminating the main deck beach club below",
      "Commercial certified Touch-and-Go Helipad suitable for H145 helicopters",
      "Dedicated wellness deck with Finnish sauna, cryotherapy room, and full gym",
      "Comprehensive water toy arsenal including 3-person submersible and custom tenders",
    ],
    location: "Monaco • French Riviera",
    region: "mediterranean",
    amenities: ["Helipad", "Glass Bottom Pool", "Beach Club", "Wellness Spa", "Elevator", "Stabilizers at Anchor", "Outdoor Cinema", "Jacuzzi", "Wi-Fi Starlink"],
    waterToys: ["3x SeaDoo Jet Skis", "2x Seabob F5S", "Fliteboard e-Foils", "Tender 10m Custom Limousine", "Inflatable Slide", "Diving Gear & Compressor"],
    deckPlans: [
      {
        name: "sun-deck",
        label: "Sun Deck",
        description: "Panoramic sky lounge featuring a 10-person infinity jacuzzi, outdoor teppanyaki bar, and sun loungers.",
        features: ["Infinity Jacuzzi", "Teppanyaki Bar", "Observation Daybed", "Deck Speakers"],
      },
      {
        name: "bridge-deck",
        label: "Bridge Deck",
        description: "Upper helm station, captain's cabin, formal sky lounge with indoor/outdoor glass dining table for 14 guests.",
        features: ["Sky Lounge", "Outdoor Dining Table", "Helipad Zone", "Ship's Office"],
      },
      {
        name: "owners-deck",
        label: "Owner's Deck",
        description: "Private duplex suite comprising master stateroom, private lounge, study, dual bathrooms, and private bow terrace.",
        features: ["Master Bedroom", "Private Terrace", "His & Hers Bathrooms", "Private Study"],
      },
      {
        name: "main-deck",
        label: "Main Deck",
        description: "Grand salon, formal dining room, glass bottom swimming pool, and 6 VIP guest staterooms.",
        features: ["Grand Salon", "Formal Dining", "6 VIP Cabins", "Glass Pool Deck"],
      },
    ],
    captainProfile: {
      name: "Captain Jean-Luc Dupont",
      yearsAtSea: 22,
      quote: "AZURE ONE is the ultimate fusion of modern German engineering and Mediterranean lifestyle. We pride ourselves on creating bespoke memories for every guest.",
    },
  },
  {
    id: "luna-sea",
    slug: "luna-sea",
    name: "LUNA SEA",
    builder: "Feadship",
    builtYear: 2023,
    lengthMeters: 74,
    lengthFeet: 242,
    guests: 12,
    cabins: 6,
    crew: 18,
    cruisingSpeed: 14,
    maxSpeed: 16,
    beam: "12.5m / 41ft",
    draft: "3.4m / 11.2ft",
    grossTonnage: "2,200 GT",
    rangeNauticalMiles: "5,500 nm @ 12 Knots",
    category: "superyacht",
    categoryLabel: "Superyacht",
    weeklyRateHigh: 750000,
    weeklyRateLow: 720000,
    currency: "€",
    featured: true,
    popular: false,
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1600&q=80",
    ],
    description: "Sleek Dutch craftsmanship boasting an expansive beach club spa, contra-flow swimming pool, and underwater viewing lounge.",
    highlights: [
      "Sub-sea underwater viewing lounge with glass portholes into marine coves",
      "Full beam master stateroom on the main deck with private fold-out balconies",
      "Contra-flow swimming pool with adjustable floor height on sun deck",
      "State-of-the-art silence package rendering engine rooms completely silent at anchor",
    ],
    location: "Amalfi Coast • Italy",
    region: "mediterranean",
    amenities: ["Underwater Lounge", "Beach Club Spa", "Jacuzzi", "Gym", "Sauna", "Stabilizers"],
    waterToys: ["2x WaveRunners", "Seabob F5S", "Paddleboards", "Chaparral Chase Boat 9m"],
    deckPlans: [
      {
        name: "sun-deck",
        label: "Sun Deck",
        description: "Contra-flow pool, sunpads, and cocktail bar.",
        features: ["Contra-flow Pool", "Cocktail Bar", "Sun Beds"],
      },
      {
        name: "main-deck",
        label: "Main Deck",
        description: "Master stateroom with private balcony and main salon.",
        features: ["Master Stateroom", "Main Salon", "Aft Seating"],
      },
    ],
  },
  {
    id: "ocean-pearl",
    slug: "ocean-pearl",
    name: "OCEAN PEARL",
    builder: "Benetti",
    builtYear: 2024,
    lengthMeters: 67,
    lengthFeet: 220,
    guests: 12,
    cabins: 6,
    crew: 15,
    cruisingSpeed: 15,
    maxSpeed: 17,
    beam: "11.2m / 36.7ft",
    draft: "3.1m / 10.2ft",
    grossTonnage: "1,750 GT",
    rangeNauticalMiles: "5,000 nm @ 12 Knots",
    category: "motor-yacht",
    categoryLabel: "Motor Yacht",
    weeklyRateHigh: 620000,
    weeklyRateLow: 580000,
    currency: "€",
    featured: true,
    popular: true,
    image: "/yacht-2.webp",
    gallery: [
      "/yacht-2.webp",
    ],
    description: "Contemporary Italian luxury with panoramic sun deck jacuzzi, outdoor cinema, and full suite of water toys.",
    highlights: [
      "Panoramic 360-degree glass sun deck jacuzzi",
      "Outdoor night cinema with laser projection and surround sound",
      "Fold-down sea terraces off main salon",
    ],
    location: "Balearics • Ibiza",
    region: "mediterranean",
    amenities: ["Sun Deck Jacuzzi", "Outdoor Cinema", "Tequila Bar", "Master Private Balcony"],
    waterToys: ["2x Jet Skis", "Electric Surfboards", "Snorkeling Gear", "Inflatable Kayaks"],
    deckPlans: [
      {
        name: "main-deck",
        label: "Main Deck",
        description: "Spacious salon and outdoor dining area.",
        features: ["Main Salon", "Dining Area", "Swim Platform"],
      },
    ],
  },
  {
    id: "solaris-v",
    slug: "solaris-v",
    name: "SOLARIS V",
    builder: "Oceanco",
    builtYear: 2022,
    lengthMeters: 90,
    lengthFeet: 295,
    guests: 14,
    cabins: 8,
    crew: 28,
    cruisingSpeed: 16,
    maxSpeed: 19,
    beam: "14.5m / 47.5ft",
    draft: "4.0m / 13.1ft",
    grossTonnage: "3,400 GT",
    rangeNauticalMiles: "6,500 nm @ 13 Knots",
    category: "superyacht",
    categoryLabel: "Mega Superyacht",
    weeklyRateHigh: 1300000,
    weeklyRateLow: 1200000,
    currency: "€",
    featured: true,
    popular: false,
    image: "/yacht-1.webp",
    gallery: [
      "/yacht-1.webp",
    ],
    description: "Unrivalled mega yacht boasting a full wellness deck, Michelin-starred culinary team, and personal 3-person submersible.",
    highlights: [
      "Private 3-person Triton Submersible for deep sea exploration",
      "Full dedicated wellness spa deck with hammam, sauna, and massage suites",
      "Helipad and hangar for seamless guest transfers",
    ],
    location: "Mykonos • Greece",
    region: "mediterranean",
    amenities: ["Personal Submarine", "Full Wellness Deck", "Touch-and-Go Helipad", "Indoor Pool", "Cinema Room"],
    waterToys: ["Triton Submarine", "3x Yamaha FX Jet Skis", "Flyboard Pro", "Wakesurfers"],
    deckPlans: [
      {
        name: "main-deck",
        label: "Main Deck",
        description: "Grand master suite and indoor pool lounge.",
        features: ["Master Suite", "Indoor Pool", "Lounge"],
      },
    ],
  },
  {
    id: "aegean-crest",
    slug: "aegean-crest",
    name: "AEGEAN CREST",
    builder: "Perini Navi",
    builtYear: 2021,
    lengthMeters: 56,
    lengthFeet: 184,
    guests: 10,
    cabins: 5,
    crew: 10,
    cruisingSpeed: 12,
    maxSpeed: 15,
    beam: "11.5m / 37.7ft",
    draft: "3.9m / 12.8ft",
    grossTonnage: "498 GT",
    rangeNauticalMiles: "3,500 nm @ 10 Knots",
    category: "sailing-yacht",
    categoryLabel: "Sailing Superyacht",
    weeklyRateHigh: 380000,
    weeklyRateLow: 340000,
    currency: "€",
    featured: false,
    popular: true,
    image: "/yacht-3.webp",
    gallery: [
      "/yacht-3.webp",
    ],
    description: "Iconic Italian sailing yacht offering authentic wind-powered elegance coupled with high-tech carbon fiber rigging and luxury staterooms.",
    highlights: [
      "Carbon fiber masts with automated sail control systems",
      "Expansive teak aft deck with shadow-free dining",
    ],
    location: "Athens • Cyclades",
    region: "mediterranean",
    amenities: ["Carbon Fiber Rigging", "Hydraulic Swim Platform", "Formal Dining Salon", "Sun Loungers"],
    waterToys: ["Laser Sailboats", "Paddleboards", "Windsurfers", "Water Skis"],
    deckPlans: [
      {
        name: "main-deck",
        label: "Main Deck",
        description: "Cockpit dining and master suite.",
        features: ["Cockpit", "Master Suite", "Sails Control"],
      },
    ],
  },
  {
    id: "arctic-voyager",
    slug: "arctic-voyager",
    name: "ARCTIC VOYAGER",
    builder: "Damen Yachting",
    builtYear: 2023,
    lengthMeters: 75,
    lengthFeet: 246,
    guests: 12,
    cabins: 6,
    crew: 20,
    cruisingSpeed: 14,
    maxSpeed: 17,
    beam: "12.6m / 41.3ft",
    draft: "3.8m / 12.5ft",
    grossTonnage: "2,400 GT",
    rangeNauticalMiles: "8,000 nm @ 12 Knots",
    category: "explorer",
    categoryLabel: "Expedition Explorer",
    weeklyRateHigh: 850000,
    weeklyRateLow: 790000,
    currency: "€",
    featured: false,
    popular: false,
    image: "/moonrise.webp",
    gallery: [
      "/moonrise.webp",
    ],
    description: "Ice-class luxury explorer yacht built for high-latitude polar expeditions and remote Pacific island discoveries without compromising on 5-star comfort.",
    highlights: [
      "Polar Code Category A Ice-Class steel hull",
      "8,000 nautical mile autonomous trans-oceanic range",
    ],
    location: "Norway Fjords • Antarctica",
    region: "global",
    amenities: ["Ice-Class Hull", "Commercial Helipad", "Decompression Chamber", "Observation Lounge", "Observation Crane"],
    waterToys: ["2x Expedition RIB Tenders", "Kayaks", "Drysuits & Scuba Gear", "Snowmobiles (Polar)"],
    deckPlans: [
      {
        name: "observation-deck",
        label: "Observation Deck",
        description: "Enclosed heated lounge with 270-degree glass views.",
        features: ["Heated Glass Lounge", "Telescopes", "Chart Room"],
      },
    ],
  },
  {
    id: "caribbean-breeze",
    slug: "caribbean-breeze",
    name: "CARIBBEAN BREEZE",
    builder: "Heesen",
    builtYear: 2022,
    lengthMeters: 55,
    lengthFeet: 180,
    guests: 12,
    cabins: 6,
    crew: 13,
    cruisingSpeed: 15,
    maxSpeed: 18,
    beam: "9.6m / 31.5ft",
    draft: "2.8m / 9.2ft",
    grossTonnage: "760 GT",
    rangeNauticalMiles: "4,500 nm @ 13 Knots",
    category: "motor-yacht",
    categoryLabel: "Motor Yacht",
    weeklyRateHigh: 450000,
    weeklyRateLow: 410000,
    currency: "$",
    featured: false,
    popular: true,
    image: "/yacht-4.webp",
    gallery: [
      "/yacht-4.webp",
    ],
    description: "Shallow-draft aluminium superyacht tailored specifically for navigating the pristine shallow cays of the Bahamas and Virgin Islands.",
    highlights: [
      "Shallow 2.8m draft allowing access to shallow Bahamas lagoons",
      "Beach club lounge with sea level drop-down swim platform",
    ],
    location: "Nassau • Exumas",
    region: "caribbean",
    amenities: ["Shallow Draft Access", "Beach Club Lounge", "Deck Jacuzzi", "Outdoor Grill Bar"],
    waterToys: ["SeaDoo Spark Jet Skis", "Electric Foil Boards", "Inflatable Trampoline", "Fishing Gear"],
    deckPlans: [
      {
        name: "main-deck",
        label: "Main Deck",
        description: "Main salon and shallow draft access.",
        features: ["Main Salon", "Beach Club", "Bar"],
      },
    ],
  },
  {
    id: "monaco-star",
    slug: "monaco-star",
    name: "MONACO STAR",
    builder: "Amels",
    builtYear: 2023,
    lengthMeters: 60,
    lengthFeet: 197,
    guests: 12,
    cabins: 6,
    crew: 14,
    cruisingSpeed: 14,
    maxSpeed: 16,
    beam: "10.4m / 34.1ft",
    draft: "3.2m / 10.5ft",
    grossTonnage: "1,100 GT",
    rangeNauticalMiles: "4,800 nm @ 12 Knots",
    category: "superyacht",
    categoryLabel: "Superyacht",
    weeklyRateHigh: 540000,
    weeklyRateLow: 490000,
    currency: "€",
    featured: false,
    popular: false,
    image: "/riviera-dusk.webp",
    gallery: [
      "/riviera-dusk.webp",
    ],
    description: "Timeless Tim Heywood exterior lines paired with contemporary Reymond Langton interior design for ultimate Mediterranean chartering.",
    highlights: [
      "Full beam master suite on main deck with study and private dressing room",
      "Sun deck gym with panoramic sea views",
    ],
    location: "St. Tropez • France",
    region: "mediterranean",
    amenities: ["Full Beam Master Suite", "Sun Deck Gym", "Waterfall Jacuzzi", "Wine Cellar"],
    waterToys: ["Castoldi Jet Tender 23", "3x Seabobs", "Stand-Up Paddleboards"],
    deckPlans: [
      {
        name: "main-deck",
        label: "Main Deck",
        description: "Full beam master suite and formal dining salon.",
        features: ["Master Suite", "Dining Room", "Sun Deck Gym"],
      },
    ],
  },
];

export function getYachtBySlug(slug: string): YachtFull | undefined {
  return YACHTS_DATA.find((y) => y.slug === slug);
}
