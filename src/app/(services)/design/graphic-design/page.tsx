"use client"

import { ServiceLayout } from "@/components/templates/ServiceLayout"
import { PenTool, Image, Layers, Layout, Palette, Printer } from "lucide-react"

export default function GraphicDesignPage() {
    return (
        <ServiceLayout
            title="Graphic Design Services"
            subtitle="Visual Storytelling"
            description="Captivate your audience with stunning visuals. From marketing materials to digital assets, we create designs that communicate your brand's message effectively."
            features={[
                {
                    title: "Marketing Collateral",
                    description: "Flyers, posters, and banners that grab attention and drive action.",
                    icon: Layout
                },
                {
                    title: "Social Media Graphics",
                    description: "On-brand posts, stories, and covers for all your social profiles.",
                    icon: Image
                },
                {
                    title: "Infographics",
                    description: "Turning complex data into easy-to-understand visual stories.",
                    icon: Layers
                },
                {
                    title: "Print Design",
                    description: "Business cards, letterheads, and packaging ready for production.",
                    icon: Printer
                },
                {
                    title: "Custom Illustrations",
                    description: "Unique artwork that adds personality to your brand.",
                    icon: PenTool
                },
                {
                    title: "Visual Consulting",
                    description: "Expert advice on color palettes, typography, and visual strategy.",
                    icon: Palette
                }
            ]}
            process={[
                {
                    title: "Briefing",
                    description: "Understanding your vision, target audience, and design requirements."
                },
                {
                    title: "Concepting",
                    description: "Sketching and brainstorming initial ideas and mood boards."
                },
                {
                    title: "Design",
                    description: "Creating high-fidelity drafts of the chosen concepts."
                },
                {
                    title: "Feedback & Revisions",
                    description: "Refining the design based on your input to ensure perfection."
                },
                {
                    title: "Final Delivery",
                    description: "Providing source files and print-ready formats."
                }
            ]}
            benefits={[
                "Consistent Branding",
                "Professional Appeal",
                "Better Communication",
                "Versatile Assets",
                "Creative Edge"
            ]}
        />
    )
}
