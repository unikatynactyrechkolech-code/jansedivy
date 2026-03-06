"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, ParallaxImage } from "@/components/AnimatedElements";

const venues = [
  { name: "Lake Como", location: "Itálie, Villa Geno", href: "https://www.jan-sedivy.com/svatba-lake-como-italie-svatebni-fotograf-jan-sedivy/" },
  { name: "Zámek Niměřice", location: "Svatba Kateřiny & Václava", href: "https://www.jan-sedivy.com/svatba-zamek-nimerice-svatebni-fotograf-jan-sedivy/" },
  { name: "Občanská plovárna", location: "Praha, Svatba Mariny & Berta", href: "https://www.jan-sedivy.com/en/vrtba-garden-prague-hotel-aria-wedding-photographer/" },
  { name: "Letenský zámeček", location: "Praha, svatba Ivony & Samuela", href: "https://www.jan-sedivy.com/svatba-letensky-zamecek-praha-svatebni-fotograf-jan-sedivy/" },
  { name: "Villa Richter", location: "Praha, svatební editorial", href: "https://www.jan-sedivy.com/svatba-villa-richter/" },
  { name: "Zámek Ratměřice", location: "Oficiální fotograf", href: "https://www.jan-sedivy.com/svatba-zamek-ratmerice/" },
  { name: "Artiséme Art Garden", location: "Praha, Vanda & David", href: "https://www.jan-sedivy.com/gallery-svatba-artiseme-praha/" },
  { name: "Hotel Mandarin Oriental", location: "Praha, Veronika & Jiří", href: "https://www.jan-sedivy.com/gallery-hotel-mandarin-praha-svatba/" },
  { name: "Žofín Garden", location: "Praha, Naty & Martin", href: "https://www.jan-sedivy.com/svatba-zofin-praha-natalie-a-martin-svatebni-fotograf-praha/" },
  { name: "Zámek Bon Repos", location: "Stará Lysá, editorial", href: "https://www.jan-sedivy.com/svatba-bon-repos/" },
];

const reviews = [
  { text: "Dokonale jsi vystihl atmosféru našeho dne!", author: "Anna a Jirka" },
  { text: "Musel jsi snad létat, jinak není možné, že jsi toho tolik zachytil.", author: "Viki a Míra" },
  { text: "Nejvíce se nám líbí to množství momentek, které jsi vyfotil.", author: "Anička a Břéťa" },
  { text: "Jsi ideální fotograf pro stydlíny jako jsme my. Dokonalé fotky, přitom jsme o tobě na svatbě skoro nevěděli.", author: "Lenka a Viktor" },
];

const partners = [
  { name: "Kvalitní fotky", href: "https://www.kvalitnifotky.cz/blog/jak-na-lepsi-portrety/" },
  { name: "Pixin Gallery", href: "https://pixin.gallery/s-pixinem-je-predani-zakazky-zabava/" },
  { name: "MILE Magazine", href: "https://milemagazine.co/blogs/photo-video/jan-sedivy-1" },
];

export default function AboutPage() {
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
              Těší mě
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-5xl md:text-7xl text-shadow-hero">jsem Honza</h1>
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
                  Nenápadný dokumentarista
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-8">
                  Táta, hudebník
                  <br />
                  <span className="italic">a taky trochu sportovec</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-5 text-warm-600 leading-relaxed">
                  <p>
                    V pražském vydavatelství jsem měl rozjetou úspěšnou kariéru
                    šéfredaktora. Ale dal jsem přednost své největší vášni –
                    svatebnímu focení.
                  </p>
                  <p>
                    Mým největším koníčkem je hudba. Hraju na kytaru, občas
                    dokonce i na svatbě. Pravidelně vystupujeme s mou přítelkyní
                    zpěvačkou v několika pražských klubech.
                  </p>
                  <p>
                    Taky mě baví sport, nejvíc běh a posilování. Dvakrát jsem si
                    střihnul maraton. A když se můj syn Toník dal na fotbal, i já
                    si ten sport zamiloval.
                  </p>
                  <p>
                    Na vaší svatbě chci být spíš kamarád, ne cizinec, co by vás
                    při intimních chvílích rušil. Proto vás před ní zvu do mé
                    oblíbené kavárny.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link
                  href="/kontakt"
                  className="inline-block mt-8 rounded-full bg-warm-800 text-white px-8 py-3 text-sm tracking-wider uppercase hover:bg-warm-700 transition-colors"
                >
                  Pojďme na kafe
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
              Co o mně říkají
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
              Milá slova klientů
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
                Má oblíbená svatební místa
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl">Kde jsem už fotil</h2>
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
              „Zachytil jsi všechny důležité chvíle, emoce i momentky. Fotky
              nemají chybu! Úžasné. Díky za skvělé vzpomínky na jeden z našich
              nejdůležitějších dní. Máme radost, že jsme si vybrali právě Tebe."
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
              Spolupráce
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Moji partneři</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-warm-600 leading-relaxed mb-12 max-w-2xl mx-auto">
              Za řadu let se mi povedlo navázat spolupráci s mnoha skvělými
              kolegy. Díky partnerství nabízím klientům špičkové fotoknihy,
              on-line galerie a další výhody. Už téměř deset let fotím na profi
              techniku Fujifilm.
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
              Jdeme do toho?
            </p>
            <h2 className="font-serif text-3xl md:text-5xl mb-8">
              A teď se rád něco dozvím zas já o vás
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/kontakt"
              className="inline-block rounded-full bg-warm-800 text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-warm-700 transition-colors"
            >
              Pojďme spolupracovat
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
