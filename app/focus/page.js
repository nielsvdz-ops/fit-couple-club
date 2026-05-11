import Navbar from "../../components/Navbar";
import { cookies } from "next/headers";

const copy = {
  en: {
    eyebrow: "Workout Focus",
    title: "Choose your focus area",
    subtitle:
      "This helps personalize your workout structure so the body parts you care about most receive extra attention throughout your training plan.",
    button: "Select Focus",

    focusAreas: [
      {
        title: "Booty 🍑",
        description:
          "Extra glute-focused workouts for growth, shape, strength, and lower-body development.",
      },
      {
        title: "Abs",
        description:
          "Core-focused training to improve abdominal strength, posture, and body definition.",
      },
      {
        title: "Legs",
        description:
          "Build stronger quads, hamstrings, calves, and athletic lower-body power.",
      },
      {
        title: "Upper Body",
        description:
          "Focus on shoulders, back, chest, and arms for strength and balanced physique development.",
      },
      {
        title: "Full Body",
        description:
          "Balanced training structure targeting the full body with strength and conditioning combined.",
      },
      {
        title: "Couple Workouts",
        description:
          "Partner-focused sessions designed around accountability, teamwork, and shared motivation.",
      },
    ],
  },

  nl: {
    eyebrow: "Workout Focus",
    title: "Kies jouw focusgebied",
    subtitle:
      "Dit helpt jouw trainingsschema personaliseren zodat de lichaamsdelen die jij belangrijk vindt extra aandacht krijgen tijdens je programma.",
    button: "Kies Focus",

    focusAreas: [
      {
        title: "Billen 🍑",
        description:
          "Extra glute-gerichte trainingen voor groei, vorm, kracht en betere onderlichaam ontwikkeling.",
      },
      {
        title: "Buikspieren",
        description:
          "Core-gerichte trainingen om buikspieren, houding en lichaamsdefinitie te verbeteren.",
      },
      {
        title: "Benen",
        description:
          "Bouw sterkere quadriceps, hamstrings, kuiten en atletische kracht in het onderlichaam.",
      },
      {
        title: "Bovenlichaam",
        description:
          "Focus op schouders, rug, borst en armen voor kracht en een gebalanceerd fysiek.",
      },
      {
        title: "Full Body",
        description:
          "Gebalanceerde trainingen voor het hele lichaam met kracht en conditie gecombineerd.",
      },
      {
        title: "Koppel Workouts",
        description:
          "Partner-workouts gebouwd rond accountability, teamwork en samen gemotiveerd blijven.",
      },
    ],
  },
};

function getLanguage() {
  const cookieStore = cookies();

  const saved =
    cookieStore.get("language")?.value ||
    cookieStore.get("fitcouple_language")?.value ||
    cookieStore.get("NEXT_LOCALE")?.value ||
    "en";

  return saved === "nl" ? "nl" : "en";
}

export default function FocusPage() {
  const language = getLanguage();
  const t = copy[language];

  return (
    <main style={pageStyle}>
      <Navbar />

      <div style={containerStyle}>
        <section style={heroSection}>
          <div style={eyebrowStyle}>{t.eyebrow}</div>

          <h1 style={titleStyle}>{t.title}</h1>

          <p style={subtitleStyle}>{t.subtitle}</p>
        </section>

        <section style={gridStyle}>
          {t.focusAreas.map((focus) => (
            <div key={focus.title} style={cardStyle}>
              <div style={glowStyle} />

              <h2 style={cardTitle}>{focus.title}</h2>

              <p style={cardDescription}>
                {focus.description}
              </p>

              <button style={buttonStyle}>
                {t.button}
              </button>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top, rgba(255,255,255,0.05), transparent 35%), #050505",
  color: "white",
  overflowX: "hidden",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "72px 18px 100px",
};

const heroSection = {
  marginBottom: "40px",
};

const eyebrowStyle = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "12px",
};

const titleStyle = {
  fontSize: "clamp(34px, 7vw, 64px)",
  lineHeight: 1.02,
  fontWeight: "900",
  margin: 0,
  maxWidth: "900px",
  overflowWrap: "break-word",
};

const subtitleStyle = {
  color: "rgba(255,255,255,0.7)",
  marginTop: "18px",
  maxWidth: "760px",
  lineHeight: 1.9,
  fontSize: "15px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
  gap: "20px",
};

const cardStyle = {
  position: "relative",
  overflow: "hidden",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "26px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  minHeight: "260px",
  backdropFilter: "blur(10px)",
  minWidth: 0,
};

const glowStyle = {
  position: "absolute",
  top: "-70px",
  right: "-70px",
  width: "160px",
  height: "160px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.05)",
  filter: "blur(35px)",
};

const cardTitle = {
  fontSize: "clamp(24px, 5vw, 30px)",
  fontWeight: "900",
  lineHeight: 1.1,
  margin: 0,
  position: "relative",
  zIndex: 2,
  overflowWrap: "break-word",
};

const cardDescription = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  fontSize: "15px",
  position: "relative",
  zIndex: 2,
  flex: 1,
  overflowWrap: "break-word",
};

const buttonStyle = {
  border: "none",
  borderRadius: "16px",
  padding: "14px 18px",
  background: "white",
  color: "#111",
  fontWeight: "900",
  fontSize: "14px",
  cursor: "pointer",
  width: "100%",
  maxWidth: "180px",
  position: "relative",
  zIndex: 2,
};