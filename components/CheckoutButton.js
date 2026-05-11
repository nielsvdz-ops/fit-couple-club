"use client";

import { useState } from "react";

export default function CheckoutButton({
  plan,
  label,
  variant = "red",
}) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    if (loading) return;

    try {
      setLoading(true);

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan,
        }),
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
  let background = "#b00000";
  let color = "white";
  let border = "1px solid rgba(176,0,0,0.85)";
  let boxShadow = "0 18px 45px rgba(176,0,0,0.28)";

  if (variant === "darkRed") {
    background = "rgba(176,0,0,0.22)";
    color = "white";
    border = "1px solid rgba(176,0,0,0.55)";
    boxShadow = "none";
  }

  if (variant === "white") {
    background = "white";
    color = "black";
    border = "1px solid white";
    boxShadow = "0 18px 45px rgba(255,255,255,0.12)";
  }

  if (variant === "green") {
    background = "#22c55e";
    color = "white";
    border = "1px solid rgba(34,197,94,0.65)";
    boxShadow = "0 18px 45px rgba(34,197,94,0.22)";
  }

  if (variant === "blue") {
    background = "#60a5fa";
    color = "white";
    border = "1px solid rgba(96,165,250,0.65)";
    boxShadow = "0 18px 45px rgba(96,165,250,0.22)";
  }

  if (variant === "yellow") {
    background = "#facc15";
    color = "black";
    border = "1px solid rgba(250,204,21,0.85)";
    boxShadow = "0 18px 45px rgba(250,204,21,0.22)";
  }

  if (variant === "purple") {
    background = "#c084fc";
    color = "white";
    border = "1px solid rgba(192,132,252,0.65)";
    boxShadow = "0 18px 45px rgba(192,132,252,0.22)";
  }

  return {
    marginTop: "24px",
    width: "100%",
    padding: "17px 18px",
    borderRadius: "0px",
    background,
    color,
    fontWeight: "950",
    fontSize: "15px",
    border,
    cursor: loading ? "not-allowed" : "pointer",
    opacity: loading ? 0.75 : 1,
    transition: "all 0.2s ease",
    minHeight: "56px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    boxShadow,
  };
}