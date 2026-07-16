import {
  FaConciergeBell,
  FaHeart,
  FaBriefcase,
  FaCalendarAlt,
  FaUtensils,
  FaTruck,
  FaShippingFast,
  FaFire,
  FaBoxOpen,
  FaChild,
  FaLeaf,
  FaBirthdayCake,
  FaGlobeAsia,
  FaCocktail,
  FaPlane,
} from "react-icons/fa";

const img = (id, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const SERVICES = [
  {
    slug: "full-service-catering",
    title: "Full-Service Catering",
    icon: FaConciergeBell,
    image: img("photo-1555244162-803834f70033"),
    short: "End-to-end catering with setup, service staff, and cleanup — so you can simply enjoy your event.",
    description:
      "Our full-service catering covers everything from menu planning and food preparation to elegant table setup, professional wait staff, and complete post-event cleanup. We manage every culinary detail so you can focus on your guests.",
    benefits: ["Complete event management", "Professional service staff", "Elegant table setup", "Full cleanup included", "Customized menu planning"],
    events: ["Weddings", "Corporate Galas", "Private Parties", "Family Functions", "Community Events"],
  },
  {
    slug: "wedding-catering",
    title: "Wedding Catering",
    icon: FaHeart,
    image: img("photo-1519225421980-715cb0215aed"),
    short: "Luxurious wedding menus and stunning presentation for the most important day of your life.",
    description:
      "From intimate nikkah ceremonies to grand walima receptions, we craft wedding menus that delight every guest. Expect luxurious buffets, live cooking stations, and impeccable presentation tailored to your traditions and taste.",
    benefits: ["Grand buffet presentations", "Live cooking stations", "Traditional & continental menus", "Dedicated wedding coordinator", "Elegant décor coordination"],
    events: ["Mehndi", "Barat", "Walima", "Engagements", "Anniversaries"],
  },
  {
    slug: "corporate-catering",
    title: "Corporate Catering",
    icon: FaBriefcase,
    image: img("photo-1511578314322-379afb476865"),
    short: "Polished, punctual catering for meetings, conferences, product launches, and office events.",
    description:
      "Impress clients and reward teams with professional corporate catering. We deliver on time, every time — from executive lunches and conference buffets to annual dinners and product launch receptions.",
    benefits: ["Always on schedule", "Professional presentation", "Flexible per-head packages", "Breakfast, lunch & dinner options", "Invoicing for businesses"],
    events: ["Conferences", "Seminars", "Office Lunches", "Annual Dinners", "Product Launches"],
  },
  {
    slug: "event-catering",
    title: "Event Catering",
    icon: FaCalendarAlt,
    image: img("photo-1511795409834-ef04bbd61622"),
    short: "Flexible catering for gatherings of every size — from 20 guests to 2,000.",
    description:
      "Whatever the occasion, our event catering scales beautifully. We handle intimate dinners, milestone celebrations, and large public events with the same attention to freshness, flavor, and flawless service.",
    benefits: ["Scales from small to large", "Flexible menu formats", "Indoor & outdoor setups", "Experienced event staff", "Transparent pricing"],
    events: ["Birthdays", "Graduations", "Reunions", "Fundraisers", "Festivals"],
  },
  {
    slug: "buffet-catering",
    title: "Buffet Catering",
    icon: FaUtensils,
    image: img("photo-1414235077428-338989a2e8c0"),
    short: "Abundant, beautifully arranged buffet lines with live stations and continuous replenishment.",
    description:
      "Our signature buffets feature generous spreads, elegant chafing displays, and attentive staff who keep every dish fresh and full. Add live stations for BBQ, pasta, or desserts to elevate the experience.",
    benefits: ["Generous variety", "Live cooking stations", "Continuous replenishment", "Elegant display setup", "Vegetarian options"],
    events: ["Weddings", "Corporate Events", "Family Functions", "Religious Gatherings", "Community Dinners"],
  },
  {
    slug: "drop-off-catering",
    title: "Drop-Off Catering",
    icon: FaTruck,
    image: img("photo-1504674900247-0877df9cc836"),
    short: "Restaurant-quality food delivered hot and ready to serve at your venue.",
    description:
      "Perfect for casual gatherings and office meals — we prepare your full menu, package it professionally, and deliver it hot to your doorstep, ready to serve with disposable or premium serviceware.",
    benefits: ["Convenient & affordable", "Hot, fresh delivery", "Ready-to-serve packaging", "Flexible order sizes", "Punctual delivery windows"],
    events: ["Office Meetings", "Home Gatherings", "Study Groups", "Small Parties", "Iftar Dinners"],
  },
  {
    slug: "food-truck-catering",
    title: "Food Truck Catering",
    icon: FaShippingFast,
    image: img("photo-1565123409695-7b5ef63a2efb"),
    short: "A fun, interactive mobile kitchen experience for outdoor and casual events.",
    description:
      "Bring energy to your event with our mobile catering setup. Guests love watching fresh food prepared on the spot — ideal for festivals, campus events, and relaxed outdoor celebrations.",
    benefits: ["Interactive experience", "Fresh on-the-spot cooking", "Great for outdoor venues", "Crowd-friendly service", "Memorable atmosphere"],
    events: ["Festivals", "College Events", "Outdoor Parties", "Community Fairs", "Sports Events"],
  },
  {
    slug: "bbq-catering",
    title: "Barbecue (BBQ) Catering",
    icon: FaFire,
    image: img("photo-1544025162-d76694265947"),
    short: "Smoky, charcoal-grilled BBQ prepared live — tikka, kebabs, grills, and more.",
    description:
      "Our BBQ specialists grill live at your venue: seekh kebabs, chicken tikka, malai boti, chops, and continental grills — all marinated in signature spices and served sizzling hot off the coals.",
    benefits: ["Live charcoal grilling", "Signature marinades", "Halal certified meats", "Grill masters on site", "Indoor & outdoor setups"],
    events: ["BBQ Nights", "Weddings", "Farmhouse Parties", "Corporate Retreats", "Family Gatherings"],
  },
  {
    slug: "boxed-lunch-catering",
    title: "Boxed Lunch Catering",
    icon: FaBoxOpen,
    image: img("photo-1546069901-ba9599a7e63c"),
    short: "Individually packed, hygienic meal boxes for offices, schools, and events.",
    description:
      "Clean, convenient, and consistent — our boxed lunches are individually packed with balanced portions, ideal for training sessions, school events, and distributions where hygiene and speed matter.",
    benefits: ["Individually sealed boxes", "Hygienic preparation", "Balanced portions", "Easy distribution", "Budget-friendly"],
    events: ["Office Trainings", "School Events", "Seminars", "Field Trips", "Charity Distributions"],
  },
  {
    slug: "childrens-catering",
    title: "Children's Catering",
    icon: FaChild,
    image: img("photo-1464349095431-e9a21285b5f3"),
    short: "Fun, colorful, kid-approved menus for birthdays and school celebrations.",
    description:
      "We make children's parties delicious and stress-free with fun menus kids actually eat — mini burgers, nuggets, pasta, cupcakes, and colorful treats — prepared with extra care for allergies and hygiene.",
    benefits: ["Kid-friendly favorites", "Allergy-conscious options", "Fun, colorful presentation", "Themed dessert tables", "Quick, cheerful service"],
    events: ["Birthday Parties", "School Functions", "Aqeeqah", "Playdates", "Kids' Carnivals"],
  },
  {
    slug: "health-conscious-catering",
    title: "Health-Conscious Catering",
    icon: FaLeaf,
    image: img("photo-1512621776951-a57141f2eefd"),
    short: "Fresh salads, grilled proteins, and balanced menus for mindful eaters.",
    description:
      "Nutritious never means boring. Our health-conscious menus feature fresh salads, grilled lean proteins, whole grains, and low-oil cooking — perfect for wellness events and health-focused hosts.",
    benefits: ["Fresh, seasonal produce", "Low-oil cooking methods", "Vegetarian & vegan options", "Calorie-conscious portions", "Diet customization"],
    events: ["Wellness Retreats", "Gym Events", "Corporate Wellness Days", "Health Seminars", "Private Dinners"],
  },
  {
    slug: "dessert-catering",
    title: "Dessert Catering",
    icon: FaBirthdayCake,
    image: img("photo-1488477181946-6428a0291777"),
    short: "Stunning dessert tables — from traditional mithai to continental patisserie.",
    description:
      "End every event on a sweet note with our dessert catering: elegant dessert tables, traditional mithai and kheer, continental cakes and pastries, and live stations for kulfi, jalebi, and more.",
    benefits: ["Elegant dessert tables", "Traditional & continental", "Live dessert stations", "Custom celebration cakes", "Beautiful presentation"],
    events: ["Weddings", "Birthdays", "Baby Showers", "Eid Celebrations", "Corporate Events"],
  },
  {
    slug: "ethnic-cuisine-catering",
    title: "Ethnic Cuisine Catering",
    icon: FaGlobeAsia,
    image: img("photo-1585937421612-70a008356fbe"),
    short: "Authentic Pakistani, Mughlai, Chinese, and continental cuisines under one roof.",
    description:
      "Travel the world through flavor. Our chefs master authentic Pakistani and Mughlai classics alongside Chinese, Arabic, and continental cuisines — each prepared with genuine techniques and spices.",
    benefits: ["Authentic recipes", "Specialist chefs per cuisine", "Multi-cuisine menus", "Traditional cooking methods", "Fusion options available"],
    events: ["Weddings", "Cultural Events", "Themed Parties", "Diplomatic Dinners", "Family Functions"],
  },
  {
    slug: "beverage-catering",
    title: "Beverage Catering",
    icon: FaCocktail,
    image: img("photo-1544145945-f90425340c7e"),
    short: "Refreshing beverage stations — fresh juices, mocktails, tea, and coffee bars.",
    description:
      "Complete your event with elegant beverage stations: fresh seasonal juices, signature mocktails, traditional doodh patti and green tea service, and barista-style coffee bars with professional presentation.",
    benefits: ["Signature mocktails", "Fresh juice stations", "Tea & coffee bars", "Elegant glassware", "Trained beverage staff"],
    events: ["Weddings", "Corporate Events", "High Teas", "Receptions", "Outdoor Events"],
  },
  {
    slug: "airline-catering",
    title: "Airline Catering Services",
    icon: FaPlane,
    image: img("photo-1436491865332-7a61a109cc05"),
    short: "Precision-packed, hygiene-certified in-flight meal solutions.",
    description:
      "We provide precision-portioned, hygienically sealed meal solutions suitable for charter flights and aviation clients — meeting strict food safety standards with consistent quality and on-time logistics.",
    benefits: ["Strict hygiene standards", "Precision portioning", "Sealed, safe packaging", "On-time logistics", "Menu rotation programs"],
    events: ["Charter Flights", "Private Aviation", "Crew Meals", "VIP Flights", "Cargo Logistics"],
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);

export const relatedServices = (slug, count = 3) => {
  const i = SERVICES.findIndex((s) => s.slug === slug);
  return Array.from({ length: count }, (_, k) => SERVICES[(i + k + 1) % SERVICES.length]);
};
