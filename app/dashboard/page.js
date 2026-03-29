export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";
import DashboardLayout from "../../components/DashboardLayout";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("membership_type, is_active, full_name")
    .eq("id", user.id)
    .single();

  if (!profile?.is_active) {
    redirect("/billing");
  }

  const isVip = profile.membership_type?.toLowerCase() === "vip";

  return (
    <DashboardLayout
      title="Dashboard"
      subtitle="Your member home base. From here you can open your plan, meals, recipes, programs, and account tools."
    >
      <div style={{ display: "grid", gap: "22px" }}>
        <section style={heroCard}>
          <div>
            <div style={eyebrow}>Welcome Back</div>
            <h2 style={heroTitle}>
              {profile.full_name || user.email}
            </h2>
            <p style={muted}>
              Membership: <strong>{profile.membership_type}</strong> · Status:{" "}
              <strong>Active</strong>
            </p>
          </div>

          <div style={ctaRow}>
            <a href="/plan-builder" style={primaryButton}>Open Plan Builder</a>
            <a href="/nutrition" style={ghostButton}>Open Nutrition</a>
            <a href="/recipes" style={ghostButton}>Open Recipes</a>
          </div>
        </section>

        <section style={grid}>
          <a href="/workouts" style={cardLink}>
            <div style={cardTitle}>Workouts</div>
            <div style={cardText}>
              Open your training structure, split, and exercise guidance.
            </div>
          </a>

          <a href="/nutrition" style={cardLink}>
            <div style={cardTitle}>Nutrition</div>
            <div style={cardText}>
              View your goal-based eating direction and meal structure.
            </div>
          </a>

          <a href="/recipes" style={cardLink}>
            <div style={cardTitle}>Recipes</div>
            <div style={cardText}>
              Browse recipes that match fat loss, muscle gain, or lifestyle goals.
            </div>
          </a>

          <a href="/programs" style={cardLink}>
            <div style={cardTitle}>Programs</div>
            <div style={cardText}>
              Follow structured programs with clear outcomes and progression.
            </div>
          </a>

          <a href="/couple-zone" style={cardLink}>
            <div style={cardTitle}>Couple Zone</div>
            <div style={cardText}>
              Shared challenges, check-ins, and tools built for couples.
            </div>
          </a>

          <a href="/billing" style={cardLink}>
            <div style={cardTitle}>Billing</div>
            <div style={cardText}>
              Manage your membership, upgrade, or view your current plan.
            </div>
          </a>
        </section>

        {isVip && (
          <section style={vipCard}>
            <div style={eyebrow}>VIP</div>
            <h2 style={heroTitle}>Monthly progress video call</h2>
            <p style={muted}>
              Your VIP membership includes 1 progress video call per month for
              evaluation, feedback, and next-step adjustments.
            </p>
            <a href="/billing" style={primaryButton}>Manage VIP Access</a>
          </section>
        )}
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

const vipCard = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
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
