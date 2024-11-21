import Head from "next/head";
import Footer from "./components/Footer";
import ContactSection from "./components/footerTop";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Mediservicecare - Mediservice Care | Hospital Equipment and Services",
  description: "Mediservicecare - Mediservice Care provides high-quality hospital equipment and services. Contact us for more information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>MedicareBD - Mediservice Care | Hospital Equipment and Services</title>
        <meta name="description" content="Mediservice Care - Mediservice Care provides high-quality hospital equipment and services. Contact us for more information." />
      </Head>
      <header>
        <h1>Welcome to Medi Service Care - Mediservice Care</h1>
      </header>
      <body className="">
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
