import DashboardLayout from "../../components/DashboardLayout";
import DashboardCard from "../../components/DashboardCard";

export default function DashboardPage() {
  const cards = [
    ["Build My Plan", "Choose goal, focus, and training days to generate a useful plan.", "/plan-builder"],
    ["Workouts", "See your workout structures and focus-specific sessions.", "/workouts"],
    ["Nutrition", "Follow the eating direction that fits your goal.", "/nutrition"],
    ["Recipes", "Use practical high-protein meals and meal ideas.", "/recipes"],
    ["Programs", "Run structured transformations and challenges.", "/programs"],
    ["Couple Zone", "Train and stay accountable together.", "/couple-zone"],
    ["Progress", "Track weight, measurements, and check-ins.", "/progress"],
    ["Billing", "See your current plan and future subscription controls.", "/billing"],
    ["Account", "Manage settings and profile details.", "/account"],
  ];

  return (
    <DashboardLayout
      title="Member Dashboard"
      subtitle="Everything important is organized here so members can actually use the platform instead of getting lost."
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" }}>
        {cards.map(([title, text, href]) => (
          <DashboardCard key={title} title={title} text={text} href={href} />
        ))}
      </div>
    </DashboardLayout>
  );
}
