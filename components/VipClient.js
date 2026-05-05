"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../lib/useLanguage";

export default function VipClient({ membershipType }) {
  const { language } = useLanguage();

  const copy = {
    en: {
      eyebrow: "VIP Call System",
      weekly: "Request your weekly coaching call",
      monthly: "Request your monthly VIP call",
      date: "Preferred date",
      time: "Preferred time",
      notes: "Focus, struggles, goals, questions...",
      saving: "Saving...",
      update: "Update Request",
      request: "Request Call",
      saved: "Saved ✅",
      failed: "Failed",
      loadingFailed: "Failed to load",
      locked: "This request is completed and cannot be changed.",
      current: "Current Request",
      noDate: "Not set",
      noTime: "Not set",
      benefits: "What this call is for",
      benefit1: "Review your progress and consistency",
      benefit2: "Fix weak points before they become problems",
      benefit3: "Adjust your plan based on real feedback",
      status: "Status",
      dateLabel: "Date",
      timeLabel: "Time",
      notesLabel: "Notes",
    },
    nl: {
      eyebrow: "VIP Call Systeem",
      weekly: "Vraag je wekelijkse coaching call aan",
      monthly: "Vraag je maandelijkse VIP call aan",
      date: "Gewenste datum",
      time: "Gewenste tijd",
      notes: "Focus, struggles, doelen, vragen...",
      saving: "Opslaan...",
      update: "Aanvraag bijwerken",
      request: "Call aanvragen",
      saved: "Opgeslagen ✅",
      failed: "Mislukt",
      loadingFailed: "Laden mislukt",
      locked: "Deze aanvraag is afgerond en kan niet meer worden aangepast.",
      current: "Huidige Aanvraag",
      noDate: "Niet ingesteld",
      noTime: "Niet ingesteld",
      benefits: "Waar deze call voor is",
      benefit1: "Je progressie en consistentie bekijken",
      benefit2: "Zwakke punten oplossen voordat ze problemen worden",
      benefit3: "Je plan aanpassen op basis van echte feedback",
      status: "Status",
      dateLabel: "Datum",
      timeLabel: "Tijd",
      notesLabel: "Notities",
    },
  }[language];

  const membership = String(membershipType || "").toLowerCase().trim();
  const isCoaching = membership === "coaching";

  const [request, setRequest] = useState(null);
  const [canEdit, setCanEdit] = useState(true);
  const [limitText, setLimitText] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);

  async function load() {
    try {
      setLoadingInitial(true);

      const res = await fetch("/api/call-request", {
        cache: "no-store",
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setMessage(data.error || copy.loadingFailed);
        return;
      }

      setRequest(data.request || null);
      setCanEdit(Boolean(data.canEdit));
      setLimitText(data.limitText || "");

      if (data.request) {
        setDate(data.request.preferred_date || "");
        setTime(data.request.preferred_time || "");
        setNotes(data.request.notes || "");
      }
    } catch (error) {
      console.error("LOAD CALL REQUEST ERROR:", error);
      setMessage(copy.loadingFailed);
    } finally {
      setLoadingInitial(false);
    }
  }

  async function submit() {
    if (loading || !canEdit) return;

    setLoading(true);
    setMessage(copy.saving);

    try {
      const res = await fetch("/api/call-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          preferredDate: date,
          preferredTime: time,
          notes,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setMessage(data.error || copy.failed);
        return;
      }

      setMessage(copy.saved);
      await load();
    } catch (error) {
      console.error("SAVE CALL REQUEST ERROR:", error);
      setMessage(copy.failed);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <div style={wrap}>
      <section style={heroCard}>
        <div>
          <div style={eyebrow}>{copy.eyebrow}</div>
          <h2 style={title}>{isCoaching ? copy.weekly : copy.monthly}</h2>
          <p style={text}>{limitText}</p>
        </div>

        <div style={pill}>
          {isCoaching ? "1x / week" : "1x / month"}
        </div>
      </section>

      <section style={grid}>
        <div style={card}>
          {!canEdit && <div style={lockedBox}>{copy.locked}</div>}

          <div style={formGrid}>
            <label style={label}>
              {copy.date}
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={input}
                disabled={!canEdit}
              />
            </label>

            <label style={label}>
              {copy.time}
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={input}
                disabled={!canEdit}
              />
            </label>

            <label style={{ ...label, gridColumn: "1 / -1" }}>
              {copy.notesLabel}
              <textarea
                placeholder={copy.notes}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={textarea}
                disabled={!canEdit}
              />
            </label>

            <button
              type="button"
              onClick={submit}
              style={canEdit ? button : disabledButton}
              disabled={loading || !canEdit || loadingInitial}
            >
              {loading
                ? copy.saving
                : request
                ? copy.update
                : copy.request}
            </button>

            {message && <div style={info}>{message}</div>}
          </div>
        </div>

        <div style={card}>
          <div style={cardTitle}>{copy.benefits}</div>

          <div style={benefitList}>
            <div style={benefitItem}>✔ {copy.benefit1}</div>
            <div style={benefitItem}>✔ {copy.benefit2}</div>
            <div style={benefitItem}>✔ {copy.benefit3}</div>
          </div>
        </div>
      </section>

      {request && (
        <section style={card}>
          <div style={cardTitle}>{copy.current}</div>

          <div style={requestCard}>
            <div style={status(request.status)}>{request.status}</div>

            <div style={requestGrid}>
              <div style={textSmall}>
                <strong>{copy.dateLabel}:</strong>{" "}
                {request.preferred_date || copy.noDate}
              </div>

              <div style={textSmall}>
                <strong>{copy.timeLabel}:</strong>{" "}
                {request.preferred_time || copy.noTime}
              </div>

              <div style={{ ...textSmall, gridColumn: "1 / -1" }}>
                <strong>{copy.notesLabel}:</strong>{" "}
                {request.notes || "-"}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

const wrap = {
  display: "grid",
  gap: "22px",
};

const heroCard = {
  background:
    "linear-gradient(135deg, rgba(96,165,250,0.12), rgba(255,255,255,0.04))",
  border: "1px solid rgba(96,165,250,0.24)",
  borderRadius: "24px",
  padding: "22px",
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  flexWrap: "wrap",
  alignItems: "flex-start",
};

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "22px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "18px",
};

const formGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: "14px",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const title = {
  fontSize: "clamp(26px, 6vw, 36px)",
  fontWeight: "900",
  margin: 0,
  lineHeight: 1.1,
};

const cardTitle = {
  fontSize: "22px",
  fontWeight: "900",
  marginBottom: "14px",
};

const text = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.7,
  marginBottom: 0,
};

const textSmall = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.7,
};

const label = {
  display: "grid",
  gap: "8px",
  color: "rgba(255,255,255,0.78)",
  fontWeight: "800",
  fontSize: "14px",
};

const input = {
  width: "100%",
  boxSizing: "border-box",
  padding: "13px 14px",
  borderRadius: "12px",
  background: "#111",
  color: "white",
  border: "1px solid rgba(255,255,255,0.12)",
  fontSize: "16px",
};

const textarea = {
  width: "100%",
  boxSizing: "border-box",
  minHeight: "120px",
  padding: "13px 14px",
  borderRadius: "12px",
  background: "#111",
  color: "white",
  border: "1px solid rgba(255,255,255,0.12)",
  resize: "vertical",
  fontSize: "16px",
};

const button = {
  gridColumn: "1 / -1",
  padding: "14px",
  borderRadius: "12px",
  background: "white",
  color: "black",
  fontWeight: "900",
  cursor: "pointer",
  border: "none",
};

const disabledButton = {
  ...button,
  background: "rgba(255,255,255,0.12)",
  color: "rgba(255,255,255,0.45)",
  cursor: "not-allowed",
};

const info = {
  gridColumn: "1 / -1",
  color: "rgba(255,255,255,0.75)",
  fontWeight: "800",
};

const requestCard = {
  padding: "14px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",
};

const requestGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: "10px",
  marginTop: "10px",
};

const lockedBox = {
  padding: "12px",
  borderRadius: "12px",
  background: "rgba(239,68,68,0.16)",
  border: "1px solid rgba(239,68,68,0.38)",
  color: "white",
  marginBottom: "14px",
  fontWeight: "800",
};

const pill = {
  padding: "8px 12px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "white",
  fontWeight: "900",
};

const benefitList = {
  display: "grid",
  gap: "12px",
};

const benefitItem = {
  padding: "12px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.04)",
  color: "rgba(255,255,255,0.78)",
  lineHeight: 1.5,
  fontWeight: "800",
};

const status = (s) => ({
  display: "inline-block",
  padding: "6px 10px",
  borderRadius: "999px",
  fontWeight: "900",
  color:
    s === "pending"
      ? "#facc15"
      : s === "approved"
      ? "#22c55e"
      : s === "scheduled"
      ? "#60a5fa"
      : s === "completed"
      ? "#c084fc"
      : "white",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  textTransform: "capitalize",
});