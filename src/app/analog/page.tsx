"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/AnimatedElements";
import { useLanguage } from "@/context/LanguageContext";

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



export default function AnalogPage() {
  const { t } = useLanguage();

  const faq = [
    {
      q: t("Jak fotky na analog objednáme?", "How do we order film photos?"),
      a: t("Možnost analogových fotek většinou probíráme na předsvatební schůzce nebo při výběru balíčku. Ale kdykoliv před svatbou mi můžete říct, že o film máte zájem.", "We usually discuss film photos at the pre-wedding meeting or when choosing a package. But anytime before the wedding, you can let me know you're interested in film."),
    },
    {
      q: t("Kolik ruliček doporučuješ?", "How many rolls do you recommend?"),
      a: t("Záleží na tom, kolik analogových fotek chcete. Každá rulička má 36 snímků. Na většinu svateb doporučuji 2-4 ruličky.", "It depends on how many film photos you want. Each roll has 36 frames. For most weddings, I recommend 2-4 rolls."),
    },
    {
      q: t("Jak se pak k fotkám z analogu dostaneme?", "How do we get the film photos?"),
      a: t("Filmy nechám vyvolat v profesionální laboratoři a skenovat ve vysokém rozlišení. Hotové fotky dostanete v on-line galerii spolu s digitálními.", "I have the films developed at a professional lab and scanned in high resolution. You'll receive the finished photos in an online gallery along with the digital ones."),
    },
  ];

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
              {t("Proč analog?", "Why film?")}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight text-shadow-hero">
              {t("Vítejte v zrnitém", "Welcome to the grainy")}
              <br />
              <span className="italic">{t("světě", "world")}</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mt-6 text-warm-300 max-w-xl leading-relaxed">
              {t("Fotím i na film", "I also shoot on film")}
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
                  {t("Digitál je přesný.", "Digital is precise.")}
                  <br />
                  <span className="italic text-brand">{t("Analog je osobní.", "Film is personal.")}</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-warm-600 leading-relaxed mb-6">
                  {t("Svatby focené na analog nejsou jen aktuální trend. Po více než dvaceti letech éry digitálních foťáků se ukazuje, že film má své nezaměnitelné kouzlo, které digitál nemůže nahradit.", "Film weddings are not just a trend. After more than twenty years of digital cameras, it turns out that film has an irreplaceable charm that digital cannot replicate.")}
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-warm-600 leading-relaxed mb-6">
                  {t("Digitální foťák umožní vyfotit neomezené množství fotek s dokonalým výsledkem. Film oproti tomu nabízí ještě větší autenticitu a půvabnou nedokonalost. Je opravdový, umělecký a má svůj specifický vibe.", "A digital camera allows unlimited photos with perfect results. Film, on the other hand, offers even more authenticity and charming imperfection. It is real, artistic, and has its own specific vibe.")}
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-warm-600 leading-relaxed">
                  {t("Analog si na svatbě šetřím jen na to nejlepší.", "I save film only for the very best moments at weddings.")}
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
              {t("Galerie z analogu", "Film Gallery")}
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
              {t("Chcete dát svým fotkám další rozměr?", "Want to add another dimension to your photos?")}
            </h2>
            <p className="text-center text-warm-500 mb-12">{t("Stačí říct", "Just say the word")}</p>
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
              {t("Jdeme do toho?", "Shall we do this?")}
            </h2>
            <Link
              href="/kontakt"
              className="inline-block rounded-full bg-warm-800 text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-warm-700 transition-colors"
            >
              {t("Napište mi", "Write me")}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
