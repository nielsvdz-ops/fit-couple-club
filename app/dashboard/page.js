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
  if (!canAccessStarterPages(profile)) redirect("/pricing");

  return (
    <DashboardLayout
      title="Dashboard"
      subtitle="Your member home base. Access your plans, food, recipes, billing, and member tools from here."
      membershipType={profile?.membership_type}
    >
      <div style={{ display: "grid", gap: "22px" }}>
        <section style={heroCard}>
          <div>
            <div style={eyebrow}>Welcome Back</div>
            <h2 style={heroTitle}>{profile?.full_name || user.email}</h2>
            <p style={muted}>
              Membership: <strong>{profile?.membership_type}</strong> · Status: <strong>Active</strong>
            </p>
          </div>

          <div style={ctaRow}>
            {canAccessFitnessPages(profile) && (
              <a href="/plan-builder" style={primaryButton}>Open Plan Builder</a>
            )}
            {canAccessNutritionPages(profile) && (
              <a href="/nutrition" style={ghostButton}>Open Nutrition</a>
            )}
            {canAccessNutritionPages(profile) && (
              <a href="/recipes" style={ghostButton}>Open Recipes</a>
            )}
          </div>
        </section>

        <section style={grid}>
          {canAccessFitnessPages(profile) && (
            <a href="/workouts" style={cardLink}>
              <div style={cardTitle}>Workouts</div>
              <div style={cardText}>
                Training structure, splits, and exercise access based on your membership.
              </div>
            </a>
          )}

          {canAccessNutritionPages(profile) && (
            <a href="/nutrition" style={cardLink}>
              <div style={cardTitle}>Nutrition</div>
              <div style={cardText}>
                Goal-based meal structure and nutrition direction.
              </div>
            </a>
          )}

          {canAccessNutritionPages(profile) && (
            <a href="/recipes" style={cardLink}>
              <div style={cardTitle}>Recipes</div>
              <div style={cardText}>
                Recipe library based on your member level.
              </div>
            </a>
          )}

          {canAccessFitnessPages(profile) && (
            <a href="/plan-builder" style={cardLink}>
              <div style={cardTitle}>Plan Builder</div>
              <div style={cardText}>
                Generate training plans based on your goal and membership access.
              </div>
            </a>
          )}

          <a href="/billing" style={cardLink}>
            <div style={cardTitle}>Billing</div>
            <div style={cardText}>
              Manage your membership and upgrade options.
            </div>
          </a>

          <a href="/account" style={cardLink}>
            <div style={cardTitle}>Account</div>
            <div style={cardText}>
              Your member profile and account settings.
            </div>
          </a>

          {canAccessFitnessPages(profile) && (
            <>
              <a href="/programs" style={cardLink}>
                <div style={cardTitle}>Programs</div>
                <div style={cardText}>
                  Structured transformations and premium program access.
                </div>
              </a>

              <a href="/couple-zone" style={cardLink}>
                <div style={cardTitle}>Couple Zone</div>
                <div style={cardText}>
                  Partner-focused tools, shared goals, and couple accountability.
                </div>
              </a>

              <a href="/progress" style={cardLink}>
                <div style={cardTitle}>Progress</div>
                <div style={cardText}>
                  Track body changes, adherence, and consistency.
                </div>
              </a>
            </>
          )}

          {canAccessVipPage(profile) && (
            <a href="/vip" style={cardLink}>
              <div style={cardTitle}>VIP</div>
              <div style={cardText}>
                Monthly call access, VIP-only accountability, and exclusive support tools.
              </div>
            </a>
          )}
        </section>
      </div>
    </DashboardLayout>
  );
}

const heroCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "24px",
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
  fontSize: "32px",
  fontWeight: "800",
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

const cardTitle = {
  fontSize: "24px",
  fontWeight: "800",
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
  fontWeight: "800",
};

const ghostButton = {
  display: "inline-block",
  padding: "12px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.16)",
  background: "transparent",
  color: "white",
  textDecoration: "none",
  fontWeight: "700",
};
