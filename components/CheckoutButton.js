"use client";

import { useState } from "react";

export default function CheckoutButton({ plan, label, variant = "green" }) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    if (loading) return;

    try {
      setLoading(true);

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        alert(data?.error || "Failed to start checkout.");
        return;
      }

      if (!data?.url) {
        alert("No checkout URL returned.");
        return;
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("CHECKOUT ERROR:", error);
      alert("Something went wrong while starting checkout.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={loading}
      style={buttonStyle(variant, loading)}
    >
      {loading ? "Redirecting..." : label}
    </button>
  );
}

function buttonStyle(variant, loading) {
  let background = "#22c55e";
  let color = "white";

  if (variant === "blue") background = "#60a5fa";
  if (variant === "yellow") {
    background = "#facc15";
    color = "black";
  }

  return {
    marginTop: "16px",
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    background,
    color,
    fontWeight: "800",
    border: "none",
    cursor: loading ? "not-allowed" : "pointer",
    opacity: loading ? 0.8 : 1,
    transition: "opacity 0.2s ease",
  };
}
