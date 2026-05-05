"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";
import { useLanguage } from "../../lib/useLanguage";

export default function LoginPage() {
  const supabase = createClient();
  const { language } = useLanguage();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const t = {
    en: {
      eyebrow: "Member Access",
      title: "Login",
      subtitle: "Log in to access your dashboard or choose your membership.",
      email: "Email",
      emailPlaceholder: "you@example.com",
      password: "Password",
      passwordPlaceholder: "Enter your password",
      loading: "Logging in...",
      button: "Login",
      error: "Something went wrong while logging in.",
      noAccount: "No account yet?",
      create: "Create one here",
    },
    nl: {
      eyebrow: "Member Toegang",
      title: "Inloggen",
      subtitle: "Log in om je dashboard te openen of je membership te kiezen.",
      email: "E-mail",
      emailPlaceholder: "jij@example.com",
      password: "Wachtwoord",
      passwordPlaceholder: "Vul je wachtwoord in",
      loading: "Bezig met inloggen...",
      button: "Inloggen",
      error: "Er ging iets mis tijdens het inloggen.",
      noAccount: "Nog geen account?",
      create: "Maak hier een account",
    },
  }[language] || {};

  async function handleLogin(e) {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);

      const normalizedEmail = email.trim().toLowerCase();

      const { error } = await supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("membership_type, is_active")
        .eq("email", normalizedEmail)
        .maybeSingle();

      if (profile?.is_active && profile?.membership_type) {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/billing";
      }
    } catch (error) {
      console.error("LOGIN ERROR:", error);
      alert(t.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={main}>
      <div style={card}>
        <div style={eyebrow}>{t.eyebrow}</div>
        <h1 style={title}>{t.title}</h1>
        <p style={subtitle}>{t.subtitle}</p>

        <form onSubmit={handleLogin} style={form}>
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

          <div style={fieldWrap}>
            <label htmlFor="password" style={label}>
              {t.password}
            </label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t.passwordPlaceholder}
              type="password"
              autoComplete="current-password"
              required
              style={input}
            />
          </div>

          <button type="submit" disabled={loading} style={button(loading)}>
            {loading ? t.loading : t.button}
          </button>
        </form>

        <p style={footerText}>
          {t.noAccount}{" "}
          <a href="/signup" style={link}>
            {t.create}
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
  fontSize: "clamp(36px, 9vw, 42px)",
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
