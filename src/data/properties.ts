export interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  priceNumeric: number;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  tag?: string;
  description: string;
}

export const properties: Property[] = [
  {
    id: 1,
    name: "Casa Verde",
    location: "Cavite",
    price: "₱1.8M",
    priceNumeric: 1800000,
    bedrooms: 2,
    bathrooms: 1,
    area: "40 sqm",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    tag: "Best Seller",
    description: "A charming starter home with modern finishes and a welcoming garden space.",
  },
  {
    id: 2,
    name: "Serena Townhouse",
    location: "Laguna",
    price: "₱2.5M",
    priceNumeric: 2500000,
    bedrooms: 3,
    bathrooms: 2,
    area: "54 sqm",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    tag: "New Launch",
    description: "Spacious townhouse living in a family-friendly community with complete amenities.",
  },
  {
    id: 3,
    name: "Aria Single-Attached",
    location: "Batangas",
    price: "₱3.2M",
    priceNumeric: 3200000,
    bedrooms: 3,
    bathrooms: 2,
    area: "70 sqm",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    description: "Premium single-attached home with generous floor area and modern architecture.",
  },
  {
    id: 4,
    name: "Luna Duplex",
    location: "Rizal",
    price: "₱2.1M",
    priceNumeric: 2100000,
    bedrooms: 2,
    bathrooms: 1,
    area: "45 sqm",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    tag: "Promo",
    description: "Smart-designed duplex with efficient layouts and premium community features.",
  },
  {
    id: 5,
    name: "Haven Residences",
    location: "Quezon Province",
    price: "₱1.5M",
    priceNumeric: 1500000,
    bedrooms: 2,
    bathrooms: 1,
    area: "36 sqm",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
    description: "Affordable rowhouse in a master-planned community with parks and playgrounds.",
  },
  {
    id: 6,
    name: "Solana Estate",
    location: "Cavite",
    price: "₱4.5M",
    priceNumeric: 4500000,
    bedrooms: 4,
    bathrooms: 3,
    area: "110 sqm",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    tag: "Premium",
    description: "Expansive estate home with premium finishes, carport, and landscaped garden.",
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 5000, suffix: "+", label: "Happy Homeowners" },
  { value: 15, suffix: "+", label: "Communities Built" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 12, suffix: "+", label: "Years of Excellence" },
];

export interface Location {
  name: string;
  province: string;
  communities: number;
  description: string;
}

export const locations: Location[] = [
  {
    name: "Cavite",
    province: "Region IV-A",
    communities: 5,
    description: "Strategic location near Metro Manila with excellent road connectivity.",
  },
  {
    name: "Laguna",
    province: "Region IV-A",
    communities: 4,
    description: "Serene lakeside living with proximity to industrial hubs and universities.",
  },
  {
    name: "Batangas",
    province: "Region IV-A",
    communities: 3,
    description: "Coastal charm with growing infrastructure and tourism-driven appreciation.",
  },
  {
    name: "Rizal",
    province: "Region IV-A",
    communities: 2,
    description: "Elevated terrain with panoramic views and direct access to Metro Manila.",
  },
  {
    name: "Quezon Province",
    province: "Region IV-A",
    communities: 1,
    description: "Emerging market with affordable lots and high appreciation potential.",
  },
];
