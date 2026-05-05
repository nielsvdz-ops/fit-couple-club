"use client";

import { useLanguage } from "../lib/useLanguage";

export default function UpgradeLockScreen({
  title,
  text,
  requiredPlan = "Full Access",
  buttonLabel,
  href = "/billing",
}) {
  const { language } = useLanguage();

  const copy = {
    en: {
      badge: "Locked Content",
      defaultTitle: "Upgrade required",
      defaultText: "Your current plan does not include access to this section.",
      requiredPlan: "Required plan",
      unlock: "✔ Unlock access instantly",
      keepAccount: "✔ Keep your current account",
      billing: "✔ Upgrade in one step from billing",
      button: "See Upgrade Options",
      back: "Back to Dashboard",
    },
    nl: {
      badge: "Vergrendelde Content",
      defaultTitle: "Upgrade vereist",
      defaultText: "Je huidige plan geeft geen toegang tot dit onderdeel.",
      requiredPlan: "Vereist plan",
      unlock: "✔ Direct toegang ontgrendelen",
      keepAccount: "✔ Behoud je huidige account",
      billing: "✔ Upgrade in één stap via abonnement",
      button: "Bekijk Upgrade Opties",
      back: "Terug naar Dashboard",
    },
  }[language];

  return (
    <div style={wrap}>
      <div style={card}>
        <div style={badge}>{copy.badge}</div>

        <h1 style={titleStyle}>{title || copy.defaultTitle}</h1>
        <p style={textStyle}>{text || copy.defaultText}</p>

        <div style={planBox}>
          <div style={planLabel}>{copy.requiredPlan}</div>
          <div style={planValue}>{requiredPlan}</div>
        </div>

        <div style={featureList}>
          <div style={featureItem}>{copy.unlock}</div>
          <div style={featureItem}>{copy.keepAccount}</div>
          <div style={featureItem}>{copy.billing}</div>
        </div>

        <div style={buttonRow}>
          <a href={href} style={primaryButton}>
            {buttonLabel || copy.button}
          </a>

          <a href="/dashboard" style={secondaryButton}>
            {copy.back}
          </a>
        </div>
      </div>
    </div>
  );
}

const wrap = {
  minHeight: "70vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "clamp(14px, 4vw, 24px)",
};

const card = {
  width: "100%",
  maxWidth: "720px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "clamp(22px, 5vw, 32px)",
};

const badge = {
  display: "inline-block",
  padding: "8px 12px",
  borderRadius: "999px",
  background: "rgba(250,204,21,0.12)",
  border: "1px solid rgba(250,204,21,0.35)",
  color: "#facc15",
  fontSize: "13px",
  fontWeight: "900",
  marginBottom: "18px",
};

const titleStyle = {
  fontSize: "clamp(30px, 8vw, 44px)",
  lineHeight: 1.05,
  margin: "0 0 14px",
  fontWeight: "900",
};

const textStyle = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  marginBottom: "24px",
  fontSize: "clamp(16px, 4vw, 18px)",
};

const planBox = {
  padding: "18px",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  marginBottom: "22px",
};

const planLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const planValue = {
  fontSize: "28px",
  fontWeight: "900",
};

const featureList = {
  display: "grid",
  gap: "10px",
  marginBottom: "26px",
};

const featureItem = {
  color: "rgba(255,255,255,0.78)",
  lineHeight: 1.6,
};

const buttonRow = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
};

const primaryButton = {
  display: "inline-block",
  padding: "14px 20px",
  borderRadius: "14px",
  background: "#facc15",
  color: "black",
  textDecoration: "none",
  fontWeight: "900",
  textAlign: "center",
};

const secondaryButton = {
  display: "inline-block",
  padding: "14px 20px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.14)",
  color: "white",
  textDecoration: "none",
  fontWeight: "800",
  textAlign: "center",
};