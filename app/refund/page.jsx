export const metadata = {
  title: "Refund Policy | Fit Couple Club",
  description: "Refund Policy for Fit Couple Club.",
};

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>

        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Due to the digital nature of Fit Couple Club, all purchases are final once
            access has been granted.
          </p>

          <h2 className="text-2xl font-semibold text-white">1. Digital Products</h2>
          <p>
            Fit Couple Club provides digital subscription access to workouts, nutrition
            plans, recipes, and fitness resources. Because access is delivered immediately,
            we generally do not offer refunds.
          </p>

          <h2 className="text-2xl font-semibold text-white">2. Subscription Cancellation</h2>
          <p>
            You may cancel your subscription at any time. Cancelling prevents future
            billing, but does not automatically refund previous payments.
          </p>

          <h2 className="text-2xl font-semibold text-white">3. Access After Cancellation</h2>
          <p>
            After cancellation, your access will remain active until the end of your current
            paid billing period.
          </p>

          <h2 className="text-2xl font-semibold text-white">4. Technical Issues</h2>
          <p>
            If you experience technical problems accessing your account or content, contact
            us and we will help resolve the issue.
          </p>

          <h2 className="text-2xl font-semibold text-white">5. Contact</h2>
          <p>
            For refund or billing questions, contact us at: fitcoupleclub1@gmail.com
          </p>
        </div>
      </div>
    </main>
  );
}
const footer = {
  borderTop: "1px solid rgba(255,255,255,0.08)",
  padding: "30px 24px",
  color: "rgba(255,255,255,0.58)",
  textAlign: "center",
};

const footerLinks = {
  display: "flex",
  justifyContent: "center",
  gap: "18px",
  flexWrap: "wrap",
  marginTop: "14px",
};

const footerLink = {
  color: "rgba(255,255,255,0.72)",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "700",
};
