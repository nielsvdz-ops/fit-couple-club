"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";

export default function SignupPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
      setMessage("");

      const normalizedEmail = email.trim().toLowerCase();

      const { error } = await supabase.auth.signUp({
        email: normalizedEmail,
        password,
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      setMessage("Account created. Redirecting to billing...");

      setTimeout(() => {
        window.location.href = "/billing";
      }, 1200);
    } catch (error) {
      console.error("SIGNUP ERROR:", error);
      setMessage("Something went wrong while creating your account.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={main}>
      <div style={card}>
        <div style={eyebrow}>Create Account</div>
        <h1 style={title}>Start your journey</h1>
        <p style={subtitle}>
          Create your account first. After that, you can choose your membership
          on the billing page.
        </p>

        <form onSubmit={handleSignup} style={form}>
          <div style={fieldWrap}>
            <label htmlFor="email" style={label}>
              Email
            </label>
            <input
              id="email"
              placeholder="you@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              style={input}
            />
          </div>

          <div style={fieldWrap}>
            <label htmlFor="password" style={label}>
              Password
            </label>
            <input
              id="password"
              placeholder="Create a password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              style={input}
            />
          </div>

          <button type="submit" disabled={loading} style={button(loading)}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {message && <p style={messageStyle}>{message}</p>}

        <p style={footerText}>
          Already have an account?{" "}
          <a href="/login" style={link}>
            Log in here
          </a>
        </p>
      </div>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "#0a0a0a",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
};

const card = {
  width: "100%",
  maxWidth: "480px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "32px",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "10px",
};

const title = {
  margin: 0,
  fontSize: "42px",
  fontWeight: "900",
};

const subtitle = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.7,
  marginTop: "12px",
  marginBottom: "24px",
};

const form = {
  display: "grid",
  gap: "16px",
};

const fieldWrap = {
  display: "grid",
  gap: "8px",
};

const label = {
  fontSize: "14px",
  fontWeight: "700",
};

const input = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.03)",
  color: "white",
  outline: "none",
  boxSizing: "border-box",
};

const button = (loading) => ({
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "none",
  background: "white",
  color: "black",
  fontWeight: "800",
  cursor: loading ? "not-allowed" : "pointer",
  opacity: loading ? 0.8 : 1,
});

const messageStyle = {
  marginTop: "18px",
  color: "rgba(255,255,255,0.75)",
  lineHeight: 1.6,
};

const footerText = {
  marginTop: "18px",
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.6,
};

const link = {
  color: "white",
  fontWeight: "800",
  textDecoration: "none",
};
