"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Loader2, Globe, User, Mail, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function ProposalForm() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        website: "",
    })
    const [focusedInput, setFocusedInput] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setStep(2)
    }

    return (
        <div className="relative group perspective-[1000px]">
            {/* Pop-up Shadow Effect */}
            <div className="absolute top-4 left-4 w-full h-full bg-black/5 rounded-2xl -z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />

            <div className="relative bg-white overflow-hidden shadow-[0_20px_50px_rgba(8,112,184,0.7)] border border-white/50 ring-1 ring-black/5">
                {step === 1 ? (
                    <div className="p-8">
                        <div className="text-center mb-8 relative">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-3 border border-blue-100 shadow-sm">
                                <Sparkles className="w-3 h-3" />
                                Limited Time Offer
                            </div>
                            <h3 className="text-3xl font-black text-gray-900 leading-tight mb-2 tracking-tight">
                                Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Free Proposal</span>
                            </h3>
                            <p className="text-gray-500 font-medium text-sm">
                                Custom strategy delivered in 24 hours.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-4">
                                <div className={cn(
                                    "relative group transition-all duration-300 transform",
                                    focusedInput === "website" ? "scale-[1.02]" : ""
                                )}>
                                    <div className="absolute left-4 top-3.5 flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-blue-600">
                                        <Globe className="w-3.5 h-3.5" />
                                    </div>
                                    <input
                                        required
                                        type="url"
                                        onFocus={() => setFocusedInput("website")}
                                        onBlur={() => setFocusedInput(null)}
                                        value={formData.website}
                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border-2 border-gray-100 rounded-xl text-sm font-bold text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                                        placeholder="Enter Website URL"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className={cn(
                                        "relative group transition-all duration-300 transform",
                                        focusedInput === "name" ? "scale-[1.02]" : ""
                                    )}>
                                        <div className="absolute left-4 top-3.5 flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-blue-600">
                                            <User className="w-3.5 h-3.5" />
                                        </div>
                                        <input
                                            required
                                            type="text"
                                            onFocus={() => setFocusedInput("name")}
                                            onBlur={() => setFocusedInput(null)}
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border-2 border-gray-100 rounded-xl text-sm font-bold text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className={cn(
                                        "relative group transition-all duration-300 transform",
                                        focusedInput === "email" ? "scale-[1.02]" : ""
                                    )}>
                                        <div className="absolute left-4 top-3.5 flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-blue-600">
                                            <Mail className="w-3.5 h-3.5" />
                                        </div>
                                        <input
                                            required
                                            type="email"
                                            onFocus={() => setFocusedInput("email")}
                                            onBlur={() => setFocusedInput(null)}
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border-2 border-gray-100 rounded-xl text-sm font-bold text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full bg-[#f68d2e] hover:bg-[#ff9d4d] text-white rounded-xl py-4 text-base font-black uppercase tracking-wider transition-all shadow-[0_10px_20px_rgba(246,141,46,0.3)] hover:shadow-[0_15px_25px_rgba(246,141,46,0.4)] transform hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group/btn"
                            >
                                <span className={cn("relative z-10 flex items-center justify-center gap-2", isSubmitting && "opacity-0")}>
                                    Get My Free Proposal
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </span>
                                {isSubmitting && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Loader2 className="w-6 h-6 animate-spin text-white" />
                                    </div>
                                )}
                            </button>

                            <p className="text-gray-400 text-xs text-center font-semibold">
                                Rated 4.9/5 by 1,000+ happy clients.
                            </p>
                        </form>
                    </div>
                ) : (
                    <div className="py-16 px-8 flex flex-col items-center text-center animate-in fade-in zoom-in duration-300 bg-white">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
                            <CheckCircle2 size={40} />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2">
                            Proposal On The Way!
                        </h3>
                        <p className="text-gray-500 text-sm max-w-[260px] mx-auto mb-8 font-medium leading-relaxed">
                            We've started analyzing <span className="text-blue-600 font-bold">{formData.website}</span>. Check your inbox shortly.
                        </p>
                        <button
                            onClick={() => setStep(1)}
                            className="px-6 py-2 rounded-full bg-gray-50 text-gray-500 font-bold text-xs hover:bg-gray-100 hover:text-blue-600 transition-colors"
                        >
                            Start New Request
                        </button>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500" />
            </div>
        </div>
    )
}
