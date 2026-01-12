"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Animations/Reveal"
import { ArrowRight, CheckCircle2, ChevronRight, Zap } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export interface ServiceFeature {
    title: string
    description: string
    icon?: React.ElementType
}

export interface ServiceProcessStep {
    title: string
    description: string
}

export interface ServiceLayoutProps {
    title: string
    subtitle: string
    description: string
    heroImage?: string
    features: ServiceFeature[]
    process: ServiceProcessStep[]
    benefits: string[]
    ctaText?: string
}

function FeatureCard({ feature, index }: { feature: ServiceFeature, index: number }) {
    return (
        <div className="group relative p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150 group-hover:bg-blue-100/50" />

            <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#004c8c] flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon ? <feature.icon size={26} /> : <Zap size={26} />}
                </div>

                <h3 className="text-xl font-bold text-[#212529] mb-3 group-hover:text-[#004c8c] transition-colors">
                    {feature.title}
                </h3>

                <p className="text-gray-500 leading-relaxed font-medium">
                    {feature.description}
                </p>
            </div>
        </div>
    )
}

export function ServiceLayout({
    title,
    subtitle,
    description,
    features,
    process,
    benefits,
    ctaText = "Start Your Project"
}: ServiceLayoutProps) {
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])

    return (
        <main className="min-h-screen bg-white selection:bg-[#004c8c] selection:text-white">
            <Navbar />

            {/* --- Hero Section --- */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -z-10 opacity-60" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f68d2e]/5 rounded-full blur-[100px] -z-10 opacity-40" />

                <div className="container max-w-[1400px] mx-auto text-center">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-[#004c8c] text-xs font-bold uppercase tracking-widest mb-8 hover:shadow-md transition-shadow cursor-default group">
                            <div className="w-2 h-2 rounded-full bg-[#f68d2e] group-hover:scale-125 transition-transform" />
                            {subtitle}
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.1}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#212529] mb-8 tracking-tighter leading-[1] max-w-5xl mx-auto">
                            {title}
                        </h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
                            {description}
                        </p>
                    </Reveal>

                    <Reveal width="100%" delay={0.3}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-kalatram btn-action py-5 px-10 text-lg w-full sm:w-auto">
                                Get a Quote
                            </Link>
                            <Link href="/portfolio" className="py-5 px-10 text-lg font-bold text-[#004c8c] hover:bg-blue-50 rounded-full transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
                                View Our Work <ChevronRight size={20} />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* --- Key Features Grid --- */}
            <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
                <div className="container max-w-[1400px] mx-auto">
                    <div className="text-center mb-20">
                        <Reveal width="100%">
                            <span className="text-[#004c8c] font-black tracking-widest uppercase text-sm mb-4 block">Why Choose Us</span>
                            <h2 className="text-4xl md:text-5xl font-black text-[#212529]">Engineered for Growth</h2>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <FeatureCard feature={feature} index={i} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Process Section & Benefits --- */}
            <section className="py-32 px-6 overflow-hidden" ref={targetRef}>
                <div className="container max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Left: Process Timeline */}
                        <div>
                            <Reveal width="100%">
                                <span className="text-[#f68d2e] font-black tracking-widest uppercase text-sm mb-4 block">Our Process</span>
                                <h2 className="text-4xl md:text-5xl font-black text-[#212529] mb-12">How We Deliver Results</h2>
                            </Reveal>

                            <div className="space-y-12 relative border-l-2 border-gray-100 pl-10 ml-4">
                                {process.map((step, i) => (
                                    <Reveal key={i} delay={i * 0.1} width="100%">
                                        <div className="relative">
                                            <span className="absolute -left-[49px] top-1 w-6 h-6 rounded-full bg-white border-4 border-[#004c8c]" />
                                            <h3 className="text-2xl font-bold text-[#212529] mb-3">{step.title}</h3>
                                            <p className="text-gray-500 font-medium leading-relaxed">{step.description}</p>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>

                        {/* Right: Benefits Card (Sticky-ish feel) */}
                        <div className="relative">
                            <motion.div style={{ y }} className="relative z-10">
                                <Reveal delay={0.2}>
                                    <div className="bg-[#004c8c] text-white p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f68d2e] rounded-full blur-[80px] opacity-20" />

                                        <h3 className="text-3xl font-black mb-8">What You Get</h3>
                                        <ul className="space-y-6">
                                            {benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start gap-4">
                                                    <div className="mt-1 w-6 h-6 rounded-full bg-[#f68d2e] flex items-center justify-center shrink-0 text-[#004c8c]">
                                                        <CheckCircle2 size={14} className="text-white" />
                                                    </div>
                                                    <span className="text-lg md:text-xl font-bold leading-tight text-blue-50">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-12 pt-10 border-t border-white/10">
                                            <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold hover:translate-x-2 transition-transform">
                                                {ctaText} <ArrowRight />
                                            </Link>
                                        </div>
                                    </div>
                                </Reveal>
                            </motion.div>
                            {/* Decorative blob behind card */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Final CTA --- */}
            <section className="py-24 bg-[#004c8c] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05]" />
                <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
                    <Reveal width="100%">
                        <h2 className="text-white text-4xl md:text-6xl font-black mb-6 tracking-tight">Ready to Scale?</h2>
                        <p className="text-blue-100 text-xl font-medium mb-10 max-w-2xl mx-auto">
                            Let's discuss how our {title} services can grow your business.
                        </p>
                        <Link href="/contact" className="btn-kalatram bg-white text-[#004c8c] hover:bg-gray-100 py-5 px-12 text-lg shadow-xl inline-flex items-center gap-2 border-none">
                            Get Your Free Proposal <ArrowRight size={20} />
                        </Link>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </main>
    )
}
