"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Cpu, ChevronDown, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ProposalModal } from "@/components/ProposalModal"

const navLinks = [
    { name: "Services", href: "/services", hasMegaMenu: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Our Approach", href: "/our-approach" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/login" },
]

const servicesData = [
    {
        category: "Development",
        items: [
            { name: "Web Development", href: "/development/web-development" },
            { name: "App Development", href: "/development/app-development" },
            { name: "Ecommerce Solutions", href: "/development/ecommerce" },
            { name: "Shopify Development", href: "/development/shopify" },
            { name: "Website Maintenance", href: "/development/maintenance" },
        ]
    },
    {
        category: "Marketing",
        items: [
            { name: "Digital Marketing", href: "/marketing/digital-marketing" },
            { name: "SEO Services", href: "/marketing/seo" },
            { name: "PPC Management", href: "/marketing/ppc" },
            { name: "Social Media Marketing", href: "/marketing/social-media" },
            { name: "Email Marketing", href: "/marketing/email-marketing" },
        ]
    },
    {
        category: "Design",
        items: [
            { name: "Graphic Designing", href: "/design/graphic-design" },
            { name: "Logo Design", href: "/design/logo-design" },
            { name: "UI/UX Design", href: "/design/ui-ux" },
            { name: "Brand Identity", href: "/design/branding" },
            { name: "Brochure Design", href: "/design/brochure" },
        ]
    }
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-[100] w-full font-sans"
                onMouseLeave={() => setActiveMenu(null)}
            >

                {/* Main Nav */}
                <div className={cn(
                    "bg-white border-b border-gray-100 transition-all duration-300 py-3 px-6 shadow-sm relative",
                    isScrolled ? "py-2 shadow-md" : "py-4"
                )}>
                    <nav className="max-w-[1400px] mx-auto flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-[#004c8c] flex items-center justify-center rounded-sm">
                                <Cpu className="text-white w-6 h-6" />
                            </div>
                            <span className="text-3xl font-black tracking-tight text-[#004c8c] uppercase">
                                Kalatram
                            </span>
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center gap-8 h-full">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative h-full flex items-center"
                                    onMouseEnter={() => link.hasMegaMenu && setActiveMenu(link.name)}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "flex items-center gap-1 text-xs font-bold uppercase tracking-wide transition-colors py-2 border-b-2 border-transparent hover:text-[#004c8c]",
                                            (pathname === link.href || activeMenu === link.name) ? "text-[#004c8c]" : "text-[#333]"
                                        )}
                                    >
                                        {link.name}
                                        {link.hasMegaMenu && <ChevronDown size={14} className={cn("transition-transform", activeMenu === link.name ? "rotate-180" : "")} />}
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="hidden lg:block btn-kalatram btn-action px-8"
                            >
                                Get My Free Proposal
                            </button>
                            <button
                                className="lg:hidden text-[#333]"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </nav>

                    {/* Mega Menu */}
                    <AnimatePresence>
                        {activeMenu === "Services" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl z-50 overflow-hidden"
                                onMouseEnter={() => setActiveMenu("Services")}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                <div className="max-w-[1400px] mx-auto p-10">
                                    <div className="flex justify-between items-start mb-8 pb-6 border-b border-gray-100">
                                        <div>
                                            <h3 className="text-xl font-black text-[#212529] uppercase tracking-tight">Digital Marketing Agency Services</h3>
                                            <p className="text-gray-500 text-sm mt-1">Revenue-driving strategies for growing businesses.</p>
                                        </div>
                                        <Link href="/services" className="text-[#004c8c] font-bold text-sm flex items-center gap-2 hover:underline">
                                            View All Services <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-3 gap-12">
                                        {servicesData.map((section) => (
                                            <div key={section.category}>
                                                <h4 className="text-sm font-black text-[#004c8c] uppercase tracking-wider mb-6 flex items-center gap-2">
                                                    <div className="w-1 h-4 bg-[#f68d2e]" />
                                                    {section.category}
                                                </h4>
                                                <ul className="space-y-3">
                                                    {section.items.map((item) => (
                                                        <li key={item.name}>
                                                            <Link href={item.href} className="text-gray-600 hover:text-[#004c8c] hover:translate-x-1 transition-all inline-block font-medium text-[15px]">
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Bottom highlight */}
                                    <div className="mt-10 p-4 bg-gray-50 rounded-lg flex items-center justify-between border border-gray-100">
                                        <div className="flex items-center gap-4">
                                            <span className="font-bold text-[#212529]">Ready to grow?</span>
                                            <span className="text-sm text-gray-500">Get a custom strategy built for your business needs.</span>
                                        </div>
                                        <button onClick={() => setIsModalOpen(true)} className="text-[#f68d2e] font-bold text-sm hover:underline">
                                            Request Proposal →
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="fixed inset-0 top-[100px] bg-white z-[90] lg:hidden p-8 overflow-y-auto"
                        >
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-xl font-bold uppercase text-[#333] border-b border-gray-100 pb-4 block"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.hasMegaMenu && (
                                            <div className="pl-4 mt-4 space-y-6">
                                                {servicesData.map(section => (
                                                    <div key={section.category}>
                                                        <p className="text-xs font-bold text-gray-400 uppercase mb-2">{section.category}</p>
                                                        <ul className="space-y-2 border-l-2 border-gray-100 pl-4">
                                                            {section.items.map(item => (
                                                                <li key={item.name}>
                                                                    <Link
                                                                        href={item.href}
                                                                        className="text-gray-600 block py-1"
                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false)
                                        setIsModalOpen(true)
                                    }}
                                    className="btn-kalatram btn-action w-full py-4 mt-4"
                                >
                                    Get My Free Proposal
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <ProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
