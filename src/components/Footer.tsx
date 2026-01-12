"use client"

import Link from "next/link"
import { Cpu, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const footerLinks = {
    Services: [
        { name: "Web Development", href: "/development/web-development" },
        { name: "App Development", href: "/development/app-development" },
        { name: "Digital Marketing", href: "/marketing/digital-marketing" },
        { name: "SEO Services", href: "/marketing/seo" },
        { name: "Graphic Design", href: "/design/graphic-design" },
        { name: "Brand Identity", href: "/design/branding" },
    ],
    Company: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Our Approach", href: "/our-approach" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
    ],
    Resources: [
        { name: "Portfolio", href: "/portfolio" },
        { name: "Blog", href: "/blog" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
    ]
}

export function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-[#004c8c] flex items-center justify-center rounded-sm">
                                <Cpu className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-black tracking-tight text-white uppercase">
                                Kalatram
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Driving revenue and business growth through data-driven digital marketing solutions. Partner with a team that cares about your results.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#004c8c] transition-colors">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h4 className="font-bold text-lg mb-6">{title}</h4>
                                <ul className="space-y-4">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.href} className="text-gray-400 hover:text-[#004c8c] transition-colors text-sm">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                    <p>© 2026 Kalatram. All rights reserved.</p>
                    <div className="flex gap-8">
                        {/* Links are now in the main grid for better visibility */}
                    </div>
                </div>
            </div>
        </footer>
    )
}
