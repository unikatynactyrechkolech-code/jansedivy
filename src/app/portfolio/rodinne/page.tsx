"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/AnimatedElements";
import { useLanguage } from "@/context/LanguageContext";



export default function RodinnePage() {
  const { t } = useLanguage();

  const packages = [
    {
      title: t("U vás doma, nebo venku", "At your home or outdoors"),
      description: t(
        "Nejčastější volba klientů. Zachytím vaši domácí atmosféru, nebo vyrazíme ven. S výběrem vhodné lokace vám rád poradím.",
        "The most popular choice. I'll capture your home atmosphere, or we'll go outside. I'll gladly help with location selection."
      ),
      features: [t("1 hodina focení", "1 hour session"), t("60+ fotek", "60+ photos"), t("Odevzdání do 14 dnů", "Delivery within 14 days"), t("On-line galerie", "Online gallery")],
      price: "4 500 Kč",
    },
    {
      title: t("Focení ve studiu", "Studio session"),
      description: t(
        "Pro ty, co chtějí studiový vibe. Doporučím vám skvělé studio s parádním světlem. V zimě ideální volba.",
        "For those who want a studio vibe. I'll recommend a great studio with beautiful light. Perfect for winter."
      ),
      features: [
        t("1 hodina focení", "1 hour session"),
        t("60+ fotek", "60+ photos"),
        t("Odevzdání do 14 dnů", "Delivery within 14 days"),
        t("On-line galerie", "Online gallery"),
        t("Pronájem studia zvlášť (~1000 Kč/h)", "Studio rental separate (~1000 CZK/h)"),
      ],
      price: t("4 500 Kč + studio", "4 500 CZK + studio"),
    },
    {
      title: t("Váš rodinný den", "Your family day"),
      description: t(
        "Zachytím neobyčejné chvíle vašeho běžného dne – vaření, hry, procházky. Rodinná reportáž na věky.",
        "I'll capture the extraordinary moments of your ordinary day – cooking, playing, walks. A family reportage for eternity."
      ),
      features: [t("3 hodiny focení", "3 hour session"), t("150+ fotek", "150+ photos"), t("Odevzdání do 14 dnů", "Delivery within 14 days"), t("On-line galerie", "Online gallery")],
      price: "9 000 Kč",
      highlight: true,
    },
  ];

  const faq = [
    {
      q: t("Proč bychom si měli vybrat právě tebe?", "Why should we choose you?"),
      a: t("Protože se mnou je focení pohoda a zábava. Nenutím nikoho do připravených póz a všechno nechávám plynout. Mám s focením rodin 10 let zkušeností a nic mě nepřekvapí. Umím při focení vás i děti uvolnit a rozesmát.", "Because with me, the shoot is fun and relaxed. I don't force anyone into prepared poses and let everything flow. I have 10 years of experience photographing families and nothing surprises me. I know how to help you and your kids relax and laugh."),
    },
    {
      q: t("Platí se k focení i náklady na dopravu?", "Are there any travel costs?"),
      a: t("Pokud budeme fotit v Praze nebo v jejím okolí, doprava je zdarma. Jestli vyhovuje, abych zajel někam dál, není problém, auto mám. Náklady na palivo pak domluvíme individuálně.", "If we're shooting in Prague or nearby, transportation is free. If you need me to travel further, no problem – I have a car. Fuel costs are arranged individually."),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://www.jan-sedivy.com/wp-content/uploads/2026/02/DSCF7392-2-e1770273575547.jpg"
          alt={t("Rodinné focení Praha", "Family Photography Prague")}
          fill
          className="object-cover object-[center_25%]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <FadeIn>
            <p className="text-sm tracking-[0.3em] uppercase text-white/80 mb-4 text-shadow-sm">
              {t("Rodinný fotograf Praha", "Family Photographer Prague")}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight text-shadow-hero">
              {t("Pojďme si focení", "Let's enjoy")}
              <br />
              <span className="italic">{t("hlavně užít", "the session")}</span>
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
                  {t("Buďte sví.", "Be yourselves.")}
                  <br />
                  {t("Bavte se.", "Have fun.")}{" "}
                  <span className="italic text-brand">{t("Užívejte si.", "Enjoy it.")}</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-warm-600 leading-relaxed mb-6 text-lg font-medium">
                  {t("To je můj přístup k rodinnému focení – hlavně ať je to zábava. Když si focení užíváte, můžu zachytit dokonalé momentky.", "That's my approach to family photography – above all, it should be fun. When you enjoy the session, I can capture perfect candid moments.")}
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-warm-600 leading-relaxed mb-8">
                  {t("Zapomeňme na zajeté standardy focení dětí. Asi proto, že i já mám dítě, fotím rodiny strašně rád. Všechno od těhotenství až po divoké běsnění sourozenců na hřišti. A mám s tím už opravdu hodně zkušeností.", "Let's forget the old standards of kids photography. Maybe because I have a child myself, I love photographing families. Everything from pregnancy to wild sibling play at the park. And I have a lot of experience with it.")}
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link
                  href="/kontakt"
                  className="inline-block rounded-full bg-warm-800 text-white px-8 py-3 text-sm tracking-wider uppercase hover:bg-warm-700 transition-colors"
                >
                  {t("Kontakt", "Contact")}
                </Link>
              </FadeIn>
            </div>
            <FadeIn direction="left">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[2/3] overflow-hidden rounded-sm">
                  <Image
                    src="https://www.jan-sedivy.com/wp-content/uploads/2026/02/i-z7HxR4v-X2.jpg"
                    alt={t("Rodinné focení", "Family photography")}
                    width={400}
                    height={600}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <div className="aspect-[2/3] overflow-hidden rounded-sm mt-8">
                  <Image
                    src="https://www.jan-sedivy.com/wp-content/uploads/2026/02/Cesnekovi_2048-31-825x550-1-768x512.jpg"
                    alt={t("Rodinné focení Praha", "Family photography Prague")}
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
                {t("Rodinné balíčky", "Family packages")}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">{t("Co vám sedí nejlíp?", "What suits you best?")}</h2>
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
                      {t("Nejoblíbenější", "Most popular")}
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
                      {t("Rezervovat", "Book now")}
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
              „{t("Děkujeme za nádherné fotky! Úprava, barvy a styl fotek je top! Dojaly nás a zároveň rozesmály. Pokud bychom si mohli vybrat znovu, tak znovu a znovu tebe!", "Thank you for the gorgeous photos! The editing, colors and style are top! They moved us and made us laugh at the same time. If we could choose again, we'd choose you again and again!")}“
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
              {t("Časté dotazy", "FAQ")}
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
              {t("Tak pojďme do toho", "Let's get started")}
            </h2>
            <p className="text-warm-600 mb-8">
              {t("Nejdřív mi prosím napište zprávu. Domluvíme termín a poradím vám s výběrem místa i oblečení.", "Please send me a message first. We'll agree on a date and I'll advise you on location and outfits.")}
            </p>
            <Link
              href="/kontakt"
              className="inline-block rounded-full bg-warm-800 text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-warm-700 transition-colors"
            >
              {t("Kontakt", "Contact")}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
