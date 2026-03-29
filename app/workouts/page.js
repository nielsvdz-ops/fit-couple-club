export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessStarterPages, getWorkoutVariationLimit } from "../../lib/access";

export default async function WorkoutsPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessStarterPages(profile)) redirect("/pricing");

  const limit = getWorkoutVariationLimit(profile);
  const variations = [
    "Variation 1 — Power Base",
    "Variation 2 — Hypertrophy Push",
    "Variation 3 — Athletic Split",
    "Variation 4 — Conditioning Blend",
    "Variation 5 — Strength Focus",
    "Variation 6 — Volume Wave",
    "Variation 7 — Shape Builder",
    "Variation 8 — Performance Split",
    "Variation 9 — High Frequency",
    "Variation 10 — Peak Cycle",
  ];

  const visible = variations.slice(0, limit);
  const isStarter = profile?.membership_type?.toLowerCase() === "starter";

  return (
    <DashboardLayout
      title="Workouts"
      subtitle="Explore your workout variations and member-level training depth."
      membershipType={profile?.membership_type}
    >
      <div style={{ display: "grid", gap: "18px" }}>
        <div style={grid}>
          {visible.map((item) => (
            <div key={item} style={card}>
              <div style={cardTitle}>{item}</div>
              <div style={cardText}>Includes structured training days, exercise blocks, and session direction.</div>
            </div>
          ))}
        </div>

        {isStarter && (
          <div style={lockedBox}>
            <div style={lockedTitle}>Starter access includes 4 workout variations</div>
            <p style={lockedText}>Upgrade to Premium or VIP to unlock all 10 workout variations and deeper training variety.</p>
            <a href="/pricing" style={unlockButton}>Unlock All Variations</a>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "16px" };
const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "18px" };
const cardTitle = { fontSize: "22px", fontWeight: "800", marginBottom: "8px" };
const cardText = { color: "rgba(255,255,255,0.7)", lineHeight: 1.7 };
const lockedBox = { marginTop: "6px", background: "rgba(255,255,255,0.03)", border: "1px dashed rgba(255,255,255,0.2)", borderRadius: "18px", padding: "22px", textAlign: "center" };
const lockedTitle = { fontSize: "24px", fontWeight: "800", marginBottom: "8px" };
const lockedText = { color: "rgba(255,255,255,0.68)", lineHeight: 1.8, marginBottom: "14px" };
const unlockButton = { display: "inline-block", padding: "14px 18px", background: "white", color: "black", borderRadius: "12px", fontWeight: "800", textDecoration: "none" };
