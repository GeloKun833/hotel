import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const communities = [
  {
    name: "Bria Homes Executive",
    tagline: "Bold Living, Smart Investment",
    location: "Matiat-ot, Calamba, Laguna",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
    link: "/bria-homes-executive",
    cta: "Explore Bria Homes",
    accent: "community-card--slate",
  },
  {
    name: "Celadon Village",
    tagline: "Timeless Elegance, Naturally Yours",
    location: "Banadero, Calamba, Laguna",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    link: "/celadon-village",
    cta: "Explore Celadon Village",
    accent: "community-card--green",
  },
  {
    name: "Valle Dulce",
    tagline: "Sweet Living by the Valley",
    location: "Bubuyan, Calamba, Laguna",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
    link: "/valle-dulce",
    cta: "Explore Valle Dulce",
    accent: "community-card--terra",
  },
  {
    name: "Ventura Real",
    tagline: "Where Ambition Meets Home",
    location: "Bubuyan, Calamba, Laguna",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=900&q=80",
    link: "/ventura-real",
    cta: "Explore Ventura Real",
    accent: "community-card--royal",
  },
  {
    name: "Agapeya Towns",
    tagline: "Love Built Into Every Home",
    location: "Matiat-ot, Calamba, Laguna",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80",
    link: "/agapeya-towns",
    cta: "Explore Agapeya Towns",
    accent: "community-card--teal",
  },
];

export default function CommunityCards() {
  return (
    <section id="properties" className="section communities">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <span className="section__label">Our Communities</span>
          <h2 className="section__title">
            Choose Your <span className="text-accent">Community</span>
          </h2>
          <p className="section__subtitle">
            Five distinct living experiences across Calamba, Laguna — each with its own
            character, design, and lifestyle.
          </p>
        </motion.div>

        <div className="communities__grid">
          {communities.map((c, i) => (
            <motion.div
              key={c.name}
              className={`community-card ${c.accent}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <div className="community-card__image-wrap">
                <img src={c.image} alt={c.name} loading="lazy" />
                <div className="community-card__overlay" />
              </div>

              <div className="community-card__content">
                <span className="community-card__tagline">{c.tagline}</span>
                <h3 className="community-card__name">{c.name}</h3>
                <span className="community-card__location">{c.location}</span>
                <Link to={c.link} className="community-card__cta">
                  <span>{c.cta}</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
