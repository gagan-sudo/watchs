import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast"
import Navbar from "./layout/Navbar"; 
import Footer from "./layout/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Watchs",
  description: "Watchs is a site where you can ad your whatch free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className}  antialiased`}
      >
        <Toaster/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
