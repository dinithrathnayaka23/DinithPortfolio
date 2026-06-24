import "./globals.css";

export const metadata = {
  title: "Dinith Rathnayaka | Full-Stack Developer",
  description:
    "Portfolio of Dinith Rathnayaka, an Information Technology and Management undergraduate and full-stack developer.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f1115",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
