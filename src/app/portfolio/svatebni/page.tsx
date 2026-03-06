"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedElements";
import { useLanguage } from "@/context/LanguageContext";

const weddings = [
  { title: "Občanská plovárna", couple: "Marina & Berto", href: "https://www.jan-sedivy.com/svatba-obcanska-plovarna-praha/", image: "https://www.jan-sedivy.com/wp-content/uploads/2025/11/DSCF5498-768x512.jpg" },
  { title: "Lake Como", couple: "Vivian & Michal", href: "https://www.jan-sedivy.com/svatba-lake-como-italie-svatebni-fotograf-jan-sedivy/", image: "https://www.jan-sedivy.com/wp-content/uploads/2025/12/DSCF1300-2.jpg" },
  { title: "Zámek Niměřice", couple: "Kateřina & Václav", href: "https://www.jan-sedivy.com/svatba-zamek-nimerice-svatebni-fotograf-jan-sedivy/", image: "https://www.jan-sedivy.com/wp-content/uploads/2026/02/DSCF2064.jpg" },
  { title: "Chateau St. Havel", couple: "Ling & Long", href: "https://www.jan-sedivy.com/svatba-chateau-st-havel-praha-svatebni-fotograf-jan-sedivy/", image: "https://www.jan-sedivy.com/wp-content/uploads/2026/02/DSCF9412-768x1152.jpg" },
  { title: "Pavilon Grébovka", couple: "Helča & Tom", href: "https://www.jan-sedivy.com/svatba-grebovka-praha/", image: "https://www.jan-sedivy.com/wp-content/uploads/2024/11/DSCF4074-e1732481826771-768x1152.jpg" },
  { title: "Hotel Mandarin Oriental", couple: "Veronika & Jiří", href: "https://www.jan-sedivy.com/gallery-hotel-mandarin-praha-svatba/", image: "https://www.jan-sedivy.com/wp-content/uploads/2025/12/DSCF5671-768x1151.jpg" },
  { title: "Artiséme Art Garden", couple: "Vanda & David", href: "https://www.jan-sedivy.com/svatba-artiseme-praha-svatebni-fotograf/", image: "https://www.jan-sedivy.com/wp-content/uploads/2025/11/DSCF1415-scaled.jpg" },
  { title: "Lví Dvůr, Pražský hrad", couple: "Vivian & Tonias", href: "https://www.jan-sedivy.com/svatba-lvi-dvur-praha-prazsky-hrad/", image: "https://www.jan-sedivy.com/wp-content/uploads/2026/01/i-KkR9cmm-X2-768x1152.jpg" },
  { title: "Letenský zámeček", couple: "Ivona & Samuel", href: "https://www.jan-sedivy.com/svatba-letensky-zamecek-praha-svatebni-fotograf-jan-sedivy/", image: "https://www.jan-sedivy.com/wp-content/uploads/2025/04/img_09-1-1-768x1159.jpg" },
];

export default function SvatebniPortfolioPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://www.jan-sedivy.com/wp-content/uploads/2025/12/DSCF1300-2.jpg"
          alt={t("Svatební příběhy", "Wedding Stories")}
          fill
          className="object-cover object-[center_25%]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <FadeIn>
            <p className="text-sm tracking-[0.3em] uppercase text-white/80 mb-4 text-shadow-sm">
              Portfolio
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-5xl md:text-7xl text-shadow-hero">{t("Svatební příběhy", "Wedding Stories")}</h1>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddings.map((wedding) => (
              <StaggerItem key={wedding.title}>
                <a
                  href={wedding.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                    <Image
                      src={wedding.image}
                      alt={wedding.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="font-serif text-xl text-white">{wedding.title}</h3>
                      <p className="text-white/70 text-sm">{wedding.couple}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-lg text-warm-800 group-hover:text-brand transition-colors">
                      {wedding.title}
                    </h3>
                    <p className="text-sm text-warm-500">{wedding.couple}</p>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="py-20 px-6 bg-warm-100">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-sm tracking-[0.3em] uppercase text-warm-500 mb-4">
              {t("Další galerie najdete", "Find more galleries")}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8">{t("Na mém blogu", "On my blog")}</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/blog"
              className="inline-block rounded-full bg-warm-800 text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-warm-700 transition-colors"
            >
              {t("Pročíst blog", "Read the blog")}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
