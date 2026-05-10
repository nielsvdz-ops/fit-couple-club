"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";
import { useLanguage } from "../../lib/useLanguage";

export default function ResetPasswordPage() {
  const supabase = createClient();
  const { language } = useLanguage();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const t = {
    en: {
      eyebrow: "Password Reset",
      title: "Create new password",
      subtitle: "Choose a strong new password for your account.",
      password: "New password",
      passwordPlaceholder: "Enter new password",
      confirmPassword: "Confirm password",
      confirmPasswordPlaceholder: "Repeat new password",
      button: "Update password",
      loading: "Updating...",
      successTitle: "Password updated",
      successText: "Your password has been updated successfully.",
      back: "Go to login",
      mismatch: "Passwords do not match.",
      short: "Password must be at least 6 characters.",
      error: "Something went wrong while updating the password.",
    },
    nl: {
      eyebrow: "Wachtwoord resetten",
      title: "Nieuw wachtwoord instellen",
      subtitle: "Kies een sterk nieuw wachtwoord voor je account.",
      password: "Nieuw wachtwoord",
      passwordPlaceholder: "Vul nieuw wachtwoord in",
      confirmPassword: "Bevestig wachtwoord",
      confirmPasswordPlaceholder: "Herhaal nieuw wachtwoord",
      button: "Wachtwoord updaten",
      loading: "Bezig met updaten...",
      successTitle: "Wachtwoord bijgewerkt",
      successText: "Je wachtwoord is succesvol bijgewerkt.",
      back: "Ga naar inloggen",
      mismatch: "Wachtwoorden komen niet overeen.",
      short: "Wachtwoord moet minimaal 6 tekens bevatten.",
      error: "Er ging iets mis tijdens het updaten van het wachtwoord.",
    },
  }[language] || {};

  async function handleUpdatePassword(e) {
    e.preventDefault();

    if (loading) return;

    if (password.length < 6) {
      alert(t.short);
      return;
    }

    if (password !== confirmPassword) {
      alert(t.mismatch);
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      setSuccess(true);
    } catch (error) {
      console.error("UPDATE PASSWORD ERROR:", error);
      alert(t.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={main}>
      <div style={card}>
        <div style={eyebrow}>{t.eyebrow}</div>

        <h1 style={title}>
          {success ? t.successTitle : t.title}
        </h1>

        <p style={subtitle}>
          {success ? t.successText : t.subtitle}
        </p>

        {!success && (
          <form onSubmit={handleUpdatePassword} style={form}>
            <div style={fieldWrap}>
              <label htmlFor="password" style={label}>
                {t.password}
              </label>

              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t.passwordPlaceholder}
                type="password"
                autoComplete="new-password"
                required
                style={input}
              />
            </div>

            <div style={fieldWrap}>
              <label htmlFor="confirmPassword" style={label}>
                {t.confirmPassword}
              </label>

              <input
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={t.confirmPasswordPlaceholder}
                type="password"
                autoComplete="new-password"
                required
                style={input}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={button(loading)}
            >
              {loading ? t.loading : t.button}
            </button>
          </form>
        )}

        <p style={footerText}>
          <a href="/login" style={link}>
            {t.back}
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
  padding: "clamp(20px, 5vw, 32px)",
  overflowX: "hidden",
};

const card = {
  width: "100%",
  maxWidth: "480px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "clamp(18px, 4vw, 24px)",
  padding: "clamp(24px, 6vw, 36px)",
  boxSizing: "border-box",
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
  fontSize: "clamp(34px, 9vw, 42px)",
  lineHeight: 1.05,
  fontWeight: "900",
};

const subtitle = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.7,
  marginTop: "12px",
  marginBottom: "24px",
  fontSize: "clamp(15px, 3.8vw, 16px)",
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
  fontSize: "16px",
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
  fontSize: "16px",
});

const footerText = {
  marginTop: "18px",
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.6,
  fontSize: "15px",
};

const link = {
  color: "white",
  fontWeight: "800",
  textDecoration: "none",
};