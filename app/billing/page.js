export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessStarterPages } from "../../lib/access";

export default async function BillingPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessStarterPages(profile)) redirect("/pricing");

  return (
    <DashboardLayout
      title="Billing"
      subtitle="Manage your plan and see what each membership unlocks."
      membershipType={profile?.membership_type}
    >
      <div style={{ display: "grid", gap: "22px", maxWidth: "900px" }}>
        <section style={statusCard}>
          <div>
            <div style={eyebrow}>Current Membership</div>
            <h2 style={title}>{profile?.membership_type}</h2>
            <p style={text}>Status: Active</p>
          </div>
        </section>

        <section style={grid}>
          <div style={card}><div style={cardTitle}>Starter — €29</div><div style={text}>Dashboard, plan builder, workouts, nutrition, recipes, billing, account. Full plan builder output, but no saved plans or advanced rotations.</div></div>
          <div style={card}><div style={cardTitle}>Premium — €59</div><div style={text}>Everything in Starter plus programs, couple zone, progress, saved plans, deeper progression, and all workout variations.</div></div>
          <div style={vipCard}><div style={cardTitle}>VIP — €99</div><div style={text}>Everything in Premium plus VIP page access and 1 monthly progress video call.</div></div>
        </section>
      </div>
    </DashboardLayout>
  );
}

const statusCard = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "22px", padding: "24px" };
const eyebrow = { fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,0.45)", marginBottom: "8px" };
const title = { margin: 0, fontSize: "30px", fontWeight: "800" };
const text = { color: "rgba(255,255,255,0.68)", lineHeight: 1.8 };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "18px" };
const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "20px" };
const vipCard = { background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "20px", padding: "20px" };
const cardTitle = { fontSize: "24px", fontWeight: "800", marginBottom: "8px" };import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";
import DashboardLayout from "../../components/DashboardLayout";

export const dynamic = "force-dynamic";

export default async function BillingPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("membership_type, is_active")
    .eq("id", user.id)
    .single();

  return (
    <DashboardLayout
      title="Billing"
      subtitle="Manage your membership and upgrade your access"
    >
      <div style={{ display: "grid", gap: "22px", maxWidth: "600px" }}>
        
        {/* CURRENT PLAN */}
        <section style={card}>
          <div style={eyebrow}>Current Plan</div>
          <h2 style={title}>
            {profile?.membership_type || "Free"}
          </h2>

          <div style={status}>
            Status: {profile?.is_active ? "Active" : "Inactive"}
          </div>
        </section>

        {/* PLANS */}
        <section style={card}>
          <div style={eyebrow}>Upgrade</div>

          <div style={planBox}>
            <h3>Starter — €29</h3>
            <p>Basic access to workouts, recipes, and guidance</p>
            <button style={button}>Choose Starter</button>
          </div>

          <div style={planBox}>
            <h3>Premium — €59</h3>
            <p>Full system: workouts, nutrition, programs, couple zone</p>
            <button style={button}>Choose Premium</button>
          </div>

          <div style={vipBox}>
            <h3>VIP — €99</h3>
            <p>Includes monthly 1-on-1 progress video call</p>
            <button style={vipButton}>Choose VIP</button>
          </div>
        </section>

        {/* CANCEL */}
        {profile?.is_active && (
          <section style={card}>
            <div style={eyebrow}>Manage</div>
            <button style={cancelButton}>Cancel Membership</button>
          </section>
        )}
      </div>
    </DashboardLayout>
  );
}

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "22px",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const title = {
  fontSize: "28px",
  fontWeight: "800",
};

const status = {
  marginTop: "8px",
  color: "rgba(255,255,255,0.7)",
};

const planBox = {
  marginTop: "16px",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.1)",
};

const vipBox = {
  marginTop: "16px",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid gold",
};

const button = {
  marginTop: "10px",
  padding: "10px",
  borderRadius: "8px",
  background: "white",
  color: "black",
  fontWeight: "700",
  border: "none",
};

const vipButton = {
  ...button,
  background: "gold",
  color: "black",
};

const cancelButton = {
  padding: "12px",
  borderRadius: "10px",
  background: "red",
  color: "white",
  fontWeight: "700",
  border: "none",
};
