"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";
import { useLanguage } from "../../lib/useLanguage";

export default function ForgotPasswordPage() {
  const supabase = createClient();
  const { language } = useLanguage();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const t = {
    en: {
      eyebrow: "Password Reset",
      title: "Forgot password?",
      subtitle: "Enter your email and we’ll send you a reset link.",
      email: "Email",
      emailPlaceholder: "you@example.com",
      button: "Send reset link",
      loading: "Sending...",
      sentTitle: "Check your email",
      sentText: "We sent you a password reset link. Open it to create a new password.",
      back: "Back to login",
      error: "Something went wrong while sending the reset link.",
    },
    nl: {
      eyebrow: "Wachtwoord resetten",
      title: "Wachtwoord vergeten?",
      subtitle: "Vul je e-mail in en we sturen je een link om je wachtwoord te resetten.",
      email: "E-mail",
      emailPlaceholder: "jij@example.com",
      button: "Reset link sturen",
      loading: "Versturen...",
      sentTitle: "Check je e-mail",
      sentText: "We hebben je een resetlink gestuurd. Open deze om een nieuw wachtwoord aan te maken.",
      back: "Terug naar inloggen",
      error: "Er ging iets mis met het versturen van de resetlink.",
    },
  }[language] || {};

  async function handleReset(e) {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);

      const normalizedEmail = email.trim().toLowerCase();

      const { error } = await supabase.auth.resetPasswordForEmail(
        normalizedEmail,
        {
          redirectTo: `${window.location.origin}/reset-password`,
        }
      );

      if (error) {
        alert(error.message);
        return;
      }

      setSent(true);
    } catch (error) {
      console.error("RESET PASSWORD ERROR:", error);
      alert(t.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={main}>
      <div style={card}>
        <div style={eyebrow}>{t.eyebrow}</div>

        <h1 style={title}>{sent ? t.sentTitle : t.title}</h1>

        <p style={subtitle}>{sent ? t.sentText : t.subtitle}</p>

        {!sent && (
          <form onSubmit={handleReset} style={form}>
            <div style={fieldWrap}>
              <label htmlFor="email" style={label}>
                {t.email}
              </label>

              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                type="email"
                autoComplete="email"
                required
                style={input}
              />
            </div>

            <button type="submit" disabled={loading} style={button(loading)}>
              {loading ? t.loading : t.button}
            </button>
          </form>
        )}

        <p style={footerText}>
          <a href="/login" style={link}>
            {t.back}
          </a>
        </p>
      </div>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "#0a0a0a",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "clamp(20px, 5vw, 32px)",
  overflowX: "hidden",
};

const card = {
  width: "100%",
  maxWidth: "480px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "clamp(18px, 4vw, 24px)",
  padding: "clamp(24px, 6vw, 36px)",
  boxSizing: "border-box",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "10px",
};

const title = {
  margin: 0,
  fontSize: "clamp(34px, 9vw, 42px)",
  lineHeight: 1.05,
  fontWeight: "900",
};

const subtitle = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.7,
  marginTop: "12px",
  marginBottom: "24px",
  fontSize: "clamp(15px, 3.8vw, 16px)",
};

const form = {
  display: "grid",
  gap: "16px",
};

const fieldWrap = {
  display: "grid",
  gap: "8px",
};

const label = {
  fontSize: "14px",
  fontWeight: "700",
};

const input = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.03)",
  color: "white",
  outline: "none",
  boxSizing: "border-box",
  fontSize: "16px",
};

const button = (loading) => ({
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "none",
  background: "white",
  color: "black",
  fontWeight: "800",
  cursor: loading ? "not-allowed" : "pointer",
  opacity: loading ? 0.8 : 1,
  fontSize: "16px",
});

const footerText = {
  marginTop: "18px",
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.6,
  fontSize: "15px",
};

const link = {
  color: "white",
  fontWeight: "800",
  textDecoration: "none",
};