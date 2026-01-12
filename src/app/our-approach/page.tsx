"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Animations/Reveal"
import { ArrowRight, Target, Lightbulb, Zap, BarChart3, Rocket } from "lucide-react"
import Link from "next/link"

const steps = [
    {
        icon: Target,
        title: "01. Discovery & Strategy",
        description: "We dive deep into your business metrics, audience, and goals. We don't guess; we audit, analyze, and architect a roadmap for revenue.",
        bg: "bg-blue-50",
        color: "text-blue-600"
    },
    {
        icon: Lightbulb,
        title: "02. Custom Solutions",
        description: "No two businesses are alike. We build bespoke digital ecosystems—whether it's a high-performance web app or a complex SEO campaign.",
        bg: "bg-purple-50",
        color: "text-purple-600"
    },
    {
        icon: Zap,
        title: "03. Agile Execution",
        description: "Our rapid deployment teams bring the strategy to life. We work in sprints, ensuring continuous momentum and clear communication.",
        bg: "bg-orange-50",
        color: "text-orange-600"
    },
    {
        icon: BarChart3,
        title: "04. Data Optimization",
        description: "Launch is just the start. We obsessively track KPIs, A/B test creatives, and refine funnels to maximize your ROI.",
        bg: "bg-emerald-50",
        color: "text-emerald-600"
    }
]

export default function OurApproachPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="container max-w-[1400px] mx-auto text-center">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100/50 text-blue-700 text-[11px] font-extrabold uppercase tracking-widest mb-6">
                            Methodology
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.1}>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-[#212529] mb-8 tracking-tight">
                            The Science Behind <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                                Your Growth
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
                            We bridge the gap between creative vision and technical execution. Our 4-step process is designed to eliminate risk and guarantee results.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Steps Grid */}
            <section className="py-20 px-6 bg-gray-50/50">
                <div className="container max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {steps.map((step, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
                                    <div className={`w-16 h-16 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                        <step.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#212529] mb-4">{step.title}</h3>
                                    <p className="text-lg text-gray-500 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 px-6 border-y border-gray-100">
                <div className="container max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-5xl font-black text-[#212529] mb-6 leading-tight">
                            Creativity wins attention. <br />
                            <span className="text-[#004c8c]">Data wins revenue.</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Most agencies rely on gut feeling. We rely on hard numbers. By combining world-class design with rigorous data analysis, we build digital products that look beautiful and perform exceptionally.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Proprietary ROI Tracking Dashboard",
                                "Weekly Strategy Sprints",
                                "Full-Funnel Attribution",
                                "Dedicated Growth Squads"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-bold text-[#212529]">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <ArrowRight size={12} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="/portfolio" className="btn-webfx btn-action py-4 px-8 inline-flex">
                            See Our Results
                        </Link>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        {/* Abstract Visual Representation */}
                        <div className="relative aspect-square bg-blue-600 rounded-3xl overflow-hidden p-12 flex flex-col justify-between text-white shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[80px] -ml-20 -mb-20"></div>

                            <div className="relative z-10">
                                <Rocket size={48} className="mb-6 opacity-80" />
                                <div className="text-6xl font-black mb-2">300%</div>
                                <div className="text-xl font-medium opacity-80">Average ROI for Clients</div>
                            </div>

                            <div className="relative z-10 grid grid-cols-2 gap-4 mt-12 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                                <div>
                                    <div className="text-3xl font-bold">12k+</div>
                                    <div className="text-sm opacity-70">Campaigns</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold">$1B+</div>
                                    <div className="text-sm opacity-70">Revenue</div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 bg-gray-50">
                <div className="container max-w-4xl mx-auto px-6 text-center">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-5xl font-black text-[#212529] mb-8">
                            Ready to start the process?
                        </h2>
                        <Link href="/contact" className="btn-webfx btn-action py-5 px-12 text-xl inline-flex shadow-xl hover:-translate-y-1 transition-transform">
                            Schedule Discovery Call
                        </Link>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </main>
    )
}
