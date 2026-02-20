import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Properties", href: "#properties" },
  { label: "Locations", href: "#locations" },
  { label: "Why Invest", href: "#investment" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (!isHome) {
      navigate("/" + href);
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="navbar__inner">
          <Link className="navbar__logo" to="/">
            <img src="/logo.png" alt="E/DEN of Charm Realty" className="navbar__logo-img" />
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">E/DEN</span>
              <span className="navbar__logo-sub">CHARM REALTEAM</span>
            </div>
          </Link>

          <div className="navbar__links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="navbar__link"
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="navbar__actions">
            <a className="navbar__phone" href="tel:+639338106991">
              <Phone size={16} />
              <span>0933 810 6991</span>
            </a>
            <a
              className="btn btn--primary btn--sm"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
            >
              Book a Visit
            </a>
          </div>

          <button
            className="navbar__mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="mobile-menu__link"
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
            <a className="btn btn--primary" href="#contact" onClick={() => handleNavClick("#contact")}>
              Book a Free Site Visit
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
