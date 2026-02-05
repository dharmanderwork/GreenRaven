import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Tricker from "@/components/Tricker";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-slate-900">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Tricker />
        <Footer />
      </body>
    </html>
  );
}
