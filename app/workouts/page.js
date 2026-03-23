import { redirect } from "next/navigation";
import { getUserAndSubscription } from "../../lib/getUser";
import DashboardLayout from "../../components/DashboardLayout";

export default async function WorkoutsPage() {
  const { user, subscription } = await getUserAndSubscription();

  if (!user) {
    redirect("/login");
  }

  if (!subscription || subscription.status !== "active") {
    redirect("/pricing");
  }

  const week = [
    ["Monday", "Chest + Triceps"],
    ["Tuesday", "Back + Biceps"],
    ["Wednesday", "Legs + Glutes"],
    ["Thursday", "Shoulders + Abs"],
    ["Friday", "Full Body"],
    ["Saturday", "Conditioning / HIIT"],
    ["Sunday", "Recovery"],
  ];

  return (
    <DashboardLayout
      title="Workouts"
      subtitle="Your weekly training structure lives here. Later this will connect directly to your generated plan."
    >
      <div style={{ display: "grid", gap: "16px" }}>
        {week.map(([day, focus]) => (
          <div
            key={day}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "18px",
              padding: "20px",
            }}
          >
            <div style={{ fontWeight: "800", fontSize: "20px" }}>{day}</div>
            <div style={{ color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>
              {focus}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
