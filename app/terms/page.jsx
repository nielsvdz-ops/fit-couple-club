export const metadata = {
  title: "Terms of Service | Fit Couple Club",
  description: "Terms of Service for Fit Couple Club.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            By accessing or using Fit Couple Club, you agree to these Terms of Service.
          </p>

          <h2 className="text-2xl font-semibold text-white">1. Services</h2>
          <p>
            Fit Couple Club provides digital fitness content, including workout programs,
            nutrition plans, recipes, progress tools, and educational fitness materials.
          </p>

          <h2 className="text-2xl font-semibold text-white">2. Membership & Billing</h2>
          <p>
            Subscriptions are billed on a recurring monthly basis unless cancelled.
            By subscribing, you authorize automatic payments through our payment provider.
          </p>

          <h2 className="text-2xl font-semibold text-white">3. Cancellations</h2>
          <p>
            You may cancel your subscription at any time. Your access will remain active
            until the end of your current billing period.
          </p>

          <h2 className="text-2xl font-semibold text-white">4. No Medical Advice</h2>
          <p>
            Our content is for informational and educational purposes only. It does not
            replace professional medical advice. Consult a qualified professional before
            starting any fitness or nutrition program.
          </p>

          <h2 className="text-2xl font-semibold text-white">5. Account Use</h2>
          <p>
            Accounts are personal and may not be shared, resold, or transferred.
            Misuse may result in suspension or termination.
          </p>

          <h2 className="text-2xl font-semibold text-white">6. Intellectual Property</h2>
          <p>
            All content belongs to Fit Couple Club and may not be copied, distributed,
            resold, or reproduced without permission.
          </p>

          <h2 className="text-2xl font-semibold text-white">7. Limitation of Liability</h2>
          <p>
            Fit Couple Club is not liable for injuries, damages, or losses resulting from
            the use of our content or services.
          </p>

          <h2 className="text-2xl font-semibold text-white">8. Contact</h2>
          <p>
            For questions, contact us at: support@fitcoupleclub.com
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
