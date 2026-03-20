export default function DashboardPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a", color: "white", padding: "40px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "12px" }}>Member Dashboard</h1>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "30px" }}>
          Welcome back. Choose your training, meals, and programs below.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" }}>
          {[
            ["Workouts", "/workouts"],
            ["Nutrition", "/nutrition"],
            ["Recipes", "/recipes"],
            ["Programs", "/programs"],
            ["Couple Zone", "/couple-zone"],
            ["Account", "/account"],
          ].map(([title, link]) => (
            <a
              key={title}
              href={link}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "26px",
                color: "white",
                textDecoration: "none",
                fontSize: "24px",
                fontWeight: "700",
              }}
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
