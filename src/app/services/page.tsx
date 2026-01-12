"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Animations/Reveal"
import { ArrowRight, Code2, Megaphone, PenTool, Globe, Smartphone, Box, Shield, Zap, Search, Share2, Mail, Layout, Layers, Image, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// --- Data ---
const services = [
    {
        id: "01",
        title: "Development",
        subtitle: "Engineering Excellence",
        description: "We build scalable, high-performance digital infrastructure that powers your business growth.",
        color: "bg-blue-600",
        lightColor: "bg-blue-50",
        textColor: "text-blue-600",
        items: [
            { name: "Web Development", href: "/development/web-development", icon: Globe },
            { name: "App Development", href: "/development/app-development", icon: Smartphone },
            { name: "Ecommerce", href: "/development/ecommerce", icon: Box },
            { name: "Shopify", href: "/development/shopify", icon: Layout },
            { name: "Maintenance", href: "/development/maintenance", icon: Shield },
        ]
    },
    {
        id: "02",
        title: "Marketing",
        subtitle: "Growth & Acquisition",
        description: "Data-driven strategies designed to increase visibility, traffic, and revenue.",
        color: "bg-orange-500",
        lightColor: "bg-orange-50",
        textColor: "text-orange-600",
        items: [
            { name: "Digital Marketing", href: "/marketing/digital-marketing", icon: Megaphone },
            { name: "SEO Services", href: "/marketing/seo", icon: Search },
            { name: "PPC Management", href: "/marketing/ppc", icon: Zap },
            { name: "Social Media", href: "/marketing/social-media", icon: Share2 },
            { name: "Email Marketing", href: "/marketing/email-marketing", icon: Mail },
        ]
    },
    {
        id: "03",
        title: "Design",
        subtitle: "Visual Identity",
        description: "Award-winning aesthetics that communicate your brand value and build trust.",
        color: "bg-purple-600",
        lightColor: "bg-purple-50",
        textColor: "text-purple-600",
        items: [
            { name: "Graphic Design", href: "/design/graphic-design", icon: Image },
            { name: "Logo Design", href: "/design/logo-design", icon: PenTool },
            { name: "UI/UX Design", href: "/design/ui-ux", icon: Layout },
            { name: "Branding", href: "/design/branding", icon: Layers },
            { name: "Brochure", href: "/design/brochure", icon: Image },
        ]
    }
]

// --- Visual Components (Iconscapes) ---

function DevVisual() {
    return (
        <div className="relative w-full h-[400px] md:h-full min-h-[400px] bg-gradient-to-br from-blue-50 to-white rounded-[2rem] overflow-hidden border border-blue-100/50 shadow-inner">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.2]" />

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 bg-white p-6 rounded-2xl shadow-xl border border-blue-100 z-10"
            >
                <Code2 size={48} className="text-blue-600" />
            </motion.div>

            <motion.div
                animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/3 right-1/4 bg-blue-600 p-8 rounded-full shadow-xl shadow-blue-500/30 z-20"
            >
                <Zap size={40} className="text-white" />
            </motion.div>

            {/* Glass Card */}
            <div className="absolute bottom-12 left-12 right-12 bg-white/60 backdrop-blur-md p-6 rounded-xl border border-white/50 shadow-lg">
                <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <div className="h-2 w-24 bg-gray-200 rounded-full" />
                </div>
                <div className="mt-4 space-y-2">
                    <div className="h-2 w-full bg-gray-100 rounded-full" />
                    <div className="h-2 w-3/4 bg-gray-100 rounded-full" />
                </div>
            </div>
        </div>
    )
}

function MarketingVisual() {
    return (
        <div className="relative w-full h-[400px] md:h-full min-h-[400px] bg-gradient-to-br from-orange-50 to-white rounded-[2rem] overflow-hidden border border-orange-100/50 shadow-inner">
            {/* Abstract Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-50/50 rounded-full blur-3xl -ml-20 -mb-20" />

            <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(249,115,22,0.15)] border border-orange-100 z-10"
            >
                <Megaphone size={64} className="text-orange-500" />
            </motion.div>

            {/* Orbiting Elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-[280px] h-[280px] -translate-x-1/2 -translate-y-1/2 border border-dashed border-orange-200 rounded-full"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-orange-400">
                    <Share2 size={24} />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-orange-400">
                    <Search size={24} />
                </div>
            </motion.div>
        </div>
    )
}

function DesignVisual() {
    return (
        <div className="relative w-full h-[400px] md:h-full min-h-[400px] bg-gradient-to-br from-purple-50 to-white rounded-[2rem] overflow-hidden border border-purple-100/50 shadow-inner">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.4]" />

            <div className="absolute inset-12 border-2 border-purple-100 rounded-xl" />
            <div className="absolute top-12 left-12 w-16 h-16 border-t-2 border-l-2 border-purple-300 rounded-tl-xl" />
            <div className="absolute bottom-12 right-12 w-16 h-16 border-b-2 border-r-2 border-purple-300 rounded-br-xl" />

            <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 right-1/4 z-10"
            >
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-purple-100 rotate-12">
                    <PenTool size={40} className="text-purple-500" />
                </div>
            </motion.div>

            <motion.div
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-1/3 left-1/4 z-10"
            >
                <div className="bg-purple-600 p-6 rounded-2xl shadow-xl rotate-[-12deg]">
                    <Layers size={40} className="text-white" />
                </div>
            </motion.div>
        </div>
    )
}

// --- Main Page Component ---
export default function ServicesPageV4() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* --- Hero Section --- */}
            <section className="pt-32 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/60 rounded-[100%] blur-[120px] -z-10" />

                <div className="container max-w-[1400px] mx-auto text-center">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-[#004c8c] text-xs font-bold uppercase tracking-widest mb-10 hover:shadow-md transition-shadow cursor-default group">
                            <div className="w-2 h-2 rounded-full bg-[#f68d2e] group-hover:scale-125 transition-transform" />
                            World Class Expertise
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.1}>
                        <h1 className="text-4xl md:text-4xl lg:text-7xl font-black text-[#212529] mb-8 tracking-tighter leading-[1] max-w-5xl mx-auto">
                            Transforming Ideas Into  <br />
                            <span className="text-[#004c8c]">
                                Digital Reality
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">
                            We bring together design, technology, and strategy to build products that define categories.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* --- Staggered Services Sections --- */}
            <div className="pb-32 space-y-32">
                {services.map((category, index) => (
                    <section key={category.title} className="px-6 relative group" id={category.title.toLowerCase()}>
                        <div className="container max-w-[1400px] mx-auto">
                            <div className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                                {/* Visual Side (Iconscape) */}
                                <div className="w-full lg:w-1/2">
                                    <Reveal width="100%" delay={0.2}>
                                        {category.id === "01" && <DevVisual />}
                                        {category.id === "02" && <MarketingVisual />}
                                        {category.id === "03" && <DesignVisual />}
                                    </Reveal>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2">
                                    <Reveal width="100%">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className={`text-6xl font-black ${category.lightColor} ${category.textColor} px-4 py-2 rounded-2xl`}>
                                                {category.id}
                                            </span>
                                            <div className="h-px bg-gray-100 flex-grow" />
                                        </div>

                                        <h2 className="text-4xl md:text-5xl font-black text-[#212529] mb-4">
                                            {category.title}
                                        </h2>
                                        <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10">
                                            {category.description}
                                        </p>

                                        {/* Service List */}
                                        <div className="space-y-3">
                                            {category.items.map((item, i) => (
                                                <Link key={item.name} href={item.href} className="group/item block">
                                                    <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-100">
                                                        <div className="flex items-center gap-4">
                                                            <div className={`w-10 h-10 rounded-lg ${category.lightColor} flex items-center justify-center ${category.textColor} group-hover/item:scale-110 transition-transform`}>
                                                                <item.icon size={20} />
                                                            </div>
                                                            <span className="text-lg font-bold text-[#212529] group-hover/item:text-[#004c8c] transition-colors">
                                                                {item.name}
                                                            </span>
                                                        </div>
                                                        <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover/item:border-[#004c8c] group-hover/item:bg-[#004c8c] group-hover/item:text-white transition-all">
                                                            <ArrowUpRight size={14} />
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* --- CTA --- */}
            <section className="py-24 bg-[#004c8c] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05]" />

                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#f68d2e]/20 rounded-full blur-3xl" />

                <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                            Your Vision. Our Code.
                        </h2>
                        <p className="text-blue-100 text-xl font-medium mb-10 max-w-2xl mx-auto">
                            Let's collaborate to build something extraordinary.
                        </p>
                        <Link href="/contact" className="btn-kalatram bg-white text-[#004c8c] hover:bg-gray-100 py-5 px-12 text-lg shadow-xl inline-flex items-center gap-2 border-none">
                            Schedule a Consultation <ArrowRight size={20} />
                        </Link>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </main>
    )
}
