"use client"

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Animations/Reveal";
import { ArrowRight, Star, CheckCircle2, Search, BarChart3, Globe, Mail, Code2, Smartphone, Megaphone, Palette } from "lucide-react";
import Link from "next/link";
import { ProposalModal } from "@/components/ProposalModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      {/* Trust Bar */}
      {/* <section className="py-6 md:py-12 border-y border-gray-100 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-12 opacity-60">
        </div>
      </section> */}

      {/* Solutions Grid */}
      <section className="py-12 md:py-20 px-6 bg-[#f8faff]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10 md:mb-24">
            <Reveal width="100%">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#212529] mb-4 md:mb-6 leading-tight">
                Complete Digital Solutions
              </h2>
            </Reveal>
            <Reveal delay={0.1} width="100%">
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From stunning designs to powerful code and strategic marketing, we provide everything you need to scale your business.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {[
              { icon: Code2, title: "Web Development", href: "/development/web-development", desc: "Fast, responsive, and custom-built websites that turn visitors into customers." },
              { icon: Smartphone, title: "App Development", href: "/development/app-development", desc: "Top-tier mobile applications engineered for flawless user experiences." },
              { icon: Megaphone, title: "Digital Marketing", href: "/marketing/digital-marketing", desc: "Data-driven strategies designed to reach your audience and boost revenue." },
              { icon: Palette, title: "Graphic Designing", href: "/design/graphic-design", desc: "Eye-catching visuals and branding that make you stand out from the competition." },
              { icon: Mail, title: "Email Marketing", href: "/marketing/email-marketing", desc: "Smart automation systems to nurture leads and drive repeat sales." },
              { icon: Search, title: "SEO Services", href: "/marketing/seo", desc: "Proven techniques to rank #1 on Google and attract organic traffic." }
            ].map((service, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link href={service.href} className="group relative block bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden h-full">
                  {/* Hover Gradient Border Effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#004c8c] mb-6 group-hover:bg-[#004c8c] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                      <service.icon size={32} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-[#212529] group-hover:text-[#004c8c] transition-colors">{service.title}</h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-8 opacity-90 group-hover:opacity-100 transition-opacity">
                      {service.desc}
                    </p>

                    <div className="flex items-center text-[#004c8c] text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                      Learn More <ArrowRight size={16} className="ml-2 group-hover:text-[#f68d2e] transition-colors" />
                    </div>
                  </div>

                  {/* Gentle background wash on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 md:py-32 px-6 bg-[#004c8c] text-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight md:leading-[1.1] mb-6 md:mb-8">
              Your Vision, Engineered for Velocity.
            </h2>
            <div className="space-y-4 md:space-y-6">
              {[
                "Rapid deployment without technical debt",
                "Design that captures investors and users alike",
                "Marketing engines built for exponential growth",
                "Deep ecosystem expertise across all digital frontiers"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-base md:text-lg font-medium">
                  <CheckCircle2 className="text-[#f68d2e] shrink-0 w-5 h-5 md:w-6 md:h-6" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 md:mt-12">
              <button onClick={() => setIsModalOpen(true)} className="btn-sarpyx btn-action py-4 px-8 md:py-5 md:px-10 text-base md:text-lg w-full md:w-auto text-center inline-flex justify-center">
                Start Your Transformation <ArrowRight className="ml-3 w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-10">
            <div className="p-6 md:p-12 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 text-center">
              <div className="text-3xl md:text-6xl font-black mb-2">100%</div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#f68d2e]">Commitment</p>
            </div>
            <div className="p-6 md:p-12 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 text-center">
              <div className="text-3xl md:text-6xl font-black mb-2">24/7</div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#f68d2e]">Support</p>
            </div>
            <div className="p-6 md:p-12 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 text-center">
              <div className="text-3xl md:text-6xl font-black mb-2">ROI</div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#f68d2e]">Focused</p>
            </div>
            <div className="p-6 md:p-12 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 text-center">
              <div className="text-3xl md:text-6xl font-black mb-2">Best</div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#f68d2e]">Practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-[#212529] mb-6 md:mb-10 leading-tight">
            Ready to grow your revenue <br />
            <span className="text-[#004c8c]">starting today?</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-500 mb-10 md:mb-16 font-medium">
            Partner with us to build digital experiences that drive real, measurable growth for your business.
          </p>
          <button onClick={() => setIsModalOpen(true)} className="btn-sarpyx btn-action py-4 px-8 md:py-6 md:px-16 text-lg md:text-2xl shadow-2xl w-full md:w-auto inline-flex justify-center items-center">
            Get My Free Proposal <ArrowRight className="ml-4 w-5 h-5 md:w-8 md:h-8" />
          </button>
          <div className="mt-10 md:mt-16 flex items-center justify-center gap-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 text-[#f68d2e] fill-[#f68d2e]" />
            ))}
            <span className="text-base md:text-lg font-bold text-[#212529] ml-2">Dedicated to your success</span>
          </div>
        </div>
      </section>

      <Footer />
      <ProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
