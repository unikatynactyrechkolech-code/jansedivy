"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedElements";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogPage() {
  const { t } = useLanguage();

  const blogPosts = [
    {
      title: t("Rodinné focení novorozených dvojčátek", "Family photoshoot of newborn twins"),
      excerpt: t("U Markéty a Honzy bylo super, že v jejich krásném novém domě se fotilo skoro jako ve studiu. Děti byly ještě malinké, relativně klidné.", "At Markéta and Honza's, the great thing was that their beautiful new home felt almost like a studio. The kids were still tiny, relatively calm."),
      category: t("Rodinné", "Family"),
      href: "https://www.jan-sedivy.com/newborn-foceni-praha-rodinny-fotograf/",
    },
    {
      title: t("Tajná žádost o ruku | Tuval & Eden", "Secret proposal | Tuval & Eden"),
      excerpt: t("Tuval mi napsal jen dva dny předtím, než se rozhodl požádat Eden o ruku. Psal snad ještě z letiště v Izraeli. Všechno jsme domlouvali bleskově.", "Tuval wrote to me just two days before he decided to propose to Eden. He was probably still at the airport in Israel. We arranged everything in a flash."),
      category: t("Předsvatební", "Pre-wedding"),
      href: "https://www.jan-sedivy.com/tajna-zadost-o-ruku-v-praze-na-letne-s-tuvalem-a-eden/",
    },
    {
      title: t("Zámek Bon Repos | Místo pro svatbu snů", "Château Bon Repos | A dream wedding venue"),
      excerpt: t("Bon Repos se aktuálně řadí mezi ty absolutně TOP svatební místa v Česku. Fotit editorial na zámku byl původně jen bláznivý nápad.", "Bon Repos currently ranks among the absolute TOP wedding venues in the Czech Republic. Shooting an editorial at the château was originally just a crazy idea."),
      category: "Editorial",
      href: "https://www.jan-sedivy.com/svatba-bon-repos/",
    },
    {
      title: t("Focení na film a na digitál: Nikon vs Fujifilm", "Film vs digital photography: Nikon vs Fujifilm"),
      excerpt: t("Koupil jsem si pořádný analogový foťák. Mám v záměru zařadit částečně i focení na film jako zpestření nabídky pro klienty.", "I bought a proper film camera. I plan to partially include film photography as an exciting addition to my client offerings."),
      category: t("Portrétní", "Portrait"),
      href: "https://www.jan-sedivy.com/foceni-na-film-a-na-digital-nikon-100f-vs-fujifilm-xt5/",
    },
    {
      title: t("Svatba ve Ville Richter", "Wedding at Villa Richter"),
      excerpt: t("Jak se dělá editorial? Vymyslí se koncept, udělá se moodboard a vše se vizuálně vyladí. My na to šli ale trochu jinak – lidštěji a reálněji.", "How do you create an editorial? You come up with a concept, make a moodboard and visually fine-tune everything. But we went about it differently – more human and real."),
      category: "Editorial",
      href: "https://www.jan-sedivy.com/svatba-villa-richter/",
    },
    {
      title: t("Statek Věžníkov | Svatba v přírodě", "Věžníkov Farm | Wedding in nature"),
      excerpt: t("Kolik já už za těch let ve svatební fotografii objel statků, farem, mlýnů a dvorů? Statek Věžníkov je na našem trhu tak trochu novinka.", "How many farms, mills and courtyards have I visited over the years in wedding photography? Věžníkov Farm is a bit of a newcomer on the market."),
      category: t("Svatební", "Wedding"),
      href: "https://www.jan-sedivy.com/statek-veznikov-svatba/",
    },
    {
      title: t("Iveta a Matt | Svatba na Salabce", "Iveta & Matt | Wedding at Salabka"),
      excerpt: t("Iveta a Matt… A jejich nádherná svatba v pražské Salabce, což je jednak vinařství, jednak hotel, ale především luxusní restaurace.", "Iveta and Matt… And their gorgeous wedding at Prague's Salabka, which is a winery, a hotel, and above all a luxury restaurant."),
      category: t("Svatební", "Wedding"),
      href: "https://www.jan-sedivy.com/svatba-salabka-praha-svatebni-fotograf/",
    },
    {
      title: t("V čem spočívá dokumentární styl focení svateb?", "What is documentary wedding photography?"),
      excerpt: t("Elegance a čistota klasických svatebních fotografií je to, co mě k této práci původně přitáhlo, přesto miluji i dokumentární přístup.", "The elegance and purity of classic wedding photos is what originally drew me to this work, yet I also love the documentary approach."),
      category: t("Svatební", "Wedding"),
      href: "https://www.jan-sedivy.com/dokumentarni-svatebni-fotograf-praha-2/",
    },
    {
      title: t("Jana a Igy | Česko-slovenská svatba", "Jana & Igy | Czech-Slovak wedding"),
      excerpt: t("Tohle byla další krásná česko-slovenská veselka. Vše bylo navýsost elegantní, ale díky skvěle naladěným hostům také veselé.", "This was another beautiful Czech-Slovak celebration. Everything was supremely elegant, but thanks to wonderfully spirited guests, also very fun."),
      category: t("Svatební", "Wedding"),
      href: "https://www.jan-sedivy.com/svatba-resort-green-valley/",
    },
    {
      title: t("Veronika & Martin | Chateau St. Havel", "Veronika & Martin | Château St. Havel"),
      excerpt: t("Léto 2023 bylo bohaté na překrásně zdobené a elegantní svatby. Vše bylo elegantní, vkusné, ale nechyběla dobrá nálada.", "Summer 2023 was rich with beautifully decorated and elegant weddings. Everything was tasteful, but good vibes were never missing."),
      category: t("Svatební", "Wedding"),
      href: "https://www.jan-sedivy.com/svatba-chateau-st-havel-veronika-martin/",
    },
    {
      title: t("Retro svatební editorial", "Retro wedding editorial"),
      excerpt: t("Dal jsem si pravidlo, že každý můj editorial bude na téma toho, co mě v danou dobu baví. Tentokrát jsme tedy ladili do stylu starších dob.", "I made a rule that every editorial of mine would be about whatever excites me at the time. This time we went for an older era style."),
      category: "Editorial",
      href: "https://www.jan-sedivy.com/retro-svatebni-editorial/",
    },
    {
      title: t("Helča & Tom | Pavilon Grébovka", "Helča & Tom | Grébovka Pavilion"),
      excerpt: t("Helča a Tom jsou takoví moji typičtí klienti. Jsou veselí, usměvaví a svou svatbu si dělají úplně po svém. Žádná klišé.", "Helča and Tom are my typical clients. They're cheerful, smiling, and do their wedding entirely their own way. No clichés."),
      category: t("Svatební", "Wedding"),
      href: "https://www.jan-sedivy.com/svatba-grebovka-praha/",
    },
  ];

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
