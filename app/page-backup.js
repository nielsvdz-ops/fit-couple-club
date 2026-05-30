"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useLanguage } from "../lib/useLanguage";

export default function Home() {
  const { language } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  const t = {
    en: {
      badge: "ONE GOAL. ONE MIND. ONE LIFESTYLE.",
      heroTitle1: "STRONGER",
      heroTitle2: "TOGETHER.",
      heroText:
        "FitCoupleClub is more than a fitness platform. It is a system for ambitious people who train together, grow together and build the lifestyle they deserve.",
      start: "JOIN THE CLUB",
      plans: "VIEW PLANS",
      stats: [
        ["TRAIN", "TOGETHER"],
        ["STAY", "FOCUSED"],
        ["BE", "DISCIPLINED"],
        ["SEE", "RESULTS"],
      ],

      goalsEyebrow: "Transformation Systems",
      goalsTitle: "Choose the body and lifestyle you want.",
      goalsText:
        "No more guessing. Pick your goal and follow a clear system built for consistency, discipline and visible progress.",
      goals: [
        ["Fat Loss", "High-protein meals, calorie structure and training built to drop body fat."],
        ["Booty Builder", "Glute-focused workouts, activation, progressive overload and growth support."],
        ["Muscle Gain", "Training progression and nutrition structure for real strength and size."],
        ["Fasting Mode", "High-protein meals inside an 8-hour eating window."],
        ["Couple Transformation", "Train, eat, shop and stay accountable together."],
        ["Lean & Toned", "Build a sharper, fitter and more athletic look."],
      ],

      bootyTitle: "Booty Builder System",
      bootyText:
        "A dedicated glute training system with gym days, home workouts, activation routines, resistance band sessions and growth-focused nutrition support.",
      bootyPoints: ["Glute Days", "Home + Gym", "Activation", "Progressive Overload", "Growth Nutrition"],

      nutritionTitle: "Nutrition that fits real life.",
      nutritionText:
        "High-protein meal systems, smart grocery lists and soon: fasting, vegan, lactose-free and gluten-free options.",
      nutritionCards: ["High Protein", "16:8 Fasting", "Vegan", "Lactose Free", "Gluten Free", "Smart Groceries"],

      appTitle: "Everything inside one member dashboard.",
      appText:
        "Open your dashboard, follow your meals, train your program, track progress and stay consistent without overthinking.",
      appCards: [
        ["Nutrition", "Daily routines and recipes."],
        ["Workouts", "Gym, home and goal-based training."],
        ["Programs", "Step-by-step transformation plans."],
        ["Progress", "Track consistency and results."],
      ],

      pricingTitle: "Choose your access.",
      pricingText: "One-time payment. No monthly subscription.",
      best: "🔥 Best Value",
      plansData: [
        {
          name: "Nutrition",
          price: "€19.99",
          cta: "Get Nutrition",
          featured: false,
          points: [
            "5 body goals",
            "150 daily nutrition routines",
            "Weekly recipes",
            "Smart grocery generator",
            "Couple grocery mode",
            "Coaching page access after login",
          ],
        },
        {
          name: "Full Access",
          price: "€29.99",
          cta: "Get Full Access",
          featured: true,
          points: [
            "Everything from Nutrition",
            "Complete workout library",
            "Booty Builder access",
            "Programs",
            "Progress tracking",
            "Couple Zone",
            "Coaching page access after login",
          ],
        },
      ],

      footer: "© FitCoupleClub — One goal. One mind. One lifestyle.",
      terms: "Terms",
      privacy: "Privacy Policy",
      refund: "Refund Policy",
    },

    nl: {
      badge: "ÉÉN DOEL. ÉÉN MINDSET. ÉÉN LIFESTYLE.",
      heroTitle1: "STERKER",
      heroTitle2: "SAMEN.",
      heroText:
        "FitCoupleClub is meer dan een fitness platform. Het is een systeem voor ambitieuze mensen die samen trainen, samen groeien en de lifestyle bouwen die ze verdienen.",
      start: "JOIN DE CLUB",
      plans: "BEKIJK PLANNEN",
      stats: [
        ["TRAIN", "SAMEN"],
        ["BLIJF", "GEFOCUST"],
        ["WEES", "GEDISCIPLINEERD"],
        ["ZIE", "RESULTAAT"],
      ],

      goalsEyebrow: "Transformatie Systemen",
      goalsTitle: "Kies het lichaam en de lifestyle die jij wilt.",
      goalsText:
        "Geen gegok meer. Kies je doel en volg een duidelijk systeem voor consistentie, discipline en zichtbaar resultaat.",
      goals: [
        ["Vetverlies", "Eiwitrijke maaltijden, caloriestructuur en training om vet te verliezen."],
        ["Booty Builder", "Glute-focused workouts, activatie, progressive overload en support voor groei."],
        ["Spiermassa", "Trainingsprogressie en voedingsstructuur voor echte kracht en spiermassa."],
        ["Fasting Mode", "Eiwitrijke maaltijden binnen een 8-uurs eetwindow."],
        ["Couple Transformatie", "Train, eet, shop en blijf samen accountable."],
        ["Lean & Toned", "Bouw een strakker, fitter en atletischer lichaam."],
      ],

      bootyTitle: "Booty Builder Systeem",
      bootyText:
        "Een dedicated glute trainingssysteem met gym days, home workouts, activatie routines, resistance band sessies en voeding gericht op groei.",
      bootyPoints: ["Glute Dagen", "Thuis + Gym", "Activatie", "Progressive Overload", "Groei Voeding"],

      nutritionTitle: "Voeding die past in het echte leven.",
      nutritionText:
        "Eiwitrijke meal systems, slimme boodschappenlijsten en binnenkort: fasting, vegan, lactosevrij en glutenvrij.",
      nutritionCards: ["High Protein", "16:8 Fasting", "Vegan", "Lactosevrij", "Glutenvrij", "Slimme Boodschappen"],

      appTitle: "Alles in één member dashboard.",
      appText:
        "Open je dashboard, volg je maaltijden, train je programma, track progressie en blijf consistent zonder te overdenken.",
      appCards: [
        ["Voeding", "Dagelijkse routines en recepten."],
        ["Workouts", "Gym, thuis en doelgerichte training."],
        ["Programma’s", "Stap-voor-stap transformatieplannen."],
        ["Progressie", "Track consistentie en resultaat."],
      ],

      pricingTitle: "Kies je toegang.",
      pricingText: "Eenmalige betaling. Geen maandabonnement.",
      best: "🔥 Beste Keuze",
      plansData: [
        {
          name: "Nutrition",
          price: "€19.99",
          cta: "Koop Nutrition",
          featured: false,
          points: [
            "5 lichaamsdoelen",
            "150 dagelijkse voedingsroutines",
            "Wekelijkse recepten",
            "Slimme boodschappen generator",
            "Couple grocery mode",
            "Coaching pagina toegang na login",
          ],
        },
        {
          name: "Full Access",
          price: "€29.99",
          cta: "Krijg Full Access",
          featured: true,
          points: [
            "Alles van Nutrition",
            "Complete workout bibliotheek",
            "Booty Builder toegang",
            "Programma’s",
            "Progressie tracking",
            "Couple Zone",
            "Coaching pagina toegang na login",
          ],
        },
      ],

      footer: "© FitCoupleClub — Één doel. Één mindset. Één lifestyle.",
      terms: "Voorwaarden",
      privacy: "Privacybeleid",
      refund: "Refundbeleid",
    },
  }[language];

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={main}>
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 900px) {
          .hero-section {
            min-height: auto !important;
            padding-top: 140px !important;
            padding-bottom: 80px !important;
          }

          .hero-content {
            max-width: 100% !important;
            margin-top: 0 !important;
          }

          .hero-couple {
            position: relative !important;
            width: 100% !important;
            right: auto !important;
            bottom: auto !important;
            margin-top: 40px !important;
            max-height: none !important;
          }

          .hero-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .bottom-slogan {
            position: relative !important;
            left: auto !important;
            right: auto !important;
            bottom: auto !important;
            margin-top: 34px !important;
            flex-direction: column !important;
            gap: 8px !important;
          }
        }

        @media (max-width: 640px) {
          .hero-buttons {
            width: 100% !important;
          }

          .hero-buttons a {
            width: 100% !important;
          }

          .hero-stats {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Navbar />

      <section
        className="hero-section"
        style={{
          ...hero,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(40px)",
          transition: "all 1s ease",
        }}
      >
        <div style={heroBackground} />
        <div style={heroOverlay} />

        <div style={logoTop}>
          <img src="/images/fitcouple-logo.png" alt="FitCoupleClub" style={topLogo} />
        </div>

        <div className="hero-content" style={heroContent}>
          <div style={heroTag}>{t.badge}</div>

          <h1 style={heroTitle}>
            {t.heroTitle1}
            <br />
            <span style={redText}>{t.heroTitle2}</span>
          </h1>

          <p style={heroText}>{t.heroText}</p>

          <div className="hero-buttons" style={heroButtons}>
            <a href="/signup" style={primaryButton}>
              {t.start} <span>→</span>
            </a>

            <a href="#pricing" style={outlineButton}>
              {t.plans} <span>→</span>
            </a>
          </div>

          <div className="hero-stats" style={heroStats}>
            {t.stats.map(([top, bottom]) => (
              <div key={`${top}-${bottom}`} style={heroStat}>
                <div style={heroIcon}>▰</div>
                <div>{top}</div>
                <strong>{bottom}</strong>
              </div>
            ))}
          </div>
        </div>

        <img
          className="hero-couple"
          src="/images/couple.png"
          alt="FitCoupleClub couple"
          style={heroCouple}
        />

        <div className="bottom-slogan" style={bottomSlogan}>
          <span>TRAIN HARD.</span>
          <span>LIVE BETTER.</span>
          <span>BE UNSTOPPABLE.</span>
        </div>
      </section>

      <section style={section}>
        <div style={sectionHeader}>
          <div style={eyebrow}>{t.goalsEyebrow}</div>
          <h2 style={sectionTitle}>{t.goalsTitle}</h2>
          <p style={sectionIntro}>{t.goalsText}</p>
        </div>

        <div style={goalGrid}>
          {t.goals.map(([title, text]) => (
            <div key={title} style={goalCard}>
              <h3 style={goalTitle}>{title}</h3>
              <p style={goalText}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={split}>
        <div style={imagePanel}>
          <img src="/images/background.png" alt="FitCoupleClub gym" style={panelImage} />
        </div>

        <div>
          <div style={eyebrow}>BOOTY BUILDER</div>
          <h2 style={sectionTitle}>{t.bootyTitle}</h2>
          <p style={sectionText}>{t.bootyText}</p>

          <div style={pillGrid}>
            {t.bootyPoints.map((point) => (
              <div key={point} style={redPill}>
                ✓ {point}
              </div>
            ))}
          </div>

          <a href="/signup" style={inlineButton}>
            Start Booty Training
          </a>
        </div>
      </section>

      <section style={section}>
        <div style={redBox}>
          <div>
            <div style={eyebrow}>SMART NUTRITION</div>
            <h2 style={sectionTitle}>{t.nutritionTitle}</h2>
            <p style={sectionText}>{t.nutritionText}</p>
          </div>

          <div style={nutritionGrid}>
            {t.nutritionCards.map((item) => (
              <div key={item} style={nutritionCard}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={split}>
        <div>
          <div style={eyebrow}>INSIDE THE APP</div>
          <h2 style={sectionTitle}>{t.appTitle}</h2>
          <p style={sectionText}>{t.appText}</p>

          <div style={appGrid}>
            {t.appCards.map(([title, text]) => (
              <div key={title} style={appCard}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={dashboardMockup}>
          <div style={mockupTop} />
          <div style={mockupBody}>
            <img src="/images/fitcouple-logo.png" alt="" style={mockupLogo} />
            <h3 style={mockupTitle}>Member Dashboard</h3>

            <div style={mockupRows}>
              <div style={mockupRow}>Nutrition System</div>
              <div style={mockupRow}>Booty Builder</div>
              <div style={mockupRow}>Workout Library</div>
              <div style={mockupRow}>Progress Tracking</div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" style={section}>
        <div style={sectionHeader}>
          <div style={eyebrow}>MEMBERSHIP</div>
          <h2 style={sectionTitle}>{t.pricingTitle}</h2>
          <p style={sectionIntro}>{t.pricingText}</p>
        </div>

        <div style={pricingGrid}>
          {t.plansData.map((plan) => (
            <div
              key={plan.name}
              style={{
                ...pricingCard,
                ...(plan.featured ? pricingCardFeatured : {}),
              }}
            >
              {plan.featured && <div style={bestBadge}>{t.best}</div>}

              <div>
                <h3 style={pricingName}>{plan.name}</h3>
                <div style={price}>{plan.price}</div>
                <div style={priceSub}>{t.pricingText}</div>

                <ul style={pricingList}>
                  {plan.points.map((point) => (
                    <li key={point}>✓ {point}</li>
                  ))}
                </ul>
              </div>

              <a
                href="/signup"
                style={{
                  ...pricingButton,
                  ...(plan.featured ? pricingButtonFeatured : {}),
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer style={footer}>
        <div>{t.footer}</div>

        <div style={footerLinks}>
          <a href="/terms" style={footerLink}>
            {t.terms}
          </a>
          <a href="/privacy" style={footerLink}>
            {t.privacy}
          </a>
          <a href="/refund" style={footerLink}>
            {t.refund}
          </a>
        </div>
      </footer>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "#020202",
  color: "white",
  overflowX: "hidden",
};

const hero = {
  position: "relative",
  minHeight: "calc(100vh - 80px)",
  overflow: "hidden",
  background: "#020202",
  display: "flex",
  alignItems: "center",
  padding: "clamp(80px, 9vw, 120px) clamp(18px, 5vw, 84px)",
};

const heroBackground = {
  position: "absolute",
  inset: 0,
  backgroundImage: "url('/images/background.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "grayscale(1) brightness(0.42) contrast(1.15)",
  transform: "scale(1.02)",
};

const heroOverlay = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.78) 36%, rgba(0,0,0,0.34) 68%, rgba(0,0,0,0.88) 100%), linear-gradient(0deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.20) 42%, rgba(0,0,0,0.72) 100%)",
};

const logoTop = {
  position: "absolute",
  top: "24px",
  left: "clamp(18px, 5vw, 78px)",
  zIndex: 5,
};

const topLogo = {
  width: "clamp(130px, 16vw, 230px)",
  height: "auto",
  filter: "drop-shadow(0 18px 42px rgba(0,0,0,0.8))",
};

const heroContent = {
  position: "relative",
  zIndex: 4,
  maxWidth: "690px",
  marginTop: "80px",
};

const heroTag = {
  color: "rgba(255,255,255,0.55)",
  fontSize: "clamp(14px, 2vw, 22px)",
  fontWeight: "950",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginBottom: "18px",
};

const heroTitle = {
  margin: 0,
  fontSize: "clamp(58px, 12vw, 145px)",
  lineHeight: 0.82,
  letterSpacing: "-0.06em",
  fontWeight: "950",
  textTransform: "uppercase",
  color: "white",
};

const redText = {
  color: "#b00000",
};

const heroText = {
  marginTop: "28px",
  maxWidth: "520px",
  color: "rgba(255,255,255,0.78)",
  fontSize: "clamp(16px, 2vw, 20px)",
  lineHeight: 1.7,
};

const heroButtons = {
  display: "flex",
  gap: "18px",
  flexWrap: "wrap",
  marginTop: "32px",
};

const primaryButton = {
  minWidth: "220px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "18px",
  background: "#b00000",
  color: "white",
  padding: "18px 26px",
  borderRadius: "0px",
  textDecoration: "none",
  fontWeight: "950",
  letterSpacing: "0.04em",
  boxShadow: "0 20px 60px rgba(176,0,0,0.35)",
};

const outlineButton = {
  minWidth: "220px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "18px",
  background: "rgba(0,0,0,0.35)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.35)",
  padding: "18px 26px",
  borderRadius: "0px",
  textDecoration: "none",
  fontWeight: "950",
  letterSpacing: "0.04em",
};

const heroStats = {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "18px",
  marginTop: "44px",
  maxWidth: "760px",
};

const heroStat = {
  borderRight: "1px solid rgba(185,0,0,0.65)",
  paddingRight: "18px",
  color: "rgba(255,255,255,0.78)",
  fontSize: "14px",
  fontWeight: "850",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

const heroIcon = {
  color: "#c40000",
  fontSize: "22px",
  marginBottom: "10px",
};

const heroCouple = {
  position: "absolute",
  right: "clamp(-70px, -2vw, 20px)",
  bottom: "0",
  zIndex: 3,
  width: "clamp(420px, 58vw, 980px)",
  maxHeight: "92vh",
  objectFit: "contain",
  filter:
    "grayscale(1) contrast(1.1) drop-shadow(-30px 20px 70px rgba(0,0,0,0.9))",
};

const bottomSlogan = {
  position: "absolute",
  left: "clamp(18px, 5vw, 84px)",
  right: "clamp(18px, 5vw, 84px)",
  bottom: "26px",
  zIndex: 5,
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  color: "rgba(255,255,255,0.30)",
  fontSize: "clamp(18px, 3vw, 34px)",
  fontWeight: "950",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const section = {
  maxWidth: "1220px",
  margin: "0 auto",
  padding: "0 clamp(16px, 4vw, 28px) clamp(80px, 10vw, 120px)",
};

const sectionHeader = {
  maxWidth: "860px",
  marginBottom: "34px",
};

const eyebrow = {
  color: "#ef4444",
  fontSize: "13px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  fontWeight: "950",
  marginBottom: "10px",
};

const sectionTitle = {
  margin: 0,
  fontSize: "clamp(34px, 7vw, 58px)",
  lineHeight: 1,
  letterSpacing: "-0.045em",
  fontWeight: "950",
  textTransform: "uppercase",
};

const sectionIntro = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
  fontSize: "18px",
  marginTop: "16px",
};

const sectionText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.85,
  fontSize: "17px",
};

const goalGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
  gap: "20px",
};

const goalCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderTop: "3px solid #dc2626",
  borderRadius: "24px",
  padding: "26px",
  minHeight: "200px",
};

const goalTitle = {
  margin: "0 0 12px",
  fontSize: "25px",
  fontWeight: "950",
  textTransform: "uppercase",
};

const goalText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.75,
  margin: 0,
};

const split = {
  maxWidth: "1220px",
  margin: "0 auto",
  padding: "0 clamp(16px, 4vw, 28px) clamp(80px, 10vw, 120px)",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
  gap: "clamp(30px, 5vw, 50px)",
  alignItems: "center",
};

const imagePanel = {
  height: "clamp(360px, 70vw, 520px)",
  borderRadius: "28px",
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 30px 90px rgba(0,0,0,0.5)",
};

const panelImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const pillGrid = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginTop: "22px",
};

const redPill = {
  background: "rgba(220,38,38,0.12)",
  border: "1px solid rgba(220,38,38,0.35)",
  color: "rgba(255,255,255,0.9)",
  padding: "12px 14px",
  borderRadius: "12px",
  fontWeight: "900",
};

const inlineButton = {
  display: "inline-flex",
  marginTop: "28px",
  background: "#dc2626",
  color: "white",
  padding: "15px 24px",
  borderRadius: "0px",
  textDecoration: "none",
  fontWeight: "950",
};

const redBox = {
  background:
    "linear-gradient(135deg, rgba(127,29,29,0.38), rgba(255,255,255,0.035))",
  border: "1px solid rgba(220,38,38,0.28)",
  borderRadius: "30px",
  padding: "clamp(24px, 5vw, 38px)",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
  gap: "28px",
  alignItems: "center",
};

const nutritionGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
  gap: "12px",
};

const nutritionCard = {
  background: "rgba(0,0,0,0.38)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "16px",
  padding: "18px",
  textAlign: "center",
  fontWeight: "950",
};

const appGrid = {
  display: "grid",
  gap: "14px",
  marginTop: "24px",
};

const appCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderLeft: "3px solid #dc2626",
  borderRadius: "16px",
  padding: "18px",
  display: "grid",
  gap: "6px",
};

const dashboardMockup = {
  background: "#080808",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "28px",
  overflow: "hidden",
  boxShadow: "0 30px 90px rgba(0,0,0,0.5)",
};

const mockupTop = {
  height: "48px",
  background: "rgba(255,255,255,0.05)",
};

const mockupBody = {
  padding: "30px",
};

const mockupLogo = {
  width: "140px",
  marginBottom: "18px",
};

const mockupTitle = {
  margin: "0 0 22px",
  fontSize: "34px",
  fontWeight: "950",
  textTransform: "uppercase",
};

const mockupRows = {
  display: "grid",
  gap: "12px",
};

const mockupRow = {
  padding: "16px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  fontWeight: "900",
};

const pricingGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
  gap: "28px",
};

const pricingCard = {
  background: "#060606",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: "28px",
  padding: "38px",
  minHeight: "620px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
};

const pricingCardFeatured = {
  border: "2px solid #dc2626",
  background: "linear-gradient(180deg, rgba(127,29,29,0.25), #060606)",
};

const bestBadge = {
  position: "absolute",
  top: "-14px",
  right: "18px",
  background: "#dc2626",
  color: "white",
  padding: "10px 14px",
  borderRadius: "12px",
  fontWeight: "950",
};

const pricingName = {
  margin: "0 0 18px",
  fontSize: "clamp(36px, 5vw, 52px)",
  fontWeight: "950",
  textTransform: "uppercase",
};

const price = {
  fontSize: "clamp(60px, 8vw, 82px)",
  fontWeight: "950",
  lineHeight: 1,
};

const priceSub = {
  marginTop: "10px",
  color: "rgba(255,255,255,0.62)",
  fontWeight: "850",
};

const pricingList = {
  paddingLeft: 0,
  listStyle: "none",
  lineHeight: 2,
  marginTop: "28px",
  color: "rgba(255,255,255,0.82)",
  fontSize: "17px",
};

const pricingButton = {
  display: "block",
  textAlign: "center",
  textDecoration: "none",
  background: "#dc2626",
  color: "white",
  padding: "18px",
  borderRadius: "0px",
  fontWeight: "950",
  fontSize: "20px",
};

const pricingButtonFeatured = {
  background: "white",
  color: "black",
};

const footer = {
  borderTop: "1px solid rgba(255,255,255,0.08)",
  padding: "30px 24px",
  color: "rgba(255,255,255,0.58)",
  textAlign: "center",
};

const footerLinks = {
  display: "flex",
  justifyContent: "center",
  gap: "18px",
  flexWrap: "wrap",
  marginTop: "14px",
};

const footerLink = {
  color: "rgba(255,255,255,0.72)",
  textDecoration: "none",
  fontWeight: "800",
};