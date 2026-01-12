"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Animations/Reveal"
import { ArrowRight, Calendar, User, Tag } from "lucide-react"
import Link from "next/link"

const articles = [
    {
        title: "From Seed to Series A: The Tech Stack You Need",
        excerpt: "Don't over-engineer early. Here is the lean tech stack that scales with your user base without burning your runway.",
        category: "Scaling",
        author: "Tech Team",
        date: "Oct 12, 2025",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Growth Hacking 101: First 1000 Users",
        excerpt: "Actionable strategies to acquire your first qualified users through organic channels and clever viral loops.",
        category: "Growth",
        author: "Marketing Squad",
        date: "Sep 28, 2025",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "MVP Design: Features vs. Time-to-Market",
        excerpt: "How to ruthlessly prioritize features for your V1 launch. If you're not embarrassed by your first release, you launched too late.",
        category: "Product",
        author: "Design Lead",
        date: "Sep 15, 2025",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Automating Operations for Small Teams",
        excerpt: "Use No-Code tools and AI to run a lean operation. Do more with less human capital.",
        category: "Operations",
        author: "Ops Manager",
        date: "Aug 30, 2025",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Next.js vs. React: Choosing for Performance",
        excerpt: "Why we choose Next.js for high-performance startup applications and SEO benefits right out of the box.",
        category: "Engineering",
        author: "Head of Eng",
        date: "Aug 12, 2025",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Pitch Deck Storytelling: Raising Your Round",
        excerpt: "How to craft a narrative that resonates with VCs. It's not just about numbers; it's about the vision.",
        category: "Fundraising",
        author: "Founder's Desk",
        date: "Jul 22, 2025",
        image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2064&auto=format&fit=crop",
        link: "#"
    }
]

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-[#f8f9fa]">
                <div className="container max-w-[1400px] mx-auto text-center">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-[11px] font-extrabold uppercase tracking-widest mb-6">
                            Startup Insights
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.1}>
                        <h1 className="text-4xl md:text-4xl lg:text-7xl font-black text-[#212529] mb-8 tracking-tighter leading-[1] max-w-5xl mx-auto">
                            Tactical Advice for  <br />
                            <span className="text-[#004c8c]">
                                Building & Scaling
                            </span>
                        </h1>
                    </Reveal>
                </div>
            </section>

            {/* Featured Section */}
            <section className="py-20 px-6">
                <div className="container max-w-[1400px] mx-auto">
                    <div className="mb-20">
                        <Reveal width="100%">
                            <div className="relative rounded-[2.5rem] overflow-hidden group cursor-pointer h-[500px] md:h-[600px]">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />
                                <img
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                                    alt="Featured"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20">
                                    <span className="bg-[#f68d2e] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">
                                        Must Read
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
                                        The Founder's Guide to Finding Product-Market Fit in 2026
                                    </h2>
                                    <div className="flex items-center gap-6 text-white/80 font-medium">
                                        <div className="flex items-center gap-2">
                                            <User size={16} /> Ishu Pachouri
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} /> Nov 14, 2025
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {articles.map((article, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                                    <div className="relative h-60 overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide text-[#004c8c]">
                                            {article.category}
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-semibold uppercase tracking-wider">
                                            <span>{article.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                                            <span>{article.author}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#212529] mb-4 group-hover:text-[#004c8c] transition-colors leading-snug">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center text-[#004c8c] text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                                            Read Article <ArrowRight size={16} className="ml-2" />
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Newsletter CTA */}
                    <div className="mt-24 bg-[#004c8c] rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-20 -mt-20"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join 5,000+ Founders</h2>
                            <p className="text-white/80 mb-10 text-lg">Get weekly insights on building, launching, and scaling your startup.</p>

                            <form className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 focus:border-white/50 transition-all font-medium"
                                />
                                <button className="px-8 py-4 rounded-full bg-[#f68d2e] text-white font-bold uppercase tracking-wide hover:shadow-lg hover:scale-105 transition-all">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
