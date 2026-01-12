"use client"

import { ServiceLayout } from "@/components/templates/ServiceLayout"
import { Flag, MessageSquare, BookOpen, Layers, Target, Heart } from "lucide-react"

export default function BrandingPage() {
    return (
        <ServiceLayout
            title="Brand Identity Services"
            subtitle="Build a Legacy"
            description="More than just a logo. We build comprehensive brand identities that resonate with your audience and stand the test of time."
            features={[
                {
                    title: "Brand Strategy",
                    description: "Defining your positioning, mission, vision, and core values.",
                    icon: Target
                },
                {
                    title: "Visual Identity System",
                    description: "A cohesive system of logos, colors, typography, and imagery.",
                    icon: Layers
                },
                {
                    title: "Brand Voice",
                    description: "Establishing the tone and personality of your written communication.",
                    icon: MessageSquare
                },
                {
                    title: "Brand Guidelines",
                    description: "A comprehensive 'Brand Book' ensuring consistency across all touchpoints.",
                    icon: BookOpen
                },
                {
                    title: "Naming Services",
                    description: "Creating unique, memorable names for your company or products.",
                    icon: Flag
                },
                {
                    title: "Rebranding",
                    description: "Revitalizing existing brands to stay relevant in a changing market.",
                    icon: Heart
                }
            ]}
            process={[
                {
                    title: "Immersion",
                    description: "We become an extension of your team to understand the soul of your business."
                },
                {
                    title: "Strategy",
                    description: "Establishing the 'Three Pillars' of your brand: Purpose, Perception, and Personality."
                },
                {
                    title: "Visual Exploration",
                    description: "Designing the visual elements that will represent the brand."
                },
                {
                    title: "Systematization",
                    description: "Documenting rules to maintain brand integrity."
                },
                {
                    title: "Rollout",
                    description: "Help launching or relaunching the brand to the world."
                }
            ]}
            benefits={[
                "Unmistakable Identity",
                "Customer Loyalty",
                "Premium Positioning",
                "Internal Alignment",
                "Increased Value"
            ]}
        />
    )
}
