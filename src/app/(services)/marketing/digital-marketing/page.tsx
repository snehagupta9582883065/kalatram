"use client"

import { ServiceLayout } from "@/components/templates/ServiceLayout"
import { TrendingUp, Target, Megaphone, Users, Search, BarChart3 } from "lucide-react"

export default function DigitalMarketingPage() {
    return (
        <ServiceLayout
            title="360° Digital Marketing"
            subtitle="Growth Driven Strategies"
            description="Accelerate your growth with data-driven marketing campaigns. We combine creativity with analytics to drive qualified traffic and revenue."
            features={[
                {
                    title: "Strategic Planning",
                    description: "Comprehensive roadmaps tailored to your market, competitors, and business goals.",
                    icon: Target
                },
                {
                    title: "Multi-Channel Campaigns",
                    description: "Integrated messaging across search, social, email, and display networks.",
                    icon: Megaphone
                },
                {
                    title: "Performance Analytics",
                    description: "Real-time tracking and optimization to maximize ROI on every ad dollar spent.",
                    icon: TrendingUp
                },
                {
                    title: "Audience Segmentation",
                    description: "Identifying and targeting your ideal customer profiles with precision.",
                    icon: Users
                },
                {
                    title: "Conversion Optimization",
                    description: "Refining landing pages and user flows to turn visitors into paying customers.",
                    icon: BarChart3
                },
                {
                    title: "Content Strategy",
                    description: "Creating valuable content that builds authority and engages your audience.",
                    icon: Search
                }
            ]}
            process={[
                {
                    title: "Market Analysis",
                    description: "Deep dive into your industry, competitors, and current digital footprint."
                },
                {
                    title: "Strategy Formulation",
                    description: "Developing a custom mix of channels and tactics to hit your KPIs."
                },
                {
                    title: "Campaign Launch",
                    description: "Executing campaigns with compelling creatives and targeted setup."
                },
                {
                    title: "Optimization",
                    description: "Continuous testing of ad copy, visuals, and targeting to lower CPA."
                },
                {
                    title: "Scaling",
                    description: "Doubling down on winning strategies to expand reach and revenue."
                }
            ]}
            benefits={[
                "Increased ROI",
                "Brand Visibility",
                "Qualified Leads",
                "Data-Backed Decisions",
                "Full-Funnel Growth"
            ]}
        />
    )
}
