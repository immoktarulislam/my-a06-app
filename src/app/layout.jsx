import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    // data-theme="dark"
    >
      <body className="bg-[#071018]">
        <Navbar />
        <Footer />
        {children}
      </body>
    </html>
  );
}