import "./globals.css";

const siteUrl = "https://www.dinithrathnayaka.me";
const title = "Dinith Rathnayaka | Full-Stack Developer";
const description =
  "Portfolio of Dinith Rathnayaka, an Information Technology and Management undergraduate and full-stack developer.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Dinith Rathnayaka Portfolio",
  authors: [{ name: "Dinith Rathnayaka", url: siteUrl }],
  creator: "Dinith Rathnayaka",
  keywords: [
    "Dinith Rathnayaka",
    "full-stack developer",
    "web developer",
    "portfolio",
    "React",
    "Next.js",
    "Sri Lanka",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Dinith Rathnayaka",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f1115",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dinith Rathnayaka",
  url: siteUrl,
  jobTitle: "Full-Stack Developer",
  description,
  email: "mailto:dinithoshada2003@gmail.com",
  sameAs: [
    "https://github.com/dinithrathnayaka23",
    "https://medium.com/@dinithoshada2003",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
