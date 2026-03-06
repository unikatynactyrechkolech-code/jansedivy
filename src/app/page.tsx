"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  FadeIn,
  ParallaxImage,
  TextReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedElements";

const heroImages = [
  "https://www.jan-sedivy.com/wp-content/uploads/2025/11/DSCF1415-scaled.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2025/12/DSCF1300-2.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2026/02/DSCF2064.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2025/12/DSCF5671-768x1151.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2025/11/DSCF5498-768x512.jpg",
];

const portfolioCategoriesData = [
  {
    titleCs: "Svatební",
    titleEn: "Weddings",
    href: "/portfolio/svatebni",
    image:
      "https://www.jan-sedivy.com/wp-content/uploads/2025/12/DSCF5671-768x1151.jpg",
  },
  {
    titleCs: "Předsvatební",
    titleEn: "Pre-wedding",
    href: "/portfolio/predsvatebni",
    image:
      "https://www.jan-sedivy.com/wp-content/uploads/2026/02/DSCF8049-2-768x1152.jpg",
  },
  {
    titleCs: "Rodinné",
    titleEn: "Family",
    href: "/portfolio/rodinne",
    image:
      "https://www.jan-sedivy.com/wp-content/uploads/2026/02/i-z7HxR4v-X2.jpg",
  },
];

const galleryImages = [
  "https://www.jan-sedivy.com/wp-content/uploads/2026/02/DSCF9412-768x1152.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2024/11/DSCF4074-e1732481826771-768x1152.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2025/04/img_09-1-1-768x1159.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2026/01/i-KkR9cmm-X2-768x1152.jpg",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const { t } = useLanguage();

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 4500);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background carousel */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImage]}
              alt={t("Svatební fotograf Praha", "Wedding Photographer Prague")}
              fill
              className="object-cover object-[center_25%]"
              priority
              unoptimized
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay (always visible) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/65 z-[1]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight text-shadow-hero"
          >
            {t("Vaše svatba", "Your Wedding")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-serif text-2xl md:text-3xl text-white/90 italic mb-2 text-shadow-hero"
          >
            {t("elegantně & dokumentárně", "elegant & documentary")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-10"
          >
            <Link
              href="/kontakt"
              className="rounded-full bg-black/80 backdrop-blur-sm text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-black transition-all duration-500"
            >
              {t("Mám zájem", "I'm interested")}
            </Link>
          </motion.div>

          {/* Carousel indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2"
          >
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  i === currentImage
                    ? "bg-white w-6"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`${t("Obrázek", "Image")} ${i + 1}`}
              />
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-white/40 rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Promise Section */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <FadeIn>
                <p className="text-sm tracking-[0.3em] uppercase text-warm-500 mb-4">
                  {t("Slibuji vám", "My promise")}
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
                  {t("Že fotky ode mě budou působit", "Your photos will feel")}{" "}
                  <span className="italic text-brand">{t("naprosto přirozeně", "completely natural")}</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-warm-600 leading-relaxed mb-6">
                  {t("Jestli si mě vyberete jako svého svatebního fotografa, zapadnu mezi svatebčany tak, jako bych byl jeden z vás. Fotky vám vykouzlí úsměv nejen při předání, ale hlavně po letech.", "If you choose me as your wedding photographer, I will blend in with your guests as if I were one of you. Your photos will bring a smile not only when delivered, but especially years later.")}
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-warm-600 leading-relaxed mb-8">
                  {t("V den svatby o mně nebudete skoro vědět. Nenápadně zachytím atmosféru vašeho dne. Za řadu let jsem vyfotil přes sto svateb a vím, kdy přijde exploze emocí – ten nejlepší okamžik pro zmáčknutí spouště.", "On your wedding day, you will barely notice me. I will discreetly capture the atmosphere of your day. Over the years, I have photographed over a hundred weddings and I know when the explosion of emotions is coming – the best moment to press the shutter.")}
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <Link
                  href="/o-mne"
                  className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-warm-700 hover:text-brand transition-colors group"
                >
                  {t("Chci se dozvědět víc", "Learn more")}
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </FadeIn>
            </div>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <ParallaxImage
                  src="https://www.jan-sedivy.com/wp-content/uploads/2025/11/DSCF5498-768x512.jpg"
                  alt={t("Svatební fotograf Praha", "Wedding Photographer Prague")}
                  className="aspect-[4/3] rounded-sm"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-64 rounded-sm overflow-hidden shadow-2xl hidden md:block">
                  <Image
                    src="https://www.jan-sedivy.com/wp-content/uploads/2024/11/DSCF4074-e1732481826771-768x1152.jpg"
                    alt={t("Svatba detail", "Wedding detail")}
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-4">
        <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:overflow-hidden">
          {galleryImages.map((img, i) => (
            <FadeIn key={i} delay={i * 0.15} className="flex-shrink-0 w-64 md:w-80 snap-start">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="w-64 md:w-80 aspect-[2/3] overflow-hidden rounded-sm"
              >
                <Image
                  src={img}
                  alt={`${t("Svatební fotografie", "Wedding photo")} ${i + 1}`}
                  width={320}
                  height={480}
                  className="w-full h-full object-cover object-top"
                  unoptimized
                />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-sm tracking-[0.3em] uppercase text-warm-500 mb-4">
                Portfolio
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl">
                {t("Moje práce", "My Work")}
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioCategoriesData.map((cat) => (
              <StaggerItem key={cat.titleCs}>
                <Link href={cat.href} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                    <Image
                      src={cat.image}
                      alt={t(cat.titleCs, cat.titleEn)}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-end p-8">
                      <div>
                        <h3 className="font-serif text-2xl text-white mb-1">
                          {t(cat.titleCs, cat.titleEn)}
                        </h3>
                        <span className="text-white/70 text-sm tracking-wider uppercase group-hover:text-white transition-colors">
                          {t("Zobrazit →", "View →")}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 md:py-36 px-6 bg-warm-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="aspect-square rounded-full overflow-hidden max-w-md mx-auto">
                  <Image
                    src="https://www.jan-sedivy.com/wp-content/uploads/2024/06/jaaaaaa.jpg"
                    alt="Jan Šedivý"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
              </div>
            </FadeIn>
            <div>
              <FadeIn>
                <p className="text-sm tracking-[0.3em] uppercase text-warm-500 mb-4">
                  {t("Kdo stojí za objektivem?", "Who's behind the lens?")}
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
                  {t("Ahoj,", "Hello,")}
                  <br />
                  {t("jsem Honza", "I'm Honza")}
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-warm-600 leading-relaxed mb-6">
                  {t("Miluji umění, sport, ale ze všeho nejvíc svého syna Toníka. Mám taky velké štěstí – moje práce je pro mě zábava.", "I love art, sports, but most of all my son Toník. I'm also very lucky – my work is pure joy for me.")}
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-warm-600 leading-relaxed mb-8">
                  {t("Chcete být na svatbě sví a mít tam fotografa, se kterým si sednete? Někoho, kdo vás nebude tlačit do strojených póz, ale naopak vás před foťákem uvolní? Pak jste na správné adrese.", "Do you want to be yourselves at your wedding and have a photographer you click with? Someone who won\'t push you into stiff poses but instead helps you relax in front of the camera? Then you\'re in the right place.")}
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/o-mne"
                    className="rounded-full bg-warm-800 text-white px-8 py-3 text-sm tracking-wider uppercase hover:bg-warm-700 transition-colors duration-300"
                  >
                    {t("Více o mně", "More about me")}
                  </Link>
                  <Link
                    href="/kontakt"
                    className="rounded-full border border-warm-300 text-warm-700 px-8 py-3 text-sm tracking-wider uppercase hover:bg-warm-800 hover:text-white hover:border-warm-800 transition-all duration-300"
                  >
                    {t("Kontakt", "Contact")}
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Film / Analog Section */}
      <section className="py-24 md:py-36 px-6 bg-warm-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <FadeIn>
                <p className="text-sm tracking-[0.3em] uppercase text-warm-400 mb-4">
                  {t("Chcete i analogové fotky?", "Want film photos too?")}
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
                  {t("Filmový", "Film")}
                  <br />
                  <span className="italic">{t("vibe", "vibes")}</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-warm-300 leading-relaxed mb-6">
                  {t("Na film zachytím vaše vzpomínky s ještě větší nostalgií. Svatby focené na analog nejsou jen aktuální trend – film má své nezaměnitelné kouzlo, které digitál nemůže nahradit.", "On film, I will capture your memories with even more nostalgia. Film weddings are not just a current trend – film has its own irreplaceable magic that digital cannot replicate.")}
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link
                  href="/analog"
                  className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-warm-300 hover:text-white transition-colors group"
                >
                  {t("Více o analogu", "More about film")}
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </FadeIn>
            </div>
            <FadeIn direction="left" delay={0.2}>
              <ParallaxImage
                src="https://www.jan-sedivy.com/wp-content/uploads/2026/02/1svatba_zamek_ratmerice-1536x1018.webp"
                alt={t("Analogová svatební fotografie", "Analog wedding photography")}
                className="aspect-[3/2] rounded-sm"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-sm tracking-[0.3em] uppercase text-warm-500 mb-8">
              {t("Milá slova", "Kind words")}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative">
              <span className="font-serif text-8xl text-warm-200 absolute -top-10 left-0">
                „
              </span>
              <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-warm-700 leading-relaxed italic px-8">
                {t("Fotky jsou absolutně přenádherné. Všichni jsou dojatí, včetně nás, to jsem přesně chtěla! A nejlepší bylo, že jsme o tobě vůbec nevěděli a ty nejhezčí fotky ze všech jsou opravdu momentky.", "The photos are absolutely gorgeous. Everyone is moved, including us, that's exactly what I wanted! And the best part was that we didn't even know about you and the most beautiful photos of all are truly candid moments.")}
              </blockquote>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="https://www.jan-sedivy.com/wp-content/uploads/2024/12/DSCF4187-2-e1735382919689.jpg"
                  alt="Vanda & David"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
              <div className="text-left">
                <p className="font-medium text-warm-800">Vanda & David</p>
                <p className="text-sm text-warm-500">Artisème, Praha</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
