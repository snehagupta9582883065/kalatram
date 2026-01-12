"use client"

import { ServiceLayout } from "@/components/templates/ServiceLayout"
import { Share2, Heart, MessageCircle, Image, Star, Users } from "lucide-react"

export default function SocialMediaPage() {
    return (
        <ServiceLayout
            title="Social Media Marketing"
            subtitle="Engage & Grow"
            description="Build a loyal community and drive brand awareness. We create authentic connections on Instagram, LinkedIn, Facebook, and Twitter."
            features={[
                {
                    title: "Strategy & Planning",
                    description: "Content calendars aligned with your brand voice and marketing goals.",
                    icon: Share2
                },
                {
                    title: "Content Creation",
                    description: "Stunning visuals, reels, and copy that stop the scroll and drive engagement.",
                    icon: Image
                },
                {
                    title: "Community Management",
                    description: "Active monitoring and responding to comments to build brand loyalty.",
                    icon: MessageCircle
                },
                {
                    title: "Influencer Marketing",
                    description: "Partnering with key voices in your niche to expand your reach.",
                    icon: Star
                },
                {
                    title: "Paid Social Ads",
                    description: "Targeted advertising campaigns to reach specific demographics at scale.",
                    icon: Heart
                },
                {
                    title: "Social Listening",
                    description: "Monitoring brand mentions and sentiments across the social web.",
                    icon: Users
                }
            ]}
            process={[
                {
                    title: "Brand Audit",
                    description: "Analyzing your current social presence and competitor landscape."
                },
                {
                    title: "Content Strategy",
                    description: "Defining content pillars and visual guidelines."
                },
                {
                    title: "Production",
                    description: "Designing and writing posts for the month ahead."
                },
                {
                    title: "Scheduling & Posting",
                    description: "Publishing content at optimal times for maximum reach."
                },
                {
                    title: "Analysis",
                    description: "Reviewing metrics like engagement rate and follower growth."
                }
            ]}
            benefits={[
                "Brand Loyalty",
                "Direct Customer Access",
                "Viral Potential",
                "Visual Storytelling",
                "Community Growth"
            ]}
        />
    )
}
