"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Animations/Reveal"
import { ArrowRight, Target, Lightbulb, Zap, BarChart3, Rocket } from "lucide-react"
import Link from "next/link"

const steps = [
    {
        icon: Target,
        title: "01. Product Discovery",
        description: "We validate your idea before writing a single line of code. We identify your core audience, define the problem, and map out the MVP features.",
        bg: "bg-blue-50",
        color: "text-blue-600"
    },
    {
        icon: Lightbulb,
        title: "02. Rapid Prototyping",
        description: "See your vision come to life in days, not months. We build high-fidelity interactive prototypes to test user flows and gather early feedback.",
        bg: "bg-purple-50",
        color: "text-purple-600"
    },
    {
        icon: Zap,
        title: "03. Agile Development",
        description: "We build fast and iterate often. Utilizing modern tech stacks (Next.js, React Native), we ship scalable code that's ready for high growth.",
        bg: "bg-orange-50",
        color: "text-orange-600"
    },
    {
        icon: Rocket, // Changed icon for Launch focus
        title: "04. Launch & Growth",
        description: "Go live with confidence. We handle the launch strategy and immediately transition into data-driven growth hacking to acquire users.",
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
                            Startup Methodology
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.1}>
                        <h1 className="text-4xl md:text-4xl lg:text-7xl font-black text-[#212529] mb-8 tracking-tighter leading-[1] max-w-5xl mx-auto">
                            From Idea to  <br />
                            <span className="text-[#004c8c]">
                                Market Leader.
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
                            We don't just build software; we build businesses. Our agile process is designed for speed, flexibility, and finding product-market fit fast.
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
                            Build fast. <br />
                            <span className="text-[#004c8c]">Learn faster.</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Startups die because they build things nobody wants. We focus on validating assumptions early. By combining rapid development with user-centric design, we ensure you're building the right product for the right market.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Lean Startup Principles",
                                "Weekly Development Sprints",
                                "Direct Founder-to-Engineer Access",
                                "Scalable Architecture Day One"
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
                            See What We Build
                        </Link>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        {/* Abstract Visual Representation */}
                        <div className="relative aspect-square bg-blue-600 rounded-3xl overflow-hidden p-12 flex flex-col justify-between text-white shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[80px] -ml-20 -mb-20"></div>

                            <div className="relative z-10">
                                <Rocket size={48} className="mb-6 opacity-80" />
                                <div className="text-6xl font-black mb-2">10x</div>
                                <div className="text-xl font-medium opacity-80">Faster Time-to-Market</div>
                            </div>

                            <div className="relative z-10 grid grid-cols-2 gap-4 mt-12 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                                <div>
                                    <div className="text-3xl font-bold">2-4</div>
                                    <div className="text-sm opacity-70">Weeks to MVP</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold">100%</div>
                                    <div className="text-sm opacity-70">Code Ownership</div>
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
                            Got an idea? Let's validate it.
                        </h2>
                        <Link href="/contact" className="btn-webfx btn-action py-5 px-12 text-xl inline-flex shadow-xl hover:-translate-y-1 transition-transform">
                            Book a Strategy Session
                        </Link>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </main>
    )
}
