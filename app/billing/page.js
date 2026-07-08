export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import BillingClient from "../../components/BillingClient";
import { getCurrentUserAndProfile } from "../../lib/getProfile";

export default async function BillingPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");

  const membership = String(
    profile?.membership_type || "free"
  ).toLowerCase();

  const isActive = Boolean(profile?.is_active);

  function getStatusText() {
    if (!isActive) {
      return "Free Member";
    }

    if (membership === "nutrition") {
      return "Nutrition Member";
    }

    if (membership === "full_access") {
      return "Full Access Member";
    }

    if (membership === "vip") {
      return "VIP Member";
    }

    return "Member";
  }

  return (
    <DashboardLayout
      title="Membership"
      subtitle="Unlock workouts, nutrition systems, Booty Builder programs, Couple Zone accountability and full transformation tools."
      membershipType={membership}
    >
      <section style={wrap}>
        <div style={hero}>
          <div style={heroOverlay} />

          <img
            src="/images/background.webp"
            alt="FitCoupleClub"
            style={heroImage}
          />

          <div style={heroContent}>
            <div style={heroBadge}>FITCOUPLECLUB MEMBERSHIP</div>

            <h1 style={heroTitle}>
              BUILD YOUR
              <br />
              <span style={redText}>BEST VERSION.</span>
            </h1>

            <p style={heroText}>
              Choose your access level and unlock structured nutrition,
              workouts, progress systems and transformation tools designed for
              real consistency and visible results.
            </p>

            <div style={statusBox}>
              <div style={statusLabel}>CURRENT STATUS</div>
              <div style={statusValue}>{getStatusText()}</div>
            </div>
          </div>
        </div>

        <div style={clientWrap}>
          <BillingClient
            userEmail={String(user?.email || "")
              .toLowerCase()
              .trim()}
            membershipType={membership}
            isActive={isActive}
            hasCustomer={Boolean(profile?.stripe_customer_id)}
          />
        </div>
      </section>
    </DashboardLayout>
  );
}

const wrap = {
  display: "grid",
  gap: "clamp(28px, 5vw, 42px)",
  paddingBottom: "120px",
};

const hero = {
  position: "relative",
  overflow: "hidden",
  borderRadius: "0px",
  border: "1px solid rgba(255,255,255,0.10)",
  minHeight: "420px",
  display: "flex",
  alignItems: "center",
};

const heroImage = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "grayscale(1) brightness(0.28) contrast(1.15)",
};

const heroOverlay = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.72) 45%, rgba(90,0,0,0.45) 100%)",
  zIndex: 1,
};

const heroContent = {
  position: "relative",
  zIndex: 2,
  maxWidth: "760px",
  padding: "clamp(28px, 6vw, 56px)",
};

const heroBadge = {
  display: "inline-block",
  padding: "10px 16px",
  border: "1px solid rgba(185,0,0,0.45)",
  background: "rgba(120,0,0,0.22)",
  color: "#ef4444",
  fontSize: "12px",
  fontWeight: "950",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  marginBottom: "20px",
};

const heroTitle = {
  margin: 0,
  fontSize: "clamp(46px, 8vw, 82px)",
  lineHeight: 0.9,
  fontWeight: "950",
  textTransform: "uppercase",
  letterSpacing: "-0.06em",
  color: "white",
};

const redText = {
  color: "#b00000",
};

const heroText = {
  marginTop: "24px",
  maxWidth: "620px",
  color: "rgba(255,255,255,0.76)",
  lineHeight: 1.8,
  fontSize: "clamp(16px, 2vw, 19px)",
};

const statusBox = {
  marginTop: "30px",
  display: "inline-block",
  padding: "18px 22px",
  background: "rgba(0,0,0,0.46)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderLeft: "3px solid #b00000",
};

const statusLabel = {
  fontSize: "12px",
  color: "rgba(255,255,255,0.55)",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginBottom: "6px",
  fontWeight: "900",
};

const statusValue = {
  fontSize: "24px",
  fontWeight: "950",
  textTransform: "uppercase",
};

const clientWrap = {
  width: "100%",
};