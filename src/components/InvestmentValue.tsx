import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Wallet, CalendarCheck, ShieldCheck, Award, Landmark } from "lucide-react";
import { stats } from "../data/properties";
import { useCounter } from "../hooks/useCounter";

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounter(value, 2200, inView);

  return (
    <div className="stat-counter" ref={ref}>
      <span className="stat-counter__value">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="stat-counter__label">{label}</span>
    </div>
  );
}

const benefits = [
  {
    icon: TrendingUp,
    title: "High Appreciation",
    desc: "Calabarzon properties appreciate 8-12% annually, outperforming traditional investments.",
  },
  {
    icon: Wallet,
    title: "Flexible Payments",
    desc: "Low downpayment schemes and in-house financing options to fit your budget.",
  },
  {
    icon: CalendarCheck,
    title: "Early Move-In",
    desc: "Ready-for-occupancy and pre-selling units available with fast turnover timelines.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Developer",
    desc: "HLURB-licensed with over a decade of delivering quality homes on time.",
  },
  {
    icon: Award,
    title: "Award-Winning Design",
    desc: "Modern architectural designs that maximize space, ventilation, and natural light.",
  },
  {
    icon: Landmark,
    title: "PAG-IBIG Accredited",
    desc: "Take advantage of government housing loans with low interest rates.",
  },
];

export default function InvestmentValue() {
  return (
    <section id="investment" className="section investment">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section__label">Why Invest</span>
          <h2 className="section__title">
            Smart Investment, <span className="text-accent">Secure Future</span>
          </h2>
          <p className="section__subtitle">
            Owning a home is more than a milestone — it's the smartest financial decision
            you can make for your family's future.
          </p>
        </motion.div>

        <motion.div
          className="investment__stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </motion.div>

        <div className="investment__benefits">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              className="benefit-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="benefit-card__icon">
                <benefit.icon size={28} />
              </div>
              <h3 className="benefit-card__title">{benefit.title}</h3>
              <p className="benefit-card__desc">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
