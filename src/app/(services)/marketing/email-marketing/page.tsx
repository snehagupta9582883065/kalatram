"use client"

import { ServiceLayout } from "@/components/templates/ServiceLayout"
import { Mail, Clock, Users, BarChart, Zap, Layout } from "lucide-react"

export default function EmailMarketingPage() {
    return (
        <ServiceLayout
            title="Email Marketing"
            subtitle="Retention & Revenue"
            description="Turn subscribers into repeat buyers. We craft personalized email campaigns and automation flows that nurture leads and drive sales."
            features={[
                {
                    title: "Automated Flows",
                    description: "Setting up welcome series, abandoned cart recovery, and post-purchase sequences.",
                    icon: Zap
                },
                {
                    title: "Newsletter Campaigns",
                    description: "Regular broadcasts to keep your audience engaged and informed.",
                    icon: Mail
                },
                {
                    title: "List Segmentation",
                    description: "Delivering the right message to the right person based on behavior.",
                    icon: Users
                },
                {
                    title: "A/B Testing",
                    description: "Optimizing subject lines and email content for higher open rates.",
                    icon: BarChart
                },
                {
                    title: "Responsive Design",
                    description: "Beautiful email templates that look great on mobile and desktop.",
                    icon: Layout
                },
                {
                    title: "Lead Nurturing",
                    description: "Educating prospects over time to guide them toward a purchase decision.",
                    icon: Clock
                }
            ]}
            process={[
                {
                    title: "List Audit",
                    description: "Cleaning your email list and ensuring deliverability health."
                },
                {
                    title: "Flow Setup",
                    description: "Implementing core automated revenue-generating flows."
                },
                {
                    title: "Campaign Planning",
                    description: "Creating a content calendar for newsletters and promos."
                },
                {
                    title: "Design & Copy",
                    description: "Crafting copy that converts and designs that impress."
                },
                {
                    title: "Reporting",
                    description: "Tracking opens, clicks, and revenue generated per email."
                }
            ]}
            benefits={[
                "High ROI",
                "Customer Retention",
                "Owned Audience",
                "Personalized Messaging",
                "Automated Revenue"
            ]}
        />
    )
}
