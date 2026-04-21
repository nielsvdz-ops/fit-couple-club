"use client";

import { useState } from "react";

export default function CheckoutButton({ plan, label, email, variant = "green" }) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    try {
      setLoading(true);

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan,
          email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to start checkout");
        return;
      }

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      alert("No checkout URL returned");
    } catch (error) {
      console.error("CHECKOUT ERROR:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button onClick={handleCheckout} disabled={loading} style={buttonStyle(variant, loading)}>
      {loading ? "Loading..." : label}
    </button>
  );
}

function buttonStyle(variant, loading) {
  let background = "#22c55e";
  let color = "white";

  if (variant === "blue") {
    background = "#60a5fa";
    color = "white";
  }

  if (variant === "yellow") {
    background = "#facc15";
    color = "black";
  }

  return {
    marginTop: "16px",
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    background,
    color,
    fontWeight: "800",
    border: "none",
    cursor: loading ? "not-allowed" : "pointer",
    opacity: loading ? 0.8 : 1,
  };
}
