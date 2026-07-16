const img = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const GALLERY_CATEGORIES = [
  "All",
  "Wedding",
  "Corporate",
  "Desserts",
  "Buffet",
  "BBQ",
  "Beverages",
  "Decoration",
  "Chefs",
];

export const GALLERY = [
  { src: img("photo-1519225421980-715cb0215aed"), category: "Wedding", alt: "Elegant wedding table setup with floral centerpieces" },
  { src: img("photo-1511795409834-ef04bbd61622"), category: "Wedding", alt: "Luxury wedding dinner celebration" },
  { src: img("photo-1511578314322-379afb476865"), category: "Corporate", alt: "Corporate event catering service" },
  { src: img("photo-1517457373958-b7bdd4587205"), category: "Corporate", alt: "Professional corporate gathering" },
  { src: img("photo-1488477181946-6428a0291777"), category: "Desserts", alt: "Elegant plated dessert with berries" },
  { src: img("photo-1464349095431-e9a21285b5f3"), category: "Desserts", alt: "Celebration cake with fresh berries" },
  { src: img("photo-1555244162-803834f70033"), category: "Buffet", alt: "Chef preparing luxury buffet dish" },
  { src: img("photo-1414235077428-338989a2e8c0"), category: "Buffet", alt: "Fine dining table arrangement" },
  { src: img("photo-1544025162-d76694265947"), category: "BBQ", alt: "Smoky barbecue ribs fresh off the grill" },
  { src: img("photo-1529193591184-b1d58069ecdd"), category: "BBQ", alt: "Live BBQ grilling station" },
  { src: img("photo-1544145945-f90425340c7e"), category: "Beverages", alt: "Barista-style coffee service" },
  { src: img("photo-1470337458703-46ad1756a187"), category: "Beverages", alt: "Refreshing beverage station with mocktails" },
  { src: img("photo-1519167758481-83f550bb49b3"), category: "Decoration", alt: "Grand event hall decoration with lighting" },
  { src: img("photo-1478146059778-26028b07395a"), category: "Decoration", alt: "Elegant event table decoration" },
  { src: img("photo-1556910103-1c02745aae4d"), category: "Chefs", alt: "Professional chef preparing food in kitchen" },
  { src: img("photo-1577219491135-ce391730fb2c"), category: "Chefs", alt: "Chef plating a gourmet dish" },
];
