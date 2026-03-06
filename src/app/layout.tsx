import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CookieConsent from "@/components/CookieConsent";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Jan Šedivý | Svatební fotograf Praha",
  description:
    "Svatební fotograf Praha – elegantní, dokumentární a nadčasové fotografie. Předsvatební focení, rodinné focení, analog.",
  keywords:
    "svatební fotograf Praha, wedding photographer Prague, předsvatební focení, rodinné focení, analog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-stone-50 text-stone-900`}
      >
        <LanguageProvider>
          <Navigation />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
