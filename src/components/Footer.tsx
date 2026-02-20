import { motion } from "framer-motion";
import { Facebook, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  Properties: ["Casa Verde", "Serena Townhouse", "Aria Single-Attached", "Luna Duplex", "Haven Residences"],
  Locations: ["Cavite", "Laguna", "Batangas", "Rizal", "Quezon Province"],
  Company: ["About Us", "Careers", "News & Updates", "Sustainability", "Awards"],
  Support: ["FAQs", "Payment Options", "Site Visit", "After-Sales", "Contact"],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer__top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="footer__brand">
            <a className="footer__logo" href="#hero">
              <img src="/logo.png" alt="E/DEN of Charm Realty" className="footer__logo-img" />
              <div className="footer__logo-text">
                <span className="footer__logo-name">E/DEN</span>
                <span className="footer__logo-sub">CHARM REALTEAM</span>
              </div>
            </a>
            <p className="footer__tagline">
              Building affordable dream homes in Calabarzon since 2014.
              HLURB Licensed. PAG-IBIG Accredited.
            </p>
            <div className="footer__social">
              <a href="http://facebook.com/calabarzon.holo" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="footer__links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer__column">
                <h4 className="footer__column-title">{category}</h4>
                <ul className="footer__list">
                  {links.map((link) => (
                    <li key={link}>
                      <a className="footer__link" href="#">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="footer__contact-bar">
          <div className="footer__contact-item">
            <MapPin size={16} />
            <span>Calabarzon, Philippines</span>
          </div>
          <div className="footer__contact-item">
            <Phone size={16} />
            <span>0933 810 6991</span>
          </div>
          <div className="footer__contact-item">
            <Mail size={16} />
            <span>eden.charmrealty@gmail.com</span>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} E/DEN of Charm Realty. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">HLURB License</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
