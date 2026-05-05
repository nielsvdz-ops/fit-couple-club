"use client";
export const dynamic = "force-dynamic";

import Navbar from "../../components/Navbar";
import { useLanguage } from "../../lib/useLanguage";

export default function PricingPage() {
  const { language } = useLanguage();

  const t = {
    en: {
      eyebrow: "Couple Transformation System",
      title1: "Stop starting over.",
      title2: "Build a system that actually works.",
      subtitle:
        "This is not another fitness app. You get a complete structure for training, food, groceries, and couple accountability — so you never have to think “what should we do today?” again.",
      why: "💡 Why couples fail",
      whyText:
        "Most couples do not fail because of discipline. They fail because there is no shared plan, food decisions happen too late, and one person often carries the motivation alone.",
      highlight: "This system fixes all of that.",
      startNutrition: "Start Nutrition",
      unlock: "Unlock Full System",
      vip: "Go VIP",
      coaching: "Start Coaching",
    },
    nl: {
      eyebrow: "Couple Transformatie Systeem",
      title1: "Stop met opnieuw beginnen.",
      title2: "Bouw een systeem dat werkt.",
      subtitle:
        "Dit is geen standaard fitness app. Je krijgt een compleet systeem voor training, voeding, boodschappen en accountability.",
      why: "💡 Waarom koppels falen",
      whyText:
        "De meeste koppels falen niet door discipline, maar door gebrek aan structuur en planning.",
      highlight: "Dit systeem lost dat op.",
      startNutrition: "Start Nutrition",
      unlock: "Ontgrendel Full Access",
      vip: "Ga VIP",
      coaching: "Start Coaching",
    },
  }[language];

  return (
    <main style={main}>
      <Navbar />

      <div style={container}>
        <div style={header}>
          <div style={eyebrow}>{t.eyebrow}</div>

          <h1 style={title}>
            {t.title1}
            <br />
            {t.title2}
          </h1>

          <p style={subtitle}>{t.subtitle}</p>
        </div>

        <div style={hook}>
          <div style={hookTitle}>{t.why}</div>
          <p style={hookText}>{t.whyText}</p>

          <ul style={list}>
            <li>No shared plan</li>
            <li>Food decisions happen too late</li>
            <li>One person is motivated, the other is not</li>
            <li>No structure means no consistency</li>
          </ul>

          <p style={hookHighlight}>{t.highlight}</p>
        </div>

        <div style={grid}>
          <section style={card}>
            <div>
              <h2 style={planTitle}>Nutrition</h2>
              <div style={price}>
                €19.99<span style={priceSmall}>/mo</span>
              </div>

              <ul style={list}>
                <li>✔ 5 body goals</li>
                <li>✔ 150 daily routines</li>
                <li>✔ Weekly recipes</li>
                <li>✔ Smart grocery generator</li>
                <li>✔ Works for 1 or 2 people</li>
              </ul>

              <p style={desc}>
                You never have to think about food again.
              </p>
            </div>

            <a href="/signup" style={button}>
              {t.startNutrition}
            </a>
          </section>

          <section style={{ ...card, ...featured }}>
            <div style={badge}>🔥 Most Popular</div>

            <div>
              <h2 style={planTitle}>Full Access</h2>
              <div style={price}>
                €34.99<span style={priceSmall}>/mo</span>
              </div>

              <ul style={list}>
                <li>✔ Everything in Nutrition</li>
                <li>✔ Full workout system</li>
                <li>✔ Programs</li>
                <li>✔ Progress tracking</li>
                <li>✔ Couple Zone</li>
              </ul>

              <p style={desc}>
                Complete transformation system.
              </p>
            </div>

            <a href="/signup" style={{ ...button, ...buttonFeatured }}>
              {t.unlock}
            </a>
          </section>

          <section style={vipCard}>
            <div>
              <h2 style={planTitle}>VIP</h2>
              <div style={price}>
                €90<span style={priceSmall}>/mo</span>
              </div>

              <ul style={list}>
                <li>✔ Coaching calls</li>
                <li>✔ Accountability</li>
                <li>✔ Priority support</li>
              </ul>

              <div style={scarcity}>14/90 VIP spots taken</div>
            </div>

            <a href="/signup" style={button}>
              {t.vip}
            </a>
          </section>

          <section style={coachingCard}>
            <div>
              <h2 style={planTitle}>Coaching</h2>
              <div style={price}>
                €340<span style={priceSmall}>/mo</span>
              </div>

              <ul style={list}>
                <li>✔ Weekly 1-on-1</li>
                <li>✔ Fully custom plan</li>
                <li>✔ Direct support</li>
              </ul>

              <div style={scarcity}>2/12 spots left</div>
            </div>

            <a href="/signup" style={button}>
              {t.coaching}
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
