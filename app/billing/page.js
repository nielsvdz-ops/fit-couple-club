import DashboardLayout from "../../components/DashboardLayout";
import { MEMBERSHIP_PLANS } from "../../lib/plans";

export default function BillingPage() {
  return (
    <DashboardLayout
      title="Billing"
      subtitle="This is the structure for your future Stripe subscription system."
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" }}>
        {MEMBERSHIP_PLANS.map((plan) => (
          <div key={plan.id} style={card}>
            <div style={{ fontSize: "24px", fontWeight: "800", marginBottom: "6px" }}>{plan.name}</div>
            <div style={{ fontSize: "32px", fontWeight: "800", marginBottom: "14px" }}>{plan.price}</div>
            <ul style={{ paddingLeft: "18px", lineHeight: 1.9, color: "rgba(255,255,255,0.7)" }}>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button style={button}>Select Plan</button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "22px",
};

const button = {
  marginTop: "18px",
  width: "100%",
  padding: "12px 18px",
  borderRadius: "12px",
  border: "none",
  background: "white",
  color: "black",
  fontWeight: "700",
  cursor: "pointer",
};
