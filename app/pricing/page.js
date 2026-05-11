"use client";

export const dynamic = "force-dynamic";

import Navbar from "../../components/Navbar";
import { useLanguage } from "../../lib/useLanguage";

export default function PricingPage() {
  const { language } = useLanguage();

  const t = {
    en: {
      eyebrow: "Fit Couple Club",
      title1: "Choose what you need.",
      title2: "Start simple or get everything.",
      subtitle:
        "Start with Nutrition if you mainly want help with food, recipes and groceries. Choose Full Access if you also want workouts, programs, progress tools and Couple Zone.",
      why: "💡 Why structure matters",
      whyText:
        "Most people do not fail because they are lazy. They fail because food choices happen too late, training has no clear plan, and consistency becomes harder than it needs to be.",
      highlight: "Fit Couple Club keeps everything simple and clear.",
      startNutrition: "Get Nutrition",
      unlock: "Get Full Access",
      mostPopular: "🔥 Most Popular",
      oneTime: "One-time payment. No monthly subscription.",
    },

    nl: {
      eyebrow: "Fit Couple Club",
      title1: "Kies wat je nodig hebt.",
      title2: "Start simpel of krijg alles.",
      subtitle:
        "Start met Nutrition als je vooral hulp wilt met voeding, recepten en boodschappen. Kies Full Access als je ook workouts, programma’s, progressietools en Couple Zone wilt.",
      why: "💡 Waarom structuur belangrijk is",
      whyText:
        "De meeste mensen falen niet omdat ze lui zijn. Ze falen omdat keuzes over eten te laat komen, training geen duidelijk plan heeft en consistent blijven moeilijker wordt dan nodig.",
      highlight: "Fit Couple Club houdt alles simpel en duidelijk.",
      startNutrition: "Koop Nutrition",
      unlock: "Krijg Full Access",
      mostPopular: "🔥 Meest gekozen",
      oneTime: "Eenmalige betaling. Geen maandabonnement.",
    },
  }[language];

  return (
    <main style={main}>
      <Navbar />

      <div style={container}>
        <div style={header}>
          <div style={eyebrow}>{t.eyebrow}</div>

          <h1 style={title}>
            {t.title1}
            <br />
            {t.title2}
          </h1>

          <p style={subtitle}>{t.subtitle}</p>
        </div>

        <div style={hook}>
          <div style={hookTitle}>{t.why}</div>

          <p style={hookText}>{t.whyText}</p>

          <ul style={list}>
            <li>
              {language === "nl"
                ? "Geen duidelijk plan"
                : "No clear plan"}
            </li>
            <li>
              {language === "nl"
                ? "Eten wordt pas beslist als je al honger hebt"
                : "Food choices happen when you are already hungry"}
            </li>
            <li>
              {language === "nl"
                ? "Training mist structuur"
                : "Training has no structure"}
            </li>
            <li>
              {language === "nl"
                ? "Geen overzicht maakt consistentie moeilijk"
                : "No overview makes consistency harder"}
            </li>
          </ul>

          <p style={hookHighlight}>{t.highlight}</p>
        </div>

        <div style={grid}>
          <section style={card}>
            <div>
              <h2 style={planTitle}>Nutrition</h2>

              <div style={price}>€19.99</div>

              <div style={oneTime}>{t.oneTime}</div>

              <ul style={list}>
                <li>
                  ✔ {language === "nl" ? "5 lichaamsdoelen" : "5 body goals"}
                </li>
                <li>
                  ✔{" "}
                  {language === "nl"
                    ? "150 dagelijkse voedingsroutines"
                    : "150 daily food routines"}
                </li>
                <li>
                  ✔ {language === "nl" ? "Wekelijkse recepten" : "Weekly recipes"}
                </li>
                <li>
                  ✔{" "}
                  {language === "nl"
                    ? "Slimme boodschappenlijsten"
                    : "Smart grocery lists"}
                </li>
                <li>
                  ✔{" "}
                  {language === "nl"
                    ? "Werkt solo en voor koppels"
                    : "Works for solo & couples"}
                </li>
                <li>
                  ✔{" "}
                  {language === "nl"
                    ? "Toegang tot de Coaching pagina"
                    : "Access to Coaching page"}
                </li>
              </ul>

              <p style={desc}>
                {language === "nl"
                  ? "Simpele voedingsstructuur zonder elke dag opnieuw na te denken over eten."
                  : "Simple nutrition structure without overthinking food every day."}
              </p>
            </div>

            <a href="/signup" style={button}>
              {t.startNutrition}
            </a>
          </section>

          <section style={{ ...card, ...featured }}>
            <div style={badge}>{t.mostPopular}</div>

            <div>
              <h2 style={planTitle}>Full Access</h2>

              <div style={price}>€29.99</div>

              <div style={oneTime}>{t.oneTime}</div>

              <ul style={list}>
                <li>
                  ✔{" "}
                  {language === "nl"
                    ? "Alles van Nutrition"
                    : "Everything from Nutrition"}
                </li>
                <li>
                  ✔{" "}
                  {language === "nl"
                    ? "Complete workout bibliotheek"
                    : "Full workout library"}
                </li>
                <li>
                  ✔{" "}
                  {language === "nl"
                    ? "Stap-voor-stap programma’s"
                    : "Step-by-step programs"}
                </li>
                <li>
                  ✔{" "}
                  {language === "nl"
                    ? "Progressie tracking"
                    : "Progress tracking"}
                </li>
                <li>✔ Couple Zone</li>
                <li>
                  ✔{" "}
                  {language === "nl"
                    ? "Toegang tot de Coaching pagina"
                    : "Access to Coaching page"}
                </li>
              </ul>

              <p style={desc}>
                {language === "nl"
                  ? "Voeding, workouts, structuur, progressie en consistentie in één platform."
                  : "Food, workouts, structure, progress and consistency in one platform."}
              </p>
            </div>

            <a href="/signup" style={{ ...button, ...buttonFeatured }}>
              {t.unlock}
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "#050505",
  color: "white",
  padding: "100px 20px",
};

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gap: "40px",
};

const header = {
  textAlign: "center",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  opacity: 0.6,
  marginBottom: "10px",
};

const title = {
  fontSize: "clamp(38px, 8vw, 64px)",
  fontWeight: "900",
  lineHeight: 1.05,
  margin: 0,
};

const subtitle = {
  opacity: 0.7,
  maxWidth: "760px",
  margin: "18px auto 0",
  lineHeight: 1.8,
  fontSize: "clamp(16px, 3vw, 19px)",
};

const hook = {
  background: "rgba(255,255,255,0.04)",
  padding: "clamp(18px, 4vw, 24px)",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.08)",
};

const hookTitle = {
  fontWeight: "900",
  marginBottom: "10px",
  fontSize: "20px",
};

const hookText = {
  opacity: 0.72,
  lineHeight: 1.8,
};

const hookHighlight = {
  marginTop: "10px",
  fontWeight: "900",
  color: "#facc15",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
  gap: "20px",
};

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  padding: "clamp(20px, 4vw, 28px)",
  borderRadius: "22px",
  minHeight: "500px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  overflowWrap: "break-word",
};

const featured = {
  border: "2px solid #facc15",
  background: "rgba(250,204,21,0.08)",
};

const planTitle = {
  fontSize: "clamp(26px, 4vw, 34px)",
  fontWeight: "900",
  margin: "0 0 12px",
};

const price = {
  fontSize: "46px",
  fontWeight: "950",
  lineHeight: 1,
};

const oneTime = {
  marginTop: "8px",
  marginBottom: "18px",
  color: "rgba(255,255,255,0.62)",
  fontWeight: "800",
};

const list = {
  marginTop: "14px",
  marginBottom: "14px",
  paddingLeft: "20px",
  lineHeight: 1.9,
  color: "rgba(255,255,255,0.76)",
};

const desc = {
  opacity: 0.72,
  lineHeight: 1.7,
};

const button = {
  marginTop: "20px",
  padding: "14px 18px",
  borderRadius: "12px",
  background: "#facc15",
  color: "black",
  fontWeight: "900",
  textAlign: "center",
  textDecoration: "none",
  display: "block",
};

const buttonFeatured = {
  background: "#fff",
};

const badge = {
  position: "absolute",
  top: "-10px",
  right: "10px",
  background: "#facc15",
  color: "black",
  padding: "6px 10px",
  borderRadius: "8px",
  fontSize: "12px",
  fontWeight: "900",
};
