import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "../data/resume";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      style={{ padding: "120px 32px", maxWidth: "1100px", margin: "0 auto" }}
    >
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
          03 / Experience
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
          Career{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #00d4ff, #0066ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Timeline
          </span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: "20px",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "linear-gradient(180deg, var(--accent-cyan) 0%, rgba(0,212,255,0.1) 100%)",
          }}
        />

        <div style={{ paddingLeft: "60px", display: "flex", flexDirection: "column", gap: "0" }}>
          {experience.map((job, idx) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              style={{ position: "relative", paddingBottom: "48px" }}
            >
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-48px",
                  top: "6px",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: job.type === "current" ? "var(--accent-cyan)" : "var(--bg-card)",
                  border: `2px solid ${job.type === "current" ? "var(--accent-cyan)" : "rgba(0,212,255,0.4)"}`,
                  boxShadow: job.type === "current" ? "0 0 12px rgba(0,212,255,0.6)" : "none",
                }}
              />

              <div
                style={{
                  padding: "28px",
                  background: "var(--bg-card)",
                  border: `1px solid ${job.type === "current" ? "rgba(0,212,255,0.25)" : "var(--border)"}`,
                  borderRadius: "12px",
                  transition: "border-color 0.3s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: "#f0f4ff",
                        marginBottom: "4px",
                      }}
                    >
                      {job.role}
                    </h3>
                    <p
                      style={{
                        color: "var(--accent-cyan)",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                      }}
                    >
                      {job.company}{" "}
                      <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                        {job.companyNote}
                      </span>
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.75rem",
                        color: job.type === "current" ? "var(--accent-cyan)" : "var(--text-muted)",
                        background: job.type === "current" ? "rgba(0,212,255,0.1)" : "transparent",
                        padding: job.type === "current" ? "4px 10px" : "0",
                        borderRadius: "4px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {job.period}
                    </span>
                    <p
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.7rem",
                        color: "var(--text-muted)",
                        marginTop: "4px",
                      }}
                    >
                      📍 {job.location}
                    </p>
                  </div>
                </div>

                <ul style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        color: "var(--text-secondary)",
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                      }}
                    >
                      <span style={{ color: "var(--accent-cyan)", fontSize: "0.7rem", marginTop: "5px", flexShrink: 0 }}>
                        ▹
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: experience.length * 0.12, duration: 0.5 }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                left: "-48px",
                top: "6px",
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: "var(--bg-card)",
                border: "2px solid rgba(124,58,237,0.6)",
              }}
            />
            <div
              style={{
                padding: "28px",
                background: "var(--bg-card)",
                border: "1px solid rgba(124,58,237,0.2)",
                borderRadius: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <GraduationCap size={18} color="#7c3aed" />
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#7c3aed",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Education
                </h3>
              </div>
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "4px",
                    marginBottom: "14px",
                  }}
                >
                  <div>
                    <p style={{ color: "#f0f4ff", fontSize: "0.95rem", fontWeight: 600 }}>{edu.degree}</p>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>{edu.institution}</p>
                  </div>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
