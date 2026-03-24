"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";

export default function SignupPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Account created. Now login.");
  }

  return (
    <main style={{ padding: "40px", color: "white" }}>
      <h1>Sign Up</h1>

      <form onSubmit={handleSignup} style={{ display: "grid", gap: "12px" }}>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Create Account</button>
      </form>

      <p>{message}</p>
    </main>
  );
}
