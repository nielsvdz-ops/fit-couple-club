
export const metadata = {
  title: "Fit Couple Club",
  description: "Elite fitness, nutrition & lifestyle platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
