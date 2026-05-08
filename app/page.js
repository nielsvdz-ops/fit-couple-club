"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useLanguage } from "../lib/useLanguage";

const goalCards = {
  en: [
    {
      title: "Lose Fat",
      text: "Drop body fat with calorie structure, high-protein routines, smart groceries, and training that fits real life.",
    },
    {
      title: "Build Muscle",
      text: "Progressive workouts, higher-protein nutrition, and grocery structure that supports real growth.",
    },
    {
      title: "Tone & Shape",
      text: "Build a leaner, more athletic look with consistent workouts, better food choices, and clear weekly structure.",
    },
    {
      title: "Couple Transformation",
      text: "Train, eat, shop, and stay accountable together with Couple Zone, shared routines, and weekly check-ins.",
    },
  ],
  nl: [
    {
      title: "Vet Verliezen",
      text: "Verlies vet met caloriestructuur, eiwitrijke routines, slimme boodschappen en training die past in het echte leven.",
    },
    {
      title: "Spiermassa Opbouwen",
      text: "Progressieve workouts, eiwitrijke voeding en boodschappenstructuur die echte groei ondersteunt.",
    },
    {
      title: "Strakker & Atletischer",
      text: "Bouw een strakker lichaam met consistente workouts, betere voedingskeuzes en duidelijke weekstructuur.",
    },
    {
      title: "Couple Transformatie",
      text: "Train, eet, shop en blijf samen accountable met Couple Zone, gezamenlijke routines en wekelijkse check-ins.",
    },
  ],
};

export default function Home() {
  const { language } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  const t = {
    en: {
      badge: "Fitness, food, groceries & staying consistent together",
      heroTitle: "Train smarter, eat better, and build a routine you can actually keep.",
      heroText:
        "Fit Couple Club helps you know what to eat, how to train, what to buy, and how to stay consistent — whether you do it solo or together.",
      start: "Get Started",
      viewPlans: "View Plans",
      trust1: "150 food routines",
      trust2: "Couple Zone",
      trust3: "Smart grocery lists",
      overlayTitle: "Solo or together",
      overlayText:
        "Made for real life, busy weeks, and couples who want a clear plan.",
      how: "How It Works",
      howTitle: "Less guessing. More structure. Better consistency.",
      features: [
        [
          "01",
          "Pick your goal",
          "Choose whether you want to lose fat, build muscle, feel fitter, or work on it together.",
        ],
        [
          "02",
          "Follow a simple structure",
          "Use ready-made meals, recipes, workouts, grocery lists, and progress tools.",
        ],
        [
          "03",
          "Stay on track",
          "Couple Zone helps you check in, see what went well, and spot what needs more attention.",
        ],
        [
          "04",
          "Choose your access",
          "Start with food only, or get the full fitness platform with one simple payment.",
        ],
      ],
      about: "About Us",
      aboutTitle: "Built from real experience, not just theory.",
      aboutText1:
        "We have been together for over 12 years. We train together, eat together, and learned what works by living it ourselves.",
      aboutText2:
        "Rosanna learned a lot through her own journey with food, balance, healthy habits, and recovery.",
      aboutText3:
        "Niels has been training since he was 15 and brings years of discipline, structure, and fitness experience.",
      goalsEyebrow: "Choose Your Goal",
      goalsTitle: "Built around the goals people actually care about.",
      coupleEyebrow: "Couple Zone",
      coupleTitle: "It gets easier when you do it together.",
      coupleText1:
        "Couple Zone helps couples train, eat, shop, and stay consistent together without turning everything into pressure or arguments.",
      coupleText2:
        "Check your week, see your patterns, and get clear suggestions on what to improve next.",
      mini1: "Find weak spots",
      mini2: "Plan groceries together",
      mini3: "Simple advice",
      membership: "Membership Plans",
      membershipTitle: "Choose what you need.",
      membershipIntro:
        "Start with the food plan, or choose Full Access for food, workouts, programs, progress, and Couple Zone. Both are one-time payments.",
      digitalDelivery:
        "After purchase, everything is available inside your member dashboard: food plans, recipes, grocery lists, workouts, programs, and progress tools.",
      bestValue: "🔥 Best Value",
      footer:
        "© Fit Couple Club — Build your body, health, and lifestyle your way.",
      terms: "Terms",
      privacy: "Privacy Policy",
      refund: "Refund Policy",
      pricingPlans: [
        {
          name: "Nutrition",
          price: "€19.99",
          points: [
            "5 body goals",
            "150 daily nutrition routines",
            "Weekly recipes & structure",
            "Smart grocery generator",
            "Couple grocery mode",
            "Access to the Coaching page after login",
          ],
          cta: "Get Nutrition",
          featured: false,
        },
        {
          name: "Full Access",
          price: "€29.99",
          points: [
            "Everything from Nutrition",
            "Complete workout library",
            "Step-by-step training programs",
            "Exercise guidance",
            "Progress tracking",
            "Couple Zone",
            "Access to the Coaching page after login",
          ],
          cta: "Get Full Access",
          featured: true,
        },
      ],
    },
    nl: {
      badge: "Fitness, voeding, boodschappen & samen consistent blijven",
      heroTitle: "Train slimmer, eet beter en bouw een routine die je echt volhoudt.",
      heroText:
        "Fit Couple Club helpt je met wat je eet, hoe je traint, wat je koopt en hoe je consistent blijft — alleen of samen.",
      start: "Start Nu",
      viewPlans: "Bekijk Plannen",
      trust1: "150 voedingsroutines",
      trust2: "Couple Zone",
      trust3: "Slimme boodschappenlijsten",
      overlayTitle: "Solo of samen",
      overlayText:
        "Gemaakt voor het echte leven, drukke weken en koppels die een duidelijk plan willen.",
      how: "Hoe Het Werkt",
      howTitle: "Minder gokken. Meer structuur. Meer consistentie.",
      features: [
        [
          "01",
          "Kies je doel",
          "Kies of je vet wilt verliezen, spiermassa wilt opbouwen, fitter wilt worden of dit samen wilt aanpakken.",
        ],
        [
          "02",
          "Volg een simpele structuur",
          "Gebruik kant-en-klare maaltijden, recepten, workouts, boodschappenlijsten en progressietools.",
        ],
        [
          "03",
          "Blijf op koers",
          "Couple Zone helpt je samen inchecken, zien wat goed ging en ontdekken waar je meer aandacht aan moet geven.",
        ],
        [
          "04",
          "Kies je toegang",
          "Start alleen met voeding, of krijg het volledige fitnessplatform met één simpele betaling.",
        ],
      ],
      about: "Over Ons",
      aboutTitle: "Gebouwd vanuit echte ervaring, niet alleen theorie.",
      aboutText1:
        "Wij zijn al meer dan 12 jaar samen. We trainen samen, eten samen en hebben zelf geleerd wat wel en niet werkt.",
      aboutText2:
        "Rosanna heeft door haar eigen journey veel geleerd over voeding, balans, gezonde gewoontes en herstel.",
      aboutText3:
        "Niels traint sinds zijn 15e en brengt jaren ervaring mee in discipline, structuur en fitness.",
      goalsEyebrow: "Kies Je Doel",
      goalsTitle: "Gebouwd rondom doelen die mensen echt belangrijk vinden.",
      coupleEyebrow: "Couple Zone",
      coupleTitle: "Het wordt makkelijker als je het samen doet.",
      coupleText1:
        "Couple Zone helpt koppels samen trainen, eten, boodschappen doen en consistent blijven zonder dat het voelt als druk of discussie.",
      coupleText2:
        "Check je week, zie je patronen en krijg duidelijke tips over wat je als volgende kunt verbeteren.",
      mini1: "Vind zwakke plekken",
      mini2: "Plan boodschappen samen",
      mini3: "Simpele tips",
      membership: "Membership Plannen",
      membershipTitle: "Kies wat jij nodig hebt.",
      membershipIntro:
        "Start met alleen voeding, of kies Full Access voor voeding, workouts, programma’s, progressie en Couple Zone. Beide zijn eenmalige betalingen.",
      digitalDelivery:
        "Na aankoop staat alles klaar in je member dashboard: voedingsplannen, recepten, boodschappenlijsten, workouts, programma’s en progressietools.",
      bestValue: "🔥 Beste Keuze",
      footer:
        "© Fit Couple Club — Bouw je lichaam, gezondheid en lifestyle op jouw manier.",
      terms: "Voorwaarden",
      privacy: "Privacybeleid",
      refund: "Refundbeleid",
      pricingPlans: [
        {
          name: "Nutrition",
          price: "€19.99",
          points: [
            "5 lichaamsdoelen",
            "150 dagelijkse voedingsroutines",
            "Wekelijkse recepten & structuur",
            "Slimme boodschappen generator",
            "Couple grocery mode",
            "Toegang tot de Coaching pagina na login",
          ],
          cta: "Koop Nutrition",
          featured: false,
        },
        {
          name: "Full Access",
          price: "€29.99",
          points: [
            "Alles van Nutrition",
            "Complete workout bibliotheek",
            "Stap-voor-stap trainingsprogramma’s",
            "Oefening begeleiding",
            "Progressie tracking",
            "Couple Zone",
            "Toegang tot de Coaching pagina na login",
          ],
          cta: "Krijg Full Access",
          featured: true,
        },
      ],
    },
  }[language];

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);

    return () => clearTimeout(timer);
  }, []);
  const pricingPlans = t.pricingPlans;

  return (
    <main style={main}>
      <style jsx global>{`
        @keyframes floatImage {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes softGlow {
          0% {
            opacity: 0.55;
          }
          50% {
            opacity: 0.9;
          }
          100% {
            opacity: 0.55;
          }
        }

        @media (max-width: 760px) {
          html,
          body {
            overflow-x: hidden;
          }

          a,
          button {
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>

      <Navbar />

      <section
        style={{
          ...heroWrap,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0px)" : "translateY(40px)",
          transition: "all 1s ease",
        }}
      >
        <div>
          <div style={badgeStyle}>{t.badge}</div>

          <h1 style={heroTitle}>{t.heroTitle}</h1>

          <p style={heroText}>{t.heroText}</p>

          <div style={heroButtonRow}>
            <a href="/signup" style={primaryButton}>
              {t.start}
            </a>
            <a href="#pricing" style={secondaryButton}>
              {t.viewPlans}
            </a>
          </div>

          <div style={trustRow}>
            <span>{t.trust1}</span>
            <span>{t.trust2}</span>
            <span>{t.trust3}</span>
          </div>
        </div>

        <div style={heroImageWrap}>
          <div style={heroGlow} />

          <img src="/couple-pictures/DJI-0579.jpg" alt="" style={heroBgImage} />

          <img
            src="/couple-pictures/DJI-0579.jpg"
            alt="Fit Couple Club"
            style={heroMainImage}
          />

          <div style={imageOverlay}>
            <div style={overlayTitle}>{t.overlayTitle}</div>
            <div style={overlayText}>{t.overlayText}</div>
          </div>
        </div>
      </section>

      <section id="features" style={sectionWrap}>
        <div style={sectionHeader}>
          <div style={eyebrow}>{t.how}</div>
          <h2 style={sectionTitle}>{t.howTitle}</h2>
        </div>

        <div style={featureGrid}>
          {t.features.map(([number, title, text]) => (
            <div key={title} style={featureCard}>
              <div style={featureNumber}>{number}</div>
              <h3 style={featureTitle}>{title}</h3>
              <p style={featureText}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={splitSection}>
        <div style={luxuryImageCard}>
          <img
            src="/couple-pictures/DJI-0697.jpg"
            alt="Niels and Rosanna"
            style={sectionImage}
          />
        </div>

        <div>
          <div style={eyebrow}>{t.about}</div>
          <h2 style={sectionTitle}>{t.aboutTitle}</h2>
          <p style={sectionText}>{t.aboutText1}</p>
          <p style={sectionText}>{t.aboutText2}</p>
          <p style={sectionText}>{t.aboutText3}</p>
        </div>
      </section>

      <section style={sectionWrap}>
        <div style={sectionHeader}>
          <div style={eyebrow}>{t.goalsEyebrow}</div>
          <h2 style={sectionTitle}>{t.goalsTitle}</h2>
        </div>

        <div style={goalGrid}>
          {goalCards[language].map((goal) => (
            <div key={goal.title} style={goalCard}>
              <h3 style={goalTitle}>{goal.title}</h3>
              <p style={goalText}>{goal.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={splitSection}>
        <div>
          <div style={eyebrow}>{t.coupleEyebrow}</div>
          <h2 style={sectionTitle}>{t.coupleTitle}</h2>
          <p style={sectionText}>{t.coupleText1}</p>
          <p style={sectionText}>{t.coupleText2}</p>

          <div style={miniFeatureGrid}>
            <div style={miniFeature}>{t.mini1}</div>
            <div style={miniFeature}>{t.mini2}</div>
            <div style={miniFeature}>{t.mini3}</div>
          </div>
        </div>

        <div style={luxuryImageCard}>
          <img
            src="/couple-pictures/DJI-0773.jpg"
            alt="Couple transformation"
            style={sectionImage}
          />
        </div>
      </section>

      <section id="pricing" style={sectionWrap}>
  <div style={sectionHeader}>
    <div style={eyebrow}>{t.membership}</div>

    <h2 style={sectionTitle}>{t.membershipTitle}</h2>

    <p style={sectionIntro}>{t.membershipIntro}</p>

    <p style={digitalDeliveryText}>{t.digitalDelivery}</p>
  </div>

  <div style={pricingGrid}>
    {pricingPlans.map((plan) => (
      <div
        key={plan.name}
        style={{
          ...pricingCard,
          ...(plan.featured ? pricingCardFeatured : {}),
        }}
      >
        {plan.featured && (
          <div style={bestValue}>{t.bestValue}</div>
        )}

        <div>
          <h3 style={pricingTitle}>{plan.name}</h3>

          <div style={pricingPrice}>{plan.price}</div>

          <div style={pricingSubtext}>
            {language === "nl"
              ? "Eenmalige betaling. Geen maandabonnement."
              : "One-time payment. No monthly subscription."}
          </div>

          <ul style={pricingList}>
            {plan.points.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </div>

        <a
          href="/signup"
          style={{
            ...pricingButton,
            ...(plan.featured
              ? pricingButtonFeatured
              : {}),
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
  background: "#050505",
  color: "white",
};

const heroWrap = {
  maxWidth: "1220px",
  margin: "0 auto",
  padding: "clamp(56px, 10vw, 100px) clamp(14px, 4vw, 24px) clamp(70px, 10vw, 110px)",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
  gap: "clamp(28px, 6vw, 54px)",
  alignItems: "center",
};

const badgeStyle = {
  display: "inline-block",
  padding: "10px 16px",
  border: "1px solid rgba(250,204,21,0.35)",
  borderRadius: "999px",
  color: "#facc15",
  fontSize: "13px",
  fontWeight: "800",
  marginBottom: "22px",
};

const heroTitle = {
  fontSize: "clamp(42px, 12vw, 82px)",
  lineHeight: 0.98,
  letterSpacing: "-0.04em",
  margin: "0 0 24px",
  fontWeight: "950",
};

const heroText = {
  fontSize: "clamp(17px, 4vw, 20px)",
  lineHeight: 1.75,
  color: "rgba(255,255,255,0.72)",
  maxWidth: "720px",
  marginBottom: "34px",
};

const heroButtonRow = {
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
  marginBottom: "24px",
};

const primaryButton = {
  background: "#facc15",
  color: "black",
  padding: "16px 26px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "900",
  textAlign: "center",
};

const secondaryButton = {
  border: "1px solid rgba(255,255,255,0.18)",
  color: "white",
  padding: "16px 26px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "800",
  background: "rgba(255,255,255,0.04)",
  textAlign: "center",
};

const trustRow = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  color: "rgba(255,255,255,0.62)",
  fontSize: "14px",
};

const heroImageWrap = {
  height: "clamp(380px, 76vw, 560px)",
  borderRadius: "34px",
  overflow: "hidden",
  position: "relative",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 30px 100px rgba(0,0,0,0.55)",
  background:
    "radial-gradient(circle at center, rgba(250,204,21,0.1), transparent 70%)",
};

const heroGlow = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at 50% 45%, rgba(250,204,21,0.18), transparent 48%)",
  animation: "softGlow 5s ease-in-out infinite",
  zIndex: 1,
};

const heroBgImage = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "blur(32px) brightness(0.55)",
  transform: "scale(1.22)",
  zIndex: 0,
};

const heroMainImage = {
  position: "relative",
  zIndex: 2,
  width: "78%",
  height: "88%",
  objectFit: "cover",
  borderRadius: "26px",
  margin: "34px auto 0",
  display: "block",
  boxShadow: "0 24px 70px rgba(0,0,0,0.65)",
  animation: "floatImage 6s ease-in-out infinite",
};

const imageOverlay = {
  position: "absolute",
  zIndex: 3,
  left: "22px",
  right: "22px",
  bottom: "22px",
  padding: "18px",
  borderRadius: "20px",
  background: "rgba(0,0,0,0.58)",
  border: "1px solid rgba(255,255,255,0.14)",
  backdropFilter: "blur(10px)",
};

const overlayTitle = {
  fontSize: "22px",
  fontWeight: "900",
  marginBottom: "6px",
};

const overlayText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.6,
};

const sectionWrap = {
  maxWidth: "1220px",
  margin: "0 auto",
  padding: "0 clamp(14px, 4vw, 24px) clamp(70px, 10vw, 110px)",
};

const sectionHeader = {
  maxWidth: "850px",
  marginBottom: "34px",
};

const eyebrow = {
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "10px",
};

const sectionTitle = {
  fontSize: "clamp(32px, 8vw, 52px)",
  lineHeight: 1.05,
  margin: 0,
  fontWeight: "950",
  letterSpacing: "-0.03em",
};

const sectionIntro = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
  marginTop: "16px",
  fontSize: "18px",
};

const digitalDeliveryText = {
  marginTop: "14px",
  color: "rgba(255,255,255,0.6)",
  fontSize: "14px",
  lineHeight: 1.6,
  maxWidth: "700px",
};

const featureGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
  gap: "20px",
};

const featureCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "26px",
  padding: "28px",
};

const featureNumber = {
  color: "#facc15",
  fontSize: "13px",
  fontWeight: "900",
  letterSpacing: "0.14em",
  marginBottom: "18px",
};

const featureTitle = {
  fontSize: "24px",
  margin: "0 0 12px",
  fontWeight: "900",
};

const featureText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.75,
  margin: 0,
};

const splitSection = {
  maxWidth: "1220px",
  margin: "0 auto",
  padding: "0 clamp(14px, 4vw, 24px) clamp(70px, 10vw, 110px)",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
  gap: "clamp(28px, 5vw, 46px)",
  alignItems: "center",
};

const luxuryImageCard = {
  height: "clamp(340px, 70vw, 500px)",
  borderRadius: "34px",
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 24px 80px rgba(0,0,0,0.38)",
};

const sectionImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const sectionText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.85,
  fontSize: "17px",
};

const goalGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
  gap: "20px",
};

const goalCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "26px",
  padding: "28px",
  minHeight: "180px",
};

const goalTitle = {
  fontSize: "24px",
  fontWeight: "900",
  margin: "0 0 12px",
};

const goalText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.75,
  margin: 0,
};

const miniFeatureGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))",
  gap: "12px",
  marginTop: "22px",
};

const miniFeature = {
  background: "rgba(250,204,21,0.08)",
  border: "1px solid rgba(250,204,21,0.22)",
  borderRadius: "14px",
  padding: "12px 14px",
  color: "rgba(255,255,255,0.86)",
  fontWeight: "800",
};

const pricingGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
  gap: "28px",
  alignItems: "stretch",
};

const pricingCard = {
  background: "#050505",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "30px",
  padding: "40px",
  minHeight: "640px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
};

const pricingCardFeatured = {
  background: "rgba(250,204,21,0.06)",
  border: "2px solid #facc15",
};

const bestValue = {
  position: "absolute",
  top: "-14px",
  right: "18px",
  background: "#facc15",
  color: "black",
  fontSize: "13px",
  fontWeight: "900",
  padding: "10px 14px",
  borderRadius: "12px",
};

const pricingTitle = {
  fontSize: "clamp(34px, 5vw, 50px)",
  margin: "0 0 18px",
  fontWeight: "950",
  lineHeight: 1,
};

const pricingPrice = {
  fontSize: "clamp(62px, 9vw, 84px)",
  fontWeight: "950",
  marginBottom: "8px",
  lineHeight: 1,
};

const pricingSubtext = {
  color: "rgba(255,255,255,0.62)",
  fontWeight: "800",
  marginBottom: "28px",
  fontSize: "18px",
};

const pricingList = {
  paddingLeft: "22px",
  lineHeight: 2,
  marginTop: "30px",
  marginBottom: "34px",
  color: "rgba(255,255,255,0.82)",
  fontSize: "clamp(16px, 2vw, 19px)",
};

const pricingButton = {
  display: "block",
  width: "100%",
  textAlign: "center",
  textDecoration: "none",
  padding: "20px 18px",
  borderRadius: "18px",
  fontWeight: "950",
  fontSize: "clamp(20px, 2vw, 24px)",
  background: "#facc15",
  color: "black",
  marginTop: "34px",
  boxSizing: "border-box",
  transition: "all 0.25s ease",
};

const pricingButtonFeatured = {
  background: "white",
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
  overflowWrap: "break-word",
  wordBreak: "break-word",
  gap: "18px",
  flexWrap: "wrap",
  marginTop: "14px",
};

const footerLink = {
  color: "rgba(255,255,255,0.72)",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "700",
};
