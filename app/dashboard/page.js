import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";

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

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        padding: "40px",
      }}
    >
      <h1>Member Dashboard</h1>
      <p>Welcome {profile.full_name || user.email}</p>
      <p>Plan: {profile.membership_type}</p>
      <p>Status: Active</p>
    </main>
  );
}
