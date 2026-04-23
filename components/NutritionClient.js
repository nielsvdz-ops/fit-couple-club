export default function NutritionClient({ membershipType }) {
  const membership = String(membershipType || "").toLowerCase().trim();

  const hasNutritionAccess =
    membership === "nutrition" ||
    membership === "full_access" ||
    membership === "vip" ||
    membership === "coaching";

  const goals = Object.keys(nutritionPlans);
  const [selectedGoal, setSelectedGoal] = useState("Build Muscle");
  const [selectedProfile, setSelectedProfile] = useState("men");
  const [selectedDay, setSelectedDay] = useState(0);

  const plan = nutritionPlans[selectedGoal];
  const activeDay = useMemo(() => {
    return plan.sampleDays[selectedDay] || plan.sampleDays[0];
  }, [plan, selectedDay]);

  const currentVariant = activeDay.variants[selectedProfile];

  function handleGoalChange(goal) {
    setSelectedGoal(goal);
    setSelectedDay(0);
  }

  return (
    <div style={pageWrap}>
      <section style={heroCard}>
        <div style={eyebrow}>Nutrition Guidance</div>
        <h2 style={heroTitle}>Build your food structure around your real goal</h2>
        <p style={heroText}>
          Choose your goal, switch between men and women examples, and browse
          full daily meal structures with calories, protein, ingredients, and
          preparation guidance.
        </p>

        <div style={topControls}>
          <div>
            <div style={sectionTop}>
              <h3 style={sectionTitleSmall}>Choose your goal</h3>
              <p style={mutedCompact}>
                Your nutrition structure changes based on your outcome.
              </p>
            </div>

            <div style={goalTabs}>
              {goals.map((goal) => {
                const active = selectedGoal === goal;
                return (
                  <button
                    key={goal}
                    onClick={() => handleGoalChange(goal)}
                    style={{
                      ...goalTab,
                      background: active
                        ? "rgba(255,255,255,0.14)"
                        : "rgba(255,255,255,0.03)",
                      border: active
                        ? "1px solid rgba(255,255,255,0.22)"
                        : "1px solid rgba(255,255,255,0.08)",
                      color: "white",
                    }}
                  >
                    {goal}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div style={sectionTop}>
              <h3 style={sectionTitleSmall}>Choose profile</h3>
              <p style={mutedCompact}>
                Meal examples scale realistically for men and women.
              </p>
            </div>

            <div style={profileTabs}>
              {["men", "women"].map((profile) => {
                const active = selectedProfile === profile;
                return (
                  <button
                    key={profile}
                    onClick={() => setSelectedProfile(profile)}
                    style={{
                      ...profileTab,
                      background: active ? "white" : "rgba(255,255,255,0.03)",
                      color: active ? "black" : "white",
                      border: active
                        ? "1px solid white"
                        : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {profile === "men" ? "Men" : "Women"}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div style={macroGrid}>
          <MacroCard
            label="Calories Guide"
            value={plan.caloriesGuide[selectedProfile]}
          />
          <MacroCard
            label="Protein Guide"
            value={plan.proteinGuide[selectedProfile]}
          />
          <MacroCard label="Carbs" value={plan.carbsGuide} />
          <MacroCard label="Fats" value={plan.fatsGuide} />
          <MacroCard
            label="Hydration"
            value={plan.hydration[selectedProfile]}
          />
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sectionTop}>
          <div style={eyebrow}>Overview</div>
          <h3 style={sectionTitle}>{selectedGoal}</h3>
          <p style={muted}>{plan.summary}</p>
        </div>

        <div style={sectionTop}>
          <h3 style={sectionTitleSmall}>Nutrition timing reminders</h3>
        </div>

        <ul style={ingredientsList}>
          {plan.timing.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div style={{ marginTop: "20px" }}>
          <h3 style={sectionTitleSmall}>Core grocery list</h3>
          <ul style={ingredientsList}>
            {plan.grocery.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sectionTop}>
          <div style={eyebrow}>Sample days</div>
          <h3 style={sectionTitle}>14-day nutrition structure</h3>
          <p style={muted}>
            Browse example days and see how the meals change with the goal and
            selected profile.
          </p>
        </div>

        <div style={dayTabs}>
          {plan.sampleDays.map((day, index) => {
            const active = selectedDay === index;
            return (
              <button
                key={day.title}
                onClick={() => setSelectedDay(index)}
                style={{
                  ...dayTab,
                  background: active
                    ? "rgba(255,255,255,0.14)"
                    : "rgba(255,255,255,0.03)",
                  border: active
                    ? "1px solid rgba(255,255,255,0.22)"
                    : "1px solid rgba(255,255,255,0.08)",
                  color: "white",
                }}
              >
                Day {index + 1}
              </button>
            );
          })}
        </div>

        <div style={featuredDayCard}>
          <div style={featuredDayTop}>
            <div>
              <div style={featuredDayTitle}>
                {activeDay.title} — {selectedProfile === "men" ? "Men" : "Women"}
              </div>
              <div style={featuredDayMeta}>
                <span style={featuredMetaPill}>{currentVariant.totalCalories}</span>
                <span style={featuredMetaPill}>{currentVariant.totalProtein}</span>
              </div>
            </div>
          </div>

          <div style={mealsGrid}>
            {currentVariant.meals.map((meal) => (
              <MealCard
                key={`${activeDay.title}-${selectedProfile}-${meal.label}-${meal.title}`}
                meal={meal}
              />
            ))}
          </div>
        </div>
      </section>

      {!hasNutritionAccess && (
        <section style={lockedCard}>
          <div style={lockedTitle}>Nutrition access locked</div>
          <p style={muted}>
            Upgrade your membership to unlock full nutrition guidance,
            goal-based meal structures, and complete sample day support.
          </p>
          <a href="/billing" style={unlockButton}>
            Upgrade Now
          </a>
        </section>
      )}
    </div>
  );
}

const pageWrap = {
  display: "grid",
  gap: "22px",
};

const heroCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: "24px",
  padding: "28px",
};

const sectionCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "24px",
};

const lockedCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px dashed rgba(255,255,255,0.2)",
  borderRadius: "22px",
  padding: "24px",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const heroTitle = {
  margin: 0,
  fontSize: "clamp(28px, 4vw, 42px)",
  fontWeight: "800",
  lineHeight: 1.08,
};

const heroText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  marginTop: "12px",
  maxWidth: "820px",
};

const topControls = {
  display: "grid",
  gap: "16px",
  marginTop: "18px",
};

const sectionTop = {
  marginBottom: "14px",
};

const sectionTitle = {
  margin: 0,
  fontSize: "28px",
  fontWeight: "800",
};

const sectionTitleSmall = {
  margin: 0,
  fontSize: "24px",
  fontWeight: "800",
};

const muted = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
};

const mutedCompact = {
  color: "rgba(255,255,255,0.62)",
  lineHeight: 1.6,
  marginTop: "6px",
};

const goalTabs = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const goalTab = {
  padding: "12px 14px",
  borderRadius: "12px",
  fontWeight: "700",
  cursor: "pointer",
};

const profileTabs = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const profileTab = {
  padding: "12px 18px",
  borderRadius: "999px",
  fontWeight: "800",
  cursor: "pointer",
};

const macroGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: "14px",
  marginTop: "18px",
};

const macroCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  padding: "18px",
};

const macroLabel = {
  color: "rgba(255,255,255,0.56)",
  marginBottom: "8px",
};

const macroValue = {
  fontWeight: "800",
  lineHeight: 1.6,
};

const dayTabs = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const dayTab = {
  padding: "12px 14px",
  borderRadius: "12px",
  fontWeight: "700",
  cursor: "pointer",
};

const featuredDayCard = {
  marginTop: "18px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "20px",
};

const featuredDayTop = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: "16px",
};

const featuredDayTitle = {
  fontSize: "24px",
  fontWeight: "800",
};

const featuredDayMeta = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "10px",
};

const featuredMetaPill = {
  padding: "8px 12px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.1)",
  fontWeight: "800",
};

const mealsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "16px",
};

const mealCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const mealTopRow = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "start",
  marginBottom: "14px",
};

const mealLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.48)",
  marginBottom: "8px",
};

const mealTitle = {
  fontSize: "22px",
  fontWeight: "800",
};

const mealStats = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
};

const mealStatPill = {
  padding: "8px 10px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.1)",
  fontWeight: "700",
};

const mealSection = {
  marginTop: "12px",
};

const miniHeading = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.5)",
  marginBottom: "8px",
};

const ingredientsList = {
  margin: 0,
  paddingLeft: "18px",
  color: "rgba(255,255,255,0.78)",
  lineHeight: 1.8,
};

const mealMethod = {
  color: "rgba(255,255,255,0.74)",
  lineHeight: 1.8,
  margin: 0,
};

const lockedTitle = {
  fontSize: "24px",
  fontWeight: "800",
  marginBottom: "10px",
};

const unlockButton = {
  display: "inline-block",
  marginTop: "14px",
  padding: "14px 18px",
  background: "white",
  color: "black",
  borderRadius: "12px",
  fontWeight: "800",
  textDecoration: "none",
};
