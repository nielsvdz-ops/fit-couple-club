import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <Navbar />
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px 60px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "10px 18px",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "999px",
            fontSize: "14px",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "24px",
          }}
        >
          Premium Couple-Led Fitness Platform
        </div>

        <h1
          style={{
            fontSize: "64px",
            lineHeight: "1.05",
            margin: "0 0 24px",
            maxWidth: "900px",
            fontWeight: "700",
          }}
        >
          Train together. Eat clean. Build an attractive, disciplined lifestyle.
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.7",
            color: "rgba(255,255,255,0.72)",
            maxWidth: "760px",
            marginBottom: "36px",
          }}
        >
          Fit Couple Club gives members structured workouts, nutrition plans,
          recipes, and premium couple-focused programs designed to help people
          get leaner, stronger, and more consistent.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="#pricing"
            style={{
              background: "white",
              color: "black",
              padding: "16px 28px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Join Now
          </a>

          <a
            href="#features"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              padding: "16px 28px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Explore Features
          </a>
        </div>
      </section>

      <section
        id="features"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 24px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        {[
          {
            title: "70 Workouts",
            text: "10 workout options for every day of the week.",
          },
          {
            title: "Nutrition Plans",
            text: "Structured meal systems for fat loss, muscle gain, and maintenance.",
          },
          {
            title: "Recipe Library",
            text: "Simple, high-protein meals that are easy to follow.",
          },
          {
            title: "Couple Programs",
            text: "The signature angle that makes your platform unique.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "22px",
              padding: "28px",
            }}
          >
            <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>{item.title}</h3>
            <p style={{ color: "rgba(255,255,255,0.68)", lineHeight: "1.7" }}>
              {item.text}
            </p>
          </div>
        ))}
      </section>

      <section
        id="pricing"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 100px",
        }}
      >
        <h2 style={{ fontSize: "42px", marginBottom: "24px" }}>Membership Plans</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            {
              name: "Starter",
              price: "€19/mo",
              points: ["Workout library", "Nutrition guides", "Recipe access"],
            },
            {
              name: "Premium",
              price: "€39/mo",
              points: ["Everything in Starter", "Couple workouts", "Programs & challenges"],
            },
            {
              name: "VIP",
              price: "€99/mo",
              points: ["Everything in Premium", "VIP accountability", "Priority support"],
            },
          ].map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.name === "Premium" ? "white" : "rgba(255,255,255,0.04)",
                color: plan.name === "Premium" ? "black" : "white",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "30px",
              }}
            >
              <h3 style={{ fontSize: "28px", marginBottom: "10px" }}>{plan.name}</h3>
              <div style={{ fontSize: "42px", fontWeight: "700", marginBottom: "20px" }}>
                {plan.price}
              </div>
              <ul style={{ paddingLeft: "18px", lineHeight: "1.9", marginBottom: "24px" }}>
                {plan.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <button
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "14px",
                  border: "none",
                  fontWeight: "700",
                  cursor: "pointer",
                  background: plan.name === "Premium" ? "black" : "white",
                  color: plan.name === "Premium" ? "white" : "black",
                }}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
