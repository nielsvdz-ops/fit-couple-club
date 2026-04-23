"use client";

import { useState } from "react";

export default function ManageSubscriptionButton({
  label = "Manage Subscription",
}) {
  const [loading, setLoading] = useState(false);

  async function handleOpenPortal() {
    if (loading) return;

    try {
      setLoading(true);

      const response = await fetch("/api/stripe-portal", {
        method: "POST",
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        alert(data?.error || "Failed to open subscription manager.");
        return;
      }

      if (data?.url) {
        window.location.href = data.url;
        return;
      }

      alert("No portal URL returned.");
    } catch (error) {
      console.error("PORTAL ERROR:", error);
      alert("Something went wrong while opening subscription manager.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleOpenPortal}
      disabled={loading}
      style={buttonStyle(loading)}
    >
      {loading ? "Opening..." : label}
    </button>
  );
}

function buttonStyle(loading) {
  return {
    marginTop: "12px",
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    fontWeight: "800",
    border: "1px solid rgba(255,255,255,0.12)",
    cursor: loading ? "not-allowed" : "pointer",
    opacity: loading ? 0.8 : 1,
  };
}
