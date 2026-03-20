import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a", color: "white" }}>
      <Navbar />

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "90px 24px 70px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <div style={badgeStyle}>Built for individuals and couples</div>
          <h1 style={heroTitleStyle}>
            Build your dream body. Solo or as a team.
          </h1>
          <p style={heroTextStyle}>
            Fit Couple Club helps people choose their goal, choose how many days per week they want to train, and follow a workout and nutrition structure that matches their body and lifestyle.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "24px" }}>
            <a href="/signup" style={primaryButton}>Start Your Journey</a>
            <a href="/plan-builder" style={secondaryButton}>Build Your Plan</a>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              "Solo & Couple Mode",
              "Goal-Based Plans",
              "Choose Training Days",
              "Meal Structures & Recipes",
            ].map((item) => (
              <div key={item} style={pillStyle}>{item}</div>
            ))}
          </div>
        </div>

        <div style={imagePlaceholderStyle}>
          <div style={imageLabelStyle}>ADD_HERO_COUPLE_IMAGE</div>
        </div>
      </section>

      <section id="features" style={sectionWrap}>
        <div style={{ marginBottom: "28px" }}>
          <div style={eyebrowStyle}>How It Works</div>
          <h2 style={sectionTitleStyle}>A fitness system built around real life.</h2>
        </div>

        <div style={gridStyle}>
          {[
            {
              title: "Choose your goal",
              text: "Lose fat, build muscle, tone and shape your body, maintain a healthy athletic lifestyle, or start with a beginner reset.",
            },
            {
              title: "Choose solo or couple mode",
              text: "Use the platform alone or with your partner to stay accountable and motivated together.",
            },
            {
              title: "Choose your training days",
              text: "Select how many days per week you want to train and your workout structure adapts to that schedule.",
            },
            {
              title: "Follow your plan",
              text: "Get your matching workout direction, meal structure, recipes, and transformation systems.",
            },
          ].map((item) => (
            <div key={item.title} style={cardStyle}>
              <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>{item.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionWrapTwoCol}>
        <div style={imagePlaceholderStyle}>
          <div style={imageLabelStyle}>ADD_ABOUT_COUPLE_IMAGE</div>
        </div>

        <div>
          <div style={eyebrowStyle}>About Us</div>
          <h2 style={sectionTitleStyle}>Built from real experience.</h2>
          <p style={sectionTextStyle}>
            We have been together for over 12 years. We train together, eat together, and built our bodies and lifestyle side by side.
          </p>
          <p style={sectionTextStyle}>
            Rosanna overcame anorexia after struggling with an eating disorder for 7 years when she was younger. That journey gave her deep practical knowledge about food, healthy eating, balance, and recovery.
          </p>
          <p style={sectionTextStyle}>
            Niels has been in the gym since he was 15 years old and never stopped. Over the years, we built strong athletic physiques and a healthy lifestyle with more energy, power, confidence, and discipline.
          </p>
          <p style={sectionTextStyle}>
            Now we want to help individuals and couples start their own journey and achieve the body and lifestyle they want — alone or as a team.
          </p>
        </div>
      </section>

      <section style={sectionWrap}>
        <div style={{ marginBottom: "28px" }}>
          <div style={eyebrowStyle}>Choose Your Goal</div>
          <h2 style={sectionTitleStyle}>Plans built around what people actually want.</h2>
        </div>

        <div style={gridStyle}>
          {[
            "Lose Fat",
            "Build Muscle",
            "Tone & Shape Body",
            "Maintain Athletic Lifestyle",
            "Beginner Body Reset",
            "Couple Transformation",
          ].map((goal) => (
            <div key={goal} style={cardStyle}>{goal}</div>
          ))}
        </div>
      </section>

      <section style={sectionWrap}>
        <div style={{ marginBottom: "28px" }}>
          <div style={eyebrowStyle}>Body Focus</div>
          <h2 style={sectionTitleStyle}>Extra focus where people want it most.</h2>
        </div>

        <div style={gridStyle}>
          {["Booty", "Abs", "Legs", "Upper Body", "Full Body", "Couple Workouts"].map((focus) => (
            <div key={focus} style={cardStyle}>{focus}</div>
          ))}
        </div>
      </section>

      <section id="pricing" style={sectionWrap}>
        <div style={{ marginBottom: "28px" }}>
          <div style={eyebrowStyle}>Membership Plans</div>
          <h2 style={sectionTitleStyle}>Start where you are.</h2>
        </div>

        <div style={pricingGridStyle}>
          {[
            {
              name: "Starter",
              price: "€19/mo",
              points: ["Basic workout access", "Nutrition guides", "Starter recipe access"],
            },
            {
              name: "Premium",
              price: "€39/mo",
              points: ["Everything in Starter", "Goal-based plans", "Couple mode", "Programs & challenges"],
            },
            {
              name: "VIP",
              price: "€99/mo",
              points: ["Everything in Premium", "Priority support", "Higher-level accountability"],
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
              <div style={{ fontSize: "42px", fontWeight: "800", marginBottom: "20px" }}>{plan.price}</div>
              <ul style={{ paddingLeft: "18px", lineHeight: 1.9, marginBottom: "24px" }}>
                {plan.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a href="/signup" style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                textDecoration: "none",
                padding: "14px 18px",
                borderRadius: "14px",
                fontWeight: "700",
                background: plan.name === "Premium" ? "black" : "white",
                color: plan.name === "Premium" ? "white" : "black",
              }}>
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionWrapTwoCol}>
        <div>
          <div style={eyebrowStyle}>Couple Mode</div>
          <h2 style={sectionTitleStyle}>The journey is easier together.</h2>
          <p style={sectionTextStyle}>
            For couples who want to train together, eat better together, and keep each other accountable, Couple Mode makes the process more enjoyable and more consistent.
          </p>
          <p style={sectionTextStyle}>
            This is what makes Fit Couple Club different from normal fitness websites. It becomes a lifestyle system instead of just random workouts.
          </p>
        </div>

        <div style={imagePlaceholderStyle}>
          <div style={imageLabelStyle}>ADD_COUPLE_MODE_IMAGE</div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "30px 24px", color: "rgba(255,255,255,0.58)", textAlign: "center" }}>
        © Fit Couple Club — Build your dream body solo or as a team.
      </footer>
    </main>
  );
}

const badgeStyle = {
  display: "inline-block",
  padding: "10px 18px",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "999px",
  fontSize: "14px",
  color: "rgba(255,255,255,0.8)",
  marginBottom: "24px",
};

const eyebrowStyle = {
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "rgba(255,255,255,0.5)",
};

const heroTitleStyle = {
  fontSize: "clamp(42px, 7vw, 76px)",
  lineHeight: 1.02,
  margin: "0 0 24px",
  maxWidth: "960px",
  fontWeight: "800",
  letterSpacing: "-0.03em",
};

const heroTextStyle = {
  fontSize: "20px",
  lineHeight: 1.7,
  color: "rgba(255,255,255,0.72)",
  maxWidth: "780px",
  marginBottom: "36px",
};

const sectionTitleStyle = {
  fontSize: "44px",
  margin: "10px 0 0",
};

const sectionTextStyle = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  marginBottom: "14px",
};

const primaryButton = {
  background: "white",
  color: "black",
  padding: "16px 28px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "700",
};

const secondaryButton = {
  border: "1px solid rgba(255,255,255,0.2)",
  color: "white",
  padding: "16px 28px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "700",
};

const pillStyle = {
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.04)",
  padding: "12px 16px",
  borderRadius: "999px",
  color: "rgba(255,255,255,0.78)",
  fontSize: "14px",
};

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "28px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "20px",
};

const pricingGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "20px",
};

const imagePlaceholderStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px dashed rgba(255,255,255,0.18)",
  borderRadius: "28px",
  minHeight: "420px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "20px",
};

const imageLabelStyle = {
  color: "rgba(255,255,255,0.45)",
  fontSize: "18px",
  letterSpacing: "0.08em",
};

const sectionWrap = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 24px 90px",
};

const sectionWrapTwoCol = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 24px 90px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "30px",
  alignItems: "center",
};
