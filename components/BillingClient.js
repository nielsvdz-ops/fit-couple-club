"use client";

import { useSearchParams } from "next/navigation";
import ManageSubscriptionButton from "./ManageSubscriptionButton";
import CheckoutButton from "./CheckoutButton";
import { useLanguage } from "../lib/useLanguage";

const billingTranslations = {
  en: {
    current: "Current Membership",
    status: "Status",
    active: "Active",
    inactive: "Inactive",
    manage: "Manage Subscription",
    mostChosen: "🔥 Most chosen",
    month: "/mo",
    secure:
      "Secure checkout via Stripe. You can manage or cancel your subscription anytime.",
    successTitle: "Payment successful",
    successText:
      "Your payment was completed. If your access does not update immediately, refresh the page in a few seconds.",

    heroTitle: "Choose the system that fits your transformation.",
    heroText:
      "Start with nutrition structure or unlock the full fitness system with workouts, programs, progress tracking, Couple Zone, VIP guidance, and coaching.",

    nutritionName: "Nutrition",
    nutritionFeatures: [
      "✓ 5 body goals",
      "✓ 150 daily routines",
      "✓ Weekly recipes",
      "✓ Smart grocery generator",
      "✓ Works for 1 or 2 people",
    ],
    nutritionText: "Never overthink food again.",
    nutritionButton: "Start Nutrition",

    fullAccessName: "Full Access",
    fullAccessFeatures: [
      "✓ Everything in Nutrition",
      "✓ Full workout system",
      "✓ Programs",
      "✓ Progress tracking",
      "✓ Couple Zone",
    ],
    fullAccessText: "Complete transformation system.",
    fullAccessButton: "Unlock Full Access",

    vipName: "VIP",
    vipFeatures: [
      "✓ Coaching calls",
      "✓ Accountability",
      "✓ Priority support",
    ],
    vipScarcity: "14/90 VIP spots taken",
    vipButton: "Go VIP",

    coachingName: "Coaching",
    coachingFeatures: [
      "✓ Weekly 1-on-1",
      "✓ Fully custom plan",
      "✓ Direct support",
    ],
    coachingScarcity: "2/12 spots free",
    coachingButton: "Start Coaching",
  },

  nl: {
    current: "Huidig Membership",
    status: "Status",
    active: "Actief",
    inactive: "Niet actief",
    manage: "Abonnement beheren",
    mostChosen: "🔥 Meest gekozen",
    month: "/maand",
    secure:
      "Veilig afrekenen via Stripe. Je kunt je abonnement altijd beheren of annuleren.",
    successTitle: "Betaling succesvol",
    successText:
      "Je betaling is voltooid. Als je toegang niet meteen verandert, vernieuw de pagina na een paar seconden.",

    heroTitle: "Kies het systeem dat past bij jouw transformatie.",
    heroText:
      "Start met voedingsstructuur of ontgrendel het volledige fitnesssysteem met workouts, programma’s, progressie tracking, Couple Zone, VIP begeleiding en coaching.",

    nutritionName: "Voeding",
    nutritionFeatures: [
      "✓ 5 lichaamsdoelen",
      "✓ 150 dagelijkse routines",
      "✓ Wekelijkse recepten",
      "✓ Slimme boodschappen generator",
      "✓ Werkt voor 1 of 2 personen",
    ],
    nutritionText: "Nooit meer nadenken over eten.",
    nutritionButton: "Start Voeding",

    fullAccessName: "Full Access",
    fullAccessFeatures: [
      "✓ Alles van Voeding",
      "✓ Volledig workout systeem",
      "✓ Programma’s",
      "✓ Progressie tracking",
      "✓ Couple Zone",
    ],
    fullAccessText: "Compleet transformatie systeem.",
    fullAccessButton: "Ontgrendel Full Access",

    vipName: "VIP",
    vipFeatures: [
      "✓ Coaching calls",
      "✓ Accountability",
      "✓ Prioriteit support",
    ],
    vipScarcity: "14/90 VIP plekken bezet",
    vipButton: "Ga VIP",

    coachingName: "Coaching",
    coachingFeatures: [
      "✓ Wekelijkse 1-op-1",
      "✓ Volledig custom plan",
      "✓ Direct support",
    ],
    coachingScarcity: "2/12 plekken vrij",
    coachingButton: "Start Coaching",
  },
};

function bt(language, key) {
  return billingTranslations?.[language]?.[key] || billingTranslations.en[key] || key;
}

function normalizeMembership(value) {
  const clean = String(value || "free").toLowerCase().trim();

  if (clean === "full access" || clean === "full-access") return "full_access";
  if (clean === "starter" || clean === "premium") return "full_access";
  if (clean === "premium_plus" || clean === "premium-plus") return "vip";

  return clean;
}

function isCurrentPlan(membershipType, planKey, isActive) {
  if (!isActive) return false;

  const membership = normalizeMembership(membershipType);
  return membership === planKey;
}

function getButtonVariant(planKey) {
  if (planKey === "vip") return "blue";
  if (planKey === "full_access") return "yellow";
  return "green";
}

function getPlans(language) {
  return [
    {
      key: "nutrition",
      name: bt(language, "nutritionName"),
      price: "€19.99",
      month: bt(language, "month"),
      features: bt(language, "nutritionFeatures"),
      text: bt(language, "nutritionText"),
      button: bt(language, "nutritionButton"),
      cardStyle: card,
    },
    {
      key: "full_access",
      name: bt(language, "fullAccessName"),
      price: "€34.99",
      month: bt(language, "month"),
      badge: bt(language, "mostChosen"),
      features: bt(language, "fullAccessFeatures"),
      text: bt(language, "fullAccessText"),
      button: bt(language, "fullAccessButton"),
      cardStyle: highlightCard,
    },
    {
      key: "vip",
      name: bt(language, "vipName"),
      price: "€90",
      month: bt(language, "month"),
      features: bt(language, "vipFeatures"),
      scarcity: bt(language, "vipScarcity"),
      button: bt(language, "vipButton"),
      cardStyle: vipCard,
    },
    {
      key: "coaching",
      name: bt(language, "coachingName"),
      price: "€340",
      month: bt(language, "month"),
      features: bt(language, "coachingFeatures"),
      scarcity: bt(language, "coachingScarcity"),
      button: bt(language, "coachingButton"),
      cardStyle: coachingCard,
    },
  ];
}

export default function BillingClient({
  userEmail,
  membershipType,
  isActive,
  hasCustomer,
}) {
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

        <div style={statusRow}>
          <span style={statusPill(isActive)}>
            {bt(language, "status")}:{" "}
            {isActive ? bt(language, "active") : bt(language, "inactive")}
          </span>

          {hasCustomer && (
            <ManageSubscriptionButton label={bt(language, "manage")} />
          )}
        </div>
      </section>

      <section style={heroUpsellCard}>
        <div style={eyebrow}>Fit Couple Club</div>
        <h1 style={heroTitle}>{bt(language, "heroTitle")}</h1>
        <p style={text}>{bt(language, "heroText")}</p>
      </section>

      <section style={grid}>
        {plans.map((plan) => {
          const current = isCurrentPlan(membership, plan.key, isActive);

          return (
            <article key={plan.key} style={plan.cardStyle}>
              {plan.badge && <div style={bestValue}>{plan.badge}</div>}
              {current && <div style={currentBadge}>Current</div>}

              <div>
                <h3 style={cardTitle}>{plan.name}</h3>

                <div style={priceRow}>
                  <span style={price}>{plan.price}</span>
                  <span style={month}>{plan.month}</span>
                </div>

                <ul style={featureList}>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                {plan.scarcity && (
                  <div style={scarcityText}>{plan.scarcity}</div>
                )}

                {plan.text && <p style={planText}>{plan.text}</p>}
              </div>

              {current ? (
                <button type="button" disabled style={disabledBtn}>
                  {language === "nl" ? "Huidig plan" : "Current plan"}
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
  gap: "22px",
  width: "100%",
  maxWidth: "1320px",
  margin: "0 auto",
  overflowX: "hidden",
};

const statusCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "clamp(18px, 4vw, 24px)",
  display: "grid",
  gap: "14px",
  minWidth: 0,
};

const successCard = {
  background: "rgba(34,197,94,0.10)",
  border: "1px solid rgba(34,197,94,0.25)",
  borderRadius: "22px",
  padding: "clamp(18px, 4vw, 24px)",
};

const heroUpsellCard = {
  background:
    "linear-gradient(135deg, rgba(250,204,21,0.10), rgba(255,255,255,0.04))",
  border: "1px solid rgba(250,204,21,0.22)",
  borderRadius: "22px",
  padding: "clamp(18px, 4vw, 26px)",
  minWidth: 0,
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const title = {
  margin: 0,
  fontSize: "clamp(24px, 4vw, 30px)",
  fontWeight: "800",
};

const heroTitle = {
  margin: "0 0 10px 0",
  fontSize: "clamp(28px, 4vw, 40px)",
  fontWeight: "900",
  lineHeight: 1.08,
  overflowWrap: "break-word",
};

const text = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
};

const statusRow = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
};

const statusPill = (active) => ({
  display: "inline-flex",
  width: "fit-content",
  padding: "8px 12px",
  borderRadius: "999px",
  background: active ? "rgba(34,197,94,0.16)" : "rgba(255,255,255,0.08)",
  color: active ? "#86efac" : "rgba(255,255,255,0.72)",
  fontWeight: "800",
});

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
  gap: "18px",
  alignItems: "stretch",
};

const basePlanCard = {
  borderRadius: "20px",
  padding: "clamp(18px, 4vw, 22px)",
  minHeight: "520px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  minWidth: 0,
  overflowWrap: "break-word",
};

const card = {
  ...basePlanCard,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
};

const highlightCard = {
  ...basePlanCard,
  background: "rgba(250,204,21,0.08)",
  border: "1px solid rgba(250,204,21,0.45)",
};

const vipCard = {
  ...basePlanCard,
  background: "rgba(96,165,250,0.08)",
  border: "1px solid rgba(96,165,250,0.28)",
};

const coachingCard = {
  ...basePlanCard,
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.11), rgba(255,255,255,0.04))",
  border: "1px solid rgba(255,255,255,0.22)",
};

const bestValue = {
  position: "absolute",
  top: "-10px",
  right: "10px",
  background: "#facc15",
  color: "black",
  fontSize: "12px",
  fontWeight: "800",
  padding: "5px 10px",
  borderRadius: "8px",
};

const currentBadge = {
  position: "absolute",
  top: "-10px",
  left: "10px",
  background: "#16a34a",
  color: "white",
  fontSize: "11px",
  fontWeight: "900",
  padding: "5px 9px",
  borderRadius: "8px",
};

const cardTitle = {
  fontSize: "clamp(24px, 4vw, 32px)",
  fontWeight: "900",
  margin: "0 0 18px",
  lineHeight: 1.1,
};

const priceRow = {
  display: "flex",
  alignItems: "flex-end",
  gap: "4px",
  marginBottom: "24px",
  flexWrap: "wrap",
};

const price = {
  fontSize: "clamp(42px, 7vw, 54px)",
  fontWeight: "950",
  lineHeight: 0.95,
};

const month = {
  color: "rgba(255,255,255,0.7)",
  fontWeight: "800",
  marginBottom: "6px",
};

const featureList = {
  margin: 0,
  paddingLeft: "20px",
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.75,
  fontSize: "16px",
};

const scarcityText = {
  marginTop: "18px",
  color: "#facc15",
  fontWeight: "900",
};

const planText = {
  marginTop: "26px",
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.7,
};

const disabledBtn = {
  marginTop: "24px",
  padding: "14px 18px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.08)",
  color: "rgba(255,255,255,0.55)",
  fontWeight: "900",
};

const trust = {
  textAlign: "center",
  color: "rgba(255,255,255,0.58)",
  lineHeight: 1.7,
  paddingBottom: "40px",
};