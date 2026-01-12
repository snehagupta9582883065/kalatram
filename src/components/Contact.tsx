"use client"

import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-8"
                        >
                            Ready to <span className="text-gradient">Innovate?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-foreground/60 text-lg mb-12 max-w-md"
                        >
                            Let&apos;s discuss your next project. Our team is ready to help you build
                            something extraordinary.
                        </motion.p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/40 font-medium">Email Us</p>
                                    <p className="text-lg font-bold">hello@kalatram.ai</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/40 font-medium">Call Us</p>
                                    <p className="text-lg font-bold">+1 (555) 000-0000</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/40 font-medium">Location</p>
                                    <p className="text-lg font-bold">Innovation Hub, Silicon Valley</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-10 rounded-3xl border border-white/10"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/70">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/70">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/70">Subject</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors appearance-none">
                                    <option className="bg-bg-dark">Web Development</option>
                                    <option className="bg-bg-dark">Mobile App</option>
                                    <option className="bg-bg-dark">AI Solutions</option>
                                    <option className="bg-bg-dark">Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/70">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors resize-none"
                                />
                            </div>
                            <button className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
