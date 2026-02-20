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
  TreePine,
  Dumbbell,
  Sun,
  Users,
  ShieldCheck,
  Waves,
  Umbrella,
  Crown,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

const reveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const } },
});

const amenities = [
  { icon: Dumbbell, label: "Basketball Court" },
  { icon: TreePine, label: "Landscaped Parklane" },
  { icon: Users, label: "Clubhouse" },
  { icon: Sun, label: "Picnic Area" },
  { icon: Umbrella, label: "Playground" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Crown, label: "Premium Gates" },
];

const gallery = [
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
];

export default function VenturaReal() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="ventura-page">
      {/* HERO */}
      <section className="ventura-hero">
        <div className="ventura-hero__bg">
          <img src="https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1920&q=80" alt="Ventura Real" />
          <div className="ventura-hero__overlay" />
        </div>
        <motion.div className="ventura-hero__content" initial="hidden" animate="visible" variants={reveal()}>
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Communities", to: "/#properties" }, { label: "Ventura Real" }]} />
          <div className="ventura-hero__badge"><Crown size={14} /> Premium Community</div>
          <h1>Ventura <span>Real</span></h1>
          <p className="ventura-hero__loc"><MapPin size={16} /> Bubuyan, Calamba, Laguna</p>
          <p className="ventura-hero__desc">Where ambition meets home. A spacious single-attached community with generous lot sizes and resort-grade amenities.</p>
          <div className="ventura-hero__actions">
            <a href="#ventura-inquiry" className="btn btn--royal btn--lg">Schedule a Viewing <ArrowRight size={18} /></a>
            <a href="#sapphire" className="btn btn--outline-royal btn--lg">See Sapphire Model</a>
          </div>
        </motion.div>
      </section>

      {/* OVERVIEW — ASYMMETRIC */}
      <section className="ventura-overview section">
        <div className="container">
          <div className="ventura-overview__grid">
            <motion.div className="ventura-overview__visual" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal(0)}>
              <div className="ventura-overview__img-stack">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" alt="Exterior" loading="lazy" className="ventura-overview__img-main" />
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80" alt="Interior" loading="lazy" className="ventura-overview__img-accent" />
              </div>
            </motion.div>
            <motion.div className="ventura-overview__text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal(0.15)}>
              <span className="ventura-label">About Ventura Real</span>
              <h2 className="ventura-heading">Built for Those Who Aim Higher</h2>
              <p>Ventura Real delivers generous lot sizes up to 123 sqm and a 62.8 sqm floor area — one of the largest in the Calamba area. With a swimming pool, clubhouse, and premium landscaping, this is suburban living at its finest.</p>
              <div className="ventura-overview__badges">
                <span><ShieldCheck size={14} /> HLURB Licensed</span>
                <span><Crown size={14} /> Ready For Occupancy</span>
                <span><Home size={14} /> Single Attached</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AMENITIES — HEXAGONAL GRID */}
      <section className="ventura-amenities section">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal()}>
            <span className="ventura-label ventura-label--center">Amenities</span>
            <h2 className="ventura-heading ventura-heading--center">Resort-Grade Living</h2>
            <p className="section__subtitle">A premium suite of community amenities including a full-size swimming pool.</p>
          </motion.div>
          <div className="ventura-amenities__hex-grid">
            {amenities.map((a, i) => (
              <motion.div key={a.label} className="ventura-hex" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal(i * 0.06)}>
                <div className="ventura-hex__inner">
                  <a.icon size={28} />
                  <span>{a.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SAPPHIRE MODEL — FULL BLEED */}
      <section id="sapphire" className="ventura-model section">
        <div className="container">
          <motion.div className="ventura-model__header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal()}>
            <span className="ventura-label ventura-label--center">Flagship Model</span>
            <h2 className="ventura-heading ventura-heading--center">The Sapphire</h2>
            <p className="section__subtitle">Single Attached · Bare Type · Ready For Occupancy</p>
          </motion.div>
          <motion.div className="ventura-model__showcase" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal(0.1)}>
            <div className="ventura-model__image">
              <img src="https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=900&q=80" alt="Sapphire Model" loading="lazy" />
              <div className="ventura-model__ribbon">RFO</div>
            </div>
            <div className="ventura-model__info">
              <h3>Sapphire Model</h3>
              <p className="ventura-model__sub">Single Attached · Bare Type</p>

              <div className="ventura-model__specs">
                <div className="ventura-spec"><Maximize size={20} /><div><small>Lot Size</small><strong>85 – 123 sqm</strong></div></div>
                <div className="ventura-spec"><Home size={20} /><div><small>Floor Area</small><strong>62.8 sqm</strong></div></div>
                <div className="ventura-spec"><Bed size={20} /><div><small>Bedrooms</small><strong>Provision for 2</strong></div></div>
                <div className="ventura-spec"><Bath size={20} /><div><small>Toilet &amp; Bath</small><strong>1</strong></div></div>
              </div>

              <h4>Unit Features</h4>
              <ul className="ventura-model__features">
                <li><CheckCircle2 size={15} /> Living Room</li>
                <li><CheckCircle2 size={15} /> Dining Room</li>
                <li><CheckCircle2 size={15} /> Kitchen</li>
                <li><CheckCircle2 size={15} /> Service Area</li>
                <li><CheckCircle2 size={15} /> 1 Toilet and Bath</li>
                <li><CheckCircle2 size={15} /> Provision for 2 Bedrooms</li>
                <li><CheckCircle2 size={15} /> Patio</li>
                <li><CheckCircle2 size={15} /> Provision for Carport</li>
              </ul>

              <a href="#ventura-inquiry" className="btn btn--royal btn--lg">Inquire About Sapphire <ArrowRight size={18} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GALLERY — OFFSET GRID */}
      <section className="ventura-gallery section">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal()}>
            <span className="ventura-label ventura-label--center">Gallery</span>
            <h2 className="ventura-heading ventura-heading--center">Explore Ventura Real</h2>
          </motion.div>
          <div className="ventura-gallery__grid">
            {gallery.map((src, i) => (
              <motion.div key={i} className="ventura-gallery__item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal(i * 0.07)}>
                <img src={src} alt={`Ventura Real ${i + 1}`} loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="ventura-pricing section">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal()}>
            <span className="ventura-label ventura-label--center">Investment Plans</span>
            <h2 className="ventura-heading ventura-heading--center">Choose Your Plan</h2>
          </motion.div>
          <div className="ventura-pricing__cards">
            <motion.div className="ventura-price-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal(0)}>
              <h3>PAG-IBIG</h3>
              <div className="ventura-price-card__amount">₱7,200<small>/mo</small></div>
              <p>30-year term</p>
              <ul><li><CheckCircle2 size={14} /> Government-backed</li><li><CheckCircle2 size={14} /> Low monthly</li></ul>
            </motion.div>
            <motion.div className="ventura-price-card ventura-price-card--featured" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal(0.1)}>
              <div className="ventura-price-card__badge">Best Value</div>
              <h3>Bank Financing</h3>
              <div className="ventura-price-card__amount">₱14,800<small>/mo</small></div>
              <p>20-year term</p>
              <ul><li><CheckCircle2 size={14} /> Flexible terms</li><li><CheckCircle2 size={14} /> Higher loan cap</li></ul>
            </motion.div>
            <motion.div className="ventura-price-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal(0.2)}>
              <h3>Spot Cash</h3>
              <div className="ventura-price-card__amount">15%<small>off</small></div>
              <p>One-time payment</p>
              <ul><li><CheckCircle2 size={14} /> Biggest discount</li><li><CheckCircle2 size={14} /> Immediate turnover</li></ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOCATION MAP */}
      <section className="ventura-location section">
        <div className="container">
          <div className="ventura-location__card">
            <motion.div className="ventura-location__map" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal(0)}>
              <iframe
                title="Ventura Real Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.0!2d121.155!3d14.195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDExJzQyLjAiTiAxMjHCsDA5JzE4LjAiRQ!5e0!3m2!1sen!2sph!4v1700000003000"
                width="100%" height="100%" style={{ border: 0, borderRadius: "16px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
            <motion.div className="ventura-location__info" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal(0.1)}>
              <span className="ventura-label">Strategic Location</span>
              <h2 className="ventura-heading">Bubuyan, Calamba, Laguna</h2>
              <p>Located in an elevated area of Bubuyan, offering cool breezes and scenic views while staying close to urban conveniences.</p>
              <ul className="ventura-location__list">
                <li><MapPin size={16} /> Minutes from SLEX</li>
                <li><MapPin size={16} /> Near commercial centers</li>
                <li><MapPin size={16} /> Close to schools &amp; hospitals</li>
                <li><MapPin size={16} /> Elevated, flood-free terrain</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INQUIRY */}
      <section id="ventura-inquiry" className="ventura-inquiry section">
        <div className="container">
          <motion.div className="ventura-inquiry__wrap" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal()}>
            <div className="ventura-inquiry__header">
              <span className="ventura-label ventura-label--light">Invest Now</span>
              <h2 className="ventura-heading ventura-heading--light">Reserve Your <em>Sapphire Home</em></h2>
              <p>Get your free computation and schedule a private site viewing.</p>
            </div>
            <div className="ventura-inquiry__body">
              <form className="ventura-inquiry__form" onSubmit={(e) => e.preventDefault()}>
                <div className="ventura-inquiry__row"><input type="text" placeholder="First Name *" required /><input type="text" placeholder="Last Name *" required /></div>
                <input type="email" placeholder="Email *" required />
                <input type="tel" placeholder="Mobile Number *" required />
                <select defaultValue=""><option value="" disabled>Payment Plan</option><option>PAG-IBIG</option><option>Bank Financing</option><option>Spot Cash</option></select>
                <textarea placeholder="Questions or special requests" rows={3} />
                <button type="submit" className="btn btn--royal btn--lg">Request Computation <ArrowRight size={18} /></button>
              </form>
              <div className="ventura-inquiry__contacts">
                <a href="tel:+639338106991"><Phone size={18} /> 0933 810 6991</a>
                <a href="mailto:eden.charmrealty@gmail.com"><Mail size={18} /> eden.charmrealty@gmail.com</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
