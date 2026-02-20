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
  Church,
  Heart,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } } };

const amenities = [
  { icon: Dumbbell, label: "Basketball Court" },
  { icon: TreePine, label: "Landscaped Parklane" },
  { icon: Users, label: "Clubhouse" },
  { icon: Sun, label: "Picnic Area" },
  { icon: Umbrella, label: "Playground" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Church, label: "Chapel" },
  { icon: ShieldCheck, label: "24/7 Security" },
];

const gallery = [
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80",
];

export default function AgapeyaTowns() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="agapeya-page">
      {/* HERO */}
      <section className="agapeya-hero">
        <div className="agapeya-hero__bg">
          <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=80" alt="Agapeya Towns" />
          <div className="agapeya-hero__overlay" />
        </div>
        <motion.div className="agapeya-hero__content" initial="hidden" animate="visible" variants={stagger}>
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Communities", to: "/#properties" }, { label: "Agapeya Towns" }]} />
          <motion.div className="agapeya-hero__badge" variants={fadeUp}><Heart size={14} /> Love Built Into Every Home</motion.div>
          <motion.h1 variants={fadeUp}>Agapeya <em>Towns</em></motion.h1>
          <motion.p className="agapeya-hero__loc" variants={fadeUp}><MapPin size={16} /> Matiat-ot, Calamba, Laguna</motion.p>
          <motion.p className="agapeya-hero__desc" variants={fadeUp}>A community rooted in love — offering spacious duplex homes with a chapel, pool, and the warmth of a tight-knit neighborhood.</motion.p>
          <motion.div className="agapeya-hero__actions" variants={fadeUp}>
            <a href="#agapeya-inquiry" className="btn btn--teal btn--lg">Book a Free Viewing <ArrowRight size={18} /></a>
            <a href="#twinhomes" className="btn btn--outline-teal btn--lg">See Twinhomes</a>
          </motion.div>
        </motion.div>
      </section>

      {/* OVERVIEW — CENTERED */}
      <section className="agapeya-overview section">
        <div className="container">
          <motion.div className="agapeya-overview__center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span className="agapeya-tag" variants={fadeUp}>About the Community</motion.span>
            <motion.h2 className="agapeya-heading" variants={fadeUp}>A Place Where <em>Love</em> Lives</motion.h2>
            <motion.p className="agapeya-overview__lead" variants={fadeUp}>
              Agapeya Towns is inspired by the Greek word "agape" — the highest form of love. This community is built with that philosophy: every home, every space, every amenity is designed to nurture the Filipino family.
            </motion.p>
          </motion.div>
          <motion.div className="agapeya-overview__features" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div className="agapeya-feature" variants={fadeUp}>
              <Home size={32} />
              <h3>Duplex Design</h3>
              <p>Semi-finished twinhomes with 3 bedrooms and generous lot sizes.</p>
            </motion.div>
            <motion.div className="agapeya-feature" variants={fadeUp}>
              <Church size={32} />
              <h3>Community Chapel</h3>
              <p>The only community in the area with its own place of worship.</p>
            </motion.div>
            <motion.div className="agapeya-feature" variants={fadeUp}>
              <Waves size={32} />
              <h3>Swimming Pool</h3>
              <p>Resort-style pool for family weekends and celebrations.</p>
            </motion.div>
            <motion.div className="agapeya-feature" variants={fadeUp}>
              <ShieldCheck size={32} />
              <h3>Ready For Occupancy</h3>
              <p>Move in immediately — no long waits, no construction delays.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AMENITIES — HORIZONTAL SCROLL FEEL */}
      <section className="agapeya-amenities section">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="agapeya-tag agapeya-tag--center">Amenities</span>
            <h2 className="agapeya-heading agapeya-heading--center">More Than a Home</h2>
            <p className="section__subtitle">Chapel, swimming pool, basketball court, and more — everything your family needs in one place.</p>
          </motion.div>
          <motion.div className="agapeya-amenities__row" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {amenities.map((a) => (
              <motion.div key={a.label} className="agapeya-amenity-tile" variants={fadeUp}>
                <a.icon size={26} />
                <span>{a.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOUSE MODEL — AGAPEYA TWINHOMES */}
      <section id="twinhomes" className="agapeya-model section">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="agapeya-tag agapeya-tag--center">Featured Model</span>
            <h2 className="agapeya-heading agapeya-heading--center">Agapeya Twinhomes</h2>
            <p className="section__subtitle">Duplex · Semi-Finished · Ready For Occupancy</p>
          </motion.div>

          <motion.div className="agapeya-model__card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="agapeya-model__img-side">
              <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80" alt="Agapeya Twinhomes" loading="lazy" />
              <div className="agapeya-model__label">Duplex / Twinhomes</div>
            </div>
            <div className="agapeya-model__detail-side">
              <h3>Agapeya Twinhomes</h3>
              <p className="agapeya-model__type">Duplex · Semi-Finished · Ready For Occupancy</p>

              <div className="agapeya-model__specs">
                <div className="agapeya-spec"><Maximize size={20} /><div><small>Lot Size</small><strong>70 – 80 sqm</strong></div></div>
                <div className="agapeya-spec"><Home size={20} /><div><small>Floor Area</small><strong>50 sqm</strong></div></div>
                <div className="agapeya-spec"><Bed size={20} /><div><small>Bedrooms</small><strong>3</strong></div></div>
                <div className="agapeya-spec"><Bath size={20} /><div><small>Toilet &amp; Bath</small><strong>1</strong></div></div>
              </div>

              <h4>Unit Features</h4>
              <ul className="agapeya-model__features">
                <li><CheckCircle2 size={14} /> Living Room</li>
                <li><CheckCircle2 size={14} /> Dining Room</li>
                <li><CheckCircle2 size={14} /> 1 Toilet and Bath</li>
                <li><CheckCircle2 size={14} /> Kitchenette with Cabinets</li>
                <li><CheckCircle2 size={14} /> 3 Bedrooms</li>
                <li><CheckCircle2 size={14} /> Patio</li>
                <li><CheckCircle2 size={14} /> Provision for 2 Carports</li>
              </ul>

              <a href="#agapeya-inquiry" className="btn btn--teal btn--lg">Inquire About Twinhomes <ArrowRight size={18} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GALLERY — BENTO GRID */}
      <section className="agapeya-gallery section">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="agapeya-tag agapeya-tag--center">Gallery</span>
            <h2 className="agapeya-heading agapeya-heading--center">Community Snapshots</h2>
          </motion.div>
          <motion.div className="agapeya-gallery__bento" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {gallery.map((src, i) => (
              <motion.div key={i} className="agapeya-gallery__cell" variants={fadeUp}>
                <img src={src} alt={`Agapeya ${i + 1}`} loading="lazy" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section className="agapeya-pricing section">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="agapeya-tag agapeya-tag--center">Payment Plans</span>
            <h2 className="agapeya-heading agapeya-heading--center">Invest in Love</h2>
          </motion.div>
          <motion.div className="agapeya-pricing__grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div className="agapeya-price-tile" variants={fadeUp}>
              <h3>PAG-IBIG</h3>
              <div className="agapeya-price-tile__amt">₱6,800<small>/mo</small></div>
              <p>30-year term</p>
              <ul><li><CheckCircle2 size={14} /> Government-backed</li><li><CheckCircle2 size={14} /> Low monthly</li></ul>
            </motion.div>
            <motion.div className="agapeya-price-tile agapeya-price-tile--highlight" variants={fadeUp}>
              <div className="agapeya-price-tile__tag">Recommended</div>
              <h3>Bank Financing</h3>
              <div className="agapeya-price-tile__amt">₱13,500<small>/mo</small></div>
              <p>20-year term</p>
              <ul><li><CheckCircle2 size={14} /> Faster approval</li><li><CheckCircle2 size={14} /> Flexible options</li></ul>
            </motion.div>
            <motion.div className="agapeya-price-tile" variants={fadeUp}>
              <h3>Spot Cash</h3>
              <div className="agapeya-price-tile__amt">12%<small>discount</small></div>
              <p>Full payment</p>
              <ul><li><CheckCircle2 size={14} /> Maximum savings</li><li><CheckCircle2 size={14} /> Fast turnover</li></ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LOCATION MAP */}
      <section className="agapeya-location section">
        <div className="container">
          <div className="agapeya-location__split">
            <motion.div className="agapeya-location__text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="agapeya-tag">Location</span>
              <h2 className="agapeya-heading">Matiat-ot, Calamba, Laguna</h2>
              <p>Centrally located in Calamba with quick access to commercial, industrial, and recreational hubs.</p>
              <ul className="agapeya-location__list">
                <li><MapPin size={16} /> Near Calamba Crossing</li>
                <li><MapPin size={16} /> Close to SLEX</li>
                <li><MapPin size={16} /> Near schools &amp; churches</li>
                <li><MapPin size={16} /> Minutes to hospitals &amp; malls</li>
              </ul>
            </motion.div>
            <motion.div className="agapeya-location__map" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <iframe
                title="Agapeya Towns Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.9!2d121.165!3d14.205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDEyJzE4LjAiTiAxMjHCsDA5JzU0LjAiRQ!5e0!3m2!1sen!2sph!4v1700000005000"
                width="100%" height="100%" style={{ border: 0, borderRadius: "16px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* INQUIRY — SPLIT LAYOUT */}
      <section id="agapeya-inquiry" className="agapeya-inquiry section">
        <div className="container">
          <motion.div className="agapeya-inquiry__card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="agapeya-inquiry__left">
              <span className="agapeya-tag agapeya-tag--light">Ready to Move In?</span>
              <h2 className="agapeya-heading agapeya-heading--light">Build Your Family's <em>Legacy</em></h2>
              <p>Schedule a free site visit or request a detailed computation today.</p>
              <div className="agapeya-inquiry__contacts">
                <a href="tel:+639338106991"><Phone size={18} /> 0933 810 6991</a>
                <a href="mailto:eden.charmrealty@gmail.com"><Mail size={18} /> eden.charmrealty@gmail.com</a>
              </div>
            </div>
            <form className="agapeya-inquiry__form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name *" required />
              <input type="email" placeholder="Email Address *" required />
              <input type="tel" placeholder="Phone Number *" required />
              <select defaultValue=""><option value="" disabled>Payment Preference</option><option>PAG-IBIG</option><option>Bank Financing</option><option>Spot Cash</option></select>
              <textarea placeholder="Message (optional)" rows={4} />
              <button type="submit" className="btn btn--teal btn--lg">Request Free Computation <ArrowRight size={18} /></button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
