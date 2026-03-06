"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/AnimatedElements";

const packages = [
  {
    title: "U vás doma, nebo venku",
    description:
      "Nejčastější volba klientů. Zachytím vaši domácí atmosféru, nebo vyrazíme ven. S výběrem vhodné lokace vám rád poradím.",
    features: ["1 hodina focení", "60+ fotek", "Odevzdání do 14 dnů", "On-line galerie"],
    price: "4 500 Kč",
  },
  {
    title: "Focení ve studiu",
    description:
      "Pro ty, co chtějí studiový vibe. Doporučím vám skvělé studio s parádním světlem. V zimě ideální volba.",
    features: [
      "1 hodina focení",
      "60+ fotek",
      "Odevzdání do 14 dnů",
      "On-line galerie",
      "Pronájem studia zvlášť (~1000 Kč/h)",
    ],
    price: "4 500 Kč + studio",
  },
  {
    title: "Váš rodinný den",
    description:
      "Zachytím neobyčejné chvíle vašeho běžného dne – vaření, hry, procházky. Rodinná reportáž na věky.",
    features: ["3 hodiny focení", "150+ fotek", "Odevzdání do 14 dnů", "On-line galerie"],
    price: "9 000 Kč",
    highlight: true,
  },
];

const faq = [
  {
    q: "Proč bychom si měli vybrat právě tebe?",
    a: "Protože se mnou je focení pohoda a zábava. Nenutím nikoho do připravených póz a všechno nechávám plynout. Mám s focením rodin 10 let zkušeností a nic mě nepřekvapí. Umím při focení vás i děti uvolnit a rozesmát.",
  },
  {
    q: "Platí se k focení i náklady na dopravu?",
    a: "Pokud budeme fotit v Praze nebo v jejím okolí, doprava je zdarma. Jestli vyhovuje, abych zajel někam dál, není problém, auto mám. Náklady na palivo pak domluvíme individuálně.",
  },
];

export default function RodinnePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://www.jan-sedivy.com/wp-content/uploads/2026/02/DSCF7392-2-e1770273575547.jpg"
          alt="Rodinné focení Praha"
          fill
          className="object-cover object-[center_25%]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <FadeIn>
            <p className="text-sm tracking-[0.3em] uppercase text-white/80 mb-4 text-shadow-sm">
              Rodinný fotograf Praha
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight text-shadow-hero">
              Pojďme si focení
              <br />
              <span className="italic">hlavně užít</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <FadeIn>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
                  Buďte sví.
                  <br />
                  Bavte se.{" "}
                  <span className="italic text-brand">Užívejte si.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-warm-600 leading-relaxed mb-6 text-lg font-medium">
                  To je můj přístup k rodinnému focení – hlavně ať je to zábava.
                  Když si focení užíváte, můžu zachytit dokonalé momentky.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-warm-600 leading-relaxed mb-8">
                  Zapomeňme na zajeté standardy focení dětí. Asi proto, že i já
                  mám dítě, fotím rodiny strašně rád. Všechno od těhotenství až
                  po divoké běsnění sourozenců na hřišti. A mám s tím už opravdu
                  hodně zkušeností.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link
                  href="/kontakt"
                  className="inline-block rounded-full bg-warm-800 text-white px-8 py-3 text-sm tracking-wider uppercase hover:bg-warm-700 transition-colors"
                >
                  Kontakt
                </Link>
              </FadeIn>
            </div>
            <FadeIn direction="left">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[2/3] overflow-hidden rounded-sm">
                  <Image
                    src="https://www.jan-sedivy.com/wp-content/uploads/2026/02/i-z7HxR4v-X2.jpg"
                    alt="Rodinné focení"
                    width={400}
                    height={600}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <div className="aspect-[2/3] overflow-hidden rounded-sm mt-8">
                  <Image
                    src="https://www.jan-sedivy.com/wp-content/uploads/2026/02/Cesnekovi_2048-31-825x550-1-768x512.jpg"
                    alt="Rodinné focení Praha"
                    width={400}
                    height={600}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-warm-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-sm tracking-[0.3em] uppercase text-warm-500 mb-4">
                Rodinné balíčky
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">Co vám sedí nejlíp?</h2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div
                  className={`bg-white p-8 rounded-sm shadow-sm h-full flex flex-col ${
                    pkg.highlight ? "ring-2 ring-brand" : ""
                  }`}
                >
                  {pkg.highlight && (
                    <span className="text-xs tracking-wider uppercase text-brand font-medium mb-4">
                      Nejoblíbenější
                    </span>
                  )}
                  <h3 className="font-serif text-xl mb-3">{pkg.title}</h3>
                  <p className="text-warm-600 text-sm leading-relaxed mb-6 flex-grow">
                    {pkg.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="text-sm text-warm-500 flex items-center gap-2">
                        <span className="text-brand">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-warm-200 pt-6">
                    <p className="font-serif text-2xl text-brand mb-4">{pkg.price}</p>
                    <Link
                      href="/kontakt"
                      className="block text-center rounded-full bg-warm-800 text-white px-6 py-3 text-sm tracking-wider uppercase hover:bg-warm-700 transition-colors"
                    >
                      Rezervovat
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <blockquote className="font-serif text-xl md:text-2xl italic text-warm-700 leading-relaxed mb-6">
              „Děkujeme za nádherné fotky! Úprava, barvy a styl fotek je top!
              Dojaly nás a zároveň rozesmály. Pokud bychom si mohli vybrat
              znovu, tak znovu a znovu tebe!"
            </blockquote>
            <p className="text-warm-500 text-sm tracking-wider uppercase">
              — Martina
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-warm-100">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
              Časté dotazy
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {faq.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-sm shadow-sm">
                  <h3 className="font-serif text-lg mb-3 text-warm-800">
                    {item.q}
                  </h3>
                  <p className="text-warm-600 leading-relaxed">{item.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Tak pojďme do toho
            </h2>
            <p className="text-warm-600 mb-8">
              Nejdřív mi prosím napište zprávu. Domluvíme termín a poradím vám s
              výběrem místa i oblečení.
            </p>
            <Link
              href="/kontakt"
              className="inline-block rounded-full bg-warm-800 text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-warm-700 transition-colors"
            >
              Kontakt
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
