"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Domů" },
  { href: "/o-mne", label: "O mně" },
  {
    href: "/portfolio",
    label: "Portfolio",
    submenu: [
      { href: "/portfolio/svatebni", label: "Svatební" },
      { href: "/portfolio/predsvatebni", label: "Předsvatební" },
      { href: "/portfolio/rodinne", label: "Rodinné" },
    ],
  },
  { href: "/analog", label: "Analog" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const pathname = usePathname();

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
            <h1
              className="font-serif text-lg md:text-xl tracking-wide transition-colors duration-300 text-warm-900"
            >
              JAN ŠEDIVÝ
            </h1>
            <span
              className="text-[9px] tracking-[0.3em] uppercase transition-colors duration-300 text-warm-500"
            >
              Svatební fotograf
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
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
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
