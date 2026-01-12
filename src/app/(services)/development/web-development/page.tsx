"use client"

import { ServiceLayout } from "@/components/templates/ServiceLayout"
import { Code2, Smartphone, Globe, Cloud, Layout, Shield } from "lucide-react"

export default function WebDevelopmentPage() {
    return (
        <ServiceLayout
            title="Custom Web Development"
            subtitle="Engineering Digital Excellence"
            description="We build high-performance, scalable, and secure websites that drive business growth. From complex enterprise platforms to stunning brand showcases."
            features={[
                {
                    title: "Full-Stack Solutions",
                    description: "End-to-end development using modern frameworks like Next.js, React, and Node.js for robust applications.",
                    icon: Code2
                },
                {
                    title: "Mobile-First Design",
                    description: "Responsive layouts that provide a seamless experience across all devices and screen sizes.",
                    icon: Smartphone
                },
                {
                    title: "High Performance",
                    description: "Optimized for speed and core web vitals to ensure instant loading and better SEO rankings.",
                    icon: Zap
                },
                {
                    title: "Cloud Scalability",
                    description: "Architecture designed to grow with your business, utilizing AWS/Google Cloud infrastructure.",
                    icon: Cloud
                },
                {
                    title: "Custom CMS",
                    description: "Tailored content management systems that give you full control over your digital content.",
                    icon: Layout
                },
                {
                    title: "Enterprise Security",
                    description: "Implementation of industry-standard security protocols to protect your data and users.",
                    icon: Shield
                }
            ]}
            process={[
                {
                    title: "Discovery & Architecture",
                    description: "We analyze your requirements and design a technical roadmap tailored to your business goals."
                },
                {
                    title: "UI/UX Design",
                    description: "Creating intuitive, high-fidelity prototypes that define the look and feel of your application."
                },
                {
                    title: "Agile Development",
                    description: "Iterative coding sprints with regular updates, ensuring transparency and flexibility."
                },
                {
                    title: "Testing & QA",
                    description: "Rigorous testing across devices and scenarios to ensure a bug-free launch."
                },
                {
                    title: "Deployment & Scale",
                    description: "Smooth go-live process and ongoing support to scale your application."
                }
            ]}
            benefits={[
                "2x Faster Load Speeds",
                "SEO-Optimized Codebase",
                "99.9% Uptime Guarantee",
                "Scalable Architecture",
                "Ownership of Source Code"
            ]}
        />
    )
}

// Icon import helper
import { Zap } from "lucide-react"
