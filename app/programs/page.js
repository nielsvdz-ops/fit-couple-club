import DashboardLayout from "../../components/DashboardLayout";
              <div style={labelStyle}>{label}</div>
              <div style={valueStyle}>{value}</div>
            </div>
          ))}
        </section>

        <section style={sectionCard}>
          <div style={sectionTop}>
            <div>
              <div style={eyebrow}>Weekly Check-In</div>
              <h2 style={sectionTitle}>Update your progress</h2>
            </div>
          </div>

          <div style={formGrid}>
            <input placeholder="Current weight" style={input} />
            <input placeholder="Waist measurement" style={input} />
            <input placeholder="Hips measurement" style={input} />
            <input placeholder="Energy /10" style={input} />
            <input placeholder="Mood / recovery" style={input} />
            <input placeholder="Adherence %" style={input} />
          </div>

          <textarea placeholder="How did this week go? What needs improvement next week?" style={textarea} />

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "16px" }}>
            <button style={primaryButton}>Save Check-In</button>
            <button style={ghostButton}>Upload Progress Photos Later</button>
          </div>
        </section>

        <section style={sectionCard}>
          <div style={sectionTop}>
            <div>
              <div style={eyebrow}>History</div>
              <h2 style={sectionTitle}>Previous check-ins</h2>
            </div>
          </div>

          <div style={{ display: "grid", gap: "12px" }}>
            {previousCheckins.map(([week, weight, note]) => (
              <div key={week} style={historyCard}>
                <div style={{ fontWeight: "800", marginBottom: "6px" }}>{week} • {weight}</div>
                <div style={muted}>{note}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

const statsGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "14px" };
const statCard = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "20px" };
const labelStyle = { color: "rgba(255,255,255,0.56)", marginBottom: "8px" };
const valueStyle = { fontSize: "28px", fontWeight: "800" };
const sectionCard = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "22px", padding: "24px" };
const sectionTop = { marginBottom: "18px" };
const eyebrow = { fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,0.45)", marginBottom: "8px" };
const sectionTitle = { margin: 0, fontSize: "28px", fontWeight: "800" };
const formGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "14px" };
const input = { width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.14)", background: "#111", color: "white" };
const textarea = { width: "100%", minHeight: "120px", marginTop: "14px", padding: "14px 16px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.14)", background: "#111", color: "white", resize: "vertical" };
const historyCard = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "16px" };
const muted = { color: "rgba(255,255,255,0.68)", lineHeight: 1.7 };
const primaryButton = { padding: "12px 16px", borderRadius: "12px", border: "none", background: "white", color: "black", fontWeight: "700", cursor: "pointer" };
const ghostButton = { padding: "12px 16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.16)", background: "transparent", color: "white", fontWeight: "700", cursor: "pointer" };
