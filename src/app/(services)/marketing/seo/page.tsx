"use client"

import { ServiceLayout } from "@/components/templates/ServiceLayout"
import { Search, Globe, FileText, Link, BarChart, Settings } from "lucide-react"

export default function SeoPage() {
    return (
        <ServiceLayout
            title="Search Engine Optimization"
            subtitle="Dominate Search Results"
            description="Rank higher, drive organic traffic, and build long-term authority. Our white-hat SEO strategies deliver sustainable growth."
            features={[
                {
                    title: "Technical SEO",
                    description: "Optimizing site architecture, speed, and code to ensure easy crawling by Google.",
                    icon: Settings
                },
                {
                    title: "Keyword Research",
                    description: "Identifying high-intent search terms that drive ready-to-buy traffic to your site.",
                    icon: Search
                },
                {
                    title: "On-Page Optimization",
                    description: "Enhancing content, meta tags, and headers for maximum relevance and readability.",
                    icon: FileText
                },
                {
                    title: "Link Building",
                    description: "Acquiring high-quality backlinks from authoritative domains to boost credibility.",
                    icon: Link
                },
                {
                    title: "Local SEO",
                    description: "Optimizing your GMB profile and citations to capture local customers.",
                    icon: Globe
                },
                {
                    title: "Competitor Analysis",
                    description: "reversing engineering competitor strategies to uncover new opportunities.",
                    icon: BarChart
                }
            ]}
            process={[
                {
                    title: "SEO Audit",
                    description: "A comprehensive health check of your website to identify errors and opportunities."
                },
                {
                    title: "Strategy Development",
                    description: "Creating a content and technical roadmap based on keyword research."
                },
                {
                    title: "Implementation",
                    description: "Fixing technical issues and optimizing existing landing pages."
                },
                {
                    title: "Content Creation",
                    description: "Publishing high-quality, SEO-optimized articles and guides."
                },
                {
                    title: "Reporting",
                    description: "Monthly reports tracking rankings, traffic, and conversions."
                }
            ]}
            benefits={[
                "Sustainable Traffic",
                "Higher Credibility",
                "Better User Experience",
                "Local Visibility",
                "Long-Term ROI"
            ]}
        />
    )
}
