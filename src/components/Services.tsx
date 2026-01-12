"use client"

import { motion } from "framer-motion"
import { Search, BarChart3, Globe, Mail, MessageSquare, Target, Code, Database, ArrowRight } from "lucide-react"
import { Reveal, StaggerContainer } from "@/components/Animations/Reveal"
import { cn } from "@/lib/utils"
import Link from "next/link"

const services = [
    {
        title: "SEO",
        icon: Search,
        description: "Drive high-quality traffic to your site and dominate search results with our industry-leading SEO services.",
        stats: "$10B+ Revenue Driven"
    },
    {
        title: "PPC",
        icon: BarChart3,
        description: "Maximize your ROI with targeted pay-per-click advertising campaigns managed by certified experts.",
        stats: "24M+ Leads Generated"
    },
    {
        title: "Web Design",
        icon: Globe,
        description: "Create a stunning first impression with custom web design solutions engineered for conversion.",
        stats: "Award Winning Designs"
    },
    {
        title: "Email Marketing",
        icon: Mail,
        description: "Engage and convert your audience with personalized email and automation strategies.",
        stats: "15% Avg. CTR"
    },
    {
        title: "Social Media",
        icon: MessageSquare,
        description: "Build a loyal community and drive engagement across all major social platforms.",
        stats: "5M+ Social Follows"
    },
    {
        title: "Content Marketing",
        icon: Target,
        description: "Power your digital presence with authoritative content that attracts and retains customers.",
        stats: "Top Tier Writers"
    }
]

export function Services() {
    return (
        <section id="services" className="relative py-32 px-6 bg-gray-50 border-y border-gray-100">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-24">
                    <Reveal>
                        <span className="text-[#004c8c] font-black tracking-[0.3em] uppercase text-xs mb-4 block">
                            Our Full-Service Capabilities
                        </span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-black text-[#212529] mb-6">
                            Digital Marketing Services <br />
                            That Drive <span className="text-[#004c8c]">Real Results</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                            We offer a complete suite of digital marketing services to help you reach your growth goals.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="pro-card group"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center text-[#004c8c] mb-8 group-hover:bg-[#004c8c] group-hover:text-white transition-all duration-300">
                                    <service.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-[#212529] group-hover:text-[#004c8c] transition-colors uppercase tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-[10px] font-black text-[#004c8c] uppercase tracking-widest">{service.stats}</span>
                                    <Link href={`/${service.title.toLowerCase()}`} className="text-[#212529] hover:text-[#004c8c] transition-colors">
                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </StaggerContainer>

                <div className="mt-24 text-center">
                    <Reveal>
                        <Link href="/services" className="btn-kalatram py-6 px-16 text-xl">
                            Explore All 50+ Services
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
