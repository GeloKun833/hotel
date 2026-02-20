import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingInquire() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="floating-inquire"
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <AnimatePresence mode="wait">
            {expanded ? (
              <motion.div
                key="panel"
                className="floating-inquire__panel"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="floating-inquire__header">
                  <h4>Quick Inquiry</h4>
                  <button onClick={() => setExpanded(false)} aria-label="Close">
                    <X size={18} />
                  </button>
                </div>
                <form
                  className="floating-inquire__form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setExpanded(false);
                  }}
                >
                  <input type="text" placeholder="Full Name" required />
                  <input type="tel" placeholder="Phone Number" required />
                  <input type="email" placeholder="Email Address" required />
                  <select defaultValue="">
                    <option value="" disabled>
                      Interested In...
                    </option>
                    <option>Celadon Village</option>
                    <option>Bria Homes Executive</option>
                  </select>
                  <button type="submit" className="btn btn--primary">
                    Send Inquiry
                  </button>
                </form>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <motion.button
            className="floating-inquire__btn"
            onClick={() => setExpanded(!expanded)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {expanded ? <X size={22} /> : <MessageCircle size={22} />}
            {!expanded && <span>Inquire Now</span>}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
