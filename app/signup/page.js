"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";
import { useLanguage } from "../../lib/useLanguage";

export default function SignupPage() {
  const supabase = createClient();
  const { language } = useLanguage();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const t =
    {
      en: {
        eyebrow: "Create Account",
        title: "Start your journey",
        subtitle:
          "Create your account first. After that, you can choose your membership on the billing page.",
        email: "Email",
        emailPlaceholder: "you@example.com",
        password: "Password",
        passwordPlaceholder: "Create a password",
        loading: "Creating Account...",
        button: "Create Account",
        success: "Account created. Redirecting to billing...",
        error: "Something went wrong while creating your account.",
        alreadyExists:
          "This email already exists. Please log in to keep your membership.",
        redirectLogin: "Redirecting to login...",
        already: "Already have an account?",
        login: "Log in here",
      },
      nl: {
        eyebrow: "Account Aanmaken",
        title: "Start je journey",
        subtitle:
          "Maak eerst je account aan. Daarna kun je je membership kiezen op de billing pagina.",
        email: "E-mail",
        emailPlaceholder: "jij@example.com",
        password: "Wachtwoord",
        passwordPlaceholder: "Maak een wachtwoord",
        loading: "Account wordt aangemaakt...",
        button: "Account Aanmaken",
        success: "Account aangemaakt. Je wordt doorgestuurd naar billing...",
        error: "Er ging iets mis tijdens het aanmaken van je account.",
        alreadyExists:
          "Dit e-mailadres bestaat al. Log in om je membership te behouden.",
        redirectLogin: "Je wordt doorgestuurd naar login...",
        already: "Heb je al een account?",
        login: "Log hier in",
      },
    }[language] || {};

  async function handleSignup(e) {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
      setMessage("");

      const normalizedEmail = email.trim().toLowerCase();

      const { data: existingProfile, error: profileError } = await supabase
        .from("profiles")
        .select("id, email, membership_type, is_active, stripe_customer_id")
        .eq("email", normalizedEmail)
        .maybeSingle();

      if (profileError) {
        console.error("PROFILE CHECK ERROR:", profileError);
        setMessage(t.error);
        return;
      }

      if (existingProfile) {
        setMessage(`${t.alreadyExists} ${t.redirectLogin}`);

        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);

        return;
      }

      const { error } = await supabase.auth.signUp({
        email: normalizedEmail,
        password,
      });

      if (error) {
        const alreadyRegistered =
          error.message?.toLowerCase().includes("already") ||
          error.message?.toLowerCase().includes("registered") ||
          error.message?.toLowerCase().includes("exists");

        if (alreadyRegistered) {
          setMessage(`${t.alreadyExists} ${t.redirectLogin}`);

          setTimeout(() => {
            window.location.href = "/login";
          }, 1500);

          return;
        }

        setMessage(error.message);
        return;
      }

      setMessage(t.success);

      setTimeout(() => {
        window.location.href = "/billing";
      }, 1200);
    } catch (error) {
      console.error("SIGNUP ERROR:", error);
      setMessage(t.error);
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

        <form onSubmit={handleSignup} style={form}>
          <div style={fieldWrap}>
            <label htmlFor="email" style={label}>
              {t.email}
            </label>
            <input
              id="email"
              placeholder={t.emailPlaceholder}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              style={input}
            />
          </div>

          <div style={fieldWrap}>
            <label htmlFor="password" style={label}>
              {t.password}
            </label>
            <input
              id="password"
              placeholder={t.passwordPlaceholder}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              style={input}
            />
          </div>

          <button type="submit" disabled={loading} style={button(loading)}>
            {loading ? t.loading : t.button}
          </button>
        </form>

        {message && <p style={messageStyle}>{message}</p>}

        <p style={footerText}>
          {t.already}{" "}
          <a href="/login" style={link}>
            {t.login}
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

const messageStyle = {
  marginTop: "18px",
  color: "rgba(255,255,255,0.75)",
  lineHeight: 1.6,
  fontSize: "15px",
};

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
