import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const heroImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1920&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero" ref={ref}>
      <motion.div className="hero__bg" style={{ y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.img
            key={currentImage}
            src={heroImages[currentImage]}
            alt="Modern residential community"
            className="hero__bg-image"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
          />
        </AnimatePresence>
        <div className="hero__overlay" />
      </motion.div>

      <motion.div className="hero__content" style={{ opacity }}>
        <motion.h1
          className="hero__title"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.5}
        >
          Your Dream Home
          <br />
          <span className="hero__title-accent">Within Reach</span>
        </motion.h1>

        <motion.div
          className="hero__intro"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <p className="hero__welcome">
            Welcome to <strong className="hero__brand">E/DEN Team</strong> from{" "}
            <strong className="hero__brand hero__brand--gold">CHARM REALTY</strong>
          </p>
        </motion.div>

        <motion.p
          className="hero__tagline"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2.8}
        >
          Finding your perfect home is more than just a property
          <span className="hero__tagline-divider">—</span>
          it's about discovering your <em>sanctuary</em>.
        </motion.p>

        <motion.div
          className="hero__pillars"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3.5}
        >
          <div className="hero__pillar">
            <span className="hero__pillar-letter">E</span>
            <span className="hero__pillar-word">Elysium</span>
            <span className="hero__pillar-desc">A realm of happiness</span>
          </div>
          <div className="hero__pillar-sep" />
          <div className="hero__pillar">
            <span className="hero__pillar-letter">Den</span>
            <span className="hero__pillar-word">Retreat</span>
            <span className="hero__pillar-desc">Your cozy sanctuary</span>
          </div>
          <div className="hero__pillar-sep" />
          <div className="hero__pillar">
            <span className="hero__pillar-letter">Eden</span>
            <span className="hero__pillar-word">Paradise</span>
            <span className="hero__pillar-desc">Where dreams live</span>
          </div>
        </motion.div>

        <motion.p
          className="hero__closing"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4.3}
        >
          Bliss. Comfort. Paradise. — Every step of your journey, a delightful experience.
        </motion.p>

        <SearchBar />
      </motion.div>

      <div className="hero__scroll-indicator">
        <motion.div
          className="hero__scroll-line"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
