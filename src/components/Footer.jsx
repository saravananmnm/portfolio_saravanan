import { GitFork, Link2, Mail } from "lucide-react";
import { personal } from "../data/resume";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "40px 32px",
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "1.1rem",
            color: "var(--accent-cyan)",
            marginBottom: "4px",
          }}
        >
          Saravanakumar G
        </p>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.72rem",
            color: "var(--text-muted)",
            letterSpacing: "0.06em",
          }}
        >
          Senior Flutter Developer · {new Date().getFullYear()}
        </p>
      </div>

      <div style={{ display: "flex", gap: "16px" }}>
        {[
          { icon: <GitFork size={18} />, href: personal.github },
          { icon: <Link2 size={18} />, href: personal.linkedin },
          { icon: <Mail size={18} />, href: `mailto:${personal.email}` },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)";
              e.currentTarget.style.color = "var(--accent-cyan)";
              e.currentTarget.style.background = "rgba(0,212,255,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-muted)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
