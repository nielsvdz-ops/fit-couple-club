export const dynamic = "force-dynamic";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";

const copy = {
  en: {
    title: "Account",
    subtitle: "Your member account details and plan status.",
    name: "Name",
    email: "Email",
    membership: "Membership",
    notSet: "Not set",
    free: "Free",
    nutrition: "Nutrition",
    fullAccess: "Full Access",
    vip: "VIP",
    coaching: "Coaching",
  },

  nl: {
    title: "Account",
    subtitle: "Jouw accountgegevens en lidmaatschap status.",
    name: "Naam",
    email: "E-mail",
    membership: "Lidmaatschap",
    notSet: "Niet ingesteld",
    free: "Gratis",
    nutrition: "Voeding",
    fullAccess: "Full Access",
    vip: "VIP",
    coaching: "Coaching",
  },
};

function getLanguage() {
  const cookieStore = cookies();

  const saved =
    cookieStore.get("language")?.value ||
    cookieStore.get("fitcouple_language")?.value ||
    cookieStore.get("NEXT_LOCALE")?.value ||
    "en";

  return saved === "nl" ? "nl" : "en";
}

export default async function AccountPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");

  const language = getLanguage();
  const t = copy[language];

  return (
    <DashboardLayout
      title={t.title}
      subtitle={t.subtitle}
      membershipType={profile?.membership_type}
    >
      <div style={pageWrap}>
        <section style={heroCard}>
          <div style={eyebrowStyle}>{t.title}</div>

          <h1 style={heroTitle}>
            {profile?.full_name || t.title}
          </h1>

          <p style={heroSubtitle}>
            {t.subtitle}
          </p>
        </section>

        <div style={gridStyle}>
          <section style={card}>
            <div style={cardLabel}>
              {t.name}
            </div>

            <div style={cardText}>
              {profile?.full_name || t.notSet}
            </div>
          </section>

          <section style={card}>
            <div style={cardLabel}>
              {t.email}
            </div>

            <div style={cardText}>
              {profile?.email || user.email}
            </div>
          </section>

          <section style={card}>
            <div style={cardLabel}>
              {t.membership}
            </div>

            <div style={membershipBadge}>
              {formatMembership(profile?.membership_type, t)}
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}

function formatMembership(type, t) {
  const m = String(type || "").toLowerCase().trim();

  if (m === "nutrition") return t.nutrition;
  if (m === "full_access") return t.fullAccess;
  if (m === "vip") return t.vip;
  if (m === "coaching") return t.coaching;

  return t.free;
}

const pageWrap = {
  display: "grid",
  gap: "22px",
  width: "100%",
  maxWidth: "100%",
};

const heroCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "28px",
  padding: "28px",
  overflow: "hidden",
};

const eyebrowStyle = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "10px",
};

const heroTitle = {
  margin: 0,
  fontSize: "clamp(34px, 7vw, 56px)",
  fontWeight: "900",
  lineHeight: 1.02,
  overflowWrap: "break-word",
};

const heroSubtitle = {
  marginTop: "16px",
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
  maxWidth: "720px",
  fontSize: "15px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
  gap: "18px",
};

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "22px",
  display: "grid",
  gap: "10px",
  minWidth: 0,
  overflowWrap: "break-word",
};

const cardLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  color: "rgba(255,255,255,0.45)",
};

const cardText = {
  color: "rgba(255,255,255,0.88)",
  lineHeight: 1.7,
  fontSize: "20px",
  fontWeight: "800",
  overflowWrap: "break-word",
};

const membershipBadge = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "fit-content",
  padding: "10px 16px",
  borderRadius: "999px",
  background: "white",
  color: "#111",
  fontWeight: "900",
  fontSize: "14px",
};