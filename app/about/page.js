"use client";

import Navbar from "../../components/Navbar";
import { useLanguage } from "../../lib/useLanguage";

export default function AboutPage() {
  const { language } = useLanguage();

  const t = {
    en: {
      eyebrow: "About Us",
      title: "This platform comes from real life.",
      p1: "We have been together for over 12 years. We train together, eat together, and do everything together.",
      p2: "Rosanna struggled with an eating disorder for 7 years when she was younger and beat anorexia. That journey gave her deep real-world knowledge about food, healthy eating, balance, and recovery.",
      p3: "Niels has been in the gym since he was 15 and never stopped. Over the years, we built strong athletic physiques and a healthy lifestyle that gives us more energy, discipline, strength, and confidence.",
      p4: "Now we want to help individuals and couples start their own journey and achieve their dream body — alone or together.",
      imageAlt: "Niels and Rosanna - Fit Couple Club",
    },
    nl: {
      eyebrow: "Over Ons",
      title: "Dit platform komt uit het echte leven.",
      p1: "Wij zijn al meer dan 12 jaar samen. We trainen samen, eten samen en doen eigenlijk alles samen.",
      p2: "Rosanna heeft toen ze jonger was 7 jaar geworsteld met een eetstoornis en anorexia overwonnen. Die reis gaf haar veel echte ervaring met voeding, gezond eten, balans en herstel.",
      p3: "Niels traint al sinds zijn 15e en is nooit gestopt. Door de jaren heen hebben we sterke, atletische lichamen en een gezonde lifestyle opgebouwd die ons meer energie, discipline, kracht en zelfvertrouwen geeft.",
      p4: "Nu willen we individuen en koppels helpen om hun eigen journey te starten en hun droomlichaam te bereiken — alleen of samen.",
      imageAlt: "Niels en Rosanna - Fit Couple Club",
    },
  }[language] || {};

  return (
    <main style={main}>
      <Navbar />

      <section style={twoColWrap}>
        <div>
          <div style={eyebrowStyle}>{t.eyebrow}</div>

          <h1 style={pageTitle}>{t.title}</h1>

          <p style={textStyle}>{t.p1}</p>
          <p style={textStyle}>{t.p2}</p>
          <p style={textStyle}>{t.p3}</p>
          <p style={textStyle}>{t.p4}</p>
        </div>

        <div style={imageCardStyle}>
          <img
            src="/couple-pictures/DJI_0581.jpg"
            alt={t.imageAlt}
            style={imageStyle}
          />
        </div>
      </section>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "#0a0a0a",
  color: "white",
  overflowX: "hidden",
};

const twoColWrap = {
  width: "100%",
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "clamp(96px, 12vw, 130px) 20px 80px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
  gap: "clamp(28px, 5vw, 44px)",
  alignItems: "center",
};

const eyebrowStyle = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "rgba(255,255,255,0.5)",
  marginBottom: "10px",
};

const pageTitle = {
  fontSize: "clamp(36px, 8vw, 54px)",
  lineHeight: 1.05,
  margin: "10px 0 20px",
  fontWeight: "900",
  letterSpacing: "-0.04em",
};

const textStyle = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.85,
  marginBottom: "14px",
  fontSize: "clamp(15px, 2.5vw, 17px)",
};

const imageCardStyle = {
  borderRadius: "clamp(20px, 4vw, 28px)",
  overflow: "hidden",
  minHeight: "clamp(320px, 70vw, 520px)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  minHeight: "clamp(320px, 70vw, 520px)",
  objectFit: "cover",
  display: "block",
};
