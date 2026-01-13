"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/Animations/Reveal"

// --- Data ---
const leaders = [
    {
        name: "Mr. Ankit Pachauri",
        role: "Founder & CEO",
        bio: "With a keen eye for operational excellence and technological advancement, Ankit Pachauri oversees the execution of our projects. He ensures quality, efficiency, and client satisfaction at every touchpoint. His leadership style focuses on empowering teams to deliver their best work while maintaining rigorous standards.",
        expertise: ["Operational Excellence", "Product Execution", "Client Success"],
        quote: "Excellence is a habit, not an act.",
        image: "/teams/ankit.jpeg",
        social: { linkedin: "#", twitter: "#", email: "mailto:ankit@kalatram.com" }
    },
    {
        name: "Mr. Ishu Pachauri",
        role: "Co-Founder",
        bio: "A visionary leader with a passion for innovation and digital transformation. Mr. Ishu Pachauri drives the strategic direction of Kalatram, ensuring we stay ahead of the curve. He combines deep technical knowledge with global market insights to steer the company towards sustainable growth.",
        expertise: ["Strategic Vision", "Global Scalability", "Tech Innovation"],
        quote: "Innovation is about empowering people.",
        image: "/teams/arpit.jpeg",
        social: { linkedin: "#", twitter: "#", email: "mailto:ishu@kalatram.com" }
    },
]

function LeaderRow({ leader, index }: { leader: typeof leaders[0], index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group py-12 border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-300"
        >
            <div className="container max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-start md:items-center">

                {/* Visual - Thumbnail */}
                <div className="shrink-0">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden">
                        <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content - Main Information */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-[#212529] group-hover:text-[#004c8c] transition-colors">
                            {leader.name}
                        </h3>
                        <span className="text-[#f68d2e] font-medium text-sm tracking-wide uppercase">
                            {leader.role}
                        </span>
                    </div>

                    <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-3xl mb-4 group-hover:text-gray-700 transition-colors">
                        {leader.bio}
                    </p>

                    {/* Expertise Pills */}
                    <div className="flex flex-wrap gap-2">
                        {leader.expertise.map(skill => (
                            <span key={skill} className="text-[10px] uppercase font-bold tracking-wider text-gray-400 border border-gray-200 rounded px-2 py-1">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action / Socials */}
                <div className="shrink-0 flex items-center gap-4 self-start md:self-center pt-2 md:pt-0">
                    <div className="flex gap-3">
                        {Object.entries(leader.social).map(([platform, link]) => (
                            <Link
                                key={platform}
                                href={link}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:border-[#004c8c] hover:text-[#004c8c] transition-all"
                            >
                                {platform === 'linkedin' && <Linkedin size={14} />}
                                {platform === 'twitter' && <Twitter size={14} />}
                                {platform === 'email' && <Mail size={14} />}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function TeamPage() {
    return (
        <main className="bg-white min-h-screen flex flex-col">
            <Navbar />

            {/* --- Minimal Header --- */}
            <section className="pt-32 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/60 rounded-[100%] blur-[120px] -z-10" />

                <div className="container max-w-[1400px] mx-auto text-center">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-[#004c8c] text-xs font-bold uppercase tracking-widest mb-10 hover:shadow-md transition-shadow cursor-default group">
                            <div className="w-2 h-2 rounded-full bg-[#f68d2e] group-hover:scale-125 transition-transform" />
                           People Behind the Strategy
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.1}>
                        <h1 className="text-4xl md:text-4xl lg:text-7xl font-black text-[#212529] mb-8 tracking-tighter leading-[1] max-w-5xl mx-auto">
                            Our Leadership
                        </h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">
                           The minds steering Kalatram forward.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* --- List View --- */}
            <section className="flex-1">
                {leaders.map((leader, i) => (
                    <LeaderRow key={i} leader={leader} index={i} />
                ))}
            </section>

            {/* --- Footer CTA --- */}
            <section className="bg-[#004c8c] py-12 px-6">
                <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                    <div>
                        <h2 className="text-xl font-bold">Join the team</h2>
                        <p className="text-blue-200 text-sm">We are always hiring exceptional people.</p>
                    </div>
                    <Link href="/contact" className="px-6 py-3 bg-white text-[#004c8c] text-sm font-bold rounded hover:bg-gray-100 transition-colors">
                        View Careers
                    </Link>
                </div>
            </section>

            <Footer />
        </main >
    )
}
