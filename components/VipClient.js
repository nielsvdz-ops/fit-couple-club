"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../lib/useLanguage";
import CheckoutButton from "./CheckoutButton";

export default function VipClient() {
  const { language } = useLanguage();

  const copy = {
    en: {
      eyebrow: "Coaching System",
      title: "Book your coaching call",
      subtitle:
        "Buy a 1-on-1 coaching call and schedule your preferred date and time.",
      buyCall: "Buy Coaching Call (€60)",
      alreadyPurchased: "You already have an unused coaching call.",
      date: "Preferred date",
      time: "Preferred time",
      notes: "Goals, struggles, questions...",
      saving: "Saving...",
      update: "Update Request",
      request: "Schedule Call",
      saved: "Saved ✅",
      failed: "Failed",
      loadingFailed: "Failed to load",
      locked: "This request is completed and cannot be changed.",
      current: "Current Coaching Call",
      noDate: "Not set",
      noTime: "Not set",
      benefits: "What this coaching call helps with",
      benefit1: "Review your nutrition and training",
      benefit2: "Fix weak points and plateaus",
      benefit3: "Get direct guidance and accountability",
      status: "Status",
      dateLabel: "Date",
      timeLabel: "Time",
      notesLabel: "Notes",
      noCall:
        "You do not have an active coaching call yet.",
    },

    nl: {
      eyebrow: "Coaching Systeem",
      title: "Boek jouw coaching call",
      subtitle:
        "Koop een 1-op-1 coaching call en plan jouw gewenste datum en tijd.",
      buyCall: "Koop Coaching Call (€60)",
      alreadyPurchased:
        "Je hebt al een ongebruikte coaching call.",
      date: "Gewenste datum",
      time: "Gewenste tijd",
      notes: "Doelen, struggles, vragen...",
      saving: "Opslaan...",
      update: "Aanvraag bijwerken",
      request: "Call plannen",
      saved: "Opgeslagen ✅",
      failed: "Mislukt",
      loadingFailed: "Laden mislukt",
      locked:
        "Deze aanvraag is afgerond en kan niet meer worden aangepast.",
      current: "Huidige Coaching Call",
      noDate: "Niet ingesteld",
      noTime: "Niet ingesteld",
      benefits:
        "Waar deze coaching call mee helpt",
      benefit1:
        "Je voeding en training analyseren",
      benefit2:
        "Zwakke punten en plateaus oplossen",
      benefit3:
        "Directe begeleiding en accountability",
      status: "Status",
      dateLabel: "Datum",
      timeLabel: "Tijd",
      notesLabel: "Notities",
      noCall:
        "Je hebt nog geen actieve coaching call.",
    },
  }[language];

  const [request, setRequest] = useState(null);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingInitial, setLoadingInitial] =
    useState(true);

  async function load() {
    try {
      setLoadingInitial(true);

      const res = await fetch(
        "/api/call-request",
        {
          cache: "no-store",
        }
      );

      const data = await res
        .json()
        .catch(() => ({}));

      if (!res.ok) {
        setMessage(
          data.error || copy.loadingFailed
        );
        return;
      }

      setRequest(data.request || null);

      if (data.request) {
        setDate(
          data.request.preferred_date || ""
        );

        setTime(
          data.request.preferred_time || ""
        );

        setNotes(data.request.notes || "");
      }
    } catch (error) {
      console.error(
        "LOAD COACHING REQUEST ERROR:",
        error
      );

      setMessage(copy.loadingFailed);
    } finally {
      setLoadingInitial(false);
    }
  }

  async function submit() {
    if (loading || !request) return;

    setLoading(true);
    setMessage(copy.saving);

    try {
      const res = await fetch(
        "/api/call-request",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            preferredDate: date,
            preferredTime: time,
            notes,
          }),
        }
      );

      const data = await res
        .json()
        .catch(() => ({}));

      if (!res.ok) {
        setMessage(
          data.error || copy.failed
        );

        return;
      }

      setMessage(copy.saved);

      await load();
    } catch (error) {
      console.error(
        "SAVE COACHING REQUEST ERROR:",
        error
      );

      setMessage(copy.failed);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={wrap}>
      <section style={heroCard}>
        <div>
          <div style={eyebrow}>
            {copy.eyebrow}
          </div>

          <h2 style={title}>
            {copy.title}
          </h2>

          <p style={text}>
            {copy.subtitle}
          </p>
        </div>

        <div style={pill}>
          €60 / call
        </div>
      </section>

      {!request && !loadingInitial && (
        <section style={buyCard}>
          <div>
            <div style={cardTitle}>
              {copy.noCall}
            </div>

            <p style={text}>
              Purchase a coaching call to unlock
              scheduling access.
            </p>
          </div>

          <div style={buyButtonWrap}>
            <CheckoutButton
              plan="coaching_call"
              label={copy.buyCall}
              variant="yellow"
            />
          </div>
        </section>
      )}

      {request && (
        <>
          <section style={grid}>
            <div style={card}>
              <div style={formGrid}>
                <label style={label}>
                  {copy.date}

                  <input
                    type="date"
                    value={date}
                    onChange={(e) =>
                      setDate(e.target.value)
                    }
                    style={input}
                  />
                </label>

                <label style={label}>
                  {copy.time}

                  <input
                    type="time"
                    value={time}
                    onChange={(e) =>
                      setTime(e.target.value)
                    }
                    style={input}
                  />
                </label>

                <label
                  style={{
                    ...label,
                    gridColumn: "1 / -1",
                  }}
                >
                  {copy.notesLabel}

                  <textarea
                    placeholder={copy.notes}
                    value={notes}
                    onChange={(e) =>
                      setNotes(e.target.value)
                    }
                    style={textarea}
                  />
                </label>

                <button
                  type="button"
                  onClick={submit}
                  style={button}
                  disabled={
                    loading ||
                    loadingInitial
                  }
                >
                  {loading
                    ? copy.saving
                    : request
                    ? copy.update
                    : copy.request}
                </button>

                {message && (
                  <div style={info}>
                    {message}
                  </div>
                )}
              </div>
            </div>

            <div style={card}>
              <div style={cardTitle}>
                {copy.benefits}
              </div>

              <div style={benefitList}>
                <div style={benefitItem}>
                  ✔ {copy.benefit1}
                </div>

                <div style={benefitItem}>
                  ✔ {copy.benefit2}
                </div>

                <div style={benefitItem}>
                  ✔ {copy.benefit3}
                </div>
              </div>
            </div>
          </section>

          <section style={card}>
            <div style={cardTitle}>
              {copy.current}
            </div>

            <div style={requestCard}>
              <div style={status(
                request.status
              )}>
                {request.status}
              </div>

              <div style={requestGrid}>
                <div style={textSmall}>
                  <strong>
                    {copy.dateLabel}:
                  </strong>{" "}
                  {request.preferred_date ||
                    copy.noDate}
                </div>

                <div style={textSmall}>
                  <strong>
                    {copy.timeLabel}:
                  </strong>{" "}
                  {request.preferred_time ||
                    copy.noTime}
                </div>

                <div
                  style={{
                    ...textSmall,
                    gridColumn:
                      "1 / -1",
                  }}
                >
                  <strong>
                    {copy.notesLabel}:
                  </strong>{" "}
                  {request.notes || "-"}
                </div>
              </div>
            </div>
          </section>
        </>
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
    "linear-gradient(135deg, rgba(250,204,21,0.12), rgba(255,255,255,0.04))",
  border:
    "1px solid rgba(250,204,21,0.24)",
  borderRadius: "24px",
  padding: "22px",
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  flexWrap: "wrap",
  alignItems: "flex-start",
};

const buyCard = {
  background:
    "rgba(255,255,255,0.04)",
  border:
    "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "24px",
  display: "grid",
  gap: "18px",
};

const buyButtonWrap = {
  maxWidth: "320px",
};

const card = {
  background:
    "rgba(255,255,255,0.04)",
  border:
    "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "22px",
};

const grid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(280px,1fr))",
  gap: "18px",
};

const formGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(180px,1fr))",
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
  fontSize:
    "clamp(26px, 6vw, 36px)",
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
  border:
    "1px solid rgba(255,255,255,0.12)",
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
  border:
    "1px solid rgba(255,255,255,0.12)",
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

const info = {
  gridColumn: "1 / -1",
  color: "rgba(255,255,255,0.75)",
  fontWeight: "800",
};

const requestCard = {
  padding: "14px",
  borderRadius: "16px",
  border:
    "1px solid rgba(255,255,255,0.08)",
  background:
    "rgba(255,255,255,0.03)",
};

const requestGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(180px,1fr))",
  gap: "10px",
  marginTop: "10px",
};

const pill = {
  padding: "8px 12px",
  borderRadius: "999px",
  background:
    "rgba(255,255,255,0.08)",
  border:
    "1px solid rgba(255,255,255,0.12)",
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
  background:
    "rgba(255,255,255,0.04)",
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
  background:
    "rgba(255,255,255,0.06)",
  border:
    "1px solid rgba(255,255,255,0.08)",
  textTransform: "capitalize",
});
