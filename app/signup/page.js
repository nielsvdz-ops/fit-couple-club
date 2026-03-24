"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";

export default function SignupPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setAccountCreated(false);
      return;
    }

    setMessage("Account created. Redirecting to login...");
setAccountCreated(true);

setTimeout(() => {
  window.location.href = "/login";
}, 1500);
  }
  return (
    <main
      style={{
        padding: "40px",
        color: "white",
        minHeight: "100vh",
        background: "#000",
      }}
    >
      <h1 style={{ fontSize: "56px", marginBottom: "30px" }}>Sign Up</h1>

      <form onSubmit={handleSignup} style={{ display: "grid", gap: "14px" }}>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Create Account
        </button>
      </form>

      {message && <p style={{ marginTop: "20px", fontSize: "18px" }}>{message}</p>}

      {accountCreated && (
        <div style={{ marginTop: "20px" }}>
          <a href="/login" style={loginButtonStyle}>
            Go to Login
          </a>
        </div>
      )}
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  fontSize: "18px",
  borderRadius: "6px",
  border: "1px solid #444",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  fontSize: "18px",
  borderRadius: "6px",
  border: "none",
  background: "#e5e5ea",
  color: "#000",
  cursor: "pointer",
};

const loginButtonStyle = {
  display: "inline-block",
  padding: "12px 18px",
  background: "white",
  color: "black",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "700",
};
