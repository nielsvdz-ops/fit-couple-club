import Navbar from "../../components/Navbar";

export default function AboutPage() {
  return (
    <main style={main}>
      <Navbar />
      <section style={twoColWrap}>
        <div>
          <div style={eyebrowStyle}>About Us</div>
          <h1 style={pageTitle}>This platform comes from real life.</h1>
          <p style={textStyle}>We have been together for over 12 years. We train together, eat together, and do everything together.</p>
          <p style={textStyle}>Rosanna struggled with an eating disorder for 7 years when she was younger and beat anorexia. That journey gave her deep real-world knowledge about food, healthy eating, balance, and recovery.</p>
          <p style={textStyle}>Niels has been in the gym since he was 15 and never stopped. Over the years, we built strong athletic physiques and a healthy lifestyle that gives us more energy, discipline, strength, and confidence.</p>
          <p style={textStyle}>Now we want to help individuals and couples start their own journey and achieve their dream body — alone or together.</p>
        </div>
        <div style={imagePlaceholderStyle}><div style={imageLabelStyle}>ADD_ABOUT_COUPLE_IMAGE</div></div>
      </section>
    </main>
  );
}

const main = { minHeight: "100vh", background: "#0a0a0a", color: "white" };
const twoColWrap = { maxWidth: "1100px", margin: "0 auto", padding: "80px 24px 100px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "36px", alignItems: "center" };
const eyebrowStyle = { fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,0.5)" };
const pageTitle = { fontSize: "54px", margin: "10px 0 20px" };
const textStyle = { color: "rgba(255,255,255,0.72)", lineHeight: 1.85, marginBottom: "14px" };
const imagePlaceholderStyle = { background: "rgba(255,255,255,0.04)", border: "1px dashed rgba(255,255,255,0.18)", borderRadius: "28px", minHeight: "420px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "20px" };
const imageLabelStyle = { color: "rgba(255,255,255,0.45)", fontSize: "18px", letterSpacing: "0.08em" };
