export const metadata = {
  title: "Privacy Policy | Fit Couple Club",
  description: "Privacy Policy for Fit Couple Club.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Fit Couple Club respects your privacy and is committed to protecting your personal data.
          </p>

          <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
          <p>
            We may collect your name, email address, account details, subscription status,
            and payment-related information.
          </p>

          <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
          <p>
            We use your information to create your account, manage your subscription,
            provide access to content, improve our platform, and communicate with you.
          </p>

          <h2 className="text-2xl font-semibold text-white">3. Payments</h2>
          <p>
            Payments are securely processed by third-party payment providers. We do not
            store full credit card or bank card details.
          </p>

          <h2 className="text-2xl font-semibold text-white">4. Data Sharing</h2>
          <p>
            We do not sell your personal data. We only share data with necessary service
            providers used to operate the platform.
          </p>

          <h2 className="text-2xl font-semibold text-white">5. Security</h2>
          <p>
            We use reasonable technical and organizational measures to protect your data.
          </p>

          <h2 className="text-2xl font-semibold text-white">6. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal data by contacting us.
          </p>

          <h2 className="text-2xl font-semibold text-white">7. Contact</h2>
          <p>
            For privacy requests, contact us at: fitcoupleclub1@gmail.com
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
