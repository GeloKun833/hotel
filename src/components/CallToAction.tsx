import { motion } from "framer-motion";
import { Phone, Mail, Calendar, ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section id="contact" className="section cta">
      <div className="cta__bg">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Premium modern home"
          loading="lazy"
        />
        <div className="cta__bg-overlay" />
      </div>

      <div className="container">
        <motion.div
          className="cta__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section__label section__label--light">Take the First Step</span>
          <h2 className="cta__title">
            Ready to Find Your
            <br />
            <span className="cta__title-accent">Dream Home?</span>
          </h2>
          <p className="cta__subtitle">
            Book a free site viewing today and experience firsthand the quality,
            community, and value that E/DEN of Charm Realty offers.
          </p>

          <div className="cta__actions">
            <motion.a
              className="btn btn--gold btn--lg"
              href="tel:+639338106991"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar size={20} />
              Book a Free Site Viewing
              <ArrowRight size={18} />
            </motion.a>
          </div>

          <div className="cta__contact-methods">
            <a className="cta__contact-item" href="tel:+639338106991">
              <Phone size={18} />
              <div>
                <span className="cta__contact-label">Call Us</span>
                <span className="cta__contact-value">0933 810 6991</span>
              </div>
            </a>
            <a className="cta__contact-item" href="mailto:eden.charmrealty@gmail.com">
              <Mail size={18} />
              <div>
                <span className="cta__contact-label">Email Us</span>
                <span className="cta__contact-value">eden.charmrealty@gmail.com</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
