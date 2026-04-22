export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import CheckoutButton from "../../components/CheckoutButton";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessStarterPages } from "../../lib/access";

export default async function BillingPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessStarterPages(profile)) redirect("/pricing");

  const userEmail = user?.email || "";

  // VIP scarcity
  const vipTaken = 14;
  const vipMax = 99;
  const vipLeft = vipMax - vipTaken;
  const vipPercentage = (vipTaken / vipMax) * 100;

  // Coaching scarcity
  const coachingTaken = 2;
  const coachingMax = 15;
  const coachingLeft = coachingMax - coachingTaken;
  const coachingPercentage = (coachingTaken / coachingMax) * 100;

  return (
    <DashboardLayout
      title="Billing"
      subtitle="Choose your plan and upgrade your results."
      membershipType={profile?.membership_type}
    >
      <div style={{ display: "grid", gap: "22px", maxWidth: "1000px" }}>
        
        {/* CURRENT PLAN */}
        <section style={statusCard}>
          <div>
            <div style={eyebrow}>Current Membership</div>
            <h2 style={title}>{profile?.membership_type || "Free"}</h2>
            <p style={text}>Status: Active</p>
          </div>
        </section>

        <section style={grid}>

          {/* 🥗 NUTRITION */}
          <div style={card}>
            <div style={cardTitle}>Nutrition — €19.99</div>
            <div style={text}>
              ✔ Meal plans<br/>
              ✔ Recipes<br/>
              ✔ Nutrition guidance<br/><br/>
              Perfect if you want results without going to the gym.
            </div>

            <CheckoutButton
              plan="nutrition"
              label="Get Nutrition"
              email={userEmail}
              variant="green"
            />
          </div>

          {/* 🔥 FULL ACCESS */}
          <div style={highlightCard}>
            <div style={bestValue}>🔥 Best Value</div>
            <div style={cardTitle}>Full Access — €29.99</div>
            <div style={text}>
              ✔ Workouts<br/>
              ✔ Nutrition<br/>
              ✔ Programs<br/>
              ✔ Progress tracking<br/>
              ✔ Everything included<br/><br/>
              Complete system for total transformation.
            </div>

            <CheckoutButton
              plan="full_access"
              label="Unlock Everything"
              email={userEmail}
              variant="yellow"
            />
          </div>

          {/* 💎 VIP */}
          <div style={vipCard}>
            <div style={cardTitle}>VIP — €99</div>
            <div style={text}>
              ✔ Everything in Full Access<br/>
              ✔ Monthly coaching call<br/>
              ✔ Priority support<br/><br/>
              Coaching with guidance.
            </div>

            <div style={scarcityBox}>
              <div style={vipScarcityText}>
                {vipTaken}/{vipMax} members — {vipLeft} spots left
              </div>

              <div style={progressBar}>
                <div style={{ ...progressFillBlue, width: `${vipPercentage}%` }} />
              </div>
            </div>

            <CheckoutButton
              plan="vip"
              label="Go VIP"
              email={userEmail}
              variant="blue"
            />
          </div>

          {/* 🧠 COACHING */}
          <div style={coachingCard}>
            <div style={cardTitle}>Coaching — €349</div>
            <div style={text}>
              ✔ Weekly 1-on-1 calls<br/>
              ✔ Fully customized plan<br/>
              ✔ Direct support<br/>
              ✔ Coaching by Niels & Rosanna<br/><br/>
              Maximum results with personal guidance.
            </div>

            <div style={scarcityBox}>
              <div style={scarcityText}>
                {coachingTaken}/{coachingMax} spots taken — {coachingLeft} left
              </div>

              <div style={progressBar}>
                <div style={{ ...progressFillYellow, width: `${coachingPercentage}%` }} />
              </div>
            </div>

            <CheckoutButton
              plan="coaching"
              label="Start Coaching"
              email={userEmail}
              variant="yellow"
            />
          </div>

        </section>
      </div>
    </DashboardLayout>
  );
}
