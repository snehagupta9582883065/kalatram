"use client"

import { ProposalForm } from "@/components/ProposalForm"
import { Reveal } from "@/components/Animations/Reveal"
import { Star, TrendingUp, Users, ShieldCheck } from "lucide-react"

export function Hero() {
    return (
        <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-white selection:bg-blue-100 selection:text-blue-900">
            {/* Advanced Grid Background */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]"></div>
                <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]"></div>
            </div>

            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none mix-blend-overlay"></div>

            <div className="container px-6 mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Left Column: Copy */}
                    <div className="flex flex-col max-w-2xl">
                        <Reveal>
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-100/50 backdrop-blur-sm shadow-sm text-blue-700 text-[11px] font-extrabold uppercase tracking-widest mb-8 lg:mb-10 w-fit hover:scale-105 transition-transform cursor-default">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                </span>
                                #1 ROI-Focused Agency
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h1 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-extrabold text-[#0a0a0a] leading-[1.1] lg:leading-[0.95] tracking-tight mb-6 lg:mb-8">
                                Revenue Growth <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400">
                                    Engineered.
                                </span>
                            </h1>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <p className="text-lg sm:text-xl text-gray-600 mb-8 lg:mb-12 leading-relaxed max-w-lg font-medium">
                                We help mid-size businesses scale through data-driven SEO & PPC. Over <span className="font-bold text-gray-900 bg-blue-50 px-1 rounded">$10 billion</span> in verified client revenue.
                            </p>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4 group cursor-pointer w-fit">
                                    <div className="flex items-center -space-x-1">
                                        {[1, 2, 3, 4, 5].map((stars) => (
                                            <Star key={stars} className="w-5 h-5 text-orange-400 fill-orange-400 drop-shadow-sm group-hover:scale-110 transition-transform" style={{ transitionDelay: `${stars * 50}ms` }} />
                                        ))}
                                    </div>
                                    <div className="h-4 w-[1px] bg-gray-300"></div>
                                    <span className="text-sm font-semibold text-gray-700">
                                        <span className="font-bold text-gray-900">5.0</span> Rating (1,100+ Reviews)
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-500">
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-50 border border-gray-100">
                                        <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                                        <span>Average 20% Growth</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-50 border border-gray-100">
                                        <Users className="w-3.5 h-3.5 text-blue-600" />
                                        <span>Dedicated Team</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-50 border border-gray-100">
                                        <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                                        <span>Verified Results</span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative w-full max-w-md lg:max-w-full mx-auto lg:ml-auto perspective-[1000px]">
                        <Reveal delay={0.4} width="100%">
                            <div className="relative transform transition-transform duration-700 hover:rotate-y-[-2deg] hover:rotate-x-[2deg]">
                                {/* Enhanced Blobs */}
                                <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
                                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-purple-100 to-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>

                                <div className="relative">
                                    <ProposalForm />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
