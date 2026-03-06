"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("Domů", "Home") },
    { href: "/o-mne", label: t("O mně", "About") },
    {
      href: "/portfolio",
      label: "Portfolio",
      submenu: [
        { href: "/portfolio/svatebni", label: t("Svatební", "Weddings") },
        { href: "/portfolio/predsvatebni", label: t("Předsvatební", "Pre-wedding") },
        { href: "/portfolio/rodinne", label: t("Rodinné", "Family") },
      ],
    },
    { href: "/analog", label: t("Analog", "Film") },
    { href: "/blog", label: "Blog" },
    { href: "/kontakt", label: t("Kontakt", "Contact") },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setPortfolioOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md shadow-sm ${
          isScrolled ? "py-2" : "py-2.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="group">
            <h1 className="font-serif text-lg md:text-xl tracking-wide transition-colors duration-300 text-warm-900">
              JAN ŠEDIVÝ
            </h1>
            <span className="text-[9px] tracking-[0.3em] uppercase transition-colors duration-300 text-warm-500">
              {t("Svatební fotograf", "Wedding Photographer")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setPortfolioOpen(true)}
                    onMouseLeave={() => setPortfolioOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`text-xs tracking-wider uppercase transition-colors duration-300 hover:text-brand text-warm-700 ${pathname.startsWith(link.href) && link.href !== "/" ? "text-brand" : ""}`}
                    >
                      {link.label}
                    </Link>
                    <AnimatePresence>
                      {portfolioOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[180px]"
                        >
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-4 py-2 text-sm text-warm-700 hover:text-brand hover:bg-warm-50 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-xs tracking-wider uppercase transition-colors duration-300 hover:text-brand text-warm-700 ${pathname === link.href ? "text-brand" : ""}`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === "cs" ? "en" : "cs")}
              className="flex items-center gap-1.5 text-xs tracking-wider uppercase text-warm-500 hover:text-brand transition-colors duration-300 ml-2 border border-warm-200 rounded-full px-3 py-1.5 hover:border-brand"
              aria-label={lang === "cs" ? "Switch to English" : "Přepnout do češtiny"}
              title={lang === "cs" ? "Switch to English" : "Přepnout do češtiny"}
            >
              {lang === "cs" ? (
                <>
                  <svg className="w-4 h-3 rounded-[2px] overflow-hidden" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
                    <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
                    <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
                    <g clipPath="url(#s)">
                      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
                      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                    </g>
                  </svg>
                  <span>EN</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-3 rounded-[2px] overflow-hidden" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="20" fill="#fff"/>
                    <rect y="20" width="60" height="20" fill="#D7141A"/>
                    <polygon points="0,0 30,20 0,40" fill="#11457E"/>
                  </svg>
                  <span>CZ</span>
                </>
              )}
            </button>
          </nav>

          {/* Mobile: Language + Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "cs" ? "en" : "cs")}
              className="flex items-center gap-1 text-[10px] tracking-wider uppercase text-warm-500 border border-warm-200 rounded-full px-2.5 py-1 hover:border-brand transition-colors"
              aria-label={lang === "cs" ? "Switch to English" : "Přepnout do češtiny"}
            >
              {lang === "cs" ? (
                <>
                  <svg className="w-3.5 h-2.5 rounded-[1px]" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
                    <clipPath id="sm"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
                    <clipPath id="tm"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
                    <g clipPath="url(#sm)">
                      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#tm)" stroke="#C8102E" strokeWidth="4"/>
                      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                    </g>
                  </svg>
                  EN
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-2.5 rounded-[1px]" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="20" fill="#fff"/>
                    <rect y="20" width="60" height="20" fill="#D7141A"/>
                    <polygon points="0,0 30,20 0,40" fill="#11457E"/>
                  </svg>
                  CZ
                </>
              )}
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex flex-col gap-1.5 p-2 z-50"
              aria-label="Menu"
            >
              <motion.span
                animate={isMobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-warm-800"
              />
              <motion.span
                animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-0.5 bg-warm-800"
              />
              <motion.span
                animate={isMobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-warm-800"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <div key={link.href} className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-2xl font-serif text-warm-800 hover:text-brand transition-colors"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.submenu && (
                      <div className="mt-2 flex flex-col gap-1">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="text-sm text-warm-500 hover:text-brand transition-colors"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-center text-sm text-warm-400"
              >
                <p>+420 607 586 833</p>
                <p>info@jan-sedivy.com</p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
