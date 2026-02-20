import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Bed,
  Bath,
  Maximize,
  Home,
  Waves,
  TreePine,
  Dumbbell,
  Sun,
  Users,
  ShieldCheck,
  Umbrella,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const amenities = [
  { icon: Dumbbell, label: "Basketball Court" },
  { icon: TreePine, label: "Landscaped Parklane" },
  { icon: Users, label: "Clubhouse" },
  { icon: Sun, label: "Picnic Area" },
  { icon: Umbrella, label: "Playground" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Home, label: "Gated Community" },
];

const gallery = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
];

export default function ValleDulce() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="valle-page">
      {/* HERO */}
      <section className="valle-hero">
        <div className="valle-hero__bg">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" alt="Valle Dulce" />
          <div className="valle-hero__overlay" />
        </div>
        <motion.div
          className="valle-hero__content"
          initial="hidden" animate="visible" variants={fadeUp}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Communities", to: "/#properties" }, { label: "Valle Dulce" }]} />
          <span className="valle-hero__badge">Ready For Occupancy</span>
          <h1>Valle <em>Dulce</em></h1>
          <p className="valle-hero__loc"><MapPin size={16} /> Bubuyan, Calamba, Laguna</p>
          <p className="valle-hero__desc">Sweet living by the valley. A refreshing community with resort-style amenities and the warmth of Filipino family life.</p>
          <div className="valle-hero__actions">
            <a href="#valle-inquiry" className="btn btn--terra btn--lg">Schedule a Visit <ArrowRight size={18} /></a>
            <a href="#caroline" className="btn btn--outline-warm btn--lg">View Caroline Model</a>
          </div>
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <section className="valle-overview section">
        <div className="container">
          <div className="valle-overview__grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }}>
              <span className="valle-tag">About the Community</span>
              <h2 className="valle-heading">Where Comfort Meets Nature</h2>
              <p>Valle Dulce offers a serene residential experience in Bubuyan, Calamba. Enjoy a swimming pool, landscaped parks, and the fresh air of an elevated community — all at an affordable price point.</p>
              <div className="valle-overview__stats">
                <div className="valle-stat"><strong>70–85</strong><small>sqm Lot Sizes</small></div>
                <div className="valle-stat"><strong>29.16</strong><small>sqm Floor Area</small></div>
                <div className="valle-stat"><strong>RFO</strong><small>Move-in Ready</small></div>
              </div>
            </motion.div>
            <motion.div className="valle-overview__img" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8, delay: 0.15 }}>
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" alt="Valle Dulce" loading="lazy" />
              <div className="valle-overview__accent-block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="valle-amenities section">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }}>
            <span className="valle-tag valle-tag--center">Amenities</span>
            <h2 className="valle-heading valle-heading--center">Resort-Style Living</h2>
            <p className="section__subtitle">Including a swimming pool — a rare find at this price range.</p>
          </motion.div>
          <div className="valle-amenities__grid">
            {amenities.map((a, i) => (
              <motion.div key={a.label} className="valle-amenity" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.4, delay: i * 0.06 }}>
                <div className="valle-amenity__icon"><a.icon size={24} /></div>
                <span>{a.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOUSE MODEL — CAROLINE */}
      <section id="caroline" className="valle-model section">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }}>
            <span className="valle-tag valle-tag--center">Featured Model</span>
            <h2 className="valle-heading valle-heading--center">The Caroline</h2>
            <p className="section__subtitle">Single Attached · Bare Type · Ready For Occupancy</p>
          </motion.div>

          <motion.div className="valle-model__card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }}>
            <div className="valle-model__visual">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Caroline Model" loading="lazy" />
              <div className="valle-model__rfo-badge">Ready For Occupancy</div>
            </div>
            <div className="valle-model__details">
              <h3>Caroline Model</h3>
              <p className="valle-model__sub">Single Attached · Bare Type</p>

              <div className="valle-model__specs">
                <div><Maximize size={18} /><div><small>Lot Size</small><strong>70 – 85 sqm</strong></div></div>
                <div><Home size={18} /><div><small>Floor Area</small><strong>29.16 sqm</strong></div></div>
                <div><Bed size={18} /><div><small>Bedroom</small><strong>Provision for 1</strong></div></div>
                <div><Bath size={18} /><div><small>Toilet &amp; Bath</small><strong>1</strong></div></div>
              </div>

              <h4>Unit Features</h4>
              <ul className="valle-model__features">
                <li><CheckCircle2 size={14} /> Living Room</li>
                <li><CheckCircle2 size={14} /> Dining Area</li>
                <li><CheckCircle2 size={14} /> Kitchen</li>
                <li><CheckCircle2 size={14} /> Service Area</li>
                <li><CheckCircle2 size={14} /> 1 Toilet and Bath</li>
                <li><CheckCircle2 size={14} /> Provision for 1 Bedroom</li>
                <li><CheckCircle2 size={14} /> 1 Carport</li>
              </ul>

              <a href="#valle-inquiry" className="btn btn--terra btn--lg">Inquire About Caroline <ArrowRight size={18} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="valle-gallery section">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }}>
            <span className="valle-tag valle-tag--center">Gallery</span>
            <h2 className="valle-heading valle-heading--center">Inside Valle Dulce</h2>
          </motion.div>
          <div className="valle-gallery__grid">
            {gallery.map((src, i) => (
              <motion.div key={i} className="valle-gallery__item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }}>
                <img src={src} alt={`Valle Dulce ${i + 1}`} loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="valle-pricing section">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }}>
            <span className="valle-tag valle-tag--center">Pricing</span>
            <h2 className="valle-heading valle-heading--center">Flexible Payment Options</h2>
          </motion.div>
          <div className="valle-pricing__cards">
            <motion.div className="valle-price" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
              <h3>PAG-IBIG</h3>
              <div className="valle-price__amt">₱5,800<small>/mo</small></div>
              <p>Up to 30-year term</p>
              <ul><li><CheckCircle2 size={14} /> Lowest monthly</li><li><CheckCircle2 size={14} /> Government-backed</li></ul>
            </motion.div>
            <motion.div className="valle-price valle-price--featured" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="valle-price__tag">Most Popular</div>
              <h3>Bank Financing</h3>
              <div className="valle-price__amt">₱11,500<small>/mo</small></div>
              <p>20-year term</p>
              <ul><li><CheckCircle2 size={14} /> Faster processing</li><li><CheckCircle2 size={14} /> Higher loan value</li></ul>
            </motion.div>
            <motion.div className="valle-price" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <h3>Spot Cash</h3>
              <div className="valle-price__amt">10%<small>discount</small></div>
              <p>One-time payment</p>
              <ul><li><CheckCircle2 size={14} /> Biggest savings</li><li><CheckCircle2 size={14} /> Immediate turnover</li></ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOCATION MAP */}
      <section className="valle-location section">
        <div className="container">
          <div className="valle-location__split">
            <motion.div className="valle-location__info" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }}>
              <span className="valle-tag">Location</span>
              <h2 className="valle-heading">Bubuyan, Calamba, Laguna</h2>
              <p>Enjoy the elevated terrain of Bubuyan with convenient access to Calamba's urban amenities.</p>
              <ul className="valle-location__list">
                <li><MapPin size={16} /> Near Calamba City Center</li>
                <li><MapPin size={16} /> Close to SLEX interchange</li>
                <li><MapPin size={16} /> Accessible to schools &amp; hospitals</li>
                <li><MapPin size={16} /> Surrounded by nature</li>
              </ul>
            </motion.div>
            <motion.div className="valle-location__map" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8, delay: 0.1 }}>
              <iframe
                title="Valle Dulce Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.2!2d121.15!3d14.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDExJzI0LjAiTiAxMjHCsDA5JzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1700000002000"
                width="100%" height="100%" style={{ border: 0, borderRadius: "16px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* INQUIRY */}
      <section id="valle-inquiry" className="valle-inquiry section">
        <div className="container">
          <div className="valle-inquiry__grid">
            <motion.div className="valle-inquiry__text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }}>
              <span className="valle-tag">Inquire Now</span>
              <h2 className="valle-heading">Start Your Valle Dulce Journey</h2>
              <p>Get a free computation and schedule a site visit today.</p>
              <div className="valle-inquiry__contacts">
                <a href="tel:+639338106991"><Phone size={18} /> 0933 810 6991</a>
                <a href="mailto:eden.charmrealty@gmail.com"><Mail size={18} /> eden.charmrealty@gmail.com</a>
              </div>
            </motion.div>
            <motion.form className="valle-inquiry__form" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8, delay: 0.1 }} onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name *" required />
              <input type="email" placeholder="Email Address *" required />
              <input type="tel" placeholder="Phone Number *" required />
              <select defaultValue=""><option value="" disabled>Financing Option</option><option>PAG-IBIG</option><option>Bank Financing</option><option>Spot Cash</option></select>
              <textarea placeholder="Message (optional)" rows={4} />
              <button type="submit" className="btn btn--terra btn--lg">Book a Free Site Visit <ArrowRight size={18} /></button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
