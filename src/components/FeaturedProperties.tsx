import { motion } from "framer-motion";
import { Bed, Bath, Maximize, MapPin, ArrowRight } from "lucide-react";
import { properties } from "../data/properties";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function FeaturedProperties() {
  return (
    <section id="properties" className="section properties">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section__label">Featured Properties</span>
          <h2 className="section__title">
            Find Your Perfect <span className="text-accent">Home</span>
          </h2>
          <p className="section__subtitle">
            Explore our curated selection of affordable house and lot packages across
            Calabarzon's most sought-after locations.
          </p>
        </motion.div>

        <div className="properties__grid">
          {properties.map((property, i) => (
            <motion.article
              key={property.id}
              className="property-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
            >
              <div className="property-card__image-wrapper">
                <img
                  src={property.image}
                  alt={property.name}
                  className="property-card__image"
                  loading="lazy"
                />
                {property.tag && (
                  <span className="property-card__tag">{property.tag}</span>
                )}
                <div className="property-card__image-overlay">
                  <button className="btn btn--primary btn--sm">View Details</button>
                </div>
              </div>

              <div className="property-card__body">
                <div className="property-card__location">
                  <MapPin size={14} />
                  <span>{property.location}, Calabarzon</span>
                </div>

                <h3 className="property-card__name">{property.name}</h3>
                <p className="property-card__desc">{property.description}</p>

                <div className="property-card__features">
                  <div className="property-card__feature">
                    <Bed size={16} />
                    <span>{property.bedrooms} Bed{property.bedrooms > 1 ? "s" : ""}</span>
                  </div>
                  <div className="property-card__feature">
                    <Bath size={16} />
                    <span>{property.bathrooms} Bath{property.bathrooms > 1 ? "s" : ""}</span>
                  </div>
                  <div className="property-card__feature">
                    <Maximize size={16} />
                    <span>{property.area}</span>
                  </div>
                </div>

                <div className="property-card__footer">
                  <div className="property-card__price">
                    <span className="property-card__price-label">Starting at</span>
                    <span className="property-card__price-value">{property.price}</span>
                  </div>
                  <a className="property-card__link" href="#contact">
                    Inquire <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="properties__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a className="btn btn--outline btn--lg" href="#contact">
            View All Properties
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
