import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Sun, Leaf } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
    alt: "Modern community park",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    alt: "Family-friendly neighborhood",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    alt: "Elegant home interior",
  },
];

const values = [
  { icon: Heart, label: "Family-First Design" },
  { icon: Users, label: "Vibrant Community" },
  { icon: Sun, label: "Open Green Spaces" },
  { icon: Leaf, label: "Sustainable Living" },
];

export default function Lifestyle() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section className="section lifestyle" ref={ref}>
      <div className="container">
        <div className="lifestyle__layout">
          <div className="lifestyle__images">
            <motion.div className="lifestyle__img lifestyle__img--main" style={{ y: y1 }}>
              <img src={images[0].src} alt={images[0].alt} loading="lazy" />
            </motion.div>
            <motion.div className="lifestyle__img lifestyle__img--secondary" style={{ y: y2 }}>
              <img src={images[1].src} alt={images[1].alt} loading="lazy" />
            </motion.div>
            <motion.div
              className="lifestyle__img lifestyle__img--accent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src={images[2].src} alt={images[2].alt} loading="lazy" />
            </motion.div>
          </div>

          <motion.div
            className="lifestyle__content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section__label">The E/DEN Lifestyle</span>
            <h2 className="section__title section__title--left">
              More Than a Home.
              <br />
              <span className="text-accent">A Way of Life.</span>
            </h2>
            <p className="lifestyle__text">
              Every E/DEN community is thoughtfully designed around the Filipino family's needs —
              with open parks, tree-lined streets, multi-purpose halls, and 24/7 security.
              We don't just build houses; we create neighborhoods where memories are made.
            </p>

            <div className="lifestyle__values">
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  className="lifestyle__value"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="lifestyle__value-icon">
                    <v.icon size={20} />
                  </div>
                  <span>{v.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
