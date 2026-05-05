"use client";

import { useSearchParams } from "next/navigation";
import ManageSubscriptionButton from "./ManageSubscriptionButton";
import CheckoutButton from "./CheckoutButton";
import { useLanguage } from "../lib/useLanguage";

export default function BillingClient({
  userEmail,
  membershipType,
  isActive,
  hasCustomer,
}) {
  const searchParams = useSearchParams();
  const success = searchParams?.get("success") === "1";
  const { language } = useLanguage();

  const membership = String(membershipType || "free").toLowerCase().trim();

  const t =
    {
      en: {
        successTitle: "Payment successful",
        successText:
          "Your membership is being updated. Refresh your dashboard if it does not show immediately.",
        current: "Current Membership",
        status: "Status",
        active: "Active",
        inactive: "Inactive",
        email: "Email",
        billingEyebrow: "Couple Transformation System",
        title1: "Stop starting over.",
        title2: "Build a system that actually works.",
        subtitle:
          "This is not another fitness app. You get a complete structure for training, food, groceries, and couple accountability — so you never have to think “what should we do today?” again.",
        why: "💡 Why couples fail",
        whyText:
          "Most couples do not fail because of discipline. They fail because there is no shared plan, food decisions happen too late, and one person often carries the motivation alone.",
        highlight: "This system fixes all of that.",
        noSharedPlan: "No shared plan",
        foodLate: "Food decisions happen too late",
        oneMotivated: "One person is motivated, the other is not",
        noStructure: "No structure means no consistency",
        startNutrition: "Start Nutrition",
        unlock: "Unlock Full System",
        vipButton: "Go VIP",
        coachingButton: "Start Coaching",
        mostPopular: "🔥 Most Popular",
        currentPlan: "Current Plan",
        nutritionDesc: "You never have to think about food again.",
        fullDesc: "Complete transformation system.",
        vipScarcity: "14/90 VIP spots taken",
        coachingScarcity: "2/12 spots left",
        trust:
          "Secure checkout powered by Stripe. You can manage or cancel your subscription anytime.",
      },
      nl: {
        successTitle: "Betaling succesvol",
        successText:
          "Je membership wordt bijgewerkt. Refresh je dashboard als het niet direct zichtbaar is.",
        current: "Huidig Membership",
        status: "Status",
        active: "Actief",
        inactive: "Niet actief",
        email: "E-mail",
        billingEyebrow: "Couple Transformatie Systeem",
        title1: "Stop met opnieuw beginnen.",
        title2: "Bouw een systeem dat werkt.",
        subtitle:
          "Dit is geen standaard fitness app. Je krijgt een compleet systeem voor training, voeding, boodschappen en accountability.",
        why: "💡 Waarom koppels falen",
        whyText:
          "De meeste koppels falen niet door discipline, maar door gebrek aan structuur en planning.",
        highlight: "Dit systeem lost dat op.",
        noSharedPlan: "Geen gezamenlijk plan",
        foodLate: "Voedingskeuzes worden te laat gemaakt",
        oneMotivated: "De één is gemotiveerd, de ander niet",
        noStructure: "Geen structuur betekent geen consistentie",
        startNutrition: "Start Nutrition",
        unlock: "Ontgrendel Full Access",
        vipButton: "Ga VIP",
        coachingButton: "Start Coaching",
        mostPopular: "🔥 Meest gekozen",
        currentPlan: "Huidig Plan",
        nutritionDesc: "Je hoeft nooit meer na te denken over eten.",
        fullDesc: "Compleet transformatie systeem.",
        vipScarcity: "14/90 VIP plekken bezet",
        coachingScarcity: "2/12 plekken vrij",
        trust:
          "Veilig afrekenen via Stripe. Je kunt je abonnement altijd beheren of annuleren.",
      },
    }[language] || {};

  return (
    <div style={pageWrap}>
      {success && (
        <div style={successCard}>
          <h2 style={heroTitle}>{t.successTitle}</h2>
          <p style={text}>{t.successText}</p>
        </div>
      )}

      <div style={statusCard}>
        <div>
          <div style={eyebrow}>{t.current}</div>
          <h2 style={statusTitle}>
            {membership === "free" ? "Free" : membership.replace("_", " ")}
          </h2>
        </div>

        <p style={text}>
          {t.email}: <strong>{userEmail}</strong>
          <br />
          {t.status}: <strong>{isActive ? t.active : t.inactive}</strong>
        </p>

        {hasCustomer && <ManageSubscriptionButton />}
      </div>

      <div style={container}>
        <div style={header}>
          <div style={eyebrow}>{t.billingEyebrow}</div>

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
            <li>{t.noSharedPlan}</li>
            <li>{t.foodLate}</li>
            <li>{t.oneMotivated}</li>
            <li>{t.noStructure}</li>
          </ul>

          <p style={hookHighlight}>{t.highlight}</p>
        </div>

        <div style={grid}>
          <section style={membership === "nutrition" ? currentCard : card}>
            {membership === "nutrition" && (
              <div style={currentBadge}>{t.currentPlan}</div>
            )}

            <div>
              <h2 style={planTitle}>Nutrition</h2>
              <div style={price}>
                €19.99<span style={priceSmall}>/mo</span>
              </div>

              <ul style={list}>
                <li>✔ 5 body goals</li>
                <li>✔ 150 daily routines</li>
                <li>✔ Weekly recipes</li>
                <li>✔ Smart grocery generator</li>
                <li>✔ Works for 1 or 2 people</li>
              </ul>

              <p style={desc}>{t.nutritionDesc}</p>
            </div>

            {membership === "nutrition" ? (
              <div style={disabledBtn}>{t.currentPlan}</div>
            ) : (
              <CheckoutButton plan="nutrition" label={t.startNutrition} />
            )}
          </section>

          <section
            style={
              membership === "full_access"
                ? { ...card, ...featured, ...currentFeatured }
                : { ...card, ...featured }
            }
          >
            <div style={badge}>{t.mostPopular}</div>

            {membership === "full_access" && (
              <div style={currentBadge}>{t.currentPlan}</div>
            )}

            <div>
              <h2 style={planTitle}>Full Access</h2>
              <div style={price}>
                €34.99<span style={priceSmall}>/mo</span>
              </div>

              <ul style={list}>
                <li>✔ Everything in Nutrition</li>
                <li>✔ Full workout system</li>
                <li>✔ Programs</li>
                <li>✔ Progress tracking</li>
                <li>✔ Couple Zone</li>
              </ul>

              <p style={desc}>{t.fullDesc}</p>
            </div>

            {membership === "full_access" ? (
              <div style={disabledBtn}>{t.currentPlan}</div>
            ) : (
              <CheckoutButton plan="full_access" label={t.unlock} featured />
            )}
          </section>

          <section style={membership === "vip" ? currentVipCard : vipCard}>
            {membership === "vip" && (
              <div style={currentBadge}>{t.currentPlan}</div>
            )}

            <div>
              <h2 style={planTitle}>VIP</h2>
              <div style={price}>
                €90<span style={priceSmall}>/mo</span>
              </div>

              <ul style={list}>
                <li>✔ Coaching calls</li>
                <li>✔ Accountability</li>
                <li>✔ Priority support</li>
              </ul>

              <div style={scarcity}>{t.vipScarcity}</div>
            </div>

            {membership === "vip" ? (
              <div style={disabledBtn}>{t.currentPlan}</div>
            ) : (
              <CheckoutButton plan="vip" label={t.vipButton} />
            )}
          </section>

          <section
            style={membership === "coaching" ? currentCoachingCard : coachingCard}
          >
            {membership === "coaching" && (
              <div style={currentBadge}>{t.currentPlan}</div>
            )}

            <div>
              <h2 style={planTitle}>Coaching</h2>
              <div style={price}>
                €340<span style={priceSmall}>/mo</span>
              </div>

              <ul style={list}>
                <li>✔ Weekly 1-on-1</li>
                <li>✔ Fully custom plan</li>
                <li>✔ Direct support</li>
              </ul>

              <div style={scarcity}>{t.coachingScarcity}</div>
            </div>

            {membership === "coaching" ? (
              <div style={disabledBtn}>{t.currentPlan}</div>
            ) : (
              <CheckoutButton plan="coaching" label={t.coachingButton} />
            )}
          </section>
        </div>

        <p style={trust}>{t.trust}</p>
      </div>
    </div>
  );
}

const pageWrap = {
  display: "grid",
  gap: "22px",
  width: "100%",
  maxWidth: "1160px",
  overflowX: "hidden",
};

const successCard = {
  background:
    "linear-gradient(135deg, rgba(34,197,94,0.14), rgba(255,255,255,0.04))",
  border: "1px solid rgba(34,197,94,0.25)",
  borderRadius: "22px",
  padding: "clamp(20px, 4vw, 26px)",
};

const statusCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "clamp(20px, 4vw, 24px)",
  display: "grid",
  gap: "14px",
};

const container = {
  width: "100%",
  display: "grid",
  gap: "clamp(26px, 5vw, 40px)",
};

const header = {
  textAlign: "center",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "rgba(255,255,255,0.5)",
  marginBottom: "10px",
};

const title = {
  fontSize: "clamp(36px, 8vw, 56px)",
  lineHeight: 1.05,
  fontWeight: "900",
  letterSpacing: "-0.04em",
  margin: "0 0 18px",
};

const statusTitle = {
  margin: 0,
  fontSize: "clamp(26px, 6vw, 34px)",
  fontWeight: "900",
  textTransform: "capitalize",
};

const heroTitle = {
  margin: "0 0 10px",
  fontSize: "clamp(26px, 6vw, 38px)",
  fontWeight: "900",
  lineHeight: 1.08,
};

const subtitle = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  maxWidth: "760px",
  margin: "0 auto",
  fontSize: "clamp(15px, 3.8vw, 17px)",
};

const text = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  fontSize: "clamp(15px, 3.8vw, 16px)",
};

const hook = {
  background: "rgba(255,255,255,0.04)",
  padding: "clamp(20px, 4vw, 26px)",
  borderRadius: "22px",
  border: "1px solid rgba(255,255,255,0.08)",
};

const hookTitle = {
  fontSize: "clamp(20px, 5vw, 24px)",
  fontWeight: "900",
  marginBottom: "10px",
};

const hookText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
};

const hookHighlight = {
  marginTop: "14px",
  fontWeight: "900",
  color: "#facc15",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
  gap: "20px",
  alignItems: "stretch",
};

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "clamp(20px, 4vw, 24px)",
  minHeight: "clamp(390px, 70vw, 500px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
};

const currentCard = {
  ...card,
  border: "1px solid rgba(34,197,94,0.45)",
  background: "rgba(34,197,94,0.08)",
};

const featured = {
  border: "1px solid rgba(250,204,21,0.5)",
  background: "rgba(250,204,21,0.08)",
};

const currentFeatured = {
  border: "1px solid rgba(34,197,94,0.55)",
};

const vipCard = {
  ...card,
  border: "1px solid rgba(96,165,250,0.28)",
  background: "rgba(96,165,250,0.08)",
};

const currentVipCard = {
  ...vipCard,
  border: "1px solid rgba(34,197,94,0.55)",
};

const coachingCard = {
  ...card,
  border: "1px solid rgba(255,255,255,0.22)",
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.11), rgba(255,255,255,0.04))",
};

const currentCoachingCard = {
  ...coachingCard,
  border: "1px solid rgba(34,197,94,0.55)",
};

const badge = {
  position: "absolute",
  top: "-10px",
  right: "14px",
  background: "#facc15",
  color: "black",
  padding: "6px 10px",
  borderRadius: "8px",
  fontSize: "12px",
  fontWeight: "900",
};

const currentBadge = {
  position: "absolute",
  top: "-10px",
  left: "14px",
  background: "#16a34a",
  color: "white",
  padding: "6px 10px",
  borderRadius: "8px",
  fontSize: "11px",
  fontWeight: "900",
};

const planTitle = {
  fontSize: "clamp(22px, 5vw, 26px)",
  fontWeight: "900",
  margin: "0 0 10px",
};

const price = {
  fontSize: "clamp(30px, 7vw, 38px)",
  fontWeight: "900",
  marginBottom: "16px",
};

const priceSmall = {
  fontSize: "15px",
  opacity: 0.7,
};

const list = {
  marginTop: "14px",
  marginBottom: "14px",
  paddingLeft: "20px",
  color: "rgba(255,255,255,0.76)",
  lineHeight: 1.9,
  fontSize: "clamp(14px, 3.6vw, 15px)",
};

const desc = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.7,
};

const scarcity = {
  marginTop: "14px",
  fontSize: "13px",
  fontWeight: "900",
  color: "#facc15",
};

const disabledBtn = {
  marginTop: "22px",
  padding: "14px 18px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.08)",
  color: "rgba(255,255,255,0.55)",
  fontWeight: "900",
  textAlign: "center",
};

const trust = {
  textAlign: "center",
  color: "rgba(255,255,255,0.58)",
  lineHeight: 1.7,
  fontSize: "14px",
};
