import Navbar from "../components/Navbar";

const goalCards = [
  {
    title: "Lose Fat",
    text: "Structured training and nutrition built to help people drop body fat without living on random diets.",
  },
  {
    title: "Build Muscle",
    text: "Progressive systems for people who want to grow, look stronger, and build a more athletic physique.",
  },
  {
    title: "Tone & Shape Body",
    text: "A balanced route for people who want visible shape, tighter structure, and consistent results.",
  },
  {
    title: "Maintain Healthy Lifestyle",
    text: "Stay lean, strong, and healthy with structure that fits daily life instead of taking it over.",
  },
  {
    title: "Beginner Body Reset",
    text: "A simple starting point for people who need clarity, confidence, and a system that feels doable.",
  },
  {
    title: "Couple Transformation",
    text: "A shared path for couples who want to train better, eat better, and stay accountable together.",
  },
];

const focusCards = [
  {
    title: "Booty",
    text: "Extra lower-body and glute-focused training for people who want more shape and strength.",
  },
  {
    title: "Abs",
    text: "Core-focused structure layered into a real training plan, not random ab circuits.",
  },
  {
    title: "Legs",
    text: "More lower-body emphasis for strength, muscle, and body composition results.",
  },
  {
    title: "Upper Body",
    text: "Build shoulders, back, arms, and posture with a stronger upper-body focus.",
  },
  {
    title: "Full Body",
    text: "A complete balanced route for people who want efficient training and visible overall progress.",
  },
  {
    title: "Couple Workouts",
    text: "Train together with fun but structured sessions that keep both people engaged.",
  },
];

const pricingPlans = [
  {
    name: "Nutrition",
    price: "€19.99/mo",
    points: [
      "Meal plans",
      "Recipes",
      "Nutrition guidance",
      "Perfect without gym focus",
    ],
    featured: false,
    cta: "Start Nutrition",
  },
  {
    name: "Full Access",
    price: "€29.99/mo",
    points: [
      "Everything in Nutrition",
      "Workouts & programs",
      "Plan builder",
      "Progress tracking",
      "Best overall value",
    ],
    featured: true,
    cta: "Unlock Everything",
  },
  {
    name: "VIP",
    price: "€99/mo",
    points: [
      "Everything in Full Access",
      "Monthly coaching call",
      "Priority support",
    ],
    featured: false,
    cta: "Go VIP",
  },
  {
    name: "Coaching",
    price: "€349/mo",
    points: [
      "Everything in VIP",
      "Weekly 1-on-1 calls",
      "Direct support",
      "Coaching by Niels & Rosanna",
    ],
    featured: false,
    cta: "Start Coaching",
  },
];

export default function Home() {
  return (
    <main style={main}>
      <Navbar />

      <section style={heroWrap}>
        <div>
          <div style={badgeStyle}>Built for individuals and couples</div>
          <h1 style={heroTitleStyle}>
            Build your body, your health, and your routine. Solo or together.
          </h1>
          <p style={heroTextStyle}>
            Fit Couple Club helps individuals and couples follow a structure that
            fits real life — with workouts, nutrition, recipes, and
            transformation systems designed around the result they actually want.
          </p>

          <div style={heroButtonRow}>
            <a href="/signup" style={primaryButton}>
              Start Your Journey
            </a>
            <a href="#pricing" style={secondaryButton}>
              View Plans
            </a>
          </div>

          <div style={pillRow}>
            {[
              "Nutrition Only Option",
              "Full Access Training + Food",
              "Solo & Couple Mode",
              "Recipes & Meal Plans",
            ].map((item) => (
              <div key={item} style={pillStyle}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={heroVisualCard}>
          <div style={imageLabelStyle}>ADD_HERO_COUPLE_IMAGE</div>
        </div>
      </section>

      <section id="features" style={sectionWrap}>
        <div style={sectionHeader}>
          <div style={eyebrowStyle}>How It Works</div>
          <h2 style={sectionTitleStyle}>
            A transformation system built around real life.
          </h2>
          <p style={sectionIntroText}>
            The platform is designed to remove confusion. Pick your goal, choose
            your level of support, and follow a system that feels clear and
            usable.
          </p>
        </div>

        <div style={featureGrid}>
          {[
            {
              title: "Choose your goal",
              text: "Lose fat, build muscle, tone and shape your body, improve your health, or reset your routine with structure that matches your level.",
            },
            {
              title: "Choose your path",
              text: "Start with nutrition only, unlock full access, or choose a higher-support coaching level when you want more accountability.",
            },
            {
              title: "Train solo or together",
              text: "Use the platform alone or with your partner to stay motivated, consistent, and aligned on your goals.",
            },
            {
              title: "Follow your system",
              text: "Get the matching workout structure, meal guidance, recipes, and progress tools that fit your plan.",
            },
          ].map((item, index) => (
            <div key={item.title} style={featureCard}>
              <div style={featureNumber}>0{index + 1}</div>
              <h3 style={featureTitle}>{item.title}</h3>
              <p style={featureText}>{item.text}</p>
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
            We have been together for over 12 years. We train together, eat
            together, and built our bodies and lifestyle side by side.
          </p>
          <p style={sectionTextStyle}>
            Rosanna overcame anorexia after struggling with an eating disorder
            for 7 years when she was younger. That journey gave her deep
            practical knowledge about food, healthy eating, balance, and
            recovery.
          </p>
          <p style={sectionTextStyle}>
            Niels has been in the gym since he was 15 years old and never
            stopped. Over the years, we built strong athletic physiques and a
            healthy lifestyle with more energy, power, confidence, and
            discipline.
          </p>
          <p style={sectionTextStyle}>
            Now we help individuals and couples improve their body, health, and
            lifestyle — alone or as a team.
          </p>
        </div>
      </section>

      <section style={sectionWrap}>
        <div style={sectionHeader}>
          <div style={eyebrowStyle}>Choose Your Goal</div>
          <h2 style={sectionTitleStyle}>
            Plans built around what people actually want.
          </h2>
          <p style={sectionIntroText}>
            Instead of generic fitness content, each path is built around a real
            outcome people actively care about.
          </p>
        </div>

        <div style={showcaseGrid}>
          {goalCards.map((goal) => (
            <div key={goal.title} style={showcaseCard}>
              <div style={showcaseTitle}>{goal.title}</div>
              <p style={showcaseText}>{goal.text}</p>
            </div>
          ))}
        </div>
      </section>

     
      <section id="pricing" style={sectionWrap}>
        <div style={sectionHeader}>
          <div style={eyebrowStyle}>Membership Plans</div>
          <h2 style={sectionTitleStyle}>Start where you are.</h2>
          <p style={sectionIntroText}>
            Whether someone wants nutrition only or full transformation support,
            there is a clear next step.
          </p>
        </div>

        <div style={pricingGridStyle}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              style={{
                ...pricingCard,
                ...(plan.featured ? pricingCardFeatured : {}),
              }}
            >
              {plan.featured && <div style={bestValueStyle}>🔥 Best Value</div>}

              <div>
                <h3 style={pricingTitle}>{plan.name}</h3>
                <div style={pricingPrice}>{plan.price}</div>

                <ul style={pricingList}>
                  {plan.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>

              <a
                href="/signup"
                style={{
                  ...pricingButton,
                  ...(plan.featured ? pricingButtonFeatured : {}),
                }}
              >
                {plan.cta}
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
            For couples who want to train together, eat better together, and
            keep each other accountable, Couple Mode makes the process more
            enjoyable and more consistent.
          </p>
          <p style={sectionTextStyle}>
            This is what makes Fit Couple Club different. It becomes a lifestyle
            system instead of just random workouts or generic meal plans.
          </p>
        </div>

        <div style={imagePlaceholderStyle}>
          <div style={imageLabelStyle}>ADD_COUPLE_MODE_IMAGE</div>
        </div>
      </section>

      <footer style={footerStyle}>
        © Fit Couple Club — Build your body, health, and lifestyle solo or as a
        team.
      </footer>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "#0a0a0a",
  color: "white",
};

const heroWrap = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "90px 24px 80px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "44px",
  alignItems: "center",
};

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

const heroButtonRow = {
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
  marginBottom: "24px",
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

const pillRow = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const pillStyle = {
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.04)",
  padding: "12px 16px",
  borderRadius: "999px",
  color: "rgba(255,255,255,0.78)",
  fontSize: "14px",
};

const heroVisualCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
  border: "1px dashed rgba(255,255,255,0.18)",
  borderRadius: "28px",
  minHeight: "460px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "20px",
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
  padding: "0 24px 100px",
};

const sectionWrapTwoCol = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 24px 100px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "34px",
  alignItems: "center",
};

const sectionHeader = {
  marginBottom: "30px",
  maxWidth: "840px",
};

const sectionTitleStyle = {
  fontSize: "44px",
  margin: "10px 0 0",
  lineHeight: 1.08,
};

const sectionIntroText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
  marginTop: "16px",
};

const sectionTextStyle = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  marginBottom: "14px",
};

const featureGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "20px",
};

const featureCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "28px",
};

const featureNumber = {
  fontSize: "13px",
  fontWeight: "800",
  color: "rgba(250,204,21,0.9)",
  marginBottom: "14px",
  letterSpacing: "0.12em",
};

const featureTitle = {
  fontSize: "24px",
  margin: "0 0 12px",
};

const featureText = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.8,
  margin: 0,
};

const showcaseGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "20px",
};

const showcaseCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "26px",
  minHeight: "180px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const showcaseTitle = {
  fontSize: "24px",
  fontWeight: "800",
  marginBottom: "12px",
};

const showcaseText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.75,
  margin: 0,
};

const pricingGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "20px",
  alignItems: "stretch",
};

const pricingCard = {
  background: "rgba(255,255,255,0.04)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "30px",
  position: "relative",
  minHeight: "480px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const pricingCardFeatured = {
  background: "rgba(250,204,21,0.08)",
  border: "1px solid rgba(250,204,21,0.4)",
  boxShadow: "0 0 0 1px rgba(250,204,21,0.08)",
};

const pricingTitle = {
  fontSize: "28px",
  margin: "0 0 10px",
};

const pricingPrice = {
  fontSize: "46px",
  fontWeight: "800",
  marginBottom: "22px",
  lineHeight: 1.15,
};

const pricingList = {
  paddingLeft: "18px",
  lineHeight: 1.9,
  margin: 0,
};

const pricingButton = {
  display: "block",
  width: "100%",
  textAlign: "center",
  textDecoration: "none",
  padding: "14px 18px",
  borderRadius: "14px",
  fontWeight: "800",
  background: "white",
  color: "black",
  marginTop: "28px",
  boxSizing: "border-box",
};

const pricingButtonFeatured = {
  background: "#facc15",
};

const bestValueStyle = {
  position: "absolute",
  top: "-10px",
  right: "12px",
  background: "#facc15",
  color: "black",
  fontSize: "12px",
  fontWeight: "800",
  padding: "5px 10px",
  borderRadius: "8px",
};

const footerStyle = {
  borderTop: "1px solid rgba(255,255,255,0.08)",
  padding: "30px 24px",
  color: "rgba(255,255,255,0.58)",
  textAlign: "center",
};
