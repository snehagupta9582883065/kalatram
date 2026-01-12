"use client"

import { ServiceLayout } from "@/components/templates/ServiceLayout"
import { MousePointer, Target, DollarSign, Layout, PieChart, Timer } from "lucide-react"

export default function PpcPage() {
    return (
        <ServiceLayout
            title="Pay-Per-Click Management"
            subtitle="Instant Traffic & Leads"
            description="Maximize your ad spend with precision-targeted PPC campaigns. We manage Google Ads, Bing, and Display networks to generate immediate results."
            features={[
                {
                    title: "Google Ads",
                    description: "High-intent search campaigns that capture ready-to-buy customers instantly.",
                    icon: MousePointer
                },
                {
                    title: "Display Advertising",
                    description: "Visual banner ads that build brand awareness across millions of websites.",
                    icon: Layout
                },
                {
                    title: "Remarketing",
                    description: "Re-engaging visitors who left your site to bring them back and convert.",
                    icon: Timer
                },
                {
                    title: "Shopping Ads",
                    description: "Showcasing your products directly in search results for high CTR.",
                    icon: DollarSign
                },
                {
                    title: "Audience Targeting",
                    description: "Pinpointing users based on demographics, interests, and behavior.",
                    icon: Target
                },
                {
                    title: "A/B Testing",
                    description: "Continuous experimentation with ad copy and landing pages.",
                    icon: PieChart
                }
            ]}
            process={[
                {
                    title: "Account Setup",
                    description: "Structuring campaigns, ad groups, and keywords for maximum quality score."
                },
                {
                    title: "Keyword & Bid Strategy",
                    description: "Selecting optimal keywords and bid strategies to lower CPC."
                },
                {
                    title: "Ad Creation",
                    description: "Writing compelling ad copy that drives high click-through rates."
                },
                {
                    title: "Landing Page Optimization",
                    description: "Ensuring the destination page is primed for conversion."
                },
                {
                    title: "Daily Management",
                    description: "Monitoring budgets and negating irrelevant search terms."
                }
            ]}
            benefits={[
                "Immediate Results",
                "Control Over Budget",
                "High-Intent Leads",
                "Measurable ROI",
                "Brand Protection"
            ]}
        />
    )
}
