"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";

const GOALS = [
  "Lose Fat",
  "Build Muscle",
  "Tone & Shape",
  "Booty Builder",
  "Athletic Performance",
];

const DIETS = [
  "Balanced",
  "High Protein",
  "Vegan",
  "Vegetarian",
  "Keto",
];

const FASTING_WINDOWS = [
  "12:12",
  "14:10",
  "16:8",
  "18:6",
  "20:4",
];

const EXPERIENCE = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

const TRAINING = [
  "Gym",
  "Home",
  "Hybrid",
];

const BODY_TYPES = [
  "Slim",
  "Athletic",
  "Average",
  "Curvy",
  "Heavy Set",
];

const ALLERGIES = [
  "Gluten",
  "Lactose",
  "Nuts",
  "Shellfish",
];

export default function OnboardingPage() {
  const supabase = createClient();

  const [loading, setLoading] = useState(false);

  const [goal, setGoal] = useState("");
  const [dietType, setDietType] = useState("");
  const [fastingEnabled, setFastingEnabled] = useState(false);
  const [fastingWindow, setFastingWindow] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [trainingLocation, setTrainingLocation] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [bootyFocus, setBootyFocus] = useState(false);

  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);

  const [allergies, setAllergies] = useState([]);

  function toggleAllergy(value) {
    setAllergies((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  }

  async function handleSave() {
    try {
      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        alert("Not logged in");
        return;
      }

      const { error } = await supabase
        .from("member_preferences")
        .upsert({
          user_id: user.id,
          goal,
          diet_type: dietType,
          fasting_enabled: fastingEnabled,
          fasting_window: fastingWindow,
          training_location: trainingLocation,
          experience_level: experienceLevel,
          body_type: bodyType,
          booty_focus: bootyFocus,
          vegan,
          vegetarian,
          gluten_free: glutenFree,
          lactose_free: lactoseFree,
          allergies,
        });

      if (error) {
        console.error(error);
        alert(error.message);
        return;
      }

      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={main}>
      <div style={overlay} />

      <section style={card}>
        <div style={eyebrow}>
          FIT COUPLE CLUB
        </div>

        <h1 style={title}>
          Build your personalized system.
        </h1>

        <p style={subtitle}>
          Your nutrition, workouts, fasting structure,
          recipes and transformation plans will adapt
          to your goals and lifestyle.
        </p>

        <div style={section}>
          <h3 style={sectionTitle}>Goal</h3>

          <div style={grid}>
            {GOALS.map((item) => (
              <button
                key={item}
                onClick={() => setGoal(item)}
                style={option(
                  goal === item
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div style={section}>
          <h3 style={sectionTitle}>Diet Style</h3>

          <div style={grid}>
            {DIETS.map((item) => (
              <button
                key={item}
                onClick={() => setDietType(item)}
                style={option(
                  dietType === item
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div style={section}>
          <h3 style={sectionTitle}>
            Allergies & Filters
          </h3>

          <div style={grid}>
            {ALLERGIES.map((item) => (
              <button
                key={item}
                onClick={() =>
                  toggleAllergy(item)
                }
                style={option(
                  allergies.includes(item)
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <div style={toggleWrap}>
            <label style={toggle}>
              <input
                type="checkbox"
                checked={vegan}
                onChange={(e) =>
                  setVegan(
                    e.target.checked
                  )
                }
              />
              Vegan
            </label>

            <label style={toggle}>
              <input
                type="checkbox"
                checked={vegetarian}
                onChange={(e) =>
                  setVegetarian(
                    e.target.checked
                  )
                }
              />
              Vegetarian
            </label>

            <label style={toggle}>
              <input
                type="checkbox"
                checked={glutenFree}
                onChange={(e) =>
                  setGlutenFree(
                    e.target.checked
                  )
                }
              />
              Gluten Free
            </label>

            <label style={toggle}>
              <input
                type="checkbox"
                checked={lactoseFree}
                onChange={(e) =>
                  setLactoseFree(
                    e.target.checked
                  )
                }
              />
              Lactose Free
            </label>
          </div>
        </div>

        <div style={section}>
          <h3 style={sectionTitle}>
            Intermittent Fasting
          </h3>

          <label style={toggle}>
            <input
              type="checkbox"
              checked={fastingEnabled}
              onChange={(e) =>
                setFastingEnabled(
                  e.target.checked
                )
              }
            />
            Enable fasting mode
          </label>

          {fastingEnabled && (
            <div style={grid}>
              {FASTING_WINDOWS.map(
                (item) => (
                  <button
                    key={item}
                    onClick={() =>
                      setFastingWindow(
                        item
                      )
                    }
                    style={option(
                      fastingWindow ===
                        item
                    )}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>

        <div style={section}>
          <h3 style={sectionTitle}>
            Training Location
          </h3>

          <div style={grid}>
            {TRAINING.map((item) => (
              <button
                key={item}
                onClick={() =>
                  setTrainingLocation(
                    item
                  )
                }
                style={option(
                  trainingLocation ===
                    item
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div style={section}>
          <h3 style={sectionTitle}>
            Experience
          </h3>

          <div style={grid}>
            {EXPERIENCE.map((item) => (
              <button
                key={item}
                onClick={() =>
                  setExperienceLevel(
                    item
                  )
                }
                style={option(
                  experienceLevel ===
                    item
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div style={section}>
          <h3 style={sectionTitle}>
            Body Type
          </h3>

          <div style={grid}>
            {BODY_TYPES.map((item) => (
              <button
                key={item}
                onClick={() =>
                  setBodyType(item)
                }
                style={option(
                  bodyType === item
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div style={section}>
          <label style={toggle}>
            <input
              type="checkbox"
              checked={bootyFocus}
              onChange={(e) =>
                setBootyFocus(
                  e.target.checked
                )
              }
            />
            Enable Booty Builder Focus
          </label>
        </div>

        <button
          onClick={handleSave}
          disabled={loading}
          style={saveBtn}
        >
          {loading
            ? "Saving..."
            : "Enter The Club"}
        </button>
      </section>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background:
    "url('/images/background.png') center/cover no-repeat",
  padding: "40px 20px",
  position: "relative",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background:
    "rgba(0,0,0,0.82)",
};

const card = {
  position: "relative",
  zIndex: 2,
  maxWidth: "950px",
  margin: "0 auto",
  background:
    "rgba(10,10,10,0.92)",
  border:
    "1px solid rgba(255,0,0,0.18)",
  borderRadius: "30px",
  padding: "40px",
  color: "white",
  backdropFilter: "blur(14px)",
};

const eyebrow = {
  color: "#ff2b2b",
  fontWeight: "900",
  letterSpacing: "0.2em",
  marginBottom: "14px",
};

const title = {
  fontSize: "clamp(42px,7vw,74px)",
  lineHeight: 0.95,
  marginBottom: "18px",
  fontWeight: "900",
};

const subtitle = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.7,
  marginBottom: "40px",
  maxWidth: "760px",
};

const section = {
  marginBottom: "34px",
};

const sectionTitle = {
  marginBottom: "14px",
  fontSize: "22px",
  fontWeight: "900",
};

const grid = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
};

const option = (active) => ({
  padding: "14px 18px",
  borderRadius: "14px",
  border: active
    ? "1px solid #ff2b2b"
    : "1px solid rgba(255,255,255,0.08)",
  background: active
    ? "rgba(255,0,0,0.16)"
    : "rgba(255,255,255,0.04)",
  color: "white",
  fontWeight: "800",
  cursor: "pointer",
});

const toggleWrap = {
  display: "flex",
  flexWrap: "wrap",
  gap: "18px",
  marginTop: "20px",
};

const toggle = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  fontWeight: "700",
};

const saveBtn = {
  width: "100%",
  padding: "18px",
  borderRadius: "18px",
  border: "none",
  background:
    "linear-gradient(90deg,#ff0000,#ff4d4d)",
  color: "white",
  fontWeight: "900",
  fontSize: "18px",
  cursor: "pointer",
};