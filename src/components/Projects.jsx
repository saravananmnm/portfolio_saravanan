import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/resume";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "120px 32px",
        background: "linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
            04 / Projects
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
            Featured{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00d4ff, #0066ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Work
            </span>
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              style={{
                padding: "36px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "24px",
                alignItems: "start",
                transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              whileHover={{
                borderColor: "rgba(0,212,255,0.3)",
                y: -3,
                boxShadow: "0 16px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,212,255,0.1)",
              }}
            >
              {/* Decorative number */}
              <div
                style={{
                  position: "absolute",
                  right: "-10px",
                  top: "-20px",
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "8rem",
                  fontWeight: 800,
                  color: "rgba(0,212,255,0.03)",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                0{idx + 1}
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "#f0f4ff",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {project.title}
                  </h3>
                  <span
                    style={{
                      padding: "3px 10px",
                      background: "rgba(0,212,255,0.1)",
                      border: "1px solid rgba(0,212,255,0.2)",
                      borderRadius: "100px",
                      fontSize: "0.7rem",
                      fontFamily: "'DM Mono', monospace",
                      color: "var(--accent-cyan)",
                      letterSpacing: "0.04em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {project.highlight}
                  </span>
                </div>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                    maxWidth: "600px",
                    marginBottom: "20px",
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "4px 12px",
                        background: "rgba(0,102,255,0.08)",
                        border: "1px solid rgba(0,102,255,0.2)",
                        borderRadius: "4px",
                        fontSize: "0.75rem",
                        fontFamily: "'DM Mono', monospace",
                        color: "#6ea8ff",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{ textAlign: "center", marginTop: "48px" }}
        >
          <a
            href="https://github.com/saravananmnm"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              border: "1px solid rgba(0,212,255,0.3)",
              borderRadius: "6px",
              color: "var(--accent-cyan)",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.8rem",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,212,255,0.08)";
              e.currentTarget.style.borderColor = "var(--accent-cyan)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
            }}
          >
            <ExternalLink size={15} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
