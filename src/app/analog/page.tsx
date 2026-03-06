"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/AnimatedElements";

const filmImages = [
  "https://www.jan-sedivy.com/wp-content/uploads/2026/01/img_11.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2026/01/img_14.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2026/01/img_18.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2026/01/img_23-2.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2026/01/img_27-2.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2026/01/img_28-1.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2026/01/img_30-3.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2026/01/img_31-1.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2026/01/img_34-3.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2026/01/img_09-1.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2026/01/img_26-1.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2026/01/img_30.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2026/01/img_02.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2026/01/img_23.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2025/04/img_02-2-scaled.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2025/04/img_01-1-scaled.jpg",
  "https://www.jan-sedivy.com/wp-content/uploads/2026/01/img_34.jpg",
];

const faq = [
  {
    q: "Jak fotky na analog objednáme?",
    a: "Možnost analogových fotek většinou probíráme na předsvatební schůzce nebo při výběru balíčku. Ale kdykoliv před svatbou mi můžete říct, že o film máte zájem.",
  },
  {
    q: "Kolik ruliček doporučuješ?",
    a: "Záleží na tom, kolik analogových fotek chcete. Každá rulička má 36 snímků. Na většinu svateb doporučuji 2-4 ruličky.",
  },
  {
    q: "Jak se pak k fotkám z analogu dostaneme?",
    a: "Filmy nechám vyvolat v profesionální laboratoři a skenovat ve vysokém rozlišení. Hotové fotky dostanete v on-line galerii spolu s digitálními.",
  },
];

export default function AnalogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] overflow-hidden bg-warm-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="https://www.jan-sedivy.com/wp-content/uploads/2026/02/1svatba_zamek_ratmerice-1536x1018.webp"
            alt="Svatební focení na film"
            fill
            className="object-cover object-[center_25%] opacity-70"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-900/60 via-warm-900/30 to-warm-900/80" />
        </motion.div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <FadeIn>
            <p className="text-sm tracking-[0.3em] uppercase text-warm-300 mb-4 text-shadow-sm">
              Proč analog?
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight text-shadow-hero">
              Vítejte v zrnitém
              <br />
              <span className="italic">světě</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mt-6 text-warm-300 max-w-xl leading-relaxed">
              Fotím i na film
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About Analog */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <FadeIn>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
                  Digitál je přesný.
                  <br />
                  <span className="italic text-brand">Analog je osobní.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-warm-600 leading-relaxed mb-6">
                  Svatby focené na analog nejsou jen aktuální trend. Po více než
                  dvaceti letech éry digitálních foťáků se ukazuje, že film má
                  své nezaměnitelné kouzlo, které digitál nemůže nahradit.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-warm-600 leading-relaxed mb-6">
                  Digitální foťák umožní vyfotit neomezené množství fotek s
                  dokonalým výsledkem. Film oproti tomu nabízí ještě větší
                  autenticitu a půvabnou nedokonalost. Je opravdový, umělecký a
                  má svůj specifický vibe.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-warm-600 leading-relaxed">
                  Analog si na svatbě šetřím jen na to nejlepší.
                </p>
              </FadeIn>
            </div>
            <FadeIn direction="left">
              <div className="aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="https://www.jan-sedivy.com/wp-content/uploads/2026/01/ezgif.com-optimize.gif"
                  alt="Focení svatby na analog"
                  width={500}
                  height={667}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Film Gallery */}
      <section className="py-24 px-6 bg-warm-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16">
              Galerie z analogu
            </h2>
          </FadeIn>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filmImages.map((img, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-sm break-inside-avoid"
                >
                  <Image
                    src={img}
                    alt={`Analogová fotografie ${i + 1}`}
                    width={400}
                    height={600}
                    className="w-full object-cover"
                    unoptimized
                  />
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
              Chcete dát svým fotkám další rozměr?
            </h2>
            <p className="text-center text-warm-500 mb-12">Stačí říct</p>
          </FadeIn>
          <div className="space-y-6">
            {faq.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-warm-100 p-8 rounded-sm">
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
      <section className="py-24 px-6 bg-warm-100">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              Jdeme do toho?
            </h2>
            <Link
              href="/kontakt"
              className="inline-block rounded-full bg-warm-800 text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-warm-700 transition-colors"
            >
              Napište mi
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
