"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedElements";
import { useLanguage } from "@/context/LanguageContext";

const blogPosts = [
  {
    title: "Rodinné focení novorozených dvojčátek",
    excerpt: "U Markéty a Honzy bylo super, že v jejich krásném novém domě se fotilo skoro jako ve studiu. Děti byly ještě malinké, relativně klidné.",
    category: "Rodinné",
    href: "https://www.jan-sedivy.com/newborn-foceni-praha-rodinny-fotograf/",
  },
  {
    title: "Tajná žádost o ruku | Tuval & Eden",
    excerpt: "Tuval mi napsal jen dva dny předtím, než se rozhodl požádat Eden o ruku. Psal snad ještě z letiště v Izraeli. Všechno jsme domlouvali bleskově.",
    category: "Předsvatební",
    href: "https://www.jan-sedivy.com/tajna-zadost-o-ruku-v-praze-na-letne-s-tuvalem-a-eden/",
  },
  {
    title: "Zámek Bon Repos | Místo pro svatbu snů",
    excerpt: "Bon Repos se aktuálně řadí mezi ty absolutně TOP svatební místa v Česku. Fotit editorial na zámku byl původně jen bláznivý nápad.",
    category: "Editorial",
    href: "https://www.jan-sedivy.com/svatba-bon-repos/",
  },
  {
    title: "Focení na film a na digitál: Nikon vs Fujifilm",
    excerpt: "Koupil jsem si pořádný analogový foťák. Mám v záměru zařadit částečně i focení na film jako zpestření nabídky pro klienty.",
    category: "Portrétní",
    href: "https://www.jan-sedivy.com/foceni-na-film-a-na-digital-nikon-100f-vs-fujifilm-xt5/",
  },
  {
    title: "Svatba ve Ville Richter",
    excerpt: "Jak se dělá editorial? Vymyslí se koncept, udělá se moodboard a vše se vizuálně vyladí. My na to šli ale trochu jinak – lidštěji a reálněji.",
    category: "Editorial",
    href: "https://www.jan-sedivy.com/svatba-villa-richter/",
  },
  {
    title: "Statek Věžníkov | Svatba v přírodě",
    excerpt: "Kolik já už za těch let ve svatební fotografii objel statků, farem, mlýnů a dvorů? Statek Věžníkov je na našem trhu tak trochu novinka.",
    category: "Svatební",
    href: "https://www.jan-sedivy.com/statek-veznikov-svatba/",
  },
  {
    title: "Iveta a Matt | Svatba na Salabce",
    excerpt: "Iveta a Matt… A jejich nádherná svatba v pražské Salabce, což je jednak vinařství, jednak hotel, ale především luxusní restaurace.",
    category: "Svatební",
    href: "https://www.jan-sedivy.com/svatba-salabka-praha-svatebni-fotograf/",
  },
  {
    title: "V čem spočívá dokumentární styl focení svateb?",
    excerpt: "Elegance a čistota klasických svatebních fotografií je to, co mě k této práci původně přitáhlo, přesto miluji i dokumentární přístup.",
    category: "Svatební",
    href: "https://www.jan-sedivy.com/dokumentarni-svatebni-fotograf-praha-2/",
  },
  {
    title: "Jana a Igy | Česko-slovenská svatba",
    excerpt: "Tohle byla další krásná česko-slovenská veselka. Vše bylo navýsost elegantní, ale díky skvěle naladěným hostům také veselé.",
    category: "Svatební",
    href: "https://www.jan-sedivy.com/svatba-resort-green-valley/",
  },
  {
    title: "Veronika & Martin | Chateau St. Havel",
    excerpt: "Léto 2023 bylo bohaté na překrásně zdobené a elegantní svatby. Vše bylo elegantní, vkusné, ale nechyběla dobrá nálada.",
    category: "Svatební",
    href: "https://www.jan-sedivy.com/svatba-chateau-st-havel-veronika-martin/",
  },
  {
    title: "Retro svatební editorial",
    excerpt: "Dal jsem si pravidlo, že každý můj editorial bude na téma toho, co mě v danou dobu baví. Tentokrát jsme tedy ladili do stylu starších dob.",
    category: "Editorial",
    href: "https://www.jan-sedivy.com/retro-svatebni-editorial/",
  },
  {
    title: "Helča & Tom | Pavilon Grébovka",
    excerpt: "Helča a Tom jsou takoví moji typičtí klienti. Jsou veselí, usměvaví a svou svatbu si dělají úplně po svém. Žádná klišé.",
    category: "Svatební",
    href: "https://www.jan-sedivy.com/svatba-grebovka-praha/",
  },
];



export default function BlogPage() {
  const { t } = useLanguage();

  const categories = [t("Vše", "All"), t("Svatební", "Wedding"), t("Předsvatební", "Pre-wedding"), t("Editorial", "Editorial"), t("Rodinné", "Family"), t("Portrétní", "Portrait")];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <p className="text-sm tracking-[0.3em] uppercase text-warm-500 mb-4">
              {t("Blog svatebního fotografa", "Wedding photographer blog")}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-5xl md:text-7xl mb-6">
              {t("O co se s vámi chci podělit", "What I want to share with you")}
            </h1>
          </FadeIn>
          {/* Category filter */}
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 text-sm border border-warm-200 rounded-full text-warm-600 hover:bg-warm-800 hover:text-white hover:border-warm-800 transition-all cursor-pointer"
                >
                  {cat}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
            {blogPosts.map((post) => (
              <StaggerItem key={post.title}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 h-full flex flex-col">
                    <div className="p-8 flex flex-col flex-grow">
                      <span className="text-xs tracking-wider uppercase text-brand mb-3">
                        {post.category}
                      </span>
                      <h2 className="font-serif text-xl mb-3 group-hover:text-brand transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-warm-500 text-sm leading-relaxed flex-grow">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-4 text-sm text-warm-600 group-hover:text-brand transition-colors">
                        {t("Číst dál", "Read more")}
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
