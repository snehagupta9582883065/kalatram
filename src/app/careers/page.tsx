import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Animations/Reveal"
import Link from "next/link"
import { ArrowRight, Briefcase, Heart, Zap, Globe, Coffee, Users } from "lucide-react"

export default function Careers() {
    return (
        <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/80 rounded-full blur-[120px] -z-10 opacity-70" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f68d2e]/10 rounded-full blur-[100px] -z-10 opacity-60" />

                <div className="container max-w-[1400px] mx-auto text-center">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-[#004c8c] text-xs font-bold uppercase tracking-widest mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#f68d2e] animate-pulse"></span>
                            We are Hiring
                        </div>
                    </Reveal>

                    <Reveal delay={0.1} width="100%">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#212529] mb-8 tracking-tighter leading-[0.95] max-w-5xl mx-auto">
                            Build the Future <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004c8c] to-blue-400">With Us.</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2} width="100%">
                        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium mb-12">
                            Join a team of visionaries, creators, and problem solvers. We're on a mission to redefine digital excellence.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}width="100%">
                        <Link href="#openings" className="btn-webfx btn-action py-4 px-10 text-lg inline-flex items-center gap-3">
                            View Open Roles <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
                <div className="container max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {[
                            { icon: Zap, title: "Innovation First", desc: "We challenge the status quo and push boundaries." },
                            { icon: Heart, title: "People Focused", desc: "We care about our team's growth and well-being." },
                            { icon: Globe, title: "Global Impact", desc: "Work on projects that reach millions of users worldwide." }
                        ].map((item, i) => (
                            <Reveal key={i} delay={i * 0.1} width="100%">
                                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center h-full">
                                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-[#004c8c] mb-6">
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#212529] mb-4">{item.title}</h3>
                                    <p className="text-gray-500 leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Openings Section */}
            <section id="openings" className="py-24 px-6">
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <Reveal width="100%">
                            <h2 className="text-4xl md:text-5xl font-black text-[#212529] mb-6">Current Openings</h2>
                        </Reveal>
                        <Reveal delay={0.1} width="100%">
                            <p className="text-xl text-gray-500">Find your place in our growing team.</p>
                        </Reveal>
                    </div>

                    <div className="space-y-6">
                        {[
                            { role: "Senior Frontend Developer", dept: "Engineering", type: "Remote", link: "#" },
                            { role: "UX/UI Designer", dept: "Design", type: "Hybrid", link: "#" },
                            { role: "Digital Marketing Strategist", dept: "Marketing", type: "On-site", link: "#" },
                            { role: "Project Manager", dept: "Operations", type: "Remote", link: "#" },
                        ].map((job, i) => (
                            <Reveal key={i} delay={i * 0.1} width="100%">
                                <div className="group flex flex-col md:flex-row items-center justify-between p-8 bg-white border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                                    <div className="flex items-center gap-6 w-full md:w-auto mb-6 md:mb-0">
                                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#004c8c] group-hover:text-white transition-colors">
                                            <Briefcase size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#212529] group-hover:text-[#004c8c] transition-colors">{job.role}</h3>
                                            <div className="flex items-center gap-3 text-sm text-gray-500 mt-1 font-medium">
                                                <span>{job.dept}</span>
                                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                <span>{job.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#004c8c] font-bold text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                        Apply Now <ArrowRight size={16} />
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.5} width="100%">
                        <div className="mt-20 p-12 bg-[#004c8c] rounded-3xl text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -z-0 translate-x-1/2 -translate-y-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-4">Don't see the right fit?</h3>
                                <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
                                    We're always open to meeting amazing people. Send us your resume and tell us why you'd be a great addition to Kalatram.
                                </p>
                                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#004c8c] font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
                                    Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </main>
    )
}
