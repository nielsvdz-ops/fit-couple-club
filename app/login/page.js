"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";

export default function LoginPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) {
      window.location.href = "/dashboard";
    } else {
      alert(error.message);
    }
  }

  return (
    <main style={{ padding: "40px", color: "white" }}>
      <h1>Login</h1>

      <form onSubmit={handleLogin} style={{ display: "grid", gap: "12px" }}>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <button type="submit">Login</button>
      </form>
    </main>
  );
}
