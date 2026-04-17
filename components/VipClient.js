"use client";

import { useEffect, useState } from "react";
import { createClient } from "../lib/supabase/client";

export default function VipClient() {
  const supabase = createClient();

  const [requests, setRequests] = useState([]);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");

  async function loadRequests() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("vip_requests")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    setRequests(data || []);
  }

  async function requestCall() {
    setMessage("Requesting...");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setMessage("Login required");
      return;
    }

    const { error } = await supabase.from("vip_requests").insert({
      user_id: user.id,
      preferred_date: date || null,
      notes,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Call request sent ✅");
      setDate("");
      setNotes("");
      loadRequests();
    }
  }

  useEffect(() => {
    loadRequests();
  }, []);

  return (
    <div style={{ display: "grid", gap: "22px" }}>
      {/* REQUEST */}
      <section style={card}>
        <div style={eyebrow}>VIP Benefit</div>
        <h2 style={title}>Request your monthly call</h2>
        <p style={text}>
          Submit your preferred date and notes. You’ll be contacted to confirm.
        </p>

        <div style={{ display: "grid", gap: "12px", marginTop: "14px" }}>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={input}
          />

          <textarea
            placeholder="What do you want to focus on? Progress, diet, struggles..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            style={textarea}
          />

          <button onClick={requestCall} style={button}>
            Request Call
          </button>

          {message && <div style={info}>{message}</div>}
        </div>
      </section>

      {/* HISTORY */}
      <section style={card}>
        <div style={cardTitle}>Your requests</div>

        {requests.length === 0 ? (
          <div style={text}>No requests yet.</div>
        ) : (
          <div style={{ display: "grid", gap: "12px" }}>
            {requests.map((r) => (
              <div key={r.id} style={requestCard}>
                <div style={status(r.status)}>{r.status}</div>
                <div style={textSmall}>
                  Date: {r.preferred_date || "Not set"}
                </div>
                <div style={textSmall}>{r.notes}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* VALUE BLOCK */}
      <section style={grid}>
        <div style={card}>
          <div style={cardTitle}>Monthly Evaluation</div>
          <div style={text}>
            Deep dive into your progress, body changes, and performance.
          </div>
        </div>

        <div style={card}>
          <div style={cardTitle}>Priority Support</div>
          <div style={text}>
            VIP clients get faster responses and direct coaching adjustments.
          </div>
        </div>

        <div style={card}>
          <div style={cardTitle}>Custom Adjustments</div>
          <div style={text}>
            Your plan gets optimized monthly based on real data.
          </div>
        </div>
      </section>
    </div>
  );
}

/* styles */
const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "22px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "16px",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
};

const title = { fontSize: "28px", fontWeight: "800", marginTop: "6px" };
const cardTitle = { fontSize: "22px", fontWeight: "800" };

const text = { color: "rgba(255,255,255,0.7)", lineHeight: 1.7 };
const textSmall = { color: "rgba(255,255,255,0.6)" };

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
};

const info = { color: "rgba(255,255,255,0.7)" };

const requestCard = {
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.08)",
};

const status = (s) => ({
  fontWeight: "700",
  color:
    s === "pending"
      ? "#facc15"
      : s === "approved"
      ? "#22c55e"
      : "rgba(255,255,255,0.6)",
});
