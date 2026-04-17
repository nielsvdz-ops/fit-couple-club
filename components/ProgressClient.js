"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "../lib/supabase/client";

const defaultForm = {
  checkin_date: new Date().toISOString().slice(0, 10),
  weight_kg: "",
  waist_cm: "",
  energy_score: "7",
  mood_score: "7",
  sleep_score: "7",
  training_adherence: "80",
  nutrition_adherence: "80",
  steps_average: "",
  notes: "",
};

export default function ProgressClient() {
  const supabase = createClient();

  const [form, setForm] = useState(defaultForm);
  const [history, setHistory] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function loadHistory() {
    setLoadingHistory(true);
    setMessage("");

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setLoadingHistory(false);
      setMessage("You need to be logged in.");
      return;
    }

    const { data, error } = await supabase
      .from("progress_checkins")
      .select("*")
      .eq("user_id", user.id)
      .order("checkin_date", { ascending: false })
      .limit(12);

    if (error) {
      setMessage(error.message);
      setHistory([]);
    } else {
      setHistory(data || []);
    }

    setLoadingHistory(false);
  }

  useEffect(() => {
    loadHistory();
  }, []);

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setSaving(false);
      setMessage("You need to be logged in.");
      return;
    }

    const payload = {
      user_id: user.id,
      checkin_date: form.checkin_date,
      weight_kg: form.weight_kg ? Number(form.weight_kg) : null,
      waist_cm: form.waist_cm ? Number(form.waist_cm) : null,
      energy_score: Number(form.energy_score),
      mood_score: Number(form.mood_score),
      sleep_score: Number(form.sleep_score),
      training_adherence: Number(form.training_adherence),
      nutrition_adherence: Number(form.nutrition_adherence),
      steps_average: form.steps_average ? Number(form.steps_average) : null,
      notes: form.notes || null,
    };

    const { error } = await supabase.from("progress_checkins").insert(payload);

    if (error) {
      setMessage(error.message);
      setSaving(false);
      return;
    }

    setMessage("Check-in saved.");
    setForm({
      ...defaultForm,
      checkin_date: new Date().toISOString().slice(0, 10),
    });
    await loadHistory();
    setSaving(false);
  }

  const latest = history[0] || null;
  const previous = history[1] || null;

  const trend = useMemo(() => {
    if (!latest || !previous) return null;

    const weightDelta =
      latest.weight_kg != null && previous.weight_kg != null
        ? Number(latest.weight_kg) - Number(previous.weight_kg)
        : null;

    const waistDelta =
      latest.waist_cm != null && previous.waist_cm != null
        ? Number(latest.waist_cm) - Number(previous.waist_cm)
        : null;

    return { weightDelta, waistDelta };
  }, [latest, previous]);

  const averageConsistency = useMemo(() => {
    if (!history.length) return null;
    const values = history.map(
      (item) =>
        (Number(item.training_adherence || 0) +
          Number(item.nutrition_adherence || 0)) /
        2
    );
    const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
    return `${Math.round(avg)}%`;
  }, [history]);

  const latestRecovery = useMemo(() => {
    if (!latest) return null;
    const avg =
      (Number(latest.energy_score || 0) +
        Number(latest.mood_score || 0) +
        Number(latest.sleep_score || 0)) /
      3;
    return `${avg.toFixed(1)}/10`;
  }, [latest]);

  return (
    <div style={wrap}>
      <section style={heroCard}>
        <div style={eyebrow}>Weekly Check-In System</div>
        <h2 style={heroTitle}>Track what is actually changing</h2>
        <p style={heroText}>
          Log weekly check-ins for body measurements, recovery, adherence, and
          notes. Use the history below to see if your momentum is moving in the
          right direction.
        </p>

        <div style={statsGrid}>
          <StatCard
            label="Latest Weight"
            value={latest?.weight_kg ? `${latest.weight_kg} kg` : "—"}
          />
          <StatCard
            label="Latest Waist"
            value={latest?.waist_cm ? `${latest.waist_cm} cm` : "—"}
          />
          <StatCard label="Avg Consistency" value={averageConsistency || "—"} />
          <StatCard label="Recovery Score" value={latestRecovery || "—"} />
        </div>

        {trend && (
          <div style={trendBox}>
            <div style={miniLabel}>Latest trend vs previous check-in</div>
            <div style={trendText}>
              Weight: {formatDelta(trend.weightDelta, "kg")} · Waist:{" "}
              {formatDelta(trend.waistDelta, "cm")}
            </div>
          </div>
        )}
      </section>

      <div style={mainGrid}>
        <section style={panel}>
          <div style={sectionHeader}>
            <div>
              <div style={eyebrow}>New Check-In</div>
              <h3 style={sectionTitle}>Log this week</h3>
            </div>
          </div>

          <form onSubmit={handleSave} style={formGrid}>
            <Field label="Check-In Date">
              <input
                type="date"
                value={form.checkin_date}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, checkin_date: e.target.value }))
                }
                style={input}
              />
            </Field>

            <Field label="Weight (kg)">
              <input
                type="number"
                step="0.1"
                value={form.weight_kg}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, weight_kg: e.target.value }))
                }
                style={input}
                placeholder="Example: 78.4"
              />
            </Field>

            <Field label="Waist (cm)">
              <input
                type="number"
                step="0.1"
                value={form.waist_cm}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, waist_cm: e.target.value }))
                }
                style={input}
                placeholder="Example: 84"
              />
            </Field>

            <Field label="Average Steps">
              <input
                type="number"
                value={form.steps_average}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, steps_average: e.target.value }))
                }
                style={input}
                placeholder="Example: 8500"
              />
            </Field>

            <Field label="Energy Score (1-10)">
              <select
                value={form.energy_score}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, energy_score: e.target.value }))
                }
                style={input}
              >
                {scoreOptions()}
              </select>
            </Field>

            <Field label="Mood Score (1-10)">
              <select
                value={form.mood_score}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, mood_score: e.target.value }))
                }
                style={input}
              >
                {scoreOptions()}
              </select>
            </Field>

            <Field label="Sleep Score (1-10)">
              <select
                value={form.sleep_score}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, sleep_score: e.target.value }))
                }
                style={input}
              >
                {scoreOptions()}
              </select>
            </Field>

            <Field label="Training Adherence %">
              <input
                type="number"
                min="0"
                max="100"
                value={form.training_adherence}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    training_adherence: e.target.value,
                  }))
                }
                style={input}
              />
            </Field>

            <Field label="Nutrition Adherence %">
              <input
                type="number"
                min="0"
                max="100"
                value={form.nutrition_adherence}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    nutrition_adherence: e.target.value,
                  }))
                }
                style={input}
              />
            </Field>

            <div style={{ gridColumn: "1 / -1" }}>
              <Field label="Weekly Notes">
                <textarea
                  value={form.notes}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, notes: e.target.value }))
                  }
                  style={textarea}
                  placeholder="How did the week feel? Hunger, strength, energy, stress, travel, sleep, etc."
                />
              </Field>
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <button type="submit" style={button} disabled={saving}>
                {saving ? "Saving..." : "Save Weekly Check-In"}
              </button>
            </div>

            {message ? (
              <div style={{ gridColumn: "1 / -1", color: "rgba(255,255,255,0.72)" }}>
                {message}
              </div>
            ) : null}
          </form>
        </section>

        <section style={panel}>
          <div style={sectionHeader}>
            <div>
              <div style={eyebrow}>Progress History</div>
              <h3 style={sectionTitle}>Your recent check-ins</h3>
            </div>
          </div>

          {loadingHistory ? (
            <div style={emptyState}>Loading history...</div>
          ) : !history.length ? (
            <div style={emptyState}>
              No check-ins yet. Save your first weekly progress entry.
            </div>
          ) : (
            <div style={{ display: "grid", gap: "14px" }}>
              {history.map((item) => (
                <div key={item.id} style={historyCard}>
                  <div style={historyTop}>
                    <div>
                      <div style={miniLabel}>Check-In Date</div>
                      <div style={historyDate}>{item.checkin_date}</div>
                    </div>
                    <div style={pillRow}>
                      <span style={pill}>
                        Weight: {item.weight_kg ?? "—"} {item.weight_kg != null ? "kg" : ""}
                      </span>
                      <span style={pill}>
                        Waist: {item.waist_cm ?? "—"} {item.waist_cm != null ? "cm" : ""}
                      </span>
                    </div>
                  </div>

                  <div style={metricsGrid}>
                    <Metric label="Energy" value={`${item.energy_score}/10`} />
                    <Metric label="Mood" value={`${item.mood_score}/10`} />
                    <Metric label="Sleep" value={`${item.sleep_score}/10`} />
                    <Metric
                      label="Training"
                      value={`${item.training_adherence}%`}
                    />
                    <Metric
                      label="Nutrition"
                      value={`${item.nutrition_adherence}%`}
                    />
                    <Metric
                      label="Steps"
                      value={item.steps_average ? `${item.steps_average}` : "—"}
                    />
                  </div>

                  {item.notes ? (
                    <div style={noteBlock}>
                      <div style={miniLabel}>Notes</div>
                      <div style={noteText}>{item.notes}</div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function scoreOptions() {
  return Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
    <option key={n} value={n}>
      {n}
    </option>
  ));
}

function Field({ label, children }) {
  return (
    <div style={{ display: "grid", gap: "8px" }}>
      <div style={miniLabel}>{label}</div>
      {children}
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div style={statCard}>
      <div style={miniLabel}>{label}</div>
      <div style={statValue}>{value}</div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div style={metricCard}>
      <div style={miniLabel}>{label}</div>
      <div style={metricValue}>{value}</div>
    </div>
  );
}

function formatDelta(value, suffix) {
  if (value == null || Number.isNaN(value)) return "—";
  if (value === 0) return `0 ${suffix}`;
  const rounded = Math.round(value * 10) / 10;
  return `${rounded > 0 ? "+" : ""}${rounded} ${suffix}`;
}

const wrap = {
  display: "grid",
  gap: "22px",
};

const heroCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "24px",
  padding: "28px",
};

const mainGrid = {
  display: "grid",
  gridTemplateColumns: "minmax(340px, 440px) 1fr",
  gap: "22px",
};

const panel = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "22px",
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
  fontSize: "34px",
  fontWeight: "900",
};

const heroText = {
  marginTop: "12px",
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  maxWidth: "940px",
};

const sectionHeader = {
  marginBottom: "18px",
};

const sectionTitle = {
  margin: 0,
  fontSize: "26px",
  fontWeight: "800",
};

const formGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2,minmax(0,1fr))",
  gap: "14px",
};

const input = {
  width: "100%",
  background: "#111111",
  color: "white",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "12px",
  padding: "12px 14px",
  fontWeight: "700",
};

const textarea = {
  width: "100%",
  minHeight: "120px",
  resize: "vertical",
  background: "#111111",
  color: "white",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "12px",
  padding: "12px 14px",
  fontWeight: "500",
  fontFamily: "inherit",
};

const button = {
  width: "100%",
  padding: "14px 18px",
  background: "white",
  color: "black",
  borderRadius: "12px",
  fontWeight: "800",
  border: "none",
  cursor: "pointer",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: "12px",
  marginTop: "18px",
};

const statCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.05)",
  borderRadius: "14px",
  padding: "14px",
};

const statValue = {
  color: "white",
  fontSize: "24px",
  fontWeight: "800",
};

const trendBox = {
  marginTop: "16px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.05)",
  borderRadius: "14px",
  padding: "14px",
};

const trendText = {
  color: "rgba(255,255,255,0.78)",
  lineHeight: 1.7,
};

const emptyState = {
  minHeight: "220px",
  display: "grid",
  placeItems: "center",
  textAlign: "center",
  color: "rgba(255,255,255,0.68)",
};

const historyCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const historyTop = {
  display: "flex",
  justifyContent: "space-between",
  gap: "14px",
  alignItems: "start",
  flexWrap: "wrap",
  marginBottom: "14px",
};

const historyDate = {
  fontSize: "22px",
  fontWeight: "800",
};

const pillRow = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const pill = {
  padding: "10px 12px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  fontWeight: "700",
};

const metricsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
  gap: "10px",
};

const metricCard = {
  background: "rgba(255,255,255,0.025)",
  border: "1px solid rgba(255,255,255,0.04)",
  borderRadius: "12px",
  padding: "12px",
};

const metricValue = {
  color: "rgba(255,255,255,0.82)",
  fontWeight: "800",
};

const noteBlock = {
  marginTop: "14px",
  background: "rgba(255,255,255,0.025)",
  border: "1px solid rgba(255,255,255,0.04)",
  borderRadius: "12px",
  padding: "12px",
};

const noteText = {
  color: "rgba(255,255,255,0.76)",
  lineHeight: 1.75,
};

const miniLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.5)",
  marginBottom: "8px",
};
