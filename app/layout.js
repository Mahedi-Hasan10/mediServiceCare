import Script from "next/script";
import Footer from "./components/Footer";
import ContactSection from "./components/footerTop";
import Navbar from "./components/Navbar";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://mediservicecare.com";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Mediservicecare - Mediservice Care | Hospital Equipment and Services",
    template: "%s | Mediservicecare",
  },
  description: "Mediservicecare provides high-quality hospital equipment and services in Bangladesh. Contact us for the best healthcare solutions.",
  keywords: ["hospital equipment", "medical services", "mediservice care", "healthcare equipment Bangladesh"],
  authors: [{ name: "Mediservicecare Team" }],
  creator: "Mediservicecare",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Mediservicecare",
    title: "Mediservicecare - High-Quality Hospital Equipment & Services",
    description: "Mediservicecare provides high-quality hospital equipment and services. Explore our wide range of products.",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Mediservicecare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediservicecare - Hospital Equipment & Services",
    description: "High-quality medical equipment and services in Bangladesh.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.GOOGLE_SEARCH_CONSOLE_ID || "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  // JSON-LD for Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mediservicecare",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`, // Update with your actual logo path
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+880XXXXXXXXXX", // Update with your actual phone
      contactType: "customer service",
      areaServed: "BD",
      availableLanguage: ["en", "bn"],
    },
    sameAs: [
      "https://facebook.com/mediservicecare", // Update with actual links
      "https://twitter.com/mediservicecare",
      "https://linkedin.com/company/mediservicecare",
    ],
  };

  return (
    <html lang="en">
      <body className="">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Tag Manager (noscript) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        )}

        {/* Google Tag Manager (script) */}
        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}

        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
