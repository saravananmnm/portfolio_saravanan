import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Phone, Globe } from "lucide-react";
import { personal, competencies } from "../data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} style={{ padding: "120px 32px", maxWidth: "1100px", margin: "0 auto" }}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ marginBottom: "64px" }}
      >
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.75rem",
            color: "var(--accent-cyan)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          01 / About
        </p>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#f0f4ff",
          }}
        >
          The Person Behind
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #00d4ff, #0066ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            the Code
          </span>
        </h2>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "48px",
          alignItems: "start",
        }}
      >
        {/* Left: bio */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
        >
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "28px" }}>
            {personal.summary}
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1rem", marginBottom: "36px" }}>
            I specialize in building enterprise-grade Flutter apps that handle thousands of concurrent users, real-time
            WebSocket data streams, and complex offline scenarios — all with pixel-perfect UIs derived from Figma designs.
          </p>

          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { icon: <Mail size={15} />, label: personal.email, href: `mailto:${personal.email}` },
              { icon: <Phone size={15} />, label: personal.phone, href: `tel:${personal.phone}` },
              { icon: <MapPin size={15} />, label: `${personal.location} · ${personal.openTo}`, href: null },
              { icon: <Globe size={15} />, label: "github.com/saravananmnm", href: personal.github },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <span style={{ color: "var(--accent-cyan)", marginTop: "2px", flexShrink: 0 }}>{item.icon}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    style={{ color: "var(--text-secondary)", fontSize: "0.9rem", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.target.style.color = "#00d4ff")}
                    onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{item.label}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: competencies */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.7rem",
              color: "var(--text-muted)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Core Competencies
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            {competencies.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.04 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--text-secondary)",
                  fontSize: "0.85rem",
                }}
              >
                <span style={{ color: "var(--accent-cyan)", fontSize: "0.7rem" }}>▹</span>
                {c}
              </motion.div>
            ))}
          </div>

          {/* Badge row */}
          <div style={{ marginTop: "36px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { label: "Immediate Joiner", color: "#00d4ff" },
              { label: "English & Tamil", color: "#7c3aed" },
              { label: "10+ yrs IT", color: "#0066ff" },
            ].map((b) => (
              <span
                key={b.label}
                style={{
                  padding: "6px 14px",
                  border: `1px solid ${b.color}40`,
                  borderRadius: "100px",
                  fontSize: "0.75rem",
                  fontFamily: "'DM Mono', monospace",
                  color: b.color,
                  background: `${b.color}0a`,
                  letterSpacing: "0.04em",
                }}
              >
                {b.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
