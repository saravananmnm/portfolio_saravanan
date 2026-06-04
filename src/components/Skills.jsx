import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/resume";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "120px 32px",
        background: "linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG decorative grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
            02 / Skills
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
            Technical{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00d4ff, #0066ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Arsenal
            </span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.07, duration: 0.5 }}
              style={{
                padding: "28px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                cursor: "default",
              }}
              whileHover={{
                borderColor: "rgba(0,212,255,0.35)",
                y: -4,
                boxShadow: "0 12px 40px rgba(0,212,255,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "12px",
                  lineHeight: 1,
                }}
              >
                {skillGroup.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#f0f4ff",
                  marginBottom: "14px",
                  letterSpacing: "-0.01em",
                }}
              >
                {skillGroup.category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "4px 10px",
                      background: "rgba(0,212,255,0.06)",
                      border: "1px solid rgba(0,212,255,0.15)",
                      borderRadius: "4px",
                      fontSize: "0.78rem",
                      fontFamily: "'DM Mono', monospace",
                      color: "var(--text-secondary)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
