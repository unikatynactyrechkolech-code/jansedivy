"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/AnimatedElements";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    venue: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://www.jan-sedivy.com/wp-content/uploads/2025/11/DSCF1415-scaled.jpg"
          alt="Kontakt"
          fill
          className="object-cover object-top"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <FadeIn>
            <p className="text-sm tracking-[0.3em] uppercase text-white/80 mb-4 text-shadow-sm">
              Napište mi
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight text-shadow-hero">
              A vytvoříme spolu
              <br />
              <span className="italic">něco krásného</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left side – info */}
            <div>
              <FadeIn>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
                  Autenticky,
                  <br />
                  dokumentárně,
                  <br />
                  <span className="italic text-brand">nadčasově</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-warm-600 leading-relaxed mb-8">
                  Rád s vámi zajdu na kávu, abychom vše probrali osobně. Napište
                  mi a ozveme se zpět.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm tracking-wider uppercase text-warm-500 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@jan-sedivy.com"
                      className="text-lg text-warm-800 hover:text-brand transition-colors font-medium"
                    >
                      info@jan-sedivy.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm tracking-wider uppercase text-warm-500 mb-1">
                      Telefon
                    </p>
                    <a
                      href="tel:+420607586833"
                      className="text-lg text-warm-800 hover:text-brand transition-colors font-medium"
                    >
                      +420 607 586 833
                    </a>
                  </div>
                  <div>
                    <p className="text-sm tracking-wider uppercase text-warm-500 mb-1">
                      Sociální sítě
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://www.instagram.com/jansedivy_photographer/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warm-600 hover:text-brand transition-colors"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.facebook.com/JanSedivyPhotographer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warm-600 hover:text-brand transition-colors"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://www.youtube.com/@alisa_jan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warm-600 hover:text-brand transition-colors"
                      >
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-12 p-6 bg-warm-100 rounded-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="https://www.jan-sedivy.com/wp-content/uploads/2025/11/retus-1-1-e1769431459239-300x300.jpg"
                        alt="Jan Šedivý"
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                        unoptimized
                      />
                    </div>
                    <div>
                      <p className="font-serif text-lg">Jan Šedivý</p>
                      <p className="text-sm text-warm-500">
                        Svatební fotograf Praha
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right side – form */}
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm">
                <h3 className="font-serif text-2xl mb-6">Kontaktní formulář</h3>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="text-4xl mb-4">✓</div>
                    <h4 className="font-serif text-xl mb-2">Děkuji!</h4>
                    <p className="text-warm-500">
                      Zpráva byla odeslána. Ozvu se vám co nejdříve.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm text-warm-500 mb-1">
                        Jméno *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-warm-200 rounded-sm focus:outline-none focus:border-brand transition-colors bg-warm-50"
                        placeholder="Vaše jméno"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-warm-500 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-warm-200 rounded-sm focus:outline-none focus:border-brand transition-colors bg-warm-50"
                        placeholder="vas@email.cz"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-warm-500 mb-1">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-warm-200 rounded-sm focus:outline-none focus:border-brand transition-colors bg-warm-50"
                        placeholder="+420..."
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-warm-500 mb-1">
                          Datum svatby
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-warm-200 rounded-sm focus:outline-none focus:border-brand transition-colors bg-warm-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-warm-500 mb-1">
                          Místo
                        </label>
                        <input
                          type="text"
                          value={formData.venue}
                          onChange={(e) =>
                            setFormData({ ...formData, venue: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-warm-200 rounded-sm focus:outline-none focus:border-brand transition-colors bg-warm-50"
                          placeholder="Svatební místo"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-warm-500 mb-1">
                        Zpráva *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-warm-200 rounded-sm focus:outline-none focus:border-brand transition-colors bg-warm-50 resize-none"
                        placeholder="Napište mi o vaší svatbě, focení, nebo čemkoliv..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-warm-800 text-white py-4 text-sm tracking-wider uppercase hover:bg-warm-700 transition-colors"
                    >
                      Odeslat
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
