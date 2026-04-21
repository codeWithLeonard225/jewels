import "./globals.css";
// import { AuthProvider } from "@/app/context/AuthContext";

export const metadata = {
  title: "Jewels Model Academy – Excellence in Education in Sierra Leone",
  description:
    "Jewels Model Academy provides quality education, strong moral values, and modern learning systems for pupils in Sierra Leone. Enroll today for a brighter future.",

  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },

  keywords: [
    "Jewels Model Academy",
    "School in Sierra Leone",
    "Private Schools in Sierra Leone",
    "Best Schools in Sierra Leone",
    "Primary School Freetown",
    "Secondary School Freetown",
    "Education Sierra Leone",
    "Academy in Sierra Leone",
    "School Portal Sierra Leone",
    "Jewels Model Learning",
  ],

  authors: [{ name: "Jewels Model Academy" }],
  creator: "Jewels Model Academy",
  publisher: "Jewels Model Academy",

  metadataBase: new URL("https://www.jewelsmodelacademy.sl"),
  applicationName: "Jewels Model Academy Portal",
  classification: "Educational Institution",

  robots: { index: true, follow: true },
  referrer: "strict-origin-when-cross-origin",

  alternates: {
    canonical: "https://www.jewelsmodelacademy.sl",
  },

  openGraph: {
    title: "Jewels Model Academy – Quality Education & Innovation",
    description:
      "A leading academy in Sierra Leone offering modern education, experienced teachers, and digital learning solutions for pupils.",
    url: "https://www.jewelsmodelacademy.sl",
    siteName: "Jewels Model Academy",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/school.jpg", // change if you have your own image
        width: 1200,
        height: 630,
        alt: "Jewels Model Academy Campus",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jewels Model Academy – Sierra Leone",
    description:
      "Empowering students with quality education, innovation, and digital learning systems.",
    images: ["/images/jewels.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6a0dad", // changed to a more unique academy color (purple feel)
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#6a0dad" />
        <meta name="color-scheme" content="light" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}