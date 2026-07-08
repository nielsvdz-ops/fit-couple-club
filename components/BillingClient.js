"use client";

import { useSearchParams } from "next/navigation";
import CheckoutButton from "./CheckoutButton";
import { useLanguage } from "../lib/useLanguage";

const billingTranslations = {
  en: {
    current: "Current Membership",
    status: "Status",
    active: "Active",
    inactive: "Inactive",
    currentPlan: "Current plan",
    mostChosen: "🔥 Best Value",
    oneTime: "one-time",
    secure:
      "Secure one-time checkout via Stripe. No monthly subscription for Nutrition or Full Access.",
    successTitle: "Payment Successful",
    successText:
      "Your payment was completed. If your access does not update immediately, refresh the page in a few seconds.",

    heroBadge: "Choose Your System",
    heroTitle: "Unlock your transformation.",
    heroText:
      "Start with nutrition structure or unlock the full FitCoupleClub system with workouts, Booty Builder, programs, progress tracking, Couple Zone and coaching call access.",

    nutritionName: "Nutrition",
    nutritionFeatures: [
      "5 body goals",
      "150 daily nutrition routines",
      "Weekly recipes",
      "Smart grocery generator",
      "Couple grocery mode",
      "Access to Coaching page",
    ],
    nutritionText: "Your complete food, recipe and grocery system.",
    nutritionButton: "Buy Nutrition",

    fullAccessName: "Full Access",
    fullAccessFeatures: [
      "Everything in Nutrition",
      "Complete workout system",
      "Booty Builder access",
      "Programs",
      "Plan Builder",
      "Couple Zone",
      "Progress tracking",
      "Access to Coaching page",
    ],
    fullAccessText: "The complete FitCoupleClub transformation platform.",
    fullAccessButton: "Buy Full Access",
  },

  nl: {
    current: "Huidig Membership",
    status: "Status",
    active: "Actief",
    inactive: "Niet actief",
    currentPlan: "Huidig plan",
    mostChosen: "🔥 Beste Keuze",
    oneTime: "eenmalig",
    secure:
      "Veilig eenmalig afrekenen via Stripe. Geen maandabonnement voor Nutrition of Full Access.",
    successTitle: "Betaling Succesvol",
    successText:
      "Je betaling is voltooid. Als je toegang niet meteen verandert, vernieuw de pagina na een paar seconden.",

    heroBadge: "Kies Je Systeem",
    heroTitle: "Ontgrendel je transformatie.",
    heroText:
      "Start met voedingsstructuur of ontgrendel het volledige FitCoupleClub systeem met workouts, Booty Builder, programma’s, progressie tracking, Couple Zone en toegang tot coaching calls.",

    nutritionName: "Nutrition",
    nutritionFeatures: [
      "5 lichaamsdoelen",
      "150 dagelijkse voedingsroutines",
      "Wekelijkse recepten",
      "Slimme boodschappen generator",
      "Couple grocery mode",
      "Toegang tot Coaching pagina",
    ],
    nutritionText: "Jouw complete voedings-, recepten- en boodschappen systeem.",
    nutritionButton: "Koop Nutrition",

    fullAccessName: "Full Access",
    fullAccessFeatures: [
      "Alles van Nutrition",
      "Compleet workout systeem",
      "Booty Builder toegang",
      "Programma’s",
      "Plan Builder",
      "Couple Zone",
      "Progressie tracking",
      "Toegang tot Coaching pagina",
    ],
    fullAccessText: "Het complete FitCoupleClub transformatie platform.",
    fullAccessButton: "Koop Full Access",
  },
};

function bt(language, key) {
  return billingTranslations?.[language]?.[key] || billingTranslations.en[key] || key;
}

function normalizeMembership(value) {
  const clean = String(value || "free").toLowerCase().trim();

  if (clean === "full access" || clean === "full-access") return "full_access";
  if (clean === "starter" || clean === "premium") return "full_access";

  return clean;
}

function isCurrentPlan(membershipType, planKey, isActive) {
  if (!isActive) return false;

  const membership = normalizeMembership(membershipType);
  return membership === planKey;
}

function getButtonVariant(planKey) {
  if (planKey === "full_access") return "red";
  return "darkRed";
}

function getPlans(language) {
  return [
    {
      key: "nutrition",
      name: bt(language, "nutritionName"),
      price: "€19.99",
      payType: bt(language, "oneTime"),
      features: bt(language, "nutritionFeatures"),
      text: bt(language, "nutritionText"),
      button: bt(language, "nutritionButton"),
      cardStyle: card,
    },
    {
      key: "full_access",
      name: bt(language, "fullAccessName"),
      price: "€29.99",
      payType: bt(language, "oneTime"),
      badge: bt(language, "mostChosen"),
      features: bt(language, "fullAccessFeatures"),
      text: bt(language, "fullAccessText"),
      button: bt(language, "fullAccessButton"),
      cardStyle: highlightCard,
    },
  ];
}

export default function BillingClient({ membershipType, isActive }) {
  const searchParams = useSearchParams();
  const success = searchParams?.get("success") === "1";
  const { language } = useLanguage();

  const membership = normalizeMembership(membershipType);
  const plans = getPlans(language);

  return (
    <div style={pageWrap}>
      {success && (
        <section style={successCard}>
          <div style={eyebrow}>{bt(language, "successTitle")}</div>
          <p style={text}>{bt(language, "successText")}</p>
        </section>
      )}

      <section style={statusCard}>
        <div>
          <div style={eyebrow}>{bt(language, "current")}</div>

          <h2 style={title}>
            {membership === "free"
              ? "Free"
              : plans.find((plan) => plan.key === membership)?.name || membership}
          </h2>
        </div>

        <span style={statusPill(isActive)}>
          {bt(language, "status")}:{" "}
          {isActive ? bt(language, "active") : bt(language, "inactive")}
        </span>
      </section>

      <section style={heroUpsellCard}>
        <div style={heroOverlay} />

        <img
          src="/images/background.webp"
          alt=""
          style={heroImage}
        />

        <div style={heroContent}>
          <div style={eyebrowRed}>{bt(language, "heroBadge")}</div>

          <h1 style={heroTitle}>
            {bt(language, "heroTitle")}
          </h1>

          <p style={text}>{bt(language, "heroText")}</p>
        </div>
      </section>

      <section style={grid}>
        {plans.map((plan) => {
          const current = isCurrentPlan(membership, plan.key, isActive);

          return (
            <article key={plan.key} style={plan.cardStyle}>
              {plan.badge && <div style={bestValue}>{plan.badge}</div>}
              {current && <div style={currentBadge}>{bt(language, "currentPlan")}</div>}

              <div>
                <h3 style={cardTitle}>{plan.name}</h3>

                <div style={priceRow}>
                  <span style={price}>{plan.price}</span>
                  <span style={payType}>{plan.payType}</span>
                </div>

                <ul style={featureList}>
                  {plan.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>

                {plan.text && <p style={planText}>{plan.text}</p>}
              </div>

              {current ? (
                <button type="button" disabled style={disabledBtn}>
                  {bt(language, "currentPlan")}
                </button>
              ) : (
                <CheckoutButton
                  plan={plan.key}
                  label={plan.button}
                  variant={getButtonVariant(plan.key)}
                />
              )}
            </article>
          );
        })}
      </section>

      <p style={trust}>{bt(language, "secure")}</p>
    </div>
  );
}

const pageWrap = {
  display: "grid",
  gap: "24px",
  width: "100%",
  maxWidth: "1100px",
  margin: "0 auto",
  overflowX: "hidden",
};

const statusCard = {
  background: "rgba(5,5,5,0.82)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderLeft: "3px solid #b00000",
  padding: "clamp(18px, 4vw, 26px)",
  display: "flex",
  gap: "14px",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  minWidth: 0,
};

const successCard = {
  background: "rgba(22,163,74,0.10)",
  border: "1px solid rgba(34,197,94,0.25)",
  borderLeft: "3px solid #22c55e",
  padding: "clamp(18px, 4vw, 26px)",
};

const heroUpsellCard = {
  position: "relative",
  overflow: "hidden",
  minHeight: "320px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "#050505",
};

const heroImage = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "grayscale(1) brightness(0.28) contrast(1.18)",
};

const heroOverlay = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(0,0,0,0.96), rgba(0,0,0,0.76), rgba(100,0,0,0.42))",
  zIndex: 1,
};

const heroContent = {
  position: "relative",
  zIndex: 2,
  padding: "clamp(24px, 5vw, 42px)",
  maxWidth: "760px",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
  fontWeight: "900",
};

const eyebrowRed = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "#ef4444",
  marginBottom: "10px",
  fontWeight: "950",
};

const title = {
  margin: 0,
  fontSize: "clamp(26px, 4vw, 34px)",
  fontWeight: "950",
  textTransform: "uppercase",
  letterSpacing: "-0.03em",
};

const heroTitle = {
  margin: "0 0 14px 0",
  fontSize: "clamp(38px, 7vw, 68px)",
  fontWeight: "950",
  lineHeight: 0.92,
  textTransform: "uppercase",
  letterSpacing: "-0.055em",
  overflowWrap: "break-word",
};

const text = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
};

const statusPill = (active) => ({
  display: "inline-flex",
  width: "fit-content",
  padding: "10px 13px",
  background: active ? "rgba(34,197,94,0.12)" : "rgba(255,255,255,0.06)",
  border: active
    ? "1px solid rgba(34,197,94,0.28)"
    : "1px solid rgba(255,255,255,0.10)",
  color: active ? "#86efac" : "rgba(255,255,255,0.72)",
  fontWeight: "950",
  textTransform: "uppercase",
  fontSize: "12px",
  letterSpacing: "0.08em",
});

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
  gap: "22px",
  alignItems: "stretch",
};

const basePlanCard = {
  padding: "clamp(24px, 5vw, 38px)",
  minHeight: "600px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  minWidth: 0,
  overflowWrap: "break-word",
  boxShadow: "0 26px 90px rgba(0,0,0,0.45)",
};

const card = {
  ...basePlanCard,
  background: "#060606",
  border: "1px solid rgba(255,255,255,0.09)",
  borderTop: "3px solid rgba(255,255,255,0.16)",
};

const highlightCard = {
  ...basePlanCard,
  background:
    "linear-gradient(180deg, rgba(127,29,29,0.28), #060606)",
  border: "2px solid #b00000",
};

const bestValue = {
  position: "absolute",
  top: "-14px",
  right: "18px",
  background: "#b00000",
  color: "white",
  fontSize: "12px",
  fontWeight: "950",
  padding: "10px 14px",
  textTransform: "uppercase",
};

const currentBadge = {
  position: "absolute",
  top: "-14px",
  left: "18px",
  background: "#16a34a",
  color: "white",
  fontSize: "11px",
  fontWeight: "950",
  padding: "10px 12px",
  textTransform: "uppercase",
};

const cardTitle = {
  fontSize: "clamp(34px, 6vw, 52px)",
  fontWeight: "950",
  margin: "0 0 20px",
  lineHeight: 0.95,
  textTransform: "uppercase",
  letterSpacing: "-0.05em",
};

const priceRow = {
  display: "flex",
  alignItems: "flex-end",
  gap: "10px",
  marginBottom: "30px",
  flexWrap: "wrap",
};

const price = {
  fontSize: "clamp(58px, 9vw, 82px)",
  fontWeight: "950",
  lineHeight: 0.9,
};

const payType = {
  color: "rgba(255,255,255,0.68)",
  fontWeight: "900",
  marginBottom: "8px",
  textTransform: "uppercase",
};

const featureList = {
  margin: 0,
  paddingLeft: 0,
  listStyle: "none",
  color: "rgba(255,255,255,0.76)",
  lineHeight: 1.9,
  fontSize: "16px",
};

const planText = {
  marginTop: "28px",
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.7,
};

const disabledBtn = {
  marginTop: "26px",
  padding: "16px 18px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.08)",
  color: "rgba(255,255,255,0.55)",
  fontWeight: "950",
  textTransform: "uppercase",
};

const trust = {
  textAlign: "center",
  color: "rgba(255,255,255,0.58)",
  lineHeight: 1.7,
  paddingBottom: "40px",
};