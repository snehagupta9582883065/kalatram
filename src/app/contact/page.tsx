"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Animations/Reveal"
import { ArrowRight, Mail, Phone, MapPin, MessageSquare, Plus, Minus, Send } from "lucide-react"

const faqs = [
    {
        question: "What services do you specialize in?",
        answer: "We offer a full suite of digital services including high-performance Web Development, Mobile App Development, SEO, PPC, and comprehensive Digital Marketing strategies designed for revenue growth."
    },
    {
        question: "How does your pricing model work?",
        answer: "We build custom solutions tailored to your goals. Typically, we work on a project basis for development and a retainer model for ongoing marketing and growth partnerships. Contact us for a custom quote."
    },
    {
        question: "Do you work with startups or only enterprise?",
        answer: "We partner with ambitious brands of all sizes. From seed-stage startups looking for rapid MVPs to Fortune 500 companies needing enterprise-grade scalability, we have the team to deliver."
    },
    {
        question: "What is your typical project timeline?",
        answer: "Timelines vary by scope. A custom website usually takes 4-8 weeks, while complex web applications can take 3-6 months. We work in agile sprints to ensure you see progress every week."
    }
]

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className={`text-lg font-bold text-[#212529] group-hover:text-[#004c8c] transition-colors ${isOpen ? 'text-[#004c8c]' : ''}`}>
                    {question}
                </span>
                <span className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-blue-50 text-[#004c8c] rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-[#004c8c]'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-500 leading-relaxed font-medium">
                    {answer}
                </p>
            </div>
        </div>
    )
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[#004c8c] selection:text-white">
            <Navbar />

            {/* Background Decorations */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-[100px]" />
            </div>

            <section className="pt-32 pb-20 px-6 relative z-10">
                <div className="container max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Left Info */}
                        <div className="lg:sticky lg:top-32">
                            <Reveal width="100%">
                                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100/50 text-blue-700 text-[11px] font-extrabold uppercase tracking-widest mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                    </span>
                                    Contact Us
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black text-[#212529] mb-8 tracking-tighter leading-[0.9]">
                                    Let's Growth <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004c8c] to-blue-500">
                                        Together.
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-500 leading-relaxed font-medium mb-12 max-w-xl">
                                    Ready to scale your revenue? Our team is ready to audit your digital presence and build your custom growth strategy.
                                </p>
                            </Reveal>

                            <Reveal delay={0.2} width="100%">
                                <div className="space-y-6">
                                    {[
                                        { icon: Phone, title: "Call Us", desc: "Mon-Fri from 8am to 5pm.", val: "+91 9758950611", link: "tel:+9758950611" },
                                        { icon: Mail, title: "Email Us", desc: "Speak to our friendly team.", val: "ishupachouri817@gmail.com", link: "mailto:ishupachouri817@gmail.com" },
                                        { icon: MapPin, title: "Visit Us", desc: "Visit our office HQ.", val: "Jaypee Aman, Noida sector 151", link: "#" }
                                    ].map((item, i) => (
                                        <div key={i} className="group flex items-start gap-6 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-100 cursor-pointer">
                                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#004c8c] shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-1 group-hover:text-[#004c8c] transition-colors">{item.title}</h3>
                                                <p className="text-gray-500 text-sm mb-1">{item.desc}</p>
                                                <a href={item.link} className="text-lg font-bold text-[#212529]">{item.val}</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                        </div>

                        {/* Right Form */}
                        <div className="relative">
                            <Reveal width="100%" delay={0.1}>
                                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden">
                                    {/* Form Decoration */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-[100px] pointer-events-none" />

                                    <div className="relative z-10">
                                        <h2 className="text-3xl font-black mb-2 text-[#212529]">Send us a message</h2>
                                        <p className="text-gray-500 mb-10 font-medium">We'll analyze your request and get back to you within 24 hours.</p>

                                        <form className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2 group">
                                                    <label className="text-xs font-extrabold uppercase tracking-wider text-gray-400 group-focus-within:text-[#004c8c] transition-colors">First Name</label>
                                                    <input type="text" className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all outline-none font-medium text-[#212529]" placeholder="John" />
                                                </div>
                                                <div className="space-y-2 group">
                                                    <label className="text-xs font-extrabold uppercase tracking-wider text-gray-400 group-focus-within:text-[#004c8c] transition-colors">Last Name</label>
                                                    <input type="text" className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all outline-none font-medium text-[#212529]" placeholder="Doe" />
                                                </div>
                                            </div>

                                            <div className="space-y-2 group">
                                                <label className="text-xs font-extrabold uppercase tracking-wider text-gray-400 group-focus-within:text-[#004c8c] transition-colors">Email Address</label>
                                                <input type="email" className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all outline-none font-medium text-[#212529]" placeholder="john@company.com" />
                                            </div>

                                            <div className="space-y-2 group">
                                                <label className="text-xs font-extrabold uppercase tracking-wider text-gray-400 group-focus-within:text-[#004c8c] transition-colors">Project Type</label>
                                                <select className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all outline-none font-medium text-[#212529] appearance-none cursor-pointer">
                                                    <option>Looking for Web Development</option>
                                                    <option>Looking for App Development</option>
                                                    <option>Looking for SEO / Marketing</option>
                                                    <option>Looking for Design / Branding</option>
                                                    <option>Other / General Partnership</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2 group">
                                                <label className="text-xs font-extrabold uppercase tracking-wider text-gray-400 group-focus-within:text-[#004c8c] transition-colors">Message</label>
                                                <textarea rows={4} className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all outline-none font-medium text-[#212529] resize-none" placeholder="Tell us about your project goals..." />
                                            </div>

                                            <button className="w-full btn-webfx btn-action py-5 text-lg shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform">
                                                Send Message <Send size={20} />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gray-50 border-t border-gray-100 relative z-10">
                <div className="container max-w-[1000px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <Reveal width="100%">
                            <h2 className="text-4xl md:text-5xl font-black text-[#212529] mb-4">Common Questions</h2>
                            <p className="text-lg text-gray-500">Everything you need to know before we start.</p>
                        </Reveal>
                    </div>

                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100">
                        {faqs.map((faq, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <FAQItem question={faq.question} answer={faq.answer} />
                            </Reveal>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-500 font-medium">
                            Still have questions? <a href="mailto:support@kalatram.com" className="text-[#004c8c] font-bold underline">Chat with our support team</a>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
