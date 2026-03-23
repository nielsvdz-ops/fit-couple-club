"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";

export default function SignupPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    setMessage("Creating account...");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data.user) {
      await supabase.from("profiles").upsert({
        id: data.user.id,
        email: data.user.email,
        full_name: fullName,
        membership_type: "starter",
        is_active: false,
      });
    }

    setMessage("Account created. Check your email if confirmation is enabled.");
  }

  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a", color: "white", padding: "40px" }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup} style={{ display: "grid", gap: "12px", maxWidth: "420px" }}>
        <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
        <button type="submit">Create Account</button>
      </form>
      <p>{message}</p>
    </main>
  );
}
