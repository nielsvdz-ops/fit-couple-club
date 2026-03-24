import { redirect } from "next/navigation";
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
