"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Animations/Reveal"
import { Linkedin, Twitter, Mail, ArrowRight, Quote, Sparkles, Award, Layers } from "lucide-react"
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { MouseEvent } from "react"

// --- Custom Components ---

function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    const rotateX = useTransform(mouseY, [-300, 300], [1.5, -1.5]); // Extremely subtle tilt for premium feel
    const rotateY = useTransform(mouseX, [-300, 300], [-1.5, 1.5]);

    return (
        <motion.div
            style={{ rotateX, rotateY, perspective: 1200 }}
            onMouseMove={onMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Data
const leaders = [
    {
        name: "Mr. Ishu Pachauri",
        role: "Founder & CEO",
        bio: "A visionary leader with a passion for innovation and digital transformation. Mr. Ishu Pachauri drives the strategic direction of Kalatram, ensuring we stay ahead of the curve in delivering cutting-edge solutions to our global clientele.",
        expertise: ["Strategic Vision", "Global Scalability", "Tech Innovation"],
        quote: "Innovation is not just about technology; it's about empowering people to achieve the extraordinary.",
        image: "/teams/arpit.jpeg", // Using user provided path
        social: { linkedin: "#", twitter: "#", email: "mailto:ishu@kalatram.com" }
    },
    {
        name: "Mr. Ankit Pachauri",
        role: "Co-Founder",
        bio: "With a keen eye for operational excellence and technological advancement, Ankit Pachauri oversees the execution of our projects. He ensures quality, efficiency, and client satisfaction at every touchpoint.",
        expertise: ["Operational Excellence", "Product Execution", "Client Success"],
        quote: "Excellence is a habit, not an act. We strive for perfection in every line of code and every pixel.",
        image: "/teams/ankit.jpeg", // Using user provided path
        social: { linkedin: "#", twitter: "#", email: "mailto:ankit@kalatram.com" }
    }
]

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* --- Hero Section --- */}
            <section className="pt-32 pb-16 md:pb-24 px-6 relative overflow-hidden">
                {/* Minimal Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/60 rounded-[100%] blur-[120px] -z-10" />

                <div className="container max-w-[1400px] mx-auto text-center relative z-10">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-[#004c8c] text-xs font-bold uppercase tracking-widest mb-10 hover:shadow-md transition-shadow cursor-default group">
                            <div className="w-2 h-2 rounded-full bg-[#f68d2e] group-hover:scale-125 transition-transform" />
                            Executive Leadership
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.1}>
                        <h1 className="text-4xl md:text-4xl lg:text-7xl font-black text-[#212529] mb-8 tracking-tighter leading-[1] max-w-5xl mx-auto">
                            Visionaries Behind <br />
                            <span className="text-[#004c8c]">
                                The Revolution
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
                            Meet the minds committed to redefining digital excellence and empowering businesses worldwide.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* --- Leaders Section --- */}
            <section className="pb-24 lg:pb-40 px-6 relative z-10">
                <div className="container max-w-[1200px] mx-auto space-y-24 lg:space-y-40">
                    {leaders.map((leader, index) => (
                        <TiltCard
                            key={leader.name}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-24 items-center group perspective-1000`}
                        >
                            {/* Visual Side */}
                            <div className="w-full lg:w-1/2 relative">
                                <Reveal width="100%" delay={0.1}>
                                    <div className="relative">
                                        {/* Main Image Frame - Mobile Aspect Ratio Tweak */}
                                        <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl bg-gray-100">
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/90 via-transparent to-transparent z-10 opacity-70" />

                                            <img
                                                src={leader.image}
                                                alt={leader.name}
                                                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out transform group-hover:scale-105"
                                            />

                                            {/* Editorial Name Overlay */}
                                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
                                                <div className="overflow-hidden">
                                                    <p className="text-[#f68d2e] font-bold text-xs md:text-xl uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                        {leader.role}
                                                    </p>
                                                </div>
                                                <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight leading-none mb-3 md:mb-4 drop-shadow-lg">
                                                    {leader.name}
                                                </h2>

                                                {/* Decorative Line */}
                                                <div className="w-0 group-hover:w-full h-1 bg-white/20 rounded-full transition-all duration-700 ease-out" />
                                            </div>
                                        </div>

                                        {/* Floating Elements - Hidden on mobile for cleaner look */}
                                        <div className={`absolute top-8 ${index % 2 === 0 ? '-right-12' : '-left-12'} w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center text-[#004c8c] rotate-12 group-hover:rotate-0 transition-transform duration-500 z-30 hidden lg:flex`}>
                                            <Quote size={32} className="opacity-80" />
                                        </div>
                                    </div>
                                </Reveal>
                            </div>

                            {/* Info Side */}
                            <div className="w-full lg:w-1/2">
                                <Reveal width="100%" delay={0.3}>
                                    <div className="space-y-8 lg:space-y-10">
                                        {/* Quote Section */}
                                        <div className="relative">
                                            <h3 className="text-xl md:text-3xl font-bold text-[#212529] leading-tight italic border-l-4 border-[#004c8c] pl-6 py-2">
                                                "{leader.quote}"
                                            </h3>
                                        </div>

                                        {/* Bio */}
                                        <div>
                                            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                                <Layers size={14} />
                                                Biography
                                            </h4>
                                            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                                                {leader.bio}
                                            </p>
                                        </div>

                                        {/* Expertise Tags */}
                                        <div>
                                            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                                <Award size={14} />
                                                Core Expertise
                                            </h4>
                                            <div className="flex flex-wrap gap-2 md:gap-3">
                                                {leader.expertise.map(skill => (
                                                    <span key={skill} className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-50 text-[#004c8c] rounded-full text-xs md:text-sm font-bold border border-blue-100/50 hover:bg-[#004c8c] hover:text-white transition-colors cursor-default">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Social Links */}
                                        <div className="pt-6 border-t border-gray-100 flex items-center gap-4 text-center justify-center lg:justify-start">
                                            {Object.entries(leader.social).map(([platform, link]) => (
                                                <Link
                                                    key={platform}
                                                    href={link}
                                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#004c8c] hover:border-[#004c8c] transition-all duration-300 group/icon"
                                                >
                                                    {platform === 'linkedin' && <Linkedin size={18} className="md:w-5 md:h-5 group-hover/icon:scale-110 transition-transform" />}
                                                    {platform === 'twitter' && <Twitter size={18} className="md:w-5 md:h-5 group-hover/icon:scale-110 transition-transform" />}
                                                    {platform === 'email' && <Mail size={18} className="md:w-5 md:h-5 group-hover/icon:scale-110 transition-transform" />}
                                                </Link>
                                            ))}
                                            <span className="text-sm font-medium text-gray-400 ml-4 hidden md:inline-block">Connect on Social</span>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="py-16 md:py-24 bg-[#004c8c] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05]" />

                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#f68d2e]/20 rounded-full blur-3xl" />

                <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
                    <Reveal width="100%">
                        <h2 className="text-3xl md:text-6xl font-black mb-8 tracking-tight">
                            Build with the Best.
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">
                            Partner with our leadership team to transform your digital strategy.
                        </p>
                        <Link href="/contact" className="btn-kalatram bg-white text-[#004c8c] hover:bg-gray-100 py-4 md:py-5 px-4 sm:px-6 lg:px- md:px-12 text-lg shadow-xl inline-flex items-center gap-2 border-none">
                            <span className="relative z-10">Schedule a Consultation</span>
                            <ArrowRight className="relative z-10" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </main>
    )
}
