import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Belief Sparks | Igniting Thoughtful Faith Conversations",
  description: "A Christian portal designed to ignite thoughtful conversation about God, Christianity, Roman Catholicism, and faith in today’s world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-stone-50 text-stone-900`}
      >
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
