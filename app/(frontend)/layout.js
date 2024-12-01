

import Head from "next/head";
import Footer from "../components/Footer";
import ContactSection from "../components/footerTop";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Mediservicecare - Mediservice Care | Hospital Equipment and Services",
  description: "Mediservicecare - Mediservice Care provides high-quality hospital equipment and services. Contact us for more information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="">
        <Navbar />
        <div className="relative overflow-hidden">{children}</div>
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
