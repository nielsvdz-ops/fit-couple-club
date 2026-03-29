export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessPremiumPages } from "../../lib/access";

const programs = [
  {
    title: "30-Day Lean Reset",
    text: "Routine, consistency, cleaner eating, and visible momentum.",
  },
  {
    title: "Build Curves / Booty Builder",
    text: "Lower body growth focus with glute-heavy structure.",
  },
  {
    title: "Couple Transformation Challenge",
    text: "Shared discipline and accountability together.",
  },
  {
    title: "Lean Muscle Blueprint",
    text: "Muscle gain with controlled nutrition and performance focus.",
  },
];

export default async function ProgramsPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessPremiumPages(profile)) redirect("/pricing");

  return (
    <DashboardLayout
      title="Programs"
      subtitle="Premium and VIP members can access structured transformation programs."
      membershipType={profile?.membership_type}
    >
      <div style={grid}>
        {programs.map((program) => (
          <div key={program.title} style={card}>
            <div style={cardTitle}>{program.title}</div>
            <div style={cardText}>{program.text}</div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "18px",
};

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "20px",
};

const cardTitle = {
  fontSize: "24px",
  fontWeight: "800",
  marginBottom: "10px",
};

const cardText = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.7,
};
