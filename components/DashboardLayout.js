import DashboardSidebar from "./DashboardSidebar";

export default function DashboardLayout({ title, subtitle, children }) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        display: "flex",
      }}
    >
      <DashboardSidebar />

      <section style={{ flex: 1, minWidth: 0 }}>
        <header
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            padding: "28px 32px",
            background: "rgba(10,10,10,0.92)",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "42px", fontWeight: "800" }}>{title}</h1>
          {subtitle && (
            <p style={{ margin: "10px 0 0", color: "rgba(255,255,255,0.68)", lineHeight: 1.7, maxWidth: "850px" }}>
              {subtitle}
            </p>
          )}
        </header>

        <div style={{ padding: "32px" }}>{children}</div>
      </section>
    </main>
  );
}
