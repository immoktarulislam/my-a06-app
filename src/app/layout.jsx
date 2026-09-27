import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html 
    lang="en"
    // data-theme="dark"
    >
      <body className="bg-[#071018]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}