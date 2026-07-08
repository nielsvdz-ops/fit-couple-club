"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../lib/supabase/client";

const GOALS = ["Lose Fat", "Build Muscle", "Tone & Shape", "Booty Builder", "Athletic Performance"];
const DIETS = ["Balanced", "High Protein", "Vegan", "Vegetarian", "Keto"];
const FASTING_WINDOWS = ["12:12", "14:10", "16:8", "18:6", "20:4"];
const EXPERIENCE = ["Beginner", "Intermediate", "Advanced"];
const TRAINING = ["Gym", "Home", "Hybrid"];
const BODY_TYPES = ["Slim", "Athletic", "Average", "Curvy", "Heavy Set"];
const ALLERGIES = ["Gluten", "Lactose", "Nuts", "Shellfish"];

export default function PreferencesPage() {
  const supabase = createClient();

  const [loading, setLoading] = useState(false);
  const [loadingPrefs, setLoadingPrefs] = useState(true);
  const [message, setMessage] = useState("");

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

  useEffect(() => {
    async function loadPreferences() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          window.location.href = "/login";
          return;
        }

        const { data, error } = await supabase
          .from("member_preferences")
          .select("*")
          .eq("user_id", user.id)
          .maybeSingle();

        if (error) {
          console.error("LOAD PREFERENCES ERROR:", error);
          setMessage(error.message);
          return;
        }

        if (data) {
          setGoal(data.goal || "");
          setDietType(data.diet_type || "");
          setFastingEnabled(Boolean(data.fasting_enabled));
          setFastingWindow(data.fasting_window || "");
          setTrainingLocation(data.training_location || "");
          setExperienceLevel(data.experience_level || "");
          setBodyType(data.body_type || "");
          setBootyFocus(Boolean(data.booty_focus));
          setVegan(Boolean(data.vegan));
          setVegetarian(Boolean(data.vegetarian));
          setGlutenFree(Boolean(data.gluten_free));
          setLactoseFree(Boolean(data.lactose_free));
          setAllergies(Array.isArray(data.allergies) ? data.allergies : []);
        }
      } catch (error) {
        console.error("LOAD PREFERENCES ERROR:", error);
        setMessage("Something went wrong while loading your preferences.");
      } finally {
        setLoadingPrefs(false);
      }
    }

    loadPreferences();
  }, [supabase]);

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
      setMessage("");

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/login";
        return;
      }

      const { error } = await supabase.from("member_preferences").upsert(
        {
          user_id: user.id,
          goal,
          diet_type: dietType,
          fasting_enabled: fastingEnabled,
          fasting_window: fastingEnabled ? fastingWindow : "",
          training_location: trainingLocation,
          experience_level: experienceLevel,
          body_type: bodyType,
          booty_focus: bootyFocus,
          vegan,
          vegetarian,
          gluten_free: glutenFree,
          lactose_free: lactoseFree,
          allergies,
        },
        { onConflict: "user_id" }
      );

      if (error) {
        console.error("SAVE PREFERENCES ERROR:", error);
        setMessage(error.message);
        return;
      }

      setMessage("Preferences saved successfully.");

      setTimeout(() => {
        window.location.href = "/account";
      }, 900);
    } catch (error) {
      console.error("SAVE PREFERENCES ERROR:", error);
      setMessage("Something went wrong while saving your preferences.");
    } finally {
      setLoading(false);
    }
  }

  if (loadingPrefs) {
    return (
      <main style={main}>
        <div style={overlay} />
        <section style={card}>
          <div style={eyebrow}>FITCOUPLECLUB</div>
          <h1 style={title}>Loading preferences...</h1>
        </section>
      </main>
    );
  }

  return (
    <main style={main}>
      <div style={overlay} />

      <section style={card}>
        <div style={topRow}>
          <div>
            <div style={eyebrow}>FITCOUPLECLUB SETUP</div>
            <h1 style={title}>Edit your preferences.</h1>
            <p style={subtitle}>
              Update your goal, diet style, allergies, fasting window, training
              setup and Booty Builder focus anytime.
            </p>
          </div>

          <a href="/account" style={backButton}>
            Back
          </a>
        </div>

        <PreferenceSection title="Goal">
          <OptionGrid
            items={GOALS}
            active={goal}
            onSelect={setGoal}
          />
        </PreferenceSection>

        <PreferenceSection title="Diet Style">
          <OptionGrid
            items={DIETS}
            active={dietType}
            onSelect={setDietType}
          />
        </PreferenceSection>

        <PreferenceSection title="Allergies & Filters">
          <OptionGrid
            items={ALLERGIES}
            activeArray={allergies}
            onToggle={toggleAllergy}
          />

          <div style={toggleWrap}>
            <Toggle label="Vegan" checked={vegan} onChange={setVegan} />
            <Toggle label="Vegetarian" checked={vegetarian} onChange={setVegetarian} />
            <Toggle label="Gluten Free" checked={glutenFree} onChange={setGlutenFree} />
            <Toggle label="Lactose Free" checked={lactoseFree} onChange={setLactoseFree} />
          </div>
        </PreferenceSection>

        <PreferenceSection title="Intermittent Fasting">
          <Toggle
            label="Enable fasting mode"
            checked={fastingEnabled}
            onChange={setFastingEnabled}
          />

          {fastingEnabled && (
            <div style={{ marginTop: "18px" }}>
              <OptionGrid
                items={FASTING_WINDOWS}
                active={fastingWindow}
                onSelect={setFastingWindow}
              />
            </div>
          )}
        </PreferenceSection>

        <PreferenceSection title="Training Location">
          <OptionGrid
            items={TRAINING}
            active={trainingLocation}
            onSelect={setTrainingLocation}
          />
        </PreferenceSection>

        <PreferenceSection title="Experience Level">
          <OptionGrid
            items={EXPERIENCE}
            active={experienceLevel}
            onSelect={setExperienceLevel}
          />
        </PreferenceSection>

        <PreferenceSection title="Body Type">
          <OptionGrid
            items={BODY_TYPES}
            active={bodyType}
            onSelect={setBodyType}
          />
        </PreferenceSection>

        <PreferenceSection title="Booty Builder">
          <Toggle
            label="Enable Booty Builder focus"
            checked={bootyFocus}
            onChange={setBootyFocus}
          />
        </PreferenceSection>

        {message && <p style={messageStyle}>{message}</p>}

        <button onClick={handleSave} disabled={loading} style={saveBtn}>
          {loading ? "Saving..." : "Save Preferences"}
        </button>
      </section>
    </main>
  );
}

function PreferenceSection({ title, children }) {
  return (
    <div style={section}>
      <h3 style={sectionTitle}>{title}</h3>
      {children}
    </div>
  );
}

function OptionGrid({ items, active, activeArray, onSelect, onToggle }) {
  return (
    <div style={grid}>
      {items.map((item) => {
        const selected = activeArray
          ? activeArray.includes(item)
          : active === item;

        return (
          <button
            key={item}
            type="button"
            onClick={() => {
              if (onToggle) onToggle(item);
              if (onSelect) onSelect(item);
            }}
            style={option(selected)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

function Toggle({ label, checked, onChange }) {
  return (
    <label style={toggle}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  );
}

const main = {
  minHeight: "100vh",
  background: "url('/images/background.webp') center/cover no-repeat",
  padding: "40px 20px",
  position: "relative",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(0,0,0,0.95), rgba(0,0,0,0.82), rgba(90,0,0,0.38))",
};

const card = {
  position: "relative",
  zIndex: 2,
  maxWidth: "980px",
  margin: "0 auto",
  background: "rgba(5,5,5,0.9)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderTop: "3px solid #b00000",
  padding: "clamp(24px, 5vw, 42px)",
  color: "white",
  backdropFilter: "blur(14px)",
};

const topRow = {
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  flexWrap: "wrap",
};

const eyebrow = {
  color: "#ef4444",
  fontWeight: "950",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  marginBottom: "14px",
};

const title = {
  fontSize: "clamp(42px,7vw,74px)",
  lineHeight: 0.92,
  margin: 0,
  fontWeight: "950",
  textTransform: "uppercase",
  letterSpacing: "-0.055em",
};

const subtitle = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.75,
  marginBottom: "40px",
  maxWidth: "760px",
};

const backButton = {
  height: "fit-content",
  color: "white",
  textDecoration: "none",
  padding: "13px 18px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.04)",
  fontWeight: "950",
  textTransform: "uppercase",
};

const section = {
  marginBottom: "34px",
  paddingTop: "24px",
  borderTop: "1px solid rgba(255,255,255,0.08)",
};

const sectionTitle = {
  margin: "0 0 14px",
  fontSize: "22px",
  fontWeight: "950",
  textTransform: "uppercase",
  letterSpacing: "-0.02em",
};

const grid = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
};

const option = (active) => ({
  padding: "14px 18px",
  border: active
    ? "1px solid rgba(239,68,68,0.75)"
    : "1px solid rgba(255,255,255,0.10)",
  background: active ? "rgba(176,0,0,0.28)" : "rgba(255,255,255,0.04)",
  color: "white",
  fontWeight: "900",
  cursor: "pointer",
  textTransform: "uppercase",
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
  fontWeight: "850",
  color: "rgba(255,255,255,0.86)",
};

const saveBtn = {
  width: "100%",
  padding: "18px",
  border: "none",
  background: "#b00000",
  color: "white",
  fontWeight: "950",
  fontSize: "17px",
  cursor: "pointer",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  boxShadow: "0 18px 45px rgba(176,0,0,0.35)",
};

const messageStyle = {
  color: "rgba(255,255,255,0.78)",
  lineHeight: 1.6,
  margin: "0 0 18px",
};