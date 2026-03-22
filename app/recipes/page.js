import DashboardLayout from "../../components/DashboardLayout";
              <option>Lose Fat</option>
              <option>Build Muscle</option>
              <option>Tone & Shape</option>
              <option>Beginner Reset</option>
            </select>
            <select style={filterInput}>
              <option>All Categories</option>
              {categories.map((cat) => <option key={cat}>{cat}</option>)}
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
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "start" }}>
                  <div>
                    <div style={recipeTitle}>{recipe.title}</div>
                    <div style={meta}>{recipe.category}</div>
                  </div>
                  <div style={goalBadge}>{recipe.goal}</div>
                </div>

                <div style={macroRow}>
                  <div style={macroBox}><span style={macroLabel}>Calories</span><span style={macroValue}>{recipe.calories}</span></div>
                  <div style={macroBox}><span style={macroLabel}>Macros</span><span style={macroValue}>{recipe.macros}</span></div>
                  <div style={macroBox}><span style={macroLabel}>Time</span><span style={macroValue}>{recipe.time}</span></div>
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

const sectionCard = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "22px", padding: "24px" };
const filterWrap = { display: "grid", gridTemplateColumns: "minmax(220px,1.3fr) repeat(2,minmax(180px,1fr))", gap: "14px" };
const searchInput = { width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.14)", background: "#111", color: "white" };
const filterInput = { width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.14)", background: "#111", color: "white" };
const chipWrap = { display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "18px" };
const chip = { padding: "10px 14px", borderRadius: "999px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.82)" };
const sectionTop = { display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "center", marginBottom: "18px", flexWrap: "wrap" };
const eyebrow = { fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,0.45)", marginBottom: "8px" };
const sectionTitle = { margin: 0, fontSize: "28px", fontWeight: "800" };
const countBadge = { padding: "10px 14px", borderRadius: "12px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", fontWeight: "700" };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "18px" };
const recipeCard = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "18px", padding: "18px" };
const recipeTitle = { fontSize: "20px", fontWeight: "800", marginBottom: "6px" };
const meta = { color: "rgba(255,255,255,0.62)" };
const goalBadge = { padding: "8px 10px", borderRadius: "12px", fontSize: "12px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" };
const macroRow = { display: "grid", gap: "10px", marginTop: "16px" };
const macroBox = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "14px", padding: "12px" };
const macroLabel = { display: "block", color: "rgba(255,255,255,0.56)", marginBottom: "4px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em" };
const macroValue = { display: "block", fontWeight: "700" };
const recipeActions = { display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "16px" };
const primaryButton = { padding: "12px 14px", borderRadius: "12px", border: "none", background: "white", color: "black", fontWeight: "700", cursor: "pointer" };
const ghostButton = { padding: "12px 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.16)", background: "transparent", color: "white", fontWeight: "700", cursor: "pointer" };
