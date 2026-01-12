"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Animations/Reveal"
import { ArrowRight, ExternalLink, Code2, Smartphone, Megaphone, Palette, Mail, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Portfolio Data Structured for Startups
const portfolioCategories = [
    {
        id: "web-dev",
        title: "Web Development",
        description: "Modern, scalable websites and web apps built for growth.",
        icon: Code2,
        projects: [
            {
                title: "SaaS Dashboard MVP",
                subtitle: "Analytics Platform",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
                tags: ["Next.js", "Tailwind", "Rapid Prototype"],
                link: "#"
            },
            {
                title: "DTC Brand Launch",
                subtitle: "E-Commerce Experience",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
                tags: ["Shopify", "Conversion Optimization", "Launch"],
                link: "#"
            }
        ]
    },
    {
        id: "app-dev",
        title: "App Development",
        description: "Turning ideas into functional mobile products.",
        icon: Smartphone,
        projects: [
            {
                title: "Fitness Tracker V1",
                subtitle: "Health & Wellness",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
                tags: ["Flutter", "Cross-Platform", "MVP"],
                link: "#"
            },
            {
                title: "On-Demand Delivery",
                subtitle: "Logistics Prototype",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
                tags: ["React Native", "Geolocation", "Beta Launch"],
                link: "#"
            }
        ]
    },
    {
        id: "digital-marketing",
        title: "Growth Marketing",
        description: "Strategies to acquire first users and scale fast.",
        icon: Megaphone,
        projects: [
            {
                title: "Seed Round Launch",
                subtitle: "Go-To-Market Strategy",
                image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2076&auto=format&fit=crop",
                tags: ["PPC", "User Acquisition", "Growth Hacking"],
                link: "#"
            },
            {
                title: "Social Community Build",
                subtitle: "Brand Awareness",
                image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2031&auto=format&fit=crop",
                tags: ["Instagram", "Content", "Engagement"],
                link: "#"
            }
        ]
    },
    {
        id: "graphic-design",
        title: "Brand Identity",
        description: "Giving startups a world-class look from day one.",
        icon: Palette,
        projects: [
            {
                title: "Tech Startup Identity",
                subtitle: "Visual Language",
                image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
                tags: ["Logo", "Color System", "Pitch Deck"],
                link: "#"
            },
            {
                title: "Product Launch Assets",
                subtitle: "Marketing Collateral",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
                tags: ["Social Assets", "Banners", "Presentation"],
                link: "#"
            }
        ]
    },
    {
        id: "seo",
        title: "Search Visibility",
        description: "Helping new brands get found online.",
        icon: Search,
        projects: [
            {
                title: "Local Business Scale",
                subtitle: "SEO Foundation",
                image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
                tags: ["Local SEO", "Optimization", "Traffic Growth"],
                link: "#"
            },
            {
                title: "Content Strategy",
                subtitle: "Blog & Keywords",
                image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
                tags: ["Content Plan", "Writing", "Ranking"],
                link: "#"
            }
        ]
    }
]

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="container max-w-[1400px] mx-auto text-center">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100/50 text-blue-700 text-[11px] font-extrabold uppercase tracking-widest mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                            </span>
                            Selected Work
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.1}>
                        <h1 className="text-4xl md:text-4xl lg:text-7xl font-black text-[#212529] mb-8 tracking-tighter leading-[1] max-w-5xl mx-auto">
                            Crafting Digital <br />
                            <span className="text-[#004c8c]">
                                Products.
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
                            From initial concept to launch, we partner with visionaries to build modern products and scalable brands.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Categories & Projects */}
            <div className="pb-32 space-y-24 md:space-y-32">
                {portfolioCategories.map((category, catIndex) => (
                    <section key={category.id} className="container max-w-[1400px] mx-auto px-6">
                        {/* Category Header */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-100 pb-8 gap-6">
                            <div className="flex-1 min-w-0">
                                <Reveal width="100%">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#004c8c]">
                                            <category.icon size={24} />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-[#212529]">{category.title}</h2>
                                    </div>
                                    <p className="text-lg text-gray-500 max-w-xl">{category.description}</p>
                                </Reveal>
                            </div>
                            <Reveal delay={0.2}>
                                <Link
                                    href="/contact"
                                    className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-blue-100 text-[#004c8c] font-bold uppercase tracking-wider text-xs shadow-sm hover:bg-[#004c8c] hover:text-white hover:border-[#004c8c] hover:shadow-md transition-all group whitespace-nowrap"
                                >
                                    Start a Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Reveal>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            {category.projects.map((project, projIndex) => (
                                <Reveal key={projIndex} delay={projIndex * 0.1}>
                                    <div className="group cursor-pointer">
                                        <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/10] bg-gray-100">
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-500" />
                                            {/* Note: Using standard img for now since we don't have configured domains, but utilizing Next Image structure */}
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />

                                            {/* Floating Info */}
                                            <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm shadow-sm rounded-full text-xs font-bold text-[#004c8c] uppercase tracking-wide">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-2xl font-bold text-[#212529] mb-2 group-hover:text-[#004c8c] transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-gray-500 font-medium">
                                                    {project.subtitle}
                                                </p>
                                            </div>
                                            <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-[#004c8c] group-hover:text-white group-hover:border-[#004c8c] transition-all">
                                                <ExternalLink size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {/* Bottom CTA */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="container max-w-4xl mx-auto px-6 text-center">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-5xl font-black text-[#212529] mb-8">
                            Let's build something amazing.
                        </h2>
                        <Link href="/contact" className="btn-webfx btn-action py-5 px-12 text-xl inline-flex shadow-xl hover:-translate-y-1 transition-transform">
                            Get Your Proposal
                        </Link>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </main>
    )
}
