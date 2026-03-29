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
const unlockButton = { display: "inline-block", padding: "14px 18px", background: "white", color: "black", borderRadius: "12px", fontWeight: "800", textDecoration: "none" };
