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

  const copy = {
    en: {
      current: "Current Membership",
      status: "Status",
      active: "Active",
      inactive: "Inactive",
      manage: "Manage Subscription",
      choose: "Choose your plan",
      subtitle:
        "Upgrade your fitness and nutrition access with the plan that fits your goal.",
      currentPlan: "Current Plan",
      included: "Included",
    },
  };

  const t = copy[language] || copy.en;

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

  const title = {
    margin: 0,
    fontSize: "30px",
    fontWeight: "800",
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
    minHeight: "420px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  };

  const highlightCard = {
    ...card,
    background: "rgba(250,204,21,0.08)",
    border: "1px solid rgba(250,204,21,0.45)",
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

  const disabledBtn = {
    marginTop: "24px",
    padding: "14px 18px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.08)",
    color: "rgba(255,255,255,0.55)",
    fontWeight: "900",
    textAlign: "center",
  };

  return (
    <div style={pageWrap}>
      {success && (
        <div style={statusCard}>
          <h2 style={title}>Payment successful</h2>
          <p style={text}>
            Your membership is being updated. Refresh the dashboard in a moment
            if it does not show immediately.
          </p>
        </div>
      )}

      <div style={statusCard}>
        <h2 style={title}>{t.current}</h2>
        <p style={text}>
          Email: <strong>{userEmail}</strong>
        </p>
        <p style={text}>
          Plan: <strong>{membership}</strong>
        </p>
        <p style={text}>
          {t.status}: <strong>{isActive ? t.active : t.inactive}</strong>
        </p>

        {hasCustomer && <ManageSubscriptionButton />}
      </div>

      <div>
        <h2 style={title}>{t.choose}</h2>
        <p style={text}>{t.subtitle}</p>
      </div>

      <div style={grid}>
        <div style={membership === "nutrition" ? highlightCard : card}>
          {membership === "nutrition" && <div style={currentBadge}>Current</div>}

          <div>
            <div style={cardTitle}>Nutrition</div>
            <p style={text}>Meal structure, recipes, groceries and macros.</p>
            <h3>€19.99 / month</h3>
          </div>

          {membership === "nutrition" ? (
            <div style={disabledBtn}>{t.currentPlan}</div>
          ) : (
            <CheckoutButton plan="nutrition" />
          )}
        </div>

        <div style={membership === "full_access" ? highlightCard : card}>
          <div style={bestValue}>Best Value</div>
          {membership === "full_access" && <div style={currentBadge}>Current</div>}

          <div>
            <div style={cardTitle}>Full Access</div>
            <p style={text}>
              Training, nutrition, recipes, programs, progress and Couple Zone.
            </p>
            <h3>€29.99 / month</h3>
          </div>

          {membership === "full_access" ? (
            <div style={disabledBtn}>{t.currentPlan}</div>
          ) : (
            <CheckoutButton plan="full_access" />
          )}
        </div>

        <div style={membership === "vip" ? highlightCard : card}>
          {membership === "vip" && <div style={currentBadge}>Current</div>}

          <div>
            <div style={cardTitle}>VIP</div>
            <p style={text}>
              Full access plus VIP content, extra guidance and priority support.
            </p>
            <h3>€79.99 / month</h3>
          </div>

          {membership === "vip" ? (
            <div style={disabledBtn}>{t.currentPlan}</div>
          ) : (
            <CheckoutButton plan="vip" />
          )}
        </div>
      </div>
    </div>
  );
}
