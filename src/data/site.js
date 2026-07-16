// Central business info. Items marked TODO are placeholders — replace with real details.
export const SITE = {
  name: "Siddique Sons Catering Services",
  shortName: "Siddique Sons",
  tagline: "Exceptional Catering for Every Occasion",
  phone: "+92 300 2822252",
  phoneHref: "tel:+923002822252",
  whatsapp: "923002822252",
  email: "info@siddiquesons.com", // TODO: replace with real email
  address: "Main Boulevard, Your City, Pakistan", // TODO: replace with real address
  hours: "Mon – Sun: 9:00 AM – 10:00 PM",
  facebook: "https://www.facebook.com/SiddiqueSonsCaterers/",
  instagram: "https://www.instagram.com/siddique_sons_caterers/",
  instagramHandle: "@siddique_sons_caterers",
};

export const whatsappLink = (message = "Hello! I would like to inquire about your catering services.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const STATS = [
  { value: 500, suffix: "+", label: "Events Served" },
  { value: 100, suffix: "%", label: "Customer Satisfaction" },
  { value: 20, suffix: "+", label: "Menu Categories" },
  { value: 1000, suffix: "+", label: "Happy Guests" },
];

export const FALLBACK_IMG =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#7B1E1E'/><stop offset='1' stop-color='#3d0e0e'/></linearGradient></defs><rect width='1200' height='800' fill='url(#g)'/><text x='50%' y='48%' fill='#D4AF37' font-family='Georgia, serif' font-size='44' text-anchor='middle'>Siddique Sons</text><text x='50%' y='56%' fill='#E8CE7A' font-family='Georgia, serif' font-size='26' text-anchor='middle'>Catering Services</text></svg>`
  );
