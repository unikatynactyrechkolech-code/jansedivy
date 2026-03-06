"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-warm-900/10 border border-warm-200/60 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-warm-100 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-brand"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="font-serif text-lg text-warm-900 mb-1">
                  {t("Cookies & soukromí", "Cookies & Privacy")}
                </h3>
                <p className="text-warm-600 text-sm leading-relaxed">
                  {t(
                    "Tento web používá cookies pro zajištění nejlepšího zážitku a analýzu návštěvnosti. Pokračováním souhlasíte s jejich používáním.",
                    "This website uses cookies to ensure the best experience and analyze traffic. By continuing, you agree to their use."
                  )}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 flex-shrink-0 w-full md:w-auto">
                <button
                  onClick={handleDecline}
                  className="flex-1 md:flex-none rounded-full border border-warm-300 text-warm-600 px-5 py-2.5 text-xs tracking-wider uppercase hover:bg-warm-100 transition-colors duration-300"
                >
                  {t("Odmítnout", "Decline")}
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none rounded-full bg-warm-900 text-white px-6 py-2.5 text-xs tracking-wider uppercase hover:bg-warm-800 transition-colors duration-300"
                >
                  {t("Přijmout vše", "Accept All")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
