import { motion } from "framer-motion";
import { MapPin, Building2, TreePine, GraduationCap, ShoppingBag, Train } from "lucide-react";
import { locations } from "../data/properties";

const amenities = [
  { icon: Building2, label: "Business Districts" },
  { icon: TreePine, label: "Parks & Recreation" },
  { icon: GraduationCap, label: "Schools & Universities" },
  { icon: ShoppingBag, label: "Shopping Centers" },
  { icon: Train, label: "Transport Hubs" },
];

export default function LocationHighlight() {
  return (
    <section id="locations" className="section locations">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section__label">Prime Locations</span>
          <h2 className="section__title">
            Strategically Located in <span className="text-accent">Calabarzon</span>
          </h2>
          <p className="section__subtitle">
            Our communities are built in the Philippines' fastest-growing economic corridor,
            offering the perfect balance of accessibility and tranquility.
          </p>
        </motion.div>

        <div className="locations__layout">
          <motion.div
            className="locations__map"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="locations__map-visual">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Calabarzon aerial view"
                loading="lazy"
              />
              <div className="locations__map-overlay">
                {locations.map((loc, i) => (
                  <motion.div
                    key={loc.name}
                    className="locations__pin"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${15 + i * 16}%`,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 200 }}
                  >
                    <motion.div
                      className="locations__pin-pulse"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                    <MapPin size={20} />
                    <span className="locations__pin-label">{loc.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="locations__list">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                className="location-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="location-card__header">
                  <h3 className="location-card__name">{loc.name}</h3>
                  <span className="location-card__count">
                    {loc.communities} {loc.communities === 1 ? "Community" : "Communities"}
                  </span>
                </div>
                <p className="location-card__desc">{loc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="locations__amenities"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="locations__amenities-title">Nearby Amenities</h3>
          <div className="locations__amenities-grid">
            {amenities.map((amenity, i) => (
              <motion.div
                key={amenity.label}
                className="amenity-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="amenity-item__icon">
                  <amenity.icon size={24} />
                </div>
                <span>{amenity.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
