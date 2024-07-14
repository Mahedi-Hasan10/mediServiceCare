import Footer from "./components/Footer";
import ContactSection from "./components/footerTop";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Medi Service Care",
  description: "Travel UI/UX for Camping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
