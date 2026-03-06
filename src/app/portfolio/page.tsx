"use client";

import Link from "next/link";
import { FadeIn } from "@/components/AnimatedElements";
import { useLanguage } from "@/context/LanguageContext";

export default function PortfolioPage() {
  const { t } = useLanguage();

  const categories = [
    {
      title: t("Svatební příběhy", "Wedding Stories"),
      description: t("Elegantní a dokumentární fotografie z více než sta svateb", "Elegant and documentary photography from over a hundred weddings"),
      href: "/portfolio/svatebni",
      image: "https://www.jan-sedivy.com/wp-content/uploads/2025/12/DSCF5671-768x1151.jpg",
    },
    {
      title: t("Předsvatební focení", "Pre-wedding Shoots"),
      description: t("Párové focení, zásnuby a tajné žádosti o ruku", "Couples sessions, engagements and secret proposals"),
      href: "/portfolio/predsvatebni",
      image: "https://www.jan-sedivy.com/wp-content/uploads/2026/02/DSCF8049-2-768x1152.jpg",
    },
    {
      title: t("Rodinné focení", "Family Photography"),
      description: t("Těhotenství, newborn, děti – zachytím vaše nejkrásnější chvíle", "Pregnancy, newborn, kids – I'll capture your most beautiful moments"),
      href: "/portfolio/rodinne",
      image: "https://www.jan-sedivy.com/wp-content/uploads/2026/02/i-z7HxR4v-X2.jpg",
    },
  ];

  return (
    <>
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-sm tracking-[0.3em] uppercase text-warm-500 mb-4">
                {t("Moje práce", "My Work")}
              </p>
              <h1 className="font-serif text-5xl md:text-7xl">Portfolio</h1>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <FadeIn key={cat.title} delay={i * 0.15}>
                <Link href={cat.href} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                  </div>
                  <h2 className="font-serif text-2xl text-warm-800 group-hover:text-brand transition-colors mb-2">
                    {cat.title}
                  </h2>
                  <p className="text-warm-500 text-sm">{cat.description}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
