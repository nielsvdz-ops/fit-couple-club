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
    yearlyHint: "Secure checkout via Stripe. You can manage or cancel your subscription anytime.",

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
    yearlyHint: "Veilig afrekenen via Stripe. Je kunt je abonnement altijd beheren of annuleren.",

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

function translateBillingText(value, language = "en") {
  if (!value || language !== "nl") return value || "";

  const exactMap = {
    "Nutrition": "Voeding",
    "Full Access": "Full Access",
    "VIP": "VIP",
    "Coaching": "Coaching",
    "/mo": "/maand",
    "Most chosen": "Meest gekozen",
    "Current Membership": "Huidig Membership",
    "Status": "Status",
    "Active": "Actief",
    "Inactive": "Niet actief",
    "Manage Subscription": "Abonnement beheren",
    "Start Nutrition": "Start Voeding",
    "Unlock Full Access": "Ontgrendel Full Access",
    "Go VIP": "Ga VIP",
    "Start Coaching": "Start Coaching",
    "Everything in Nutrition": "Alles van Voeding",
    "Full workout system": "Volledig workout systeem",
    "Programs": "Programma’s",
    "Progress tracking": "Progressie tracking",
    "Couple Zone": "Couple Zone",
    "Coaching calls": "Coaching calls",
    "Accountability": "Accountability",
    "Priority support": "Prioriteit support",
    "Weekly 1-on-1": "Wekelijkse 1-op-1",
    "Fully custom plan": "Volledig custom plan",
    "Direct support": "Direct support",
  };

  if (exactMap[value]) return exactMap[value];

  let output = String(value);

  const replacements = [
    ["Nutrition", "Voeding"],
    ["Everything in Nutrition", "Alles van Voeding"],
    ["Full workout system", "Volledig workout systeem"],
    ["Programs", "Programma’s"],
    ["Progress tracking", "Progressie tracking"],
    ["Most chosen", "Meest gekozen"],
    ["Current Membership", "Huidig Membership"],
    ["Manage Subscription", "Abonnement beheren"],
    ["Active", "Actief"],
    ["Inactive", "Niet actief"],
    ["body goals", "lichaamsdoelen"],
    ["daily routines", "dagelijkse routines"],
    ["Weekly recipes", "Wekelijkse recepten"],
    ["Smart grocery generator", "Slimme boodschappen generator"],
    ["Works for 1 or 2 people", "Werkt voor 1 of 2 personen"],
    ["Never overthink food again.", "Nooit meer nadenken over eten."],
    ["Complete transformation system.", "Compleet transformatie systeem."],
    ["VIP spots taken", "VIP plekken bezet"],
    ["spots free", "plekken vrij"],
    ["/mo", "/maand"],
  ];

  replacements.forEach(([from, to]) => {
    output = output.split(from).join(to);
  });

  return output;
}




function getBillingPlanCopy(language = "en") {
  return [
    {
      key: "nutrition",
      name: bt(language, "nutritionName"),
      price: "€19.99",
      month: bt(language, "month"),
      features: bt(language, "nutritionFeatures"),
      text: bt(language, "nutritionText"),
      button: bt(language, "nutritionButton"),
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
    },
    {
      key: "vip",
      name: bt(language, "vipName"),
      price: "€90",
      month: bt(language, "month"),
      features: bt(language, "vipFeatures"),
      scarcity: bt(language, "vipScarcity"),
      button: bt(language, "vipButton"),
    },
    {
      key: "coaching",
      name: bt(language, "coachingName"),
      price: "€340",
      month: bt(language, "month"),
      features: bt(language, "coachingFeatures"),
      scarcity: bt(language, "coachingScarcity"),
      button: bt(language, "coachingButton"),
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

const pageWrap = {
  display: "grid",
  gap: "22px",
  maxWidth: "1160px",
};

const statusCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "clamp(16px, 4vw, 24px)",
  display: "grid",
  gap: "14px",
  overflowWrap: "break-word",
  minWidth: 0,
};

const heroUpsellCard = {
  background:
    "linear-gradient(135deg, rgba(250,204,21,0.10), rgba(255,255,255,0.04))",
  border: "1px solid rgba(250,204,21,0.22)",
  borderRadius: "22px",
  padding: "clamp(18px, 4vw, 26px)",
  overflowWrap: "break-word",
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
};

const text = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
  gap: "18px",
  alignItems: "stretch",
};

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "22px",
  minHeight: "520px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  overflowWrap: "break-word",
  minWidth: 0,
};

const highlightCard = {
  background: "rgba(250,204,21,0.08)",
  border: "1px solid rgba(250,204,21,0.45)",
  borderRadius: "20px",
  padding: "22px",
  minHeight: "520px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  overflowWrap: "break-word",
  minWidth: 0,
};

const vipCard = {
  background: "rgba(96,165,250,0.08)",
  border: "1px solid rgba(96,165,250,0.28)",
  borderRadius: "20px",
  padding: "22px",
  minHeight: "520px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  overflowWrap: "break-word",
  minWidth: 0,
};

const coachingCard = {
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.11), rgba(255,255,255,0.04))",
  border: "1px solid rgba(255,255,255,0.22)",
  borderRadius: "20px",
  padding: "22px",
  minHeight: "520px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  overflowWrap: "break-word",
  minWidth: 0,
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
  fontSize: "24px",
  fontWeight: "900",
  marginBottom: "8px",
};

const planTag = {
  display: "inline-block",
  marginBottom: "14px",
  padding: "6px 10px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "rgba(255,255,255,0.72)",
  fontSize: "12px",
  fontWeight: "800",
};

const scarcityBox = {
  marginTop: "18px",
};

const scarcityText = {
  fontSize: "13px",
  marginBottom: "6px",
  color: "#facc15",
  fontWeight: "800",
};

const vipScarcityText = {
  fontSize: "13px",
  marginBottom: "6px",
  color: "#60a5fa",
  fontWeight: "800",
};

const progressBar = {
  height: "7px",
  background: "rgba(255,255,255,0.1)",
  borderRadius: "10px",
  overflow: "hidden",
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
};

  const success = searchParams?.get("success") === "1";

  const { language } = useLanguage();

  const membership = String(membershipType || "free").toLowerCase().trim();

  const copy = {
    en: {
      current: "Current Membership",
      status: "Status",
      active: "Active",
    }

