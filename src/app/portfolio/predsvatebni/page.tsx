"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/AnimatedElements";

export default function PredsvatebniPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://www.jan-sedivy.com/wp-content/uploads/2026/02/Svatebni-fotograf-praha_0747.jpg"
          alt="Předsvatební focení Praha"
          fill
          className="object-cover object-[center_25%]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <FadeIn>
            <p className="text-sm tracking-[0.3em] uppercase text-white/80 mb-4 text-shadow-sm">
              Předsvatebko & Zásnuby
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight text-shadow-hero">
              Nejde o pózy.
              <br />
              <span className="italic">Jde o vás dva.</span>
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
                  Smích, doteky, emoce
                  <br />
                  <span className="italic text-brand">
                    a fotky, ve kterých se poznáte
                  </span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-warm-600 leading-relaxed mb-6">
                  Při předsvatebním focení se skvěle poznáme a sladíme. Zvyknete
                  si na mě a na můj přístup. A taky budete mít další fotky, které
                  vás budou bavit i po letech a které můžete využít jako dekoraci
                  na svatbě nebo do svatebních tiskovin.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-warm-600 leading-relaxed">
                  Kromě předsvatebního a párového focení fotím i tajné žádosti o
                  ruku. Pomůžu s výběrem místa i průběhem, aby žádost působila
                  přirozeně a vy jste si ten okamžik mohli naplno užít.
                </p>
              </FadeIn>
            </div>
            <FadeIn direction="left">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[2/3] overflow-hidden rounded-sm">
                  <Image
                    src="https://www.jan-sedivy.com/wp-content/uploads/2026/02/DSCF8049-2-768x1152.jpg"
                    alt="Předsvatební focení"
                    width={400}
                    height={600}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <div className="aspect-[2/3] overflow-hidden rounded-sm mt-8">
                  <Image
                    src="https://www.jan-sedivy.com/wp-content/uploads/2026/02/Svatebni-fotograf-praha_0749.jpg"
                    alt="Zásnuby Praha"
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

      {/* Services */}
      <section className="py-24 px-6 bg-warm-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl">Vaše energie. Vaše láska.</h2>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Párové focení */}
            <FadeIn>
              <div className="bg-white p-10 rounded-sm shadow-sm">
                <h3 className="font-serif text-2xl mb-4">
                  Předsvatební a párové focení
                </h3>
                <p className="text-warm-600 leading-relaxed mb-6">
                  Pro focení je super vybrat lokaci, ke které máte vztah. Může
                  jít o místo, kde jste se poznali. Hlavní je uvolněná atmosféra
                  a dobrá nálada. Párové focení rád udělám všem zájemcům.
                </p>
                <div className="border-t border-warm-200 pt-6 mt-6">
                  <p className="font-serif text-3xl text-brand mb-2">4 500 Kč</p>
                  <ul className="text-sm text-warm-500 space-y-1">
                    <li>1 hodina focení</li>
                    <li>60+ fotek</li>
                    <li>On-line galerie</li>
                  </ul>
                </div>
                <Link
                  href="/kontakt"
                  className="inline-block mt-6 rounded-full bg-warm-800 text-white px-8 py-3 text-sm tracking-wider uppercase hover:bg-warm-700 transition-colors"
                >
                  Rezervovat
                </Link>
              </div>
            </FadeIn>

            {/* Tajná žádost */}
            <FadeIn delay={0.15}>
              <div className="bg-white p-10 rounded-sm shadow-sm">
                <h3 className="font-serif text-2xl mb-4">Tajná žádost o ruku</h3>
                <p className="text-warm-600 leading-relaxed mb-6">
                  Plánuješ tajnou žádost o ruku? Napiš mi a já ti rád se vším
                  poradím. Pojďme si dát on-line call, řeknu ti i tipy na skvělá
                  místa. Pak budu na místě připravený zvěčnit vše na fotkách
                  plných emocí.
                </p>
                <div className="border-t border-warm-200 pt-6 mt-6">
                  <p className="font-serif text-3xl text-brand mb-2">
                    od 6 000 Kč
                  </p>
                  <ul className="text-sm text-warm-500 space-y-1">
                    <li>On-line call s přípravou</li>
                    <li>60+ fotek</li>
                    <li>On-line galerie</li>
                  </ul>
                </div>
                <Link
                  href="/kontakt"
                  className="inline-block mt-6 rounded-full bg-warm-800 text-white px-8 py-3 text-sm tracking-wider uppercase hover:bg-warm-700 transition-colors"
                >
                  Rezervovat
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="https://www.jan-sedivy.com/wp-content/uploads/2026/02/DSCF3999-scaled-e1770629517408-300x300.jpg"
                  alt="Lucie Zavřelová"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
            </div>
            <blockquote className="font-serif text-xl md:text-2xl italic text-warm-700 leading-relaxed mb-6">
              „Honza je skvělý fotograf a především veliký sympaťák. Cítili jsme
              se přirozeně, nebylo nic nuceného a nepříjemného."
            </blockquote>
            <p className="text-warm-500 text-sm tracking-wider uppercase">
              Lucie Zavřelová — Nevěsta
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-warm-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              Pojďme do toho společně
            </h2>
            <Link
              href="/kontakt"
              className="inline-block rounded-full border border-white/30 text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-white hover:text-warm-900 transition-all duration-500"
            >
              Kontakt
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
