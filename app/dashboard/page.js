export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import {
  canAccessStarterPages,
  canAccessNutritionPages,
  canAccessFitnessPages,
  canAccessVipPage,
} from "../../lib/access";

export default async function DashboardPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessStarterPages(profile)) redirect("/billing");

  const membership = String(profile?.membership_type || "free")
    .toLowerCase()
    .trim();

  const hasNutrition = canAccessNutritionPages(profile);
  const hasFitness = canAccessFitnessPages(profile);
  const hasVip = canAccessVipPage(profile);

  return (
    <DashboardLayout
      title="Dashboard"
      subtitle="Your member home base. Access your plans, food, recipes, billing, and member tools from here."
      membershipType={profile?.membership_type}
    >
      <div style={pageWrap}>
        <section style={heroCard}>
          <div>
            <div style={eyebrow}>Welcome Back</div>
            <h2 style={heroTitle}>{profile?.full_name || user.email}</h2>
            <p style={muted}>
              Membership:{" "}
              <strong>{formatMembership(profile?.membership_type)}</strong> ·
              Status:{" "}
              <strong>{profile?.is_active ? "Active" : "Inactive"}</strong>
            </p>
          </div>

          <div style={ctaRow}>
            {hasFitness && (
              <a href="/plan-builder" style={primaryButton}>
                Open Plan Builder
              </a>
            )}

            {hasNutrition && (
              <a href="/nutrition" style={ghostButton}>
                Open Nutrition
              </a>
            )}

            {hasNutrition && (
              <a href="/recipes" style={ghostButton}>
                Open Recipes
              </a>
            )}

            {membership === "nutrition" && (
              <a href="/billing" style={upgradeButton}>
                Upgrade to Full Access
              </a>
            )}
          </div>
        </section>

        {membership === "nutrition" && (
          <section style={upgradeCard}>
            <div>
              <div style={eyebrow}>Unlock the full transformation system</div>
              <h3 style={upgradeTitle}>You are missing workouts, programs, progress tracking, and Couple Zone.</h3>
              <p style={muted}>
                Nutrition gives you food structure. Full Access gives you the complete system:
                training, programs, plan builder, progress tracking, and couple accountability.
              </p>
            </div>

            <a href="/billing" style={upgradeButton}>
              Upgrade Now
            </a>
          </section>
        )}

        <section style={grid}>
          {hasFitness && (
            <a href="/workouts" style={cardLink}>
              <div style={cardTitle}>Workouts</div>
              <div style={cardText}>
                Training structure, splits, and exercise access based on your membership.
              </div>
            </a>
          )}

          {hasNutrition && (
            <a href="/nutrition" style={cardLink}>
              <div style={cardTitle}>Nutrition</div>
              <div style={cardText}>
                Goal-based nutrition, grocery guidance, calories, and macro structure.
              </div>
            </a>
          )}

          {hasNutrition && (
            <a href="/recipes" style={cardLink}>
              <div style={cardTitle}>Recipes</div>
              <div style={cardText}>
                Recipe library and daily food structures based on your member level.
              </div>
            </a>
          )}

          {hasFitness && (
            <a href="/plan-builder" style={cardLink}>
              <div style={cardTitle}>Plan Builder</div>
              <div style={cardText}>
                Generate training plans based on your goal, focus, and membership access.
              </div>
            </a>
          )}

          {hasFitness && (
            <>
              <a href="/programs" style={cardLink}>
                <div style={cardTitle}>Programs</div>
                <div style={cardText}>
                  Structured transformations and premium program access.
                </div>
              </a>

              <a href="/couple-zone" style={featuredCardLink}>
                <div style={miniBadge}>Main Feature</div>
                <div style={cardTitle}>Couple Zone</div>
                <div style={cardText}>
                  Partner-focused tools, shared goals, weekly scoring, and couple accountability.
                </div>
              </a>

              <a href="/progress" style={cardLink}>
                <div style={cardTitle}>Progress</div>
                <div style={cardText}>
                  Track body changes, adherence, consistency, and progress over time.
                </div>
              </a>
            </>
          )}

          {hasVip && (
            <a href="/vip" style={vipCardLink}>
              <div style={cardTitle}>VIP</div>
              <div style={cardText}>
                Monthly call access, VIP-only accountability, and exclusive support tools.
              </div>
            </a>
          )}

          <a href="/billing" style={cardLink}>
            <div style={cardTitle}>Billing</div>
            <div style={cardText}>
              Manage your membership, upgrade options, and subscription access.
            </div>
          </a>

          <a href="/account" style={cardLink}>
            <div style={cardTitle}>Account</div>
            <div style={cardText}>
              Your member profile and account settings.
            </div>
          </a>
        </section>
      </div>
    </DashboardLayout>
  );
}

function formatMembership(type) {
  const m = String(type || "").toLowerCase().trim();

  if (m === "nutrition") return "Nutrition";
  if (m === "full_access") return "Full Access";
  if (m === "vip") return "VIP";
  if (m === "coaching") return "Coaching";

  return "Free";
}

const pageWrap = {
  display: "grid",
  gap: "22px",
};

const heroCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "24px",
};

const upgradeCard = {
  background:
    "linear-gradient(135deg, rgba(250,204,21,0.12), rgba(255,255,255,0.04))",
  border: "1px solid rgba(250,204,21,0.28)",
  borderRadius: "22px",
  padding: "24px",
  display: "grid",
  gap: "16px",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const heroTitle = {
  margin: 0,
  fontSize: "clamp(28px, 6vw, 36px)",
  fontWeight: "900",
};

const upgradeTitle = {
  margin: "0 0 8px 0",
  fontSize: "clamp(22px, 5vw, 30px)",
  fontWeight: "900",
  lineHeight: 1.15,
};

const muted = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.8,
};

const ctaRow = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  marginTop: "18px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  gap: "18px",
};

const cardLink = {
  display: "block",
  textDecoration: "none",
  color: "white",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "20px",
};

const featuredCardLink = {
  ...cardLink,
  background: "rgba(250,204,21,0.08)",
  border: "1px solid rgba(250,204,21,0.28)",
  position: "relative",
};

const vipCardLink = {
  ...cardLink,
  background: "rgba(96,165,250,0.08)",
  border: "1px solid rgba(96,165,250,0.28)",
};

const miniBadge = {
  display: "inline-block",
  marginBottom: "10px",
  padding: "5px 9px",
  borderRadius: "999px",
  background: "#facc15",
  color: "black",
  fontSize: "11px",
  fontWeight: "900",
};

const cardTitle = {
  fontSize: "24px",
  fontWeight: "900",
  marginBottom: "8px",
};

const cardText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.7,
};

const primaryButton = {
  display: "inline-block",
  padding: "12px 16px",
  borderRadius: "12px",
  background: "white",
  color: "black",
  textDecoration: "none",
  fontWeight: "900",
};

const upgradeButton = {
  display: "inline-block",
  padding: "12px 16px",
  borderRadius: "12px",
  background: "#facc15",
  color: "black",
  textDecoration: "none",
  fontWeight: "900",
  textAlign: "center",
};

const ghostButton = {
  display: "inline-block",
  padding: "12px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.16)",
  background: "transparent",
  color: "white",
  textDecoration: "none",
  fontWeight: "800",
};