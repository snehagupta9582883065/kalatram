"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {
    Monitor, Smartphone, Cloud, Cpu, Shield, Globe,
    ArrowRight, Sparkles, CheckCircle2, Layers,
    Zap, Code2, Database, Rocket, Terminal
} from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { PageTransition } from "@/components/Animations/PageTransition"
import { Magnetic } from "@/components/Animations/Magnetic"
import { Reveal, StaggerContainer } from "@/components/Animations/Reveal"
import { cn } from "@/lib/utils"

const services = [
    {
        icon: Monitor,
        title: "Web Architecture",
        tagline: "Lumina-Grade Performance",
        description: "We don't build sites; we craft self-scaling digital habitats. Optimized for LCP, CLS, and core web vitals at the highest tier.",
        color: "from-blue-500/10 to-cyan-500/10",
        features: ["Next.js 15 PWA Architecture", "Edge-Cached Real-time Delivery", "Vercel Enterprise Scaling"]
    },
    {
        icon: Smartphone,
        title: "Mobile Innovation",
        tagline: "Native Feel, Infinite Scale",
        description: "Multi-platform applications with pixel-perfect intent. Leveraging GPU acceleration for fluid 120fps animations.",
        color: "from-purple-500/10 to-indigo-500/10",
        features: ["React Native Hub", "Metal & Vulkan Optimization", "Cross-Platform Sync Engine"]
    },
    {
        icon: Cpu,
        title: "AI Neural Ops",
        tagline: "Intelligent Autonomy",
        description: "Deploying proprietary LLMs and vector databases directly into your operational core for predictive dominance.",
        color: "from-primary/10 to-secondary/10",
        features: ["Custom Model Quantization", "RAG Pipeline Integration", "Autonomous Agent Swarms"]
    },
    {
        icon: Cloud,
        title: "Cloud Infrastructure",
        tagline: "Fortified Resilience",
        description: "Serverless frameworks that mitigate single points of failure while maintaining global state synchronization.",
        color: "from-pink-500/10 to-rose-500/10",
        features: ["Terraform Managed Clusters", "Zero-Trust Mesh Networks", "Multi-Region Redundancy"]
    },
    {
        icon: Shield,
        title: "Digital Defense",
        tagline: "Absolute Security",
        description: "Proactive threat hunting and encryption protocols that exceed SOC2 and HIPAA standards globally.",
        color: "from-emerald-500/10 to-teal-500/10",
        features: ["Continuous Pen-Testing", "End-to-End Field Level Encryption", "AI-Driven Threat Detection"]
    },
    {
        icon: Globe,
        title: "Ecosystem Strategy",
        tagline: "Visionary Roadmaps",
        description: "Translating complex business requirements into elegant technological roadmaps for market leadership.",
        color: "from-orange-500/10 to-amber-500/10",
        features: ["Legacy Asset Decoupling", "Microservices Migration", "Technology Gap Analysis"]
    }
]

const methodology = [
    { step: "01", title: "Discovery Node", desc: "Deep technical audit and alignment with business objectives.", icon: Terminal },
    { step: "02", title: "Architecture", desc: "Blueprinting high-availability systems and data schemas.", icon: Layers },
    { step: "03", title: "Execution", desc: "Rapid assembly of robust, typed, and tested codebases.", icon: Code2 },
    { step: "04", title: "Deployment", desc: "Automated rolling releases with zero downtime protocols.", icon: Rocket },
]

const techStack = [
    { name: "Next.js", category: "Core" },
    { name: "TypeScript", category: "Logic" },
    { name: "Framer Motion", category: "Motion" },
    { name: "PostgreSQL", category: "Data" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "AWS", category: "Cloud" },
    { name: "PyTorch", category: "AI" },
    { name: "Docker", category: "Vessel" },
]

export default function ServicesPage() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const textY = useTransform(scrollYProgress, [0, 1], [0, 200])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <main className="bg-background min-h-screen">
            <Navbar />
            <PageTransition>
                {/* Cinematic Hero - Enlarged and Impactful */}
                <section
                    ref={containerRef}
                    className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden"
                >
                    <motion.div
                        style={{ y: textY, opacity }}
                        className="max-w-7xl mx-auto px-6 text-center z-10 relative flex flex-col items-center"
                    >
                        <Reveal width="100%">
                            <div className="flex justify-center mb-12">
                                <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full obsidian-glass border border-white/10 text-xs font-black tracking-[0.4em] uppercase text-primary shadow-2xl">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                                    The Services Protocol
                                </div>
                            </div>
                        </Reveal>
                        <Reveal delay={0.1} y={60} width="100%">
                            <h1 className="text-[5rem] md:text-[11rem] font-black mb-12 tracking-[-0.05em] leading-[0.85] text-foreground uppercase italic">
                                Engineered <br />
                                <span className="text-gradient">For Growth.</span>
                            </h1>
                        </Reveal>
                        <Reveal delay={0.2} y={40} width="100%">
                            <p className="text-xl md:text-4xl text-foreground/60 max-w-5xl mx-auto font-medium leading-[1.3] mb-20 tracking-tight text-center px-6">
                                We deploy <span className="text-foreground">custom technological assets</span> that don&apos;t just function—they dominate. Performance-driven, luxury-crafted.
                            </p>
                        </Reveal>
                        <Reveal delay={0.3} width="100%">
                            <div className="flex justify-center">
                                <Magnetic distance={0.2}>
                                    <button className="btn-premium px-16 py-7 text-2xl group shadow-[0_20px_60px_-15px_rgba(14,165,233,0.5)]">
                                        Explore Solutions <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-3 transition-transform duration-500" />
                                    </button>
                                </Magnetic>
                            </div>
                        </Reveal>
                    </motion.div>

                    {/* Decorative Elements - Dark & Moody */}
                    <div className="absolute inset-0 z-[-1] pointer-events-none">
                        <div className="absolute top-[20%] left-[30%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px]" />
                        <div className="absolute bottom-[10%] right-[20%] w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[180px]" />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
                </section>

                {/* Growth Stats Bar - WebFX Influence */}
                <section className="relative z-30 -mt-20 px-6">
                    <div className="max-w-7xl mx-auto obsidian-glass p-12 md:p-20 rounded-[4rem] border border-white/10 shadow-3xl text-center grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-center">
                        <div>
                            <div className="text-5xl md:text-7xl font-black text-foreground mb-3">$4.8B+</div>
                            <div className="text-sm font-black uppercase tracking-[0.3em] text-primary">Revenue Generated</div>
                        </div>
                        <div className="border-y md:border-y-0 md:border-x border-white/10 py-10 md:py-0">
                            <div className="text-5xl md:text-7xl font-black text-foreground mb-3">785%</div>
                            <div className="text-sm font-black uppercase tracking-[0.3em] text-primary">Avg. ROI Increase</div>
                        </div>
                        <div>
                            <div className="text-5xl md:text-7xl font-black text-foreground mb-3">15+</div>
                            <div className="text-sm font-black uppercase tracking-[0.3em] text-primary">Years Experience</div>
                        </div>
                    </div>
                </section>

                {/* Primary Services Grid */}
                <section id="services-grid" className="relative z-20 py-48 px-6 max-w-7xl mx-auto">
                    <StaggerContainer>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                                    className="glass-card obsidian-glass p-14 group relative flex flex-col h-full overflow-hidden shadow-2xl border border-white/5"
                                >
                                    <div className={cn(
                                        "w-20 h-20 rounded-[2.5rem] mb-12 flex items-center justify-center bg-gradient-to-br transition-all duration-1000 group-hover:scale-110 group-hover:rotate-[15deg] shadow-2xl",
                                        service.color
                                    )}>
                                        <service.icon className="text-primary w-10 h-10" />
                                    </div>

                                    <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase mb-5 block">
                                        {service.tagline}
                                    </span>
                                    <h3 className="text-4xl font-black mb-8 tracking-[-0.02em] group-hover:text-primary transition-colors text-foreground uppercase italic leading-[1.1]">
                                        {service.title}
                                    </h3>
                                    <p className="text-foreground/50 leading-relaxed mb-12 flex-grow text-xl font-medium tracking-tight">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-5 mb-14 border-t border-white/5 pt-10">
                                        {service.features.map(feature => (
                                            <li key={feature} className="flex items-center gap-5 text-lg text-foreground/60 transition-colors group-hover:text-foreground/80">
                                                <div className="w-2 h-2 rounded-full bg-primary/40 shrink-0" />
                                                <span className="font-bold text-sm tracking-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Magnetic distance={0.2}>
                                        <button className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-primary group-hover:gap-8 transition-all duration-700">
                                            Specs <ArrowRight className="w-6 h-6" />
                                        </button>
                                    </Magnetic>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                                </motion.div>
                            ))}
                        </div>
                    </StaggerContainer>
                </section>

                {/* Methodology Timeline - Dark Theme Boost */}
                <section className="py-56 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                            <div className="max-w-3xl">
                                <Reveal>
                                    <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Execution Strategy</span>
                                </Reveal>
                                <Reveal delay={0.1}>
                                    <h2 className="text-7xl md:text-[8.5rem] font-black tracking-[-0.05em] text-foreground uppercase italic leading-[0.85]">The Growth <br /><span className="text-gradient">Engine.</span></h2>
                                </Reveal>
                            </div>
                            <Reveal delay={0.2}>
                                <p className="text-2xl text-foreground/40 max-w-sm mb-6 font-medium leading-relaxed italic">Our precision-tuned methodology for extreme technical and business scale.</p>
                            </Reveal>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 relative">
                            <div className="hidden md:block absolute top-[70px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

                            {methodology.map((m, i) => (
                                <motion.div
                                    key={m.title}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 50 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative z-10 text-center flex flex-col items-center group"
                                >
                                    <div className="w-28 h-28 rounded-[3rem] obsidian-glass border border-white/10 shadow-3xl flex items-center justify-center text-primary mb-12 group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-700 bg-white/5">
                                        <m.icon className="w-12 h-12" />
                                    </div>
                                    <span className="text-[12px] font-black text-primary/30 tracking-[0.6em] mb-6 block">{m.step}</span>
                                    <h4 className="text-3xl font-black mb-6 tracking-tight text-foreground uppercase italic">{m.title}</h4>
                                    <p className="text-foreground/40 leading-relaxed text-sm max-w-xs font-bold">{m.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tech Stack Pulse - Grid Refinement */}
                <section className="py-56 px-6">
                    <div className="max-w-7xl mx-auto">
                        <Reveal>
                            <h2 className="text-5xl md:text-[7rem] font-black text-center mb-32 tracking-[-0.05em] text-foreground uppercase italic">The Tech <span className="text-gradient">Arsenal.</span></h2>
                        </Reveal>

                        <StaggerContainer>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {techStack.map((tech) => (
                                    <motion.div
                                        key={tech.name}
                                        variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                                        className="obsidian-glass p-10 rounded-[3rem] flex items-center justify-between group hover:border-primary/50 transition-all duration-700 border border-white/5 shadow-2xl"
                                    >
                                        <div>
                                            <p className="text-[10px] font-black text-primary tracking-[0.4em] uppercase mb-2">{tech.category}</p>
                                            <h4 className="text-2xl font-black text-foreground uppercase italic">{tech.name}</h4>
                                        </div>
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-700 text-foreground/40">
                                            <Zap className="w-6 h-6 fill-current" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </StaggerContainer>
                    </div>
                </section>

                {/* High-Impact CTA */}
                <section className="py-64 px-6 relative overflow-hidden border-t border-white/5">
                    <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                        <Reveal>
                            <div className="w-24 h-24 rounded-[2.5rem] obsidian-glass flex items-center justify-center mb-16 shadow-[0_0_80px_-20px_rgba(14,165,233,0.5)] border border-white/10 bg-white/5">
                                <Rocket className="text-primary w-12 h-12" />
                            </div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="text-7xl md:text-[10rem] font-black mb-14 tracking-[-0.05em] leading-[0.85] text-foreground uppercase italic">
                                Begin Your <br /><span className="text-gradient">Ascension.</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-2xl md:text-4xl text-foreground/40 max-w-4xl mb-24 font-medium italic">
                                Secure your slot in our next development cycle. Expert high-performance consultation available.
                            </p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <Magnetic distance={0.2}>
                                <button className="btn-premium px-20 py-10 text-3xl shadow-[0_30px_100px_-20px_rgba(14,165,233,0.6)]">
                                    Initiate Protocol <ArrowRight className="ml-6 w-10 h-10" />
                                </button>
                            </Magnetic>
                        </Reveal>
                    </div>
                </section>
            </PageTransition>
            <Footer />
        </main>
    )
}
