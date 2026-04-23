"use client";

import { useState } from "react";

export default function ManageSubscriptionButton({
  label = "Manage Subscription",
  variant = "default",
}) {
  const [loading, setLoading] = useState(false);

  async function handleOpenPortal() {
    if (loading) return;

    try {
      setLoading(true);

      const res = await fetch("/api/stripe-portal", {
        method: "POST",
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
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
      alert("Something went wrong while opening billing.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleOpenPortal}
      disabled={loading}
      style={buttonStyle(variant, loading)}
    >
      {loading ? "Opening Billing..." : label}
    </button>
  );
}

function buttonStyle(variant, loading) {
  let background = "rgba(255,255,255,0.08)";
  let color = "white";

  if (variant === "primary") {
    background = "white";
    color = "black";
  }

  if (variant === "danger") {
    background = "#ef4444";
    color = "white";
  }

  return {
    marginTop: "12px",
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    background,
    color,
    fontWeight: "800",
    border: "1px solid rgba(255,255,255,0.12)",
    cursor: loading ? "not-allowed" : "pointer",
    opacity: loading ? 0.8 : 1,
    transition: "all 0.2s ease",
  };
}
