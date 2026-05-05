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

  const [vipCounter, setVipCounter] = useState({
    vip: {
      label: "14/90 VIP spots taken",
      isSoldOut: false,
    },
    coaching: {
      label: "2/12 coaching spots taken",
      isSoldOut: false,
    },
  });

  const t = {
    en: {
      badge: "Fitness, nutrition, groceries & couple accountability",
      heroTitle: "Stop guessing. Build a body and routine that actually lasts.",
      heroText:
        "Fit Couple Club gives you daily nutrition routines, smart supermarket grocery planning, workouts, progress tools, and Couple Zone accountability — all in one clear system.",
      start: "Start Your Journey",
      viewPlans: "View Plans",
      trust1: "150 nutrition routines",
      trust2: "Couple Zone",
      trust3: "Smart grocery engine",
      overlayTitle: "Solo or together",
      overlayText:
        "Built for real discipline, real routines, and real couples who want structure.",
      how: "How It Works",
      howTitle: "One system. Less guessing. Better consistency.",
      features: [
        [
          "01",
          "Choose your goal",
          "Lose fat, build muscle, tone, improve performance, or transform as a couple.",
        ],
        [
          "02",
          "Follow the structure",
          "Use daily routines, workouts, recipes, grocery planning, and progress tools.",
        ],
        [
          "03",
          "Stay accountable",
          "Couple Zone helps you score the week, detect weak points, and improve together.",
        ],
        [
          "04",
          "Upgrade support",
          "Choose VIP or Coaching when you want personal guidance and accountability.",
        ],
      ],
      about: "About Us",
      aboutTitle: "Built from real experience, not theory.",
      aboutText1:
        "We have been together for over 12 years. We train together, eat together, and built our bodies and lifestyle side by side.",
      aboutText2:
        "Rosanna’s journey gave her deep real-world knowledge about food, balance, healthy eating, and recovery.",
      aboutText3:
        "Niels has trained since he was 15 and built years of discipline, structure, and athletic lifestyle experience.",
      goalsEyebrow: "Choose Your Goal",
      goalsTitle: "Built around what people actually want.",
      coupleEyebrow: "Couple Zone",
      coupleTitle: "Your biggest advantage is doing this together.",
      coupleText1:
        "Couple Zone is a premium accountability system for couples who want to train, eat, shop, and stay consistent together without pressure or arguments.",
      coupleText2:
        "Score your week, track history, detect the weakest area, and get personalized advice so you know exactly what to improve next.",
      mini1: "Weakest-area detection",
      mini2: "Couple grocery planning",
      mini3: "Personalized advice",
      membership: "Membership Plans",
      membershipTitle: "Choose the level of support you need.",
      membershipIntro:
        "Start with nutrition, unlock the full transformation system, or get guided with VIP and personal coaching.",
      digitalDelivery:
        "All content and services are delivered digitally through a secure member dashboard after purchase, including structured workout programs, nutrition plans, and optional coaching and support services.",
      bestValue: "🔥 Best Value",
      soldOut: "Sold Out",
      footer:
        "© Fit Couple Club — Build your body, health, and lifestyle solo or as a team.",
      terms: "Terms",
      privacy: "Privacy Policy",
      refund: "Refund Policy",
      pricingPlans: [
        {
          name: "Nutrition",
          price: "€19.99/mo",
          points: [
            "5 body goals",
            "150 daily nutrition routines",
            "Weekly recipes & structure",
            "Smart grocery generator",
            "Couple grocery mode",
          ],
          cta: "Start Nutrition",
          featured: false,
        },
        {
          name: "Full Access",
          price: "€34.99/mo",
          points: [
            "Everything in Nutrition",
            "Full workout system",
            "Step-by-step programs",
            "Exercise GIF guidance",
            "Progress tracking",
            "Couple Zone system",
          ],
          cta: "Unlock Full System",
          featured: true,
        },
        {
          name: "VIP",
          price: "€90/mo",
          points: [
            "Everything in Full Access",
            "Monthly coaching call",
            "Weekly couple check-ins",
            "Personalized advice",
            "Priority support",
            "Limited VIP spots",
          ],
          cta: "Go VIP",
          featured: false,
          type: "vip",
        },
        {
          name: "Coaching",
          price: "€340/mo",
          points: [
            "Everything in VIP",
            "Weekly 1-on-1 calls",
            "Fully custom plan",
            "Direct support",
            "Couple coaching available",
            "Coaching by Niels & Rosanna",
          ],
          cta: "Start Coaching",
          featured: false,
          type: "coaching",
        },
      ],
    },
    nl: {
      badge: "Fitness, voeding, boodschappen & couple accountability",
      heroTitle: "Stop met gokken. Bouw een lichaam en routine die echt blijft.",
      heroText:
        "Fit Couple Club geeft je dagelijkse voedingsroutines, slimme supermarkt boodschappenplanning, workouts, progressietools en Couple Zone accountability — alles in één duidelijk systeem.",
      start: "Start Je Journey",
      viewPlans: "Bekijk Plannen",
      trust1: "150 voedingsroutines",
      trust2: "Couple Zone",
      trust3: "Slimme boodschappen engine",
      overlayTitle: "Solo of samen",
      overlayText:
        "Gebouwd voor echte discipline, echte routines en koppels die structuur willen.",
      how: "Hoe Het Werkt",
      howTitle: "Eén systeem. Minder gokken. Meer consistentie.",
      features: [
        [
          "01",
          "Kies je doel",
          "Vet verliezen, spiermassa opbouwen, strakker worden, prestaties verbeteren of samen transformeren.",
        ],
        [
          "02",
          "Volg de structuur",
          "Gebruik dagelijkse routines, workouts, recepten, boodschappenplanning en progressietools.",
        ],
        [
          "03",
          "Blijf accountable",
          "Couple Zone helpt je de week te scoren, zwakke punten te vinden en samen te verbeteren.",
        ],
        [
          "04",
          "Upgrade support",
          "Kies VIP of Coaching wanneer je persoonlijke begeleiding en accountability wilt.",
        ],
      ],
      about: "Over Ons",
      aboutTitle: "Gebouwd vanuit echte ervaring, niet theorie.",
      aboutText1:
        "Wij zijn al meer dan 12 jaar samen. We trainen samen, eten samen en hebben onze lichamen en lifestyle samen opgebouwd.",
      aboutText2:
        "Rosanna’s journey gaf haar diepe praktijkkennis over voeding, balans, gezond eten en herstel.",
      aboutText3:
        "Niels traint sinds zijn 15e en bouwde jarenlange discipline, structuur en atletische lifestyle ervaring op.",
      goalsEyebrow: "Kies Je Doel",
      goalsTitle: "Gebouwd rondom wat mensen echt willen.",
      coupleEyebrow: "Couple Zone",
      coupleTitle: "Jullie grootste voordeel is dit samen doen.",
      coupleText1:
        "Couple Zone is een premium accountability systeem voor koppels die samen willen trainen, eten, boodschappen doen en consistent blijven zonder druk of discussies.",
      coupleText2:
        "Score je week, track geschiedenis, vind het zwakste gebied en krijg persoonlijk advies zodat je precies weet wat je moet verbeteren.",
      mini1: "Zwakste-punt detectie",
      mini2: "Couple boodschappenplanning",
      mini3: "Persoonlijk advies",
      membership: "Membership Plannen",
      membershipTitle: "Kies het niveau support dat je nodig hebt.",
      membershipIntro:
        "Start met voeding, ontgrendel het volledige transformatiesysteem of krijg begeleiding met VIP en personal coaching.",
      digitalDelivery:
        "Alle content en services worden digitaal geleverd via een beveiligd member dashboard na aankoop, inclusief workout programma’s, voedingsplannen en optionele coaching en support.",
      bestValue: "🔥 Beste Keuze",
      soldOut: "Uitverkocht",
      footer:
        "© Fit Couple Club — Bouw je lichaam, gezondheid en lifestyle solo of als team.",
      terms: "Voorwaarden",
      privacy: "Privacybeleid",
      refund: "Refundbeleid",
      pricingPlans: [
        {
          name: "Nutrition",
          price: "€19.99/mo",
          points: [
            "5 lichaamsdoelen",
            "150 dagelijkse voedingsroutines",
            "Wekelijkse recepten & structuur",
            "Slimme boodschappen generator",
            "Couple grocery mode",
          ],
          cta: "Start Nutrition",
          featured: false,
        },
        {
          name: "Full Access",
          price: "€34.99/mo",
          points: [
            "Alles in Nutrition",
            "Volledig workout systeem",
            "Stap-voor-stap programma’s",
            "Exercise GIF begeleiding",
            "Progressie tracking",
            "Couple Zone systeem",
          ],
          cta: "Ontgrendel Full System",
          featured: true,
        },
        {
          name: "VIP",
          price: "€90/mo",
          points: [
            "Alles in Full Access",
            "Maandelijkse coaching call",
            "Wekelijkse couple check-ins",
            "Persoonlijk advies",
            "Priority support",
            "Beperkte VIP plekken",
          ],
          cta: "Ga VIP",
          featured: false,
          type: "vip",
        },
        {
          name: "Coaching",
          price: "€340/mo",
          points: [
            "Alles in VIP",
            "Wekelijkse 1-op-1 calls",
            "Volledig custom plan",
            "Direct support",
            "Couple coaching mogelijk",
            "Coaching door Niels & Rosanna",
          ],
          cta: "Start Coaching",
          featured: false,
          type: "coaching",
        },
      ],
    },
  }[language];

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);

    async function loadVipCounter() {
      try {
        const response = await fetch("/api/vip-counter", {
          cache: "no-store",
        });

        const data = await response.json();
        setVipCounter(data);
      } catch (error) {
        console.error("Failed to load VIP counter:", error);
      }
    }

    loadVipCounter();

    return () => clearTimeout(timer);
  }, []);

  const pricingPlans = t.pricingPlans.map((plan) => {
    if (plan.type === "vip") {
      return {
        ...plan,
        cta: vipCounter.vip.isSoldOut ? t.soldOut : plan.cta,
        scarcity: vipCounter.vip.label,
        disabled: vipCounter.vip.isSoldOut,
      };
    }

    if (plan.type === "coaching") {
      return {
        ...plan,
        cta: vipCounter.coaching.isSoldOut ? t.soldOut : plan.cta,
        scarcity: vipCounter.coaching.label,
        disabled: vipCounter.coaching.isSoldOut,
      };
    }

    return plan;
  });

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
                ...(plan.disabled ? disabledCard : {}),
              }}
            >
              {plan.featured && <div style={bestValue}>{t.bestValue}</div>}

              <div>
                <h3 style={pricingTitle}>{plan.name}</h3>
                <div style={pricingPrice}>{plan.price}</div>

                <ul style={pricingList}>
                  {plan.points.map((point) => (
                    <li key={point}>✔ {point}</li>
                  ))}
                </ul>

                {plan.scarcity && <div style={scarcity}>{plan.scarcity}</div>}
              </div>

              <a
                href={plan.disabled ? "#pricing" : "/signup"}
                style={{
                  ...pricingButton,
                  ...(plan.featured ? pricingButtonFeatured : {}),
                  ...(plan.disabled ? disabledButton : {}),
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
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
  gap: "20px",
  alignItems: "stretch",
};

const pricingCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "26px",
  padding: "30px",
  minHeight: "510px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const pricingCardFeatured = {
  background: "rgba(250,204,21,0.08)",
  border: "1px solid rgba(250,204,21,0.45)",
};

const disabledCard = {
  opacity: 0.55,
};

const bestValue = {
  position: "absolute",
  top: "-11px",
  right: "14px",
  background: "#facc15",
  color: "black",
  fontSize: "12px",
  fontWeight: "900",
  padding: "6px 10px",
  borderRadius: "9px",
};

const pricingTitle = {
  fontSize: "28px",
  margin: "0 0 10px",
  fontWeight: "900",
};

const pricingPrice = {
  fontSize: "42px",
  fontWeight: "950",
  marginBottom: "22px",
  lineHeight: 1.15,
};

const pricingList = {
  paddingLeft: "18px",
  lineHeight: 1.9,
  margin: 0,
  color: "rgba(255,255,255,0.78)",
};

const scarcity = {
  marginTop: "16px",
  color: "#facc15",
  fontSize: "13px",
  fontWeight: "900",
};

const pricingButton = {
  display: "block",
  width: "100%",
  textAlign: "center",
  textDecoration: "none",
  padding: "14px 18px",
  borderRadius: "14px",
  fontWeight: "900",
  background: "white",
  color: "black",
  marginTop: "28px",
  boxSizing: "border-box",
};

const pricingButtonFeatured = {
  background: "#facc15",
};

const disabledButton = {
  pointerEvents: "none",
  cursor: "not-allowed",
  opacity: 0.6,
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
  fontSize: "14px",
  fontWeight: "700",
};