"use client"

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Animations/Reveal";
import { ArrowRight, Star, CheckCircle2, Search, BarChart3, Globe, Mail, Code2, Smartphone, Megaphone, Palette } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      {/* Trust Bar */}
      <section className="py-6 md:py-12 border-y border-gray-100 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-12 opacity-60">
          <span className="text-lg md:text-xl font-black italic text-gray-400">FORTUNE 500</span>
          <span className="text-lg md:text-xl font-black italic text-gray-400">COCA-COLA</span>
          <span className="text-lg md:text-xl font-black italic text-gray-400">AMAZON</span>
          <span className="text-lg md:text-xl font-black italic text-gray-400">MICROSOFT</span>
          <span className="text-lg md:text-xl font-black italic text-gray-400">GOOGLE</span>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 md:py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10 md:mb-24">
            <Reveal width="100%">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#212529] mb-4 md:mb-6 leading-tight">
                Digital Marketing Solutions that Drive Revenue
              </h2>
            </Reveal>
            <Reveal delay={0.1} width="100%">
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our team of 500+ experts can help you achieve your business goals with data-driven strategies.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {[
              { icon: Code2, title: "Web Development", desc: "Build high-performance, scalable websites tailored to your business needs." },
              { icon: Smartphone, title: "App Development", desc: "Create seamless mobile experiences for iOS and Android platforms." },
              { icon: Megaphone, title: "Digital Marketing", desc: "Drive growth with comprehensive strategies across all digital channels." },
              { icon: Palette, title: "Graphic Designing", desc: "Captivate your audience with stunning visuals and brand identity design." },
              { icon: Mail, title: "Email Marketing", desc: "Engage and convert your audience with personalized email campaigns and automation." },
              { icon: Search, title: "SEO Services", desc: "Boost your visibility and rank higher on search engines with data-driven SEO." }
            ].map((service, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden h-full">
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
                </div>
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
              Everything we do is focused on driving revenue.
            </h2>
            <div className="space-y-4 md:space-y-6">
              {[
                "Proprietary technology to track and grow ROI",
                "500+ digital marketing experts on your team",
                "Data-backed decisions, not guesses",
                "Over 25 years of experience in the industry"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-base md:text-lg font-medium">
                  <CheckCircle2 className="text-[#f68d2e] shrink-0 w-5 h-5 md:w-6 md:h-6" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 md:mt-12">
              <Link href="/get-proposal" className="btn-webfx btn-action py-4 px-8 md:py-5 md:px-10 text-base md:text-lg w-full md:w-auto text-center inline-flex justify-center">
                See Our Results <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-10">
            <div className="p-6 md:p-12 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 text-center">
              <div className="text-3xl md:text-6xl font-black mb-2">1,027+</div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#f68d2e]">Projects Completed</p>
            </div>
            <div className="p-6 md:p-12 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 text-center">
              <div className="text-3xl md:text-6xl font-black mb-2">24M+</div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#f68d2e]">Leads Tracked</p>
            </div>
            <div className="p-6 md:p-12 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 text-center">
              <div className="text-3xl md:text-6xl font-black mb-2">93%</div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#f68d2e]">Client Retention</p>
            </div>
            <div className="p-6 md:p-12 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 text-center">
              <div className="text-3xl md:text-6xl font-black mb-2">500+</div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#f68d2e]">Experts On Staff</p>
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
            Join the 1,000+ companies that have partnered with us for industry-leading digital marketing services.
          </p>
          <Link href="/get-proposal" className="btn-webfx btn-action py-4 px-8 md:py-6 md:px-16 text-lg md:text-2xl shadow-2xl w-full md:w-auto inline-flex justify-center items-center">
            Get My Free Proposal <ArrowRight className="ml-4 w-5 h-5 md:w-8 md:h-8" />
          </Link>
          <div className="mt-10 md:mt-16 flex items-center justify-center gap-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 text-[#f68d2e] fill-[#f68d2e]" />
            ))}
            <span className="text-base md:text-lg font-bold text-[#212529] ml-2">4.9/5 from 1,000+ reviews</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
