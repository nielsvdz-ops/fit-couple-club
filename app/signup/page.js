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
        eyebrow: "Join The Club",
        title: "Start your transformation.",
        subtitle:
          "Create your account first. Then choose Nutrition or Full Access and unlock your member dashboard.",
        email: "Email",
        emailPlaceholder: "you@example.com",
        password: "Password",
        passwordPlaceholder: "Create a password",
        loading: "Creating Account...",
        button: "Create Account",
        success: "Account created. Redirecting to plans...",
        error: "Something went wrong while creating your account.",
        alreadyExists:
          "This email already exists. Please log in to keep your membership.",
        redirectLogin: "Redirecting to login...",
        already: "Already have an account?",
        login: "Log in here",
        slogan: "ONE GOAL. ONE MIND. ONE LIFESTYLE.",
        points: [
          "High-protein nutrition",
          "Booty Builder programs",
          "Workouts & progress tracking",
          "Couple accountability",
        ],
      },
      nl: {
        eyebrow: "Join De Club",
        title: "Start je transformatie.",
        subtitle:
          "Maak eerst je account aan. Kies daarna Nutrition of Full Access en ontgrendel je member dashboard.",
        email: "E-mail",
        emailPlaceholder: "jij@example.com",
        password: "Wachtwoord",
        passwordPlaceholder: "Maak een wachtwoord",
        loading: "Account wordt aangemaakt...",
        button: "Account Aanmaken",
        success: "Account aangemaakt. Je wordt doorgestuurd naar plannen...",
        error: "Er ging iets mis tijdens het aanmaken van je account.",
        alreadyExists:
          "Dit e-mailadres bestaat al. Log in om je membership te behouden.",
        redirectLogin: "Je wordt doorgestuurd naar login...",
        already: "Heb je al een account?",
        login: "Log hier in",
        slogan: "ÉÉN DOEL. ÉÉN MINDSET. ÉÉN LIFESTYLE.",
        points: [
          "Eiwitrijke voeding",
          "Booty Builder programma’s",
          "Workouts & progressie tracking",
          "Couple accountability",
        ],
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
      <div style={backgroundImage} />
      <div style={overlay} />

      <section style={layout}>
        <div style={brandPanel}>
          <img
            src="/images/fitcouple-logo.png"
            alt="FitCoupleClub"
            style={logo}
          />

          <div style={slogan}>{t.slogan}</div>

          <h1 style={brandTitle}>
            {language === "nl" ? (
              <>
                STERKER
                <br />
                <span style={redText}>SAMEN.</span>
              </>
            ) : (
              <>
                STRONGER
                <br />
                <span style={redText}>TOGETHER.</span>
              </>
            )}
          </h1>

          <div style={pointGrid}>
            {t.points.map((point) => (
              <div key={point} style={pointItem}>
                ✓ {point}
              </div>
            ))}
          </div>
        </div>

        <div style={card}>
          <div style={eyebrow}>{t.eyebrow}</div>
          <h2 style={title}>{t.title}</h2>
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
      </section>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "#020202",
  color: "white",
  position: "relative",
  overflow: "hidden",
};

const backgroundImage = {
  position: "absolute",
  inset: 0,
  backgroundImage: "url('/images/background.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "grayscale(1) brightness(0.28) contrast(1.2)",
  transform: "scale(1.04)",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(0,0,0,0.96), rgba(0,0,0,0.78), rgba(80,0,0,0.36)), radial-gradient(circle at 75% 40%, rgba(185,0,0,0.35), transparent 38%)",
};

const layout = {
  position: "relative",
  zIndex: 2,
  minHeight: "100vh",
  width: "100%",
  maxWidth: "1220px",
  margin: "0 auto",
  padding: "clamp(22px, 5vw, 44px)",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
  gap: "clamp(28px, 6vw, 70px)",
  alignItems: "center",
  boxSizing: "border-box",
};

const brandPanel = {
  display: "grid",
  gap: "20px",
};

const logo = {
  width: "clamp(150px, 22vw, 270px)",
  height: "auto",
  filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.85))",
};

const slogan = {
  color: "rgba(255,255,255,0.52)",
  fontSize: "clamp(14px, 2vw, 20px)",
  fontWeight: "950",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
};

const brandTitle = {
  margin: 0,
  fontSize: "clamp(56px, 11vw, 118px)",
  lineHeight: 0.84,
  letterSpacing: "-0.06em",
  fontWeight: "950",
  textTransform: "uppercase",
};

const redText = {
  color: "#b00000",
};

const pointGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 210px), 1fr))",
  gap: "12px",
  marginTop: "12px",
};

const pointItem = {
  borderLeft: "3px solid #b00000",
  background: "rgba(255,255,255,0.04)",
  padding: "13px 14px",
  fontWeight: "900",
  color: "rgba(255,255,255,0.82)",
};

const card = {
  width: "100%",
  maxWidth: "500px",
  justifySelf: "end",
  background: "rgba(5,5,5,0.82)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderTop: "3px solid #b00000",
  borderRadius: "0px",
  padding: "clamp(26px, 6vw, 42px)",
  boxSizing: "border-box",
  boxShadow: "0 30px 100px rgba(0,0,0,0.65)",
  backdropFilter: "blur(10px)",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "#ef4444",
  marginBottom: "10px",
  fontWeight: "950",
};

const title = {
  margin: 0,
  fontSize: "clamp(36px, 8vw, 48px)",
  lineHeight: 0.95,
  fontWeight: "950",
  textTransform: "uppercase",
  letterSpacing: "-0.04em",
};

const subtitle = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.7,
  marginTop: "14px",
  marginBottom: "26px",
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
  fontSize: "13px",
  fontWeight: "900",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "rgba(255,255,255,0.78)",
};

const input = {
  width: "100%",
  padding: "15px 16px",
  borderRadius: "0px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(0,0,0,0.48)",
  color: "white",
  outline: "none",
  boxSizing: "border-box",
  fontSize: "16px",
};

const button = (loading) => ({
  width: "100%",
  padding: "16px 16px",
  borderRadius: "0px",
  border: "none",
  background: "#b00000",
  color: "white",
  fontWeight: "950",
  cursor: loading ? "not-allowed" : "pointer",
  opacity: loading ? 0.75 : 1,
  fontSize: "16px",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  boxShadow: "0 18px 45px rgba(176,0,0,0.35)",
});

const messageStyle = {
  marginTop: "18px",
  color: "rgba(255,255,255,0.78)",
  lineHeight: 1.6,
  fontSize: "15px",
};

const footerText = {
  marginTop: "20px",
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.6,
  fontSize: "15px",
};

const link = {
  color: "white",
  fontWeight: "950",
  textDecoration: "none",
  borderBottom: "1px solid #b00000",
};