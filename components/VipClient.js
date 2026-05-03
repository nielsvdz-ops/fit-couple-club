"use client";

import { useEffect, useState } from "react";

export default function VipClient({ membershipType }) {
  const [request, setRequest] = useState(null);
  const [canEdit, setCanEdit] = useState(true);
  const [limitText, setLimitText] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function load() {
    const res = await fetch("/api/call-request");
    const data = await res.json();

    if (!res.ok) {
      setMessage(data.error || "Failed to load");
      return;
    }

    setRequest(data.request);
    setCanEdit(data.canEdit);
    setLimitText(data.limitText);

    if (data.request) {
      setDate(data.request.preferred_date || "");
      setTime(data.request.preferred_time || "");
      setNotes(data.request.notes || "");
    }
  }

  async function submit() {
    setLoading(true);
    setMessage("Saving...");

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

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.error || "Failed");
      setLoading(false);
      return;
    }

    setMessage("Saved ✅");
    await load();
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ display: "grid", gap: "22px" }}>
      <section style={card}>
        <div style={eyebrow}>Call Request</div>
        <h2 style={title}>
          {membershipType === "coaching"
            ? "Request your weekly call"
            : "Request your monthly call"}
        </h2>

        <p style={text}>{limitText}</p>

        {!canEdit && (
          <div style={lockedBox}>
            This request is completed and cannot be changed.
          </div>
        )}

        <div style={{ display: "grid", gap: "12px", marginTop: "14px" }}>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={input}
            disabled={!canEdit}
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={input}
            disabled={!canEdit}
          />

          <textarea
            placeholder="Focus, struggles, goals..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            style={textarea}
            disabled={!canEdit}
          />

          <button
            onClick={submit}
            style={button}
            disabled={loading || !canEdit}
          >
            {loading
              ? "Saving..."
              : request
              ? "Update Request"
              : "Request Call"}
          </button>

          {message && <div style={info}>{message}</div>}
        </div>
      </section>

      {request && (
        <section style={card}>
          <div style={cardTitle}>Current Request</div>

          <div style={requestCard}>
            <div style={status(request.status)}>{request.status}</div>
            <div style={textSmall}>
              Date: {request.preferred_date || "Not set"}
            </div>
            <div style={textSmall}>
              Time: {request.preferred_time || "Not set"}
            </div>
            <div style={textSmall}>{request.notes}</div>
          </div>
        </section>
      )}
    </div>
  );
}

/* styles (keep yours if you want) */

const card = {
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
};

const title = {
  fontSize: "28px",
  fontWeight: "800",
  marginTop: "6px",
};

const cardTitle = {
  fontSize: "22px",
  fontWeight: "800",
};

const text = {
  color: "rgba(255,255,255,0.7)",
};

const textSmall = {
  color: "rgba(255,255,255,0.6)",
};

const input = {
  padding: "12px",
  borderRadius: "10px",
  background: "#111",
  color: "white",
  border: "1px solid rgba(255,255,255,0.1)",
};

const textarea = {
  minHeight: "100px",
  padding: "12px",
  borderRadius: "10px",
  background: "#111",
  color: "white",
  border: "1px solid rgba(255,255,255,0.1)",
};

const button = {
  padding: "12px",
  borderRadius: "10px",
  background: "white",
  color: "black",
  fontWeight: "800",
  cursor: "pointer",
  border: "none",
};

const info = {
  color: "rgba(255,255,255,0.7)",
};

const requestCard = {
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.08)",
};

const lockedBox = {
  padding: "10px",
  borderRadius: "10px",
  background: "rgba(239,68,68,0.2)",
  border: "1px solid rgba(239,68,68,0.4)",
  color: "white",
};

const status = (s) => ({
  fontWeight: "700",
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
});
