export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessStarterPages } from "../../lib/access";

const allRecipes = [
  "High Protein Yogurt Bowl", "Berry Oat Power Bowl", "Egg White Veggie Wrap", "Chicken Power Bowl", "Steak Rice Bowl",
  "Tuna Crunch Wrap", "Salmon Sweet Potato Bowl", "Turkey Meatball Bowl", "Creamy Protein Pasta", "Protein Smoothie",
  "Greek Yogurt Dessert Cup", "Date Night Steak Plate", "Healthy Sushi Bowl for Two", "3-Day Chicken Rice Prep", "Lean Beef Prep Boxes",
  "Avocado Egg Toast", "Protein Pancakes", "Greek Yogurt Parfait", "Chicken Caesar Wrap", "Mediterranean Chicken Plate",
  "Lean Burger Plate", "Shrimp Rice Bowl", "Protein Coffee Shake", "Frozen Yogurt Bark", "High Protein Brownie Bowl",
  "Healthy Taco Bowl", "Salmon Dinner for Two", "Protein Pasta for Two", "Wrap Filling Prep Mix", "Simple Smoothie Packs",
];

export default async function RecipesPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessStarterPages(profile)) redirect("/pricing");

  const membership = profile?.membership_type?.toLowerCase();
  const visible = membership === "starter" ? allRecipes.slice(0, 15) : allRecipes;

  return (
    <DashboardLayout
      title="Recipes"
      subtitle="Recipe access based on your membership. Starter gets a strong starter library, Premium and VIP get full access."
      membershipType={profile?.membership_type}
    >
      <div style={{ display: "grid", gap: "18px" }}>
        <div style={grid}>
          {visible.map((recipe) => (
            <div key={recipe} style={card}>
              <div style={cardTitle}>{recipe}</div>
              <div style={cardText}>Goal-friendly, protein-focused, and easy to work into your routine.</div>
            </div>
          ))}
        </div>

        {membership === "starter" && (
          <div style={lockedBox}>
            <div style={lockedTitle}>Starter recipe library</div>
            <p style={lockedText}>Starter includes a useful recipe base. Premium and VIP unlock the full recipe library and deeper recipe integration.</p>
            <a href="/pricing" style={unlockButton}>Unlock Full Recipe Library</a>
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
const lockedBox = { background: "rgba(255,255,255,0.03)", border: "1px dashed rgba(255,255,255,0.2)", borderRadius: "18px", padding: "22px", textAlign: "center" };
const lockedTitle = { fontSize: "24px", fontWeight: "800", marginBottom: "8px" };
const lockedText = { color: "rgba(255,255,255,0.68)", lineHeight: 1.8, marginBottom: "14px" };
const unlockButton = { display: "inline-block", padding: "14px 18px", background: "white", color: "black", borderRadius: "12px", fontWeight: "800", textDecoration: "none" };import { redirect } from "next/navigation";
import { getUserAndSubscription } from "../../lib/getUser";
import DashboardLayout from "../../components/DashboardLayout";

const categories = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snacks",
  "Desserts",
  "Couple Meals",
  "Meal Prep",
];

const recipes = [
  { title: "High Protein Yogurt Bowl", category: "Breakfast", goal: "Fat Loss / Tone", calories: "390 kcal", macros: "34P / 38C / 10F", time: "5 min" },
  { title: "Berry Oat Power Bowl", category: "Breakfast", goal: "Build Muscle", calories: "520 kcal", macros: "32P / 62C / 14F", time: "8 min" },
  { title: "Egg White Veggie Wrap", category: "Breakfast", goal: "Fat Loss", calories: "340 kcal", macros: "29P / 24C / 10F", time: "10 min" },
  { title: "Chicken Power Bowl", category: "Lunch", goal: "Build Muscle", calories: "610 kcal", macros: "48P / 58C / 18F", time: "15 min" },
  { title: "Steak Rice Bowl", category: "Lunch", goal: "Build Muscle", calories: "670 kcal", macros: "45P / 66C / 20F", time: "18 min" },
  { title: "Tuna Crunch Wrap", category: "Lunch", goal: "Fat Loss / Reset", calories: "430 kcal", macros: "36P / 30C / 14F", time: "10 min" },
  { title: "Salmon Sweet Potato Bowl", category: "Dinner", goal: "Lifestyle / Tone", calories: "590 kcal", macros: "41P / 46C / 22F", time: "20 min" },
  { title: "Turkey Meatball Bowl", category: "Dinner", goal: "Fat Loss / Muscle", calories: "530 kcal", macros: "44P / 45C / 16F", time: "22 min" },
  { title: "Creamy Protein Pasta", category: "Dinner", goal: "Build Muscle", calories: "710 kcal", macros: "46P / 72C / 22F", time: "20 min" },
  { title: "Protein Smoothie", category: "Snacks", goal: "All Goals", calories: "280 kcal", macros: "30P / 22C / 6F", time: "5 min" },
  { title: "Greek Yogurt Dessert Cup", category: "Desserts", goal: "Fat Loss / Tone", calories: "220 kcal", macros: "20P / 18C / 6F", time: "5 min" },
  { title: "Date Night Steak Plate", category: "Couple Meals", goal: "Lifestyle / Muscle", calories: "690 kcal", macros: "48P / 40C / 28F", time: "25 min" },
  { title: "Healthy Sushi Bowl for Two", category: "Couple Meals", goal: "Lifestyle / Tone", calories: "540 kcal", macros: "34P / 52C / 14F", time: "20 min" },
  { title: "3-Day Chicken Rice Prep", category: "Meal Prep", goal: "Reset / Fat Loss", calories: "510 kcal", macros: "44P / 48C / 14F", time: "30 min" },
  { title: "Lean Beef Prep Boxes", category: "Meal Prep", goal: "Build Muscle", calories: "620 kcal", macros: "46P / 56C / 19F", time: "35 min" },
];

export default async function RecipesPage() {
  const { user, subscription } = await getUserAndSubscription();

  if (!user) {
    redirect("/login");
  }

  if (!subscription || subscription.status !== "active") {
    redirect("/pricing");
  }

  return (
    <DashboardLayout
      title="Recipe Library"
      subtitle="A paid recipe library should feel rich and practical. Organize recipes by goal, meal type, and effort so members can actually use them every week."
    >
      <div style={{ display: "grid", gap: "22px" }}>
        <section style={sectionCard}>
          <div style={filterWrap}>
            <input placeholder="Search recipes..." style={searchInput} />
            <select style={filterInput}>
              <option>All Goals</option>
              <option>Lose Fat</option>
              <option>Build Muscle</option>
              <option>Tone & Shape</option>
              <option>Beginner Reset</option>
            </select>
            <select style={filterInput}>
              <option>All Categories</option>
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div style={chipWrap}>
            {categories.map((cat) => (
              <div key={cat} style={chip}>{cat}</div>
            ))}
          </div>
        </section>

        <section style={sectionCard}>
          <div style={sectionTop}>
            <div>
              <div style={eyebrow}>Library</div>
              <h2 style={sectionTitle}>Featured recipes</h2>
            </div>
            <div style={countBadge}>70+ recipe structure planned</div>
          </div>

          <div style={grid}>
            {recipes.map((recipe) => (
              <div key={recipe.title} style={recipeCard}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    alignItems: "start",
                  }}
                >
                  <div>
                    <div style={recipeTitle}>{recipe.title}</div>
                    <div style={meta}>{recipe.category}</div>
                  </div>
                  <div style={goalBadge}>{recipe.goal}</div>
                </div>

                <div style={macroRow}>
                  <div style={macroBox}>
                    <span style={macroLabel}>Calories</span>
                    <span style={macroValue}>{recipe.calories}</span>
                  </div>
                  <div style={macroBox}>
                    <span style={macroLabel}>Macros</span>
                    <span style={macroValue}>{recipe.macros}</span>
                  </div>
                  <div style={macroBox}>
                    <span style={macroLabel}>Time</span>
                    <span style={macroValue}>{recipe.time}</span>
                  </div>
                </div>

                <div style={recipeActions}>
                  <button style={primaryButton}>View Recipe</button>
                  <button style={ghostButton}>Add to Meal Plan</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

const sectionCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "24px",
};

const filterWrap = {
  display: "grid",
  gridTemplateColumns: "minmax(220px,1.3fr) repeat(2,minmax(180px,1fr))",
  gap: "14px",
};

const searchInput = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "#111",
  color: "white",
};

const filterInput = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "#111",
  color: "white",
};

const chipWrap = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "18px",
};

const chip = {
  padding: "10px 14px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "rgba(255,255,255,0.82)",
};

const sectionTop = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "center",
  marginBottom: "18px",
  flexWrap: "wrap",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const sectionTitle = {
  margin: 0,
  fontSize: "28px",
  fontWeight: "800",
};

const countBadge = {
  padding: "10px 14px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  fontWeight: "700",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "18px",
};

const recipeCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const recipeTitle = {
  fontSize: "20px",
  fontWeight: "800",
  marginBottom: "6px",
};

const meta = {
  color: "rgba(255,255,255,0.62)",
};

const goalBadge = {
  padding: "8px 10px",
  borderRadius: "12px",
  fontSize: "12px",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.08)",
};

const macroRow = {
  display: "grid",
  gap: "10px",
  marginTop: "16px",
};

const macroBox = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.05)",
  borderRadius: "14px",
  padding: "12px",
};

const macroLabel = {
  display: "block",
  color: "rgba(255,255,255,0.56)",
  marginBottom: "4px",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

const macroValue = {
  display: "block",
  fontWeight: "700",
};

const recipeActions = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "16px",
};

const primaryButton = {
  padding: "12px 14px",
  borderRadius: "12px",
  border: "none",
  background: "white",
  color: "black",
  fontWeight: "700",
  cursor: "pointer",
};

const ghostButton = {
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.16)",
  background: "transparent",
  color: "white",
  fontWeight: "700",
  cursor: "pointer",
};
