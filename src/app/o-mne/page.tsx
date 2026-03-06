"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, ParallaxImage } from "@/components/AnimatedElements";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const venues = [
    { name: "Lake Como", location: t("Itálie, Villa Geno", "Italy, Villa Geno"), href: "https://www.jan-sedivy.com/svatba-lake-como-italie-svatebni-fotograf-jan-sedivy/" },
    { name: "Zámek Niměřice", location: t("Svatba Kateřiny & Václava", "Wedding of Kateřina & Václav"), href: "https://www.jan-sedivy.com/svatba-zamek-nimerice-svatebni-fotograf-jan-sedivy/" },
    { name: t("Občanská plovárna", "Občanská Plovárna"), location: t("Praha, Svatba Mariny & Berta", "Prague, Wedding of Marina & Berto"), href: "https://www.jan-sedivy.com/en/vrtba-garden-prague-hotel-aria-wedding-photographer/" },
    { name: "Letenský zámeček", location: t("Praha, svatba Ivony & Samuela", "Prague, Wedding of Ivona & Samuel"), href: "https://www.jan-sedivy.com/svatba-letensky-zamecek-praha-svatebni-fotograf-jan-sedivy/" },
    { name: "Villa Richter", location: t("Praha, svatební editorial", "Prague, wedding editorial"), href: "https://www.jan-sedivy.com/svatba-villa-richter/" },
    { name: "Zámek Ratměřice", location: t("Oficiální fotograf", "Official photographer"), href: "https://www.jan-sedivy.com/svatba-zamek-ratmerice/" },
    { name: "Artisème Art Garden", location: t("Praha, Vanda & David", "Prague, Vanda & David"), href: "https://www.jan-sedivy.com/gallery-svatba-artiseme-praha/" },
    { name: "Hotel Mandarin Oriental", location: t("Praha, Veronika & Jiří", "Prague, Veronika & Jiří"), href: "https://www.jan-sedivy.com/gallery-hotel-mandarin-praha-svatba/" },
    { name: "Žofín Garden", location: t("Praha, Naty & Martin", "Prague, Naty & Martin"), href: "https://www.jan-sedivy.com/svatba-zofin-praha-natalie-a-martin-svatebni-fotograf-praha/" },
    { name: "Zámek Bon Repos", location: t("Stará Lysá, editorial", "Stará Lysá, editorial"), href: "https://www.jan-sedivy.com/svatba-bon-repos/" },
  ];

  const reviews = [
    { text: t("Dokonale jsi vystihl atmosféru našeho dne!", "You perfectly captured the atmosphere of our day!"), author: "Anna a Jirka" },
    { text: t("Musel jsi snad létat, jinak není možné, že jsi toho tolik zachytil.", "You must have been flying, otherwise it's impossible you captured so much."), author: "Viki a Míra" },
    { text: t("Nejvíce se nám líbí to množství momentek, které jsi vyfotil.", "What we love most is the number of candid moments you captured."), author: "Anička a Břéťa" },
    { text: t("Jsi ideální fotograf pro stydlíny jako jsme my. Dokonalé fotky, přitom jsme o tobě na svatbě skoro nevěděli.", "You're the ideal photographer for shy people like us. Perfect photos, yet we barely noticed you at the wedding."), author: "Lenka a Viktor" },
  ];

  const partners = [
    { name: t("Kvalitní fotky", "Quality Photos"), href: "https://www.kvalitnifotky.cz/blog/jak-na-lepsi-portrety/" },
    { name: "Pixin Gallery", href: "https://pixin.gallery/s-pixinem-je-predani-zakazky-zabava/" },
    { name: "MILE Magazine", href: "https://milemagazine.co/blogs/photo-video/jan-sedivy-1" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://www.jan-sedivy.com/wp-content/uploads/2026/01/i-qm3VXhQ-X2-e1767891264545.jpg"
          alt="Jan Šedivý"
          fill
          className="object-cover object-[center_25%]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <FadeIn>
            <p className="text-sm tracking-[0.3em] uppercase text-white/80 mb-4 text-shadow-sm">
              {t("Těší mě", "Nice to meet you")}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-5xl md:text-7xl text-shadow-hero">{t("jsem Honza", "I'm Honza")}</h1>
          </FadeIn>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <FadeIn>
                <p className="text-sm tracking-[0.3em] uppercase text-warm-500 mb-4">
                  {t("Nenápadný dokumentarista", "Unobtrusive documentarist")}
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-8">
                  {t("Táta, hudebník", "Dad, musician")}
                  <br />
                  <span className="italic">{t("a taky trochu sportovec", "and a bit of an athlete too")}</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-5 text-warm-600 leading-relaxed">
                  <p>
                    {t("V pražském vydavatelství jsem měl rozjetou úspěšnou kariéru šéfredaktora. Ale dal jsem přednost své největší vášni – svatebnímu focení.", "I had a successful career as an editor-in-chief at a Prague publishing house. But I chose my greatest passion – wedding photography.")}
                  </p>
                  <p>
                    {t("Mým největším koníčkem je hudba. Hraju na kytaru, občas dokonce i na svatbě. Pravidelně vystupujeme s mou přítelkyní zpěvačkou v několika pražských klubech.", "My biggest hobby is music. I play guitar, sometimes even at weddings. My girlfriend, a singer, and I regularly perform at several Prague clubs.")}
                  </p>
                  <p>
                    {t("Taky mě baví sport, nejvíc běh a posilování. Dvakrát jsem si střihnul maraton. A když se můj syn Toník dal na fotbal, i já si ten sport zamiloval.", "I also enjoy sports, especially running and working out. I've run two marathons. And when my son Toník took up football, I fell in love with the sport too.")}
                  </p>
                  <p>
                    {t("Na vaší svatbě chci být spíš kamarád, ne cizinec, co by vás při intimních chvílích rušil. Proto vás před ní zvu do mé oblíbené kavárny.", "At your wedding, I want to be more like a friend, not a stranger who would disturb your intimate moments. That's why I invite you to my favorite café beforehand.")}
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link
                  href="/kontakt"
                  className="inline-block mt-8 rounded-full bg-warm-800 text-white px-8 py-3 text-sm tracking-wider uppercase hover:bg-warm-700 transition-colors"
                >
                  {t("Pojďme na kafe", "Let's grab a coffee")}
                </Link>
              </FadeIn>
            </div>
            <FadeIn direction="left" delay={0.2}>
              <div className="space-y-6">
                <ParallaxImage
                  src="https://www.jan-sedivy.com/wp-content/uploads/2026/01/i-jKk4PpC-X3-e1767890409230.jpg"
                  alt="Jan Šedivý fotograf"
                  className="aspect-[3/4] rounded-sm"
                />
                <ParallaxImage
                  src="https://www.jan-sedivy.com/wp-content/uploads/2024/11/bracha-1-scaled-e1732535657101.jpg"
                  alt="Jan Šedivý"
                  className="aspect-[4/3] rounded-sm"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 md:py-36 px-6 bg-warm-100">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm tracking-[0.3em] uppercase text-warm-500 mb-4 text-center">
              {t("Co o mně říkají", "What they say about me")}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
              {t("Milá slova klientů", "Kind words from clients")}
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-sm shadow-sm">
                  <blockquote className="font-serif text-lg italic text-warm-700 leading-relaxed mb-4">
                    „{review.text}"
                  </blockquote>
                  <p className="text-sm font-medium text-warm-500 tracking-wider uppercase">
                    — {review.author}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Favorite Venues */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-sm tracking-[0.3em] uppercase text-warm-500 mb-4">
                {t("Má oblíbená svatební místa", "My favorite wedding venues")}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl">{t("Kde jsem už fotil", "Where I've photographed")}</h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <a
                  href={venue.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 border border-warm-200 rounded-sm hover:border-brand hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-serif text-xl text-warm-800 group-hover:text-brand transition-colors mb-1">
                    {venue.name}
                  </h3>
                  <p className="text-sm text-warm-500">{venue.location}</p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Big Testimonial */}
      <section className="py-24 md:py-36 px-6 bg-warm-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <blockquote className="font-serif text-xl md:text-3xl italic leading-relaxed text-warm-200">
              „{t("Zachytil jsi všechny důležité chvíle, emoce i momentky. Fotky nemají chybu! Úžasné. Díky za skvělé vzpomínky na jeden z našich nejdůležitějších dní. Máme radost, že jsme si vybrali právě Tebe.", "You captured all the important moments, emotions and candid shots. The photos are flawless! Amazing. Thank you for wonderful memories of one of our most important days. We're so glad we chose you.")}“
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-warm-400 tracking-wider uppercase text-sm">
              Veronika & Jiří
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-sm tracking-[0.3em] uppercase text-warm-500 mb-4">
              {t("Spolupráce", "Partners")}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">{t("Moji partneři", "My Partners")}</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-warm-600 leading-relaxed mb-12 max-w-2xl mx-auto">
              {t("Za řadu let se mi povedlo navázat spolupráci s mnoha skvělými kolegy. Díky partnerství nabízím klientům špičkové fotoknihy, on-line galerie a další výhody. Už téměř deset let fotím na profi techniku Fujifilm.", "Over the years, I've partnered with many great colleagues. Thanks to these partnerships, I offer clients top-quality photo books, online galleries, and other benefits. I've been shooting with professional Fujifilm equipment for nearly a decade.")}
            </p>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-warm-200 rounded-full text-warm-600 hover:text-brand hover:border-brand transition-all text-sm"
                >
                  {p.name}
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36 px-6 bg-warm-100">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-sm tracking-[0.3em] uppercase text-warm-500 mb-4">
              {t("Jdeme do toho?", "Shall we do this?")}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl mb-8">
              {t("A teď se rád něco dozvím zas já o vás", "Now I'd love to learn something about you")}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/kontakt"
              className="inline-block rounded-full bg-warm-800 text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-warm-700 transition-colors"
            >
              {t("Pojďme spolupracovat", "Let's work together")}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
