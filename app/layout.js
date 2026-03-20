export const metadata = {
  title: "Fit Couple Club",
  description: "Train together. Eat better. Build your dream body solo or as a team.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          background: "#0a0a0a",
          color: "white",
        }}
      >
        {children}
      </body>
    </html>
  );
}
