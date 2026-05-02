export const dynamic = "force-dynamic";

import ManageSubscriptionButton from "../../components/ManageSubscriptionButton";
import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import CheckoutButton from "../../components/CheckoutButton";
import { getCurrentUserAndProfile } from "../../lib/getProfile";

export default async function BillingPage({ searchParams = {} }) {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");

  const userEmail = String(user?.email || "").toLowerCase().trim();
  const success = searchParams?.success === "1";

  const membership = String(profile?.membership_type || "free")
    .toLowerCase()
    .trim();

  const isActive = Boolean(profile?.is_active);
  const customerId = profile?.stripe_customer_id || null;

  const vipTaken = 14;
  const vipMax = 90;
  const vipLeft = vipMax - vipTaken;
  const vipPercentage = (vipTaken / vipMax) * 100;

  const coachingTaken = 2;
  const coachingMax = 12;
  const coachingLeft = coachingMax - coachingTaken;
  const coachingPercentage = (coachingTaken / coachingMax) * 100;

  return (
    <DashboardLayout
      title="Billing"
      subtitle="Choose your system level — from nutrition structure to full transformation, Couple Zone accountability, VIP guidance, and coaching."
      membershipType={membership}
    >
      <div style={pageWrap}>
        {success && (
          <section style={successBox}>
            ✅ Payment successful — refresh once if your membership has not updated yet.
          </section>
        )}

        <section style={statusCard}>
          <div>
            <div style={eyebrow}>Current Membership</div>
            <h2 style={title}>{isActive ? formatMembership(membership) : "Free"}</h2>
            <p style={text}>Status: {isActive ? "Active" : "No active plan"}</p>
          </div>

          {customerId && <ManageSubscriptionButton label="Manage Subscription" />}
        </section>

        <section style={heroUpsellCard}>
          <div style={eyebrow}>Why upgrade?</div>
          <h2 style={heroTitle}>Stop guessing what to eat, buy, and train.</h2>
          <p style={text}>
            The full system combines nutrition routines, smart grocery planning,
            workouts, programs, progress tracking, and Couple Zone accountability
            so members can follow a clear structure instead of restarting every week.
          </p>
        </section>

        <section style={grid}>
          <div style={card}>
            {membership === "nutrition" && isActive && (
              <div style={currentBadge}>Your Plan</div>
            )}

            <div>
              <div style={cardTitle}>Nutrition — €19.99</div>
              <div style={planTag}>Best for food structure</div>
              <div style={text}>
                ✔ 5 body goals
                <br />
                ✔ 150 daily nutrition routines
                <br />
                ✔ Weekly recipes & structure
                <br />
                ✔ Smart supermarket grocery generator
                <br />
                ✔ Personalized calories & macros
                <br />
                ✔ Couple grocery mode
                <br />
                <br />
                Know exactly what to eat and what to buy every week.
              </div>
            </div>

            {membership === "nutrition" && isActive ? (
              <button style={disabledBtn}>Already Active</button>
            ) : (
              <CheckoutButton
                plan="nutrition"
                label="Get Nutrition"
                email={userEmail}
                variant="green"
              />
            )}
          </div>

          <div style={highlightCard}>
            <div style={bestValue}>🔥 Best Value</div>

            {membership === "full_access" && isActive && (
              <div style={currentBadge}>Your Plan</div>
            )}

            <div>
              <div style={cardTitle}>Full Access — €34.99</div>
              <div style={planTag}>Most complete self-guided system</div>
              <div style={text}>
                ✔ Everything in Nutrition
                <br />
                ✔ Full workout system
                <br />
                ✔ Step-by-step programs
                <br />
                ✔ Exercise GIF guidance
                <br />
                ✔ Plan builder
                <br />
                ✔ Progress tracking
                <br />
                ✔ Couple Zone system
                <br />
                <br />
                Complete transformation structure: training, food, groceries,
                progress, and couple accountability.
              </div>
            </div>

            {membership === "full_access" && isActive ? (
              <button style={disabledBtn}>Already Active</button>
            ) : (
              <CheckoutButton
                plan="full_access"
                label={membership === "nutrition" ? "Upgrade to Full Access" : "Unlock Full System"}
                email={userEmail}
                variant="yellow"
              />
            )}
          </div>

          <div style={vipCard}>
            {membership === "vip" && isActive && (
              <div style={currentBadge}>Your Plan</div>
            )}

            <div>
              <div style={cardTitle}>VIP — €90</div>
              <div style={planTag}>Guided accountability</div>
              <div style={text}>
                ✔ Everything in Full Access
                <br />
                ✔ Monthly coaching call
                <br />
                ✔ Weekly couple check-in system
                <br />
                ✔ Weakest-area auto detection
                <br />
                ✔ Personalized advice based on scores
                <br />
                ✔ Priority support
                <br />
                ✔ Strategy adjustments
                <br />
                <br />
                You do not just follow the system — you get guided, corrected,
                and kept accountable.
              </div>

              <div style={scarcityBox}>
                <div style={vipScarcityText}>
                  {vipTaken}/{vipMax} VIP spots taken — {vipLeft} spots left
                </div>
                <div style={progressBar}>
                  <div style={{ ...progressFillBlue, width: `${vipPercentage}%` }} />
                </div>
              </div>
            </div>

            {membership === "vip" && isActive ? (
              <button style={disabledBtn}>Already Active</button>
            ) : (
              <CheckoutButton plan="vip" label="Go VIP" email={userEmail} variant="blue" />
            )}
          </div>

          <div style={coachingCard}>
            {membership === "coaching" && isActive && (
              <div style={currentBadge}>Your Plan</div>
            )}

            <div>
              <div style={cardTitle}>Coaching — €340</div>
              <div style={planTag}>Maximum personal guidance</div>
              <div style={text}>
                ✔ Everything in VIP
                <br />
                ✔ Weekly 1-on-1 calls
                <br />
                ✔ Fully custom training plan
                <br />
                ✔ Fully custom nutrition direction
                <br />
                ✔ Direct support
                <br />
                ✔ Couple coaching available
                <br />
                ✔ Coaching by Niels & Rosanna
                <br />
                <br />
                Maximum results with full accountability, personal feedback, and no guessing.
              </div>

              <div style={scarcityBox}>
                <div style={scarcityText}>
                  {coachingTaken}/{coachingMax} coaching spots taken — {coachingLeft} left
                </div>
                <div style={progressBar}>
                  <div style={{ ...progressFillYellow, width: `${coachingPercentage}%` }} />
                </div>
              </div>
            </div>

            {membership === "coaching" && isActive ? (
              <button style={disabledBtn}>Already Active</button>
            ) : (
              <CheckoutButton
                plan="coaching"
                label="Start Coaching"
                email={userEmail}
                variant="yellow"
              />
            )}
          </div>
        </section>

        <div style={trust}>
          ✔ Secure Stripe payments · Cancel anytime · Instant access after payment
        </div>
      </div>
    </DashboardLayout>
  );
}

function formatMembership(type) {
  const m = String(type || "").toLowerCase().trim();
  if (m === "nutrition") return "Nutrition";
  if (m === "full_access") return "Full Access";
  if (m === "vip") return "VIP";
  if (m === "coaching") return "Coaching";
  return "Free";
}

const pageWrap = {
  display: "grid",
  gap: "22px",
  maxWidth: "1160px",
};

const successBox = {
  background: "rgba(22,163,74,0.18)",
  border: "1px solid rgba(22,163,74,0.4)",
  color: "white",
  borderRadius: "16px",
  padding: "16px",
  fontWeight: "800",
};

const statusCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "24px",
  display: "grid",
  gap: "14px",
};

const heroUpsellCard = {
  background:
    "linear-gradient(135deg, rgba(250,204,21,0.10), rgba(255,255,255,0.04))",
  border: "1px solid rgba(250,204,21,0.22)",
  borderRadius: "22px",
  padding: "26px",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const title = {
  margin: 0,
  fontSize: "30px",
  fontWeight: "800",
};

const heroTitle = {
  margin: "0 0 10px 0",
  fontSize: "clamp(28px, 4vw, 40px)",
  fontWeight: "900",
  lineHeight: 1.08,
};

const text = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "18px",
  alignItems: "stretch",
};

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "22px",
  minHeight: "520px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
};

const highlightCard = {
  ...card,
  background: "rgba(250,204,21,0.08)",
  border: "1px solid rgba(250,204,21,0.45)",
};

const bestValue = {
  position: "absolute",
  top: "-10px",
  right: "10px",
  background: "#facc15",
  color: "black",
  fontSize: "12px",
  fontWeight: "800",
  padding: "5px 10px",
  borderRadius: "8px",
};

const currentBadge = {
  position: "absolute",
  top: "-10px",
  left: "10px",
  background: "#16a34a",
  color: "white",
  fontSize: "11px",
  fontWeight: "900",
  padding: "5px 9px",
  borderRadius: "8px",
};

const vipCard = {
  ...card,
  background: "rgba(96,165,250,0.08)",
  border: "1px solid rgba(96,165,250,0.28)",
};

const coachingCard = {
  ...card,
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.11), rgba(255,255,255,0.04))",
  border: "1px solid rgba(255,255,255,0.22)",
};

const cardTitle = {
  fontSize: "24px",
  fontWeight: "900",
  marginBottom: "8px",
};

const planTag = {
  display: "inline-block",
  marginBottom: "14px",
  padding: "6px 10px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "rgba(255,255,255,0.72)",
  fontSize: "12px",
  fontWeight: "800",
};

const scarcityBox = {
  marginTop: "18px",
};

const scarcityText = {
  fontSize: "13px",
  marginBottom: "6px",
  color: "#facc15",
  fontWeight: "800",
};

const vipScarcityText = {
  fontSize: "13px",
  marginBottom: "6px",
  color: "#60a5fa",
  fontWeight: "800",
};

const progressBar = {
  height: "7px",
  background: "rgba(255,255,255,0.1)",
  borderRadius: "10px",
  overflow: "hidden",
  marginTop: "8px",
};

const progressFillYellow = {
  height: "100%",
  background: "#facc15",
};

const progressFillBlue = {
  height: "100%",
  background: "#60a5fa",
};

const disabledBtn = {
  marginTop: "24px",
  padding: "14px 18px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.08)",
  color: "rgba(255,255,255,0.55)",
  fontWeight: "900",
};

const trust = {
  textAlign: "center",
  color: "rgba(255,255,255,0.58)",
  lineHeight: 1.7,
};
