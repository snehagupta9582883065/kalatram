"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Animations/Reveal"
import { ArrowRight, Trophy, Target, Heart, Users } from "lucide-react"
import Link from "next/link"

const stats = [
    { label: "Revenue Generated", value: "$3B+" },
    { label: "Projects Delivered", value: "1,500+" },
    { label: "Team Members", value: "500+" },
    { label: "Awards Won", value: "150+" },
]

const values = [
    {
        icon: Target,
        title: "Results First",
        desc: "We prioritize tangible business outcomes over vanity metrics. If it doesn't drive revenue, we don't do it."
    },
    {
        icon: Trophy,
        title: "Excellence",
        desc: "Good isn't enough. We strive for world-class execution in every line of code and every pixel designed."
    },
    {
        icon: Users,
        title: "Collaboration",
        desc: "We consider ourselves an extension of your team. Transparent, communicative, and aligned with your goals."
    }
]

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="container max-w-[1400px] mx-auto text-center">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100/50 text-blue-700 text-[11px] font-extrabold uppercase tracking-widest mb-6">
                            About Kalatram
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.1}>
                        <h1 className="text-5xl md:text-8xl font-black text-[#212529] mb-10 tracking-tighter">
                            We Engineer <br />
                            <span className="text-[#004c8c]">Digital Success</span>
                        </h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p className="text-xl md:text-2xl text-gray-500 max-w-4xl mx-auto leading-relaxed font-medium">
                            Founded in 2010, we've grown from a small basement team to a global powerhouse of 500+ strategists, designers, and developers.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Image Grid */}
            <section className="py-12 px-6">
                <div className="container max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px] md:h-[700px]">
                    <div className="md:col-span-8 h-full rounded-[2.5rem] overflow-hidden relative group">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Team Collaboration"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute bottom-10 left-10 text-white">
                            <h3 className="text-3xl font-bold">Our Headquarters</h3>
                            <p className="opacity-80">New York City, NY</p>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col gap-6 md:col-span-4 h-full">
                        <div className="flex-1 rounded-[2.5rem] overflow-hidden relative group">
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                                alt="Strategy Session"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="flex-1 rounded-[2.5rem] overflow-hidden relative group">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
                                alt="Design Review"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-[#004c8c] text-white">
                <div className="container max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {stats.map((stat, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="p-6">
                                    <div className="text-5xl md:text-6xl font-black mb-4">{stat.value}</div>
                                    <div className="text-sm font-bold uppercase tracking-widest opacity-70">{stat.label}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32 px-6">
                <div className="container max-w-[1400px] mx-auto">
                    <div className="text-center mb-20">
                        <Reveal width="100%">
                            <span className="text-[#f68d2e] font-bold uppercase tracking-widest text-sm mb-4 block">Our Values</span>
                            <h2 className="text-4xl md:text-5xl font-black text-[#212529]">What Drives Us</h2>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {values.map((item, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300">
                                    <div className="w-20 h-20 rounded-full bg-white mx-auto flex items-center justify-center text-[#004c8c] shadow-sm mb-8">
                                        <item.icon size={36} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 border-t border-gray-100">
                <div className="container max-w-4xl mx-auto text-center">
                    <Reveal width="100%">
                        <h2 className="text-5xl font-black mb-8">Want to join the team?</h2>
                        <p className="text-xl text-gray-500 mb-12">We're always looking for exceptional talent.</p>
                        <Link href="/careers" className="btn-kalatram btn-action py-5 px-12 text-xl inline-flex">
                            View Open Positions
                        </Link>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </main>
    )
}
