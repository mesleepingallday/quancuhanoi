import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactNow from "@/components/ContactNow";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quán cũ Hà Nội",
  description: "Hà Nội cũ Phố cũ Bạn cũ Rượu cũ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative max-w-screen-2xl mx-auto h-screen bg-[#441b12]`}
      >
        <Header />
        {children}
        <ContactNow />
        <Footer />
      </body>
    </html>
  );
}
