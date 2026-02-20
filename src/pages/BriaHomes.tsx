import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  ParkingSquare,
  Gamepad2,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Check,
  Bed,
  Bath,
  Maximize,
  Home,
  TreePine,
  Users,
  Sun,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

const slide = (dir: "left" | "right" | "up") => ({
  hidden: { opacity: 0, x: dir === "left" ? -40 : dir === "right" ? 40 : 0, y: dir === "up" ? 40 : 0 },
  visible: { opacity: 1, x: 0, y: 0 },
});

const amenities = [
  { icon: Gamepad2, label: "Covered Basketball Court" },
  { icon: TreePine, label: "Landscaped Parklane" },
  { icon: Users, label: "Clubhouse" },
  { icon: Sun, label: "Picnic Area" },
  { icon: GraduationCap, label: "Playground" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: ParkingSquare, label: "Visitor Parking" },
  { icon: Zap, label: "Underground Utilities" },
];

const houseModels = [
  {
    name: "Alea",
    type: "Bungalow · Fully Finished",
    lot: "81 sqm",
    floor: "36 sqm",
    beds: 2,
    baths: 1,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
    features: ["Living Area", "Dining Area", "Service Area", "1 Toilet and Bath", "2 Bedrooms", "1 Carport"],
  },
  {
    name: "Bettina",
    type: "Townhouse · Fully Finished",
    lot: "36 – 126 sqm",
    floor: "44 sqm",
    beds: 2,
    baths: 1,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    features: ["Living Area", "Dining Area", "Service Area", "1 Toilet and Bath", "2 Bedrooms", "1 Carport"],
    popular: true,
  },
  {
    name: "Elena",
    type: "Rowhouse · Fully Finished",
    lot: "36 – 126 sqm",
    floor: "24 sqm",
    beds: 1,
    baths: 1,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    features: ["Living Area", "Dining Area", "Service Area", "1 Toilet and Bath", "1 Bedroom", "1 Parking Space for Modern Tricycle"],
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
];

export default function BriaHomes() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bria-page">
      {/* HERO */}
      <section className="bria-hero">
        <div className="bria-hero__bg">
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80" alt="Bria Homes Executive" />
          <div className="bria-hero__overlay" />
        </div>
        <div className="bria-hero__content">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Communities", to: "/#properties" }, { label: "Bria Homes Executive" }]} />
          <motion.div className="bria-hero__text" initial="hidden" animate="visible" variants={slide("up")} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}>
            <div className="bria-hero__tag">Now Selling</div>
            <h1>Bria Homes <span>Executive</span></h1>
            <p className="bria-hero__loc"><MapPin size={16} /> Matiat-ot, Calamba, Laguna</p>
            <p>Bold architecture. Smart living. Three distinct house models for every Filipino family.</p>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bria-overview section">
        <div className="container">
          <div className="bria-overview__split">
            <motion.div className="bria-overview__left" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={slide("left")} transition={{ duration: 0.8 }}>
              <span className="bria-label">About the Project</span>
              <h2 className="bria-heading">Designed for <em>Every Family</em></h2>
              <p>Bria Homes Executive is a residential enclave in Matiat-ot, Calamba, Laguna — offering three fully finished house models from bungalow to rowhouse.</p>
              <div className="bria-overview__badges">
                <span><ShieldCheck size={15} /> HLURB Licensed</span>
                <span><Zap size={15} /> Fully Finished</span>
                <span><ParkingSquare size={15} /> With Carport</span>
              </div>
            </motion.div>
            <motion.div className="bria-overview__right" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={slide("right")} transition={{ duration: 0.8, delay: 0.1 }}>
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" alt="Modern home exterior" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="bria-amenities section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slide("up")} transition={{ duration: 0.8 }}>
            <span className="bria-label bria-label--center">Community Amenities</span>
            <h2 className="bria-heading bria-heading--center">Live the Executive Lifestyle</h2>
          </motion.div>
          <div className="bria-amenities__strip">
            {amenities.map((a, i) => (
              <motion.div key={a.label} className="bria-amenity-chip" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slide("up")} transition={{ duration: 0.5, delay: i * 0.05 }}>
                <a.icon size={20} /><span>{a.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOUSE MODELS */}
      <section id="bria-models" className="bria-models section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slide("up")} transition={{ duration: 0.8 }}>
            <span className="bria-label bria-label--center">House Models</span>
            <h2 className="bria-heading bria-heading--center">Select Your Home</h2>
          </motion.div>
          <div className="bria-models__list">
            {houseModels.map((m, i) => (
              <motion.div key={m.name} className={`bria-model ${m.popular ? "bria-model--popular" : ""}`} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slide("up")} transition={{ duration: 0.6, delay: i * 0.12 }}>
                <div className="bria-model__img">
                  <img src={m.image} alt={m.name} loading="lazy" />
                  {m.popular && <div className="bria-model__popular-tag">Best Value</div>}
                </div>
                <div className="bria-model__info">
                  <span className="bria-model__tagline">{m.type}</span>
                  <h3>{m.name} Model</h3>
                  <div className="bria-model__specs">
                    <span><Maximize size={13} /> Lot: {m.lot}</span>
                    <span><Home size={13} /> Floor: {m.floor}</span>
                    <span><Bed size={13} /> {m.beds} Bed</span>
                    <span><Bath size={13} /> {m.baths} Bath</span>
                  </div>
                  <ul className="bria-model__features">
                    {m.features.map((f) => (<li key={f}><Check size={14} /> {f}</li>))}
                  </ul>
                  <div className="bria-model__bottom">
                    <a href="#bria-inquiry" className="btn btn--dark btn--sm">Inquire Now</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bria-gallery section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slide("up")} transition={{ duration: 0.8 }}>
            <span className="bria-label bria-label--center">Gallery</span>
            <h2 className="bria-heading bria-heading--center">A Closer Look</h2>
          </motion.div>
          <div className="bria-gallery__masonry">
            {gallery.map((src, i) => (
              <motion.div key={i} className="bria-gallery__item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slide("up")} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <img src={src} alt={`Bria gallery ${i + 1}`} loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION MAP */}
      <section className="bria-location section">
        <div className="container">
          <motion.div className="bria-location__card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slide("up")} transition={{ duration: 0.8 }}>
            <div className="bria-location__map">
              <iframe
                title="Bria Homes Executive Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.8!2d121.17!3d14.20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDEyJzAwLjAiTiAxMjHCsDEwJzEyLjAiRQ!5e0!3m2!1sen!2sph!4v1700000001000"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="bria-location__details">
              <span className="bria-label">Strategic Location</span>
              <h2 className="bria-heading">Matiat-ot, Calamba, Laguna</h2>
              <p>Accessible via major Calamba roads, close to commercial and industrial hubs.</p>
              <div className="bria-location__points">
                <span><MapPin size={14} /> Near Calamba Public Market</span>
                <span><MapPin size={14} /> Close to schools</span>
                <span><MapPin size={14} /> SLEX accessible</span>
                <span><MapPin size={14} /> Near hospitals</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INQUIRY */}
      <section id="bria-inquiry" className="bria-inquiry section">
        <div className="container">
          <motion.div className="bria-inquiry__wrap" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slide("up")} transition={{ duration: 0.8 }}>
            <div className="bria-inquiry__left">
              <span className="bria-label bria-label--light">Reserve Now</span>
              <h2 className="bria-heading bria-heading--light">Secure Your <em>Executive Home</em></h2>
              <p>Fill out the form and our consultant will reach out within 24 hours.</p>
              <div className="bria-inquiry__contact">
                <a href="tel:+639338106991"><Phone size={18} /> 0933 810 6991</a>
                <a href="mailto:eden.charmrealty@gmail.com"><Mail size={18} /> eden.charmrealty@gmail.com</a>
              </div>
            </div>
            <form className="bria-inquiry__form" onSubmit={(e) => e.preventDefault()}>
              <div className="bria-inquiry__row"><input type="text" placeholder="First Name *" required /><input type="text" placeholder="Last Name *" required /></div>
              <input type="email" placeholder="Email Address *" required />
              <input type="tel" placeholder="Mobile Number *" required />
              <select defaultValue=""><option value="" disabled>Preferred Model</option><option>Alea (Bungalow)</option><option>Bettina (Townhouse)</option><option>Elena (Rowhouse)</option></select>
              <select defaultValue=""><option value="" disabled>Payment Method</option><option>PAG-IBIG</option><option>Bank Financing</option><option>In-House</option><option>Spot Cash</option></select>
              <button type="submit" className="btn btn--accent btn--lg">Request Free Computation <ArrowRight size={18} /></button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
