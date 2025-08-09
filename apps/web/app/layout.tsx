import type { Metadata } from "next";
import "../public/css/bootstrap.min.css";
import "../public/css/bootstrap-icons.css";
import "../public/css/style.css";
import { Montserrat, Open_Sans } from "next/font/google";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  display: 'swap',
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "TugasKita - CV & Resume Builder Gratis dengan AI",
  description:
    "Buat CV profesional dan ATS-friendly hanya dalam hitungan menit. TugasKita membantu fresh graduate, pencari kerja, dan profesional mendapatkan pekerjaan impian dengan template gratis dan AI Scanner.",
  keywords: [
    "CV Builder Gratis",
    "Resume Builder Indonesia",
    "Template CV ATS",
    "Buat CV Online",
    "CV AI Scanner",
    "Cara buat CV profesional",
    "TugasKita",
  ],
  authors: [{ name: "TugasKita", url: "https://tugaskita.com" }],
  manifest: "/site.webmanifest",
  openGraph: {
    title: "TugasKita - CV & Resume Builder Gratis dengan AI",
    description:
      "Buat CV profesional dan ATS-friendly hanya dalam hitungan menit. TugasKita membantu fresh graduate, pencari kerja, dan profesional mendapatkan pekerjaan impian dengan template gratis dan AI Scanner.",
    url: "https://tugaskita.com",
    siteName: "TugasKita",
    images: [
      {
        url: "https://tugaskita.com/images/logo/tugaskita.png",
        width: 1200,
        height: 630,
        alt: "TugasKita CV Builder",
        type: "image/png",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tugaskita",
    title: "TugasKita - CV & Resume Builder Gratis dengan AI",
    description:
      "Buat CV profesional dan ATS-friendly hanya dalam hitungan menit.",
    images: ["https://tugaskita.com/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://tugaskita.com" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body 
        id="top" 
        className={`${montserrat.variable} ${openSans.variable}`}
        suppressHydrationWarning={true}
      >
        {children}

        <Script src="js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="js/jquery.sticky.js" strategy="afterInteractive" />
        <Script src="js/click-scroll.js" strategy="afterInteractive" />
        <Script src="js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}