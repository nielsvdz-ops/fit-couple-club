import DashboardLayout from "../../components/DashboardLayout";

export default function DashboardPage() {
  const cards = [
    [
      "Build My Plan",
      "/plan-builder",
      "Choose your goal, focus area, and training days to generate your structure.",
    ],
    [
      "Workouts",
      "/workouts",
      "See your weekly training split and exercise structure.",
    ],
    [
      "Nutrition",
      "/nutrition",
      "Follow the eating direction that fits your body goal.",
    ],
    [
      "Recipes",
      "/recipes",
      "Simple high-protein meals and healthy dishes.",
    ],
    [
      "Programs",
      "/programs",
      "Use transformation systems and challenges.",
    ],
    [
      "Couple Zone",
      "/couple-zone",
      "Train, eat, and stay accountable together.",
    ],
    [
      "Account",
      "/account",
      "Manage your membership and settings.",
    ],
  ];

  return (
    <DashboardLayout
      title="Member Dashboard"
      subtitle="Welcome back. Everything you need for your fitness journey is organized in one place."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "20px",
        }}
      >
        {cards.map(([title, href, text]) => (
          <a
            key={title}
            href={href}
            style={{
              textDecoration: "none",
              color: "white",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "24px",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                fontWeight: "800",
                marginBottom: "10px",
              }}
            >
              {title}
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.7,
              }}
            >
              {text}
            </div>
          </a>
        ))}
      </div>
    </DashboardLayout>
  );
}
