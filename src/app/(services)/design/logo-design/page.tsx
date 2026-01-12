"use client"

import { ServiceLayout } from "@/components/templates/ServiceLayout"
import { Hexagon, PenTool, Layout, Box, Shield, Star } from "lucide-react"

export default function LogoDesignPage() {
    return (
        <ServiceLayout
            title="Logo Design Services"
            subtitle="Iconic Brand Marks"
            description="Your logo is the face of your business. We craft timeless, memorable logos that distill your brand's essence into a powerful visual symbol."
            features={[
                {
                    title: "Custom Design",
                    description: "100% original concepts tailored to your industry and brand personality.",
                    icon: Star
                },
                {
                    title: "Vector Scalability",
                    description: "Logos designed to look sharp on everything from a business card to a billboard.",
                    icon: Box
                },
                {
                    title: "Brand Marks",
                    description: "Creating distinct symbols or icons that can stand alone.",
                    icon: Hexagon
                },
                {
                    title: "Typography",
                    description: "Selecting or creating custom typefaces that complement the mark.",
                    icon: PenTool
                },
                {
                    title: "Color Psychology",
                    description: "Choosing colors that evoke the right emotions and associations.",
                    icon: Layout
                },
                {
                    title: "Copyright Ownership",
                    description: "You receive full ownership rights to your final logo design.",
                    icon: Shield
                }
            ]}
            process={[
                {
                    title: "Discovery Workshop",
                    description: "We dive deep into your brand values, mission, and target market."
                },
                {
                    title: "Research",
                    description: "Analyzing competitor logos and industry trends."
                },
                {
                    title: "Sketching",
                    description: "Hand-drawing dozens of concepts to explore different directions."
                },
                {
                    title: "Digital Rendering",
                    description: "Refining the best sketches into polished vector designs."
                },
                {
                    title: "Style Guide",
                    description: "Delivering a mini-guide on how to use your new logo correctly."
                }
            ]}
            benefits={[
                "Memorable Identity",
                "Timeless Design",
                "Versatile Usage",
                "Full Ownership",
                "Professional Look"
            ]}
        />
    )
}
