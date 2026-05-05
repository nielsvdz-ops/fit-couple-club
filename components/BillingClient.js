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

const pageWrap = {
  display: "grid",
  gap: "22px",
  maxWidth: "1160px",
};

const statusCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "24px",
  display: "grid",
  gap: "14px",
};

const heroUpsellCard = {
  background:
    "linear-gradient(135deg, rgba(250,204,21,0.10), rgba(255,255,255,0.04))",
  border: "1px solid rgba(250,204,21,0.22)",
  borderRadius: "22px",
  padding: "26px",
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
  fontSize: "30px",
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
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
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
      active: "Active"

