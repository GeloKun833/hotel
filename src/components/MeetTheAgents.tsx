import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Sparkles, Cake } from "lucide-react";

interface Agent {
  id: number;
  name: string;
  photo: string;
  birthday?: string;
  details: { icon: typeof Sparkles; text: string }[];
}

const agents: Agent[] = [
  {
    id: 0,
    name: "Enzo Senador",
    photo: "/enzo.jpg",
    birthday: "February 9, 1990",
    details: [
      { icon: Sparkles, text: "Digital Creator" },
      { icon: MapPin, text: "Calamba" },
      { icon: Briefcase, text: "Charm Realty" },
      { icon: GraduationCap, text: "Looc National High School" },
      { icon: GraduationCap, text: "New Era University" },
    ],
  },
  {
    id: 1,
    name: "April Faye Almozara Oporto",
    photo: "/april.jpg",
    details: [
      { icon: Sparkles, text: "Digital Creator" },
      { icon: MapPin, text: "Calamba" },
      { icon: Briefcase, text: "Charm Realty" },
      { icon: GraduationCap, text: "Looc National High School" },
      { icon: GraduationCap, text: "New Era University" },
    ],
  },
  {
    id: 2,
    name: "Farrah Dumangas Senador",
    photo: "/tita bevs.jpg",
    birthday: "November 29, 1963",
    details: [
      { icon: Sparkles, text: "Digital Creator" },
      { icon: MapPin, text: "Calamba" },
      { icon: Briefcase, text: "Charm Realty" },
      { icon: GraduationCap, text: "Calape Polytechnic College / Bohol Island State University" },
    ],
  },
];

export default function MeetTheAgents() {
  const [phase, setPhase] = useState<"intro" | "ready">("intro");
  const [activeAgent, setActiveAgent] = useState(0);
  const [imageIndex, setImageIndex] = useState(-1); // -1 = group photo

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("ready");
      setImageIndex(0);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase !== "ready") return;
    setActiveAgent(imageIndex === -1 ? 0 : imageIndex);
  }, [imageIndex, phase]);

  const handleAgentClick = (idx: number) => {
    setActiveAgent(idx);
    setImageIndex(idx);
  };

  const current = agents[activeAgent];

  return (
    <section id="agents" className="section agents-section">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <span className="section__label">Our Team</span>
          <h2 className="section__title">
            Meet the <span className="text-accent">Agents</span>
          </h2>
          <p className="section__subtitle">
            Your trusted real estate professionals — dedicated, passionate, and ready
            to help you find your dream home in Calabarzon.
          </p>
        </motion.div>

        <div className="agents__layout">
          {/* LEFT — Photo Circle */}
          <motion.div
            className="agents__photo-side"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="agents__circle-wrap">
              {/* Intro spin animation */}
              {phase === "intro" && (
                <motion.div
                  className="agents__circle-img"
                  initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
                  animate={{ rotate: 360, scale: 1, opacity: 1 }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] as const }}
                >
                  <img src="/photo.jpg" alt="E/DEN Team" />
                </motion.div>
              )}

              {/* Agent photos after intro */}
              {phase === "ready" && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={imageIndex}
                    className="agents__circle-img"
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                  >
                    <img
                      src={agents[imageIndex >= 0 ? imageIndex : 0].photo}
                      alt={agents[imageIndex >= 0 ? imageIndex : 0].name}
                    />
                  </motion.div>
                </AnimatePresence>
              )}

              {/* Decorative ring */}
              <div className="agents__circle-ring" />
              <div className="agents__circle-ring agents__circle-ring--outer" />
            </div>

            {/* Agent selector thumbnails */}
            <div className="agents__thumbs">
              {agents.map((a, i) => (
                <motion.button
                  key={a.id}
                  className={`agents__thumb ${activeAgent === i ? "agents__thumb--active" : ""}`}
                  onClick={() => handleAgentClick(i)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={a.photo} alt={a.name} />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Agent Info */}
          <motion.div
            className="agents__info-side"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                className="agent-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <div className="agent-card__header">
                  <h3 className="agent-card__name">{current.name}</h3>
                  {current.birthday && (
                    <span className="agent-card__birthday">
                      <Cake size={15} /> {current.birthday}
                    </span>
                  )}
                </div>

                <ul className="agent-card__details">
                  {current.details.map((d, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                    >
                      <d.icon size={18} />
                      <span>{d.text}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="agent-card__cta">
                  <a href="tel:+639338106991" className="btn btn--primary btn--lg">
                    Contact {current.name.split(" ")[0]}
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
