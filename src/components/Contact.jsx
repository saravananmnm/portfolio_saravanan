import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, GitFork, Link2, Send, CheckCircle } from "lucide-react";
import { personal } from "../data/resume";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    background: "rgba(0,212,255,0.04)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    color: "#f0f4ff",
    fontFamily: "'Cabinet Grotesk', sans-serif",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  };

  return (
    <section
      id="contact"
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
          05 / Contact
        </p>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#f0f4ff",
            marginBottom: "16px",
          }}
        >
          Let&apos;s Build{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #00d4ff, #0066ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Something
          </span>
        </h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "480px", lineHeight: 1.75 }}>
          I&apos;m currently open to new opportunities. Whether you have a question, a project idea, or just want to say
          hello — my inbox is always open.
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "48px",
        }}
      >
        {/* Left: form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = "rgba(0,212,255,0.5)";
              e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.06)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "var(--border)";
              e.target.style.boxShadow = "none";
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = "rgba(0,212,255,0.5)";
              e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.06)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "var(--border)";
              e.target.style.boxShadow = "none";
            }}
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            value={form.message}
            required
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
            onFocus={(e) => {
              e.target.style.borderColor = "rgba(0,212,255,0.5)";
              e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.06)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "var(--border)";
              e.target.style.boxShadow = "none";
            }}
          />
          <button
            type="submit"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "16px",
              background: sent ? "rgba(0,255,136,0.15)" : "linear-gradient(135deg, #00d4ff, #0066ff)",
              border: sent ? "1px solid rgba(0,255,136,0.4)" : "none",
              borderRadius: "8px",
              color: sent ? "#00ff88" : "#050810",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "all 0.3s",
              boxShadow: sent ? "none" : "0 4px 24px rgba(0,212,255,0.25)",
            }}
          >
            {sent ? (
              <>
                <CheckCircle size={18} /> Message Sent!
              </>
            ) : (
              <>
                <Send size={18} /> Send Message
              </>
            )}
          </button>
        </motion.form>

        {/* Right: contact info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          {[
            {
              icon: <Mail size={20} />,
              label: "Email",
              value: personal.email,
              href: `mailto:${personal.email}`,
            },
            {
              icon: <GitFork size={20} />,
              label: "GitHub",
              value: "github.com/saravananmnm",
              href: personal.github,
            },
            {
              icon: <Link2 size={20} />,
              label: "LinkedIn",
              value: "linkedin.com/in/saravananmnm",
              href: personal.linkedin,
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "20px 24px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.35)";
                e.currentTarget.style.background = "rgba(0,212,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "var(--bg-card)";
              }}
            >
              <span
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "rgba(0,212,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-cyan)",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </span>
              <div>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "2px",
                  }}
                >
                  {item.label}
                </p>
                <p style={{ color: "#f0f4ff", fontSize: "0.9rem", fontWeight: 500 }}>{item.value}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
