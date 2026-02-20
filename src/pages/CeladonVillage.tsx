import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TreePine,
  Shield,
  Dumbbell,
  Sun,
  Car,
  Users,
  Fence,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Bed,
  Bath,
  Maximize,
  Home,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const amenities = [
  { icon: Dumbbell, label: "Covered Basketball Court" },
  { icon: TreePine, label: "Landscaped Parklane" },
  { icon: Users, label: "Clubhouse" },
  { icon: Sun, label: "Picnic Area" },
  { icon: Fence, label: "Playground" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Car, label: "Wide Roads" },
  { icon: Home, label: "Gated Community" },
];

const gallery = [
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&q=80",
];

export default function CeladonVillage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="celadon-page">
      {/* HERO */}
      <section className="celadon-hero">
        <div className="celadon-hero__bg">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80" alt="Celadon Village" />
          <div className="celadon-hero__overlay" />
        </div>
        <div className="celadon-hero__content">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Communities", to: "/#properties" }, { label: "Celadon Village" }]} />
          <motion.div className="celadon-hero__text" initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}>
            <span className="celadon-hero__label">E/DEN of Charm Realty presents</span>
            <h1>Celadon Village</h1>
            <p className="celadon-hero__location"><MapPin size={16} /> Banadero, Calamba, Laguna</p>
            <p>Timeless elegance in the heart of Calamba. A master-planned community where nature meets modern Filipino living.</p>
            <div className="celadon-hero__actions">
              <a href="#inquiry" className="btn btn--primary btn--lg">Schedule a Visit <ArrowRight size={18} /></a>
              <a href="#models" className="btn btn--outline-light btn--lg">View House Model</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="celadon-overview section">
        <div className="container">
          <div className="celadon-overview__grid">
            <motion.div className="celadon-overview__image" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} transition={{ duration: 0.8 }}>
              <img src="https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80" alt="Community entrance" loading="lazy" />
            </motion.div>
            <motion.div className="celadon-overview__content" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} transition={{ duration: 0.8, delay: 0.15 }}>
              <span className="section__label">About the Community</span>
              <h2 className="celadon-section-title">A Place You'll Proudly Call Home</h2>
              <p>Celadon Village is an exclusive residential development nestled in Banadero, Calamba, Laguna. Designed for modern Filipino families seeking quality, accessibility, and value.</p>
              <ul className="celadon-overview__highlights">
                <li><CheckCircle2 size={18} /> HLURB Licensed &amp; PAG-IBIG Accredited</li>
                <li><CheckCircle2 size={18} /> Master-Planned Gated Community</li>
                <li><CheckCircle2 size={18} /> Flood-Free Elevated Terrain</li>
                <li><CheckCircle2 size={18} /> Minutes to Calamba Town Center</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="celadon-amenities section">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.8 }}>
            <span className="section__label">Community Amenities</span>
            <h2 className="celadon-section-title">Everything Your Family Needs</h2>
          </motion.div>
          <div className="celadon-amenities__grid">
            {amenities.map((a, i) => (
              <motion.div key={a.label} className="celadon-amenity" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5, delay: i * 0.06 }}>
                <div className="celadon-amenity__icon"><a.icon size={26} /></div>
                <span>{a.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOUSE MODEL — ARIANA */}
      <section id="models" className="celadon-models section">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.8 }}>
            <span className="section__label">House Model</span>
            <h2 className="celadon-section-title">The Ariana</h2>
            <p className="section__subtitle">Single Attached / Townhouse · Fully Finished</p>
          </motion.div>

          <motion.div className="celadon-model-showcase" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.8 }}>
            <div className="celadon-model-showcase__img">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Ariana Model" loading="lazy" />
              <span className="celadon-model-showcase__badge">Flagship Model</span>
            </div>
            <div className="celadon-model-showcase__info">
              <h3>Ariana Model</h3>
              <p className="celadon-model-showcase__type">Single Attached / Townhouse · Fully Finished</p>

              <div className="celadon-model-showcase__specs">
                <div className="celadon-spec"><Maximize size={18} /><div><small>Lot Size</small><strong>50 – 126 sqm</strong></div></div>
                <div className="celadon-spec"><Home size={18} /><div><small>Floor Area</small><strong>42 sqm</strong></div></div>
                <div className="celadon-spec"><Bed size={18} /><div><small>Bedrooms</small><strong>2</strong></div></div>
                <div className="celadon-spec"><Bath size={18} /><div><small>Toilet &amp; Bath</small><strong>1</strong></div></div>
              </div>

              <h4>Features</h4>
              <ul className="celadon-model-showcase__features">
                <li><CheckCircle2 size={14} /> Living Room</li>
                <li><CheckCircle2 size={14} /> Dining Room</li>
                <li><CheckCircle2 size={14} /> Kitchen</li>
                <li><CheckCircle2 size={14} /> 1 Toilet and Bath</li>
                <li><CheckCircle2 size={14} /> 2 Bedrooms</li>
                <li><CheckCircle2 size={14} /> Paved Service Area</li>
                <li><CheckCircle2 size={14} /> Paved Porch</li>
                <li><CheckCircle2 size={14} /> Paved Carpark</li>
                <li><CheckCircle2 size={14} /> Provision for Additional Carpark (Single Attached)</li>
              </ul>

              <a href="#inquiry" className="btn btn--primary btn--lg">Inquire About Ariana <ArrowRight size={18} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="celadon-gallery section">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.8 }}>
            <span className="section__label">Gallery</span>
            <h2 className="celadon-section-title">See the Community</h2>
          </motion.div>
          <div className="celadon-gallery__grid">
            {gallery.map((src, i) => (
              <motion.div key={i} className="celadon-gallery__item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <img src={src} alt={`Celadon Village gallery ${i + 1}`} loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="celadon-pricing section">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.8 }}>
            <span className="section__label">Pricing &amp; Payment</span>
            <h2 className="celadon-section-title">Affordable Payment Plans</h2>
          </motion.div>
          <div className="celadon-pricing__cards">
            <motion.div className="celadon-price-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }}>
              <h3>PAG-IBIG Financing</h3>
              <div className="celadon-price-card__amount">₱6,500<small>/mo</small></div>
              <p>30-year term at 6.5% interest</p>
              <ul><li><CheckCircle2 size={15} /> Low downpayment</li><li><CheckCircle2 size={15} /> Government-backed</li><li><CheckCircle2 size={15} /> Fixed rate options</li></ul>
            </motion.div>
            <motion.div className="celadon-price-card celadon-price-card--highlight" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6, delay: 0.1 }}>
              <span className="celadon-price-card__tag">Recommended</span>
              <h3>Bank Financing</h3>
              <div className="celadon-price-card__amount">₱12,800<small>/mo</small></div>
              <p>20-year term at competitive rates</p>
              <ul><li><CheckCircle2 size={15} /> Faster processing</li><li><CheckCircle2 size={15} /> Higher loan amount</li><li><CheckCircle2 size={15} /> Flexible terms</li></ul>
            </motion.div>
            <motion.div className="celadon-price-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6, delay: 0.2 }}>
              <h3>In-House Financing</h3>
              <div className="celadon-price-card__amount">₱15,200<small>/mo</small></div>
              <p>5-year term, zero interest promo</p>
              <ul><li><CheckCircle2 size={15} /> No bank required</li><li><CheckCircle2 size={15} /> Easy approval</li><li><CheckCircle2 size={15} /> Move in faster</li></ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOCATION MAP */}
      <section className="celadon-location section">
        <div className="container">
          <div className="celadon-location__grid">
            <motion.div className="celadon-location__map" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.8 }}>
              <iframe
                title="Celadon Village Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.5!2d121.16!3d14.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDEyJzM2LjAiTiAxMjHCsDA5JzM2LjAiRQ!5e0!3m2!1sen!2sph!4v1700000000000"
                width="100%" height="100%" style={{ border: 0, borderRadius: "16px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
            <motion.div className="celadon-location__info" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.8, delay: 0.1 }}>
              <span className="section__label">Location</span>
              <h2 className="celadon-section-title">Banadero, Calamba, Laguna</h2>
              <p>Strategically located in the growing city of Calamba with easy access to major highways and commercial centers.</p>
              <ul className="celadon-location__list">
                <li><MapPin size={16} /> Minutes to Calamba Town Center</li>
                <li><MapPin size={16} /> Near schools and universities</li>
                <li><MapPin size={16} /> Close to SLEX access</li>
                <li><MapPin size={16} /> Near hospitals and malls</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INQUIRY */}
      <section id="inquiry" className="celadon-inquiry section">
        <div className="container">
          <div className="celadon-inquiry__grid">
            <motion.div className="celadon-inquiry__info" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.8 }}>
              <span className="section__label">Get In Touch</span>
              <h2 className="celadon-section-title">Ready to Visit Celadon Village?</h2>
              <p>Book a free site viewing and experience the community firsthand.</p>
              <div className="celadon-inquiry__contacts">
                <a href="tel:+639338106991"><Phone size={18} /> 0933 810 6991</a>
                <a href="mailto:eden.charmrealty@gmail.com"><Mail size={18} /> eden.charmrealty@gmail.com</a>
              </div>
            </motion.div>
            <motion.form className="celadon-inquiry__form" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.8, delay: 0.15 }} onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name *" required />
              <input type="email" placeholder="Email Address *" required />
              <input type="tel" placeholder="Phone Number *" required />
              <select defaultValue=""><option value="" disabled>Select Unit Type</option><option>Single Attached</option><option>Townhouse</option></select>
              <textarea placeholder="Your Message (optional)" rows={4} />
              <button type="submit" className="btn btn--primary btn--lg">Book a Free Site Visit <ArrowRight size={18} /></button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
