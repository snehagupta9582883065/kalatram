"use client"

import { ServiceLayout } from "@/components/templates/ServiceLayout"
import { Monitor, Smartphone, Layout, UserCheck, Figma, Eye } from "lucide-react"

export default function UiUxPage() {
    return (
        <ServiceLayout
            title="UI/UX Design"
            subtitle="Experience Design"
            description="Create digital products that are a joy to use. We blend aesthetics with usability to build interfaces that engage users and drive goals."
            features={[
                {
                    title: "User Research",
                    description: "Deep dive interviews and testing to understand user needs and pain points.",
                    icon: UserCheck
                },
                {
                    title: "Wireframing",
                    description: "Structural blueprints to define layout and hierarchy before visual design.",
                    icon: Layout
                },
                {
                    title: "Prototyping",
                    description: "Interactive mockups that simulate the final product experience.",
                    icon: Figma
                },
                {
                    title: "Visual Design (UI)",
                    description: "Pixel-perfect interfaces with stunning typography, color, and imagery.",
                    icon: Monitor
                },
                {
                    title: "Mobile Responsiveness",
                    description: "Ensuring optimal experiences across all screen sizes.",
                    icon: Smartphone
                },
                {
                    title: "Usability Testing",
                    description: "Validating designs with real users to ensure clarity and ease of use.",
                    icon: Eye
                }
            ]}
            process={[
                {
                    title: "Empathize",
                    description: "Gathering insights to understand who we are designing for."
                },
                {
                    title: "Define",
                    description: "Creating user personas and journey maps."
                },
                {
                    title: "Ideate",
                    description: "Brainstorming creative solutions to user problems."
                },
                {
                    title: "Prototype",
                    description: "Building high-fidelity interactive screens."
                },
                {
                    title: "Test",
                    description: "Iterating based on user feedback and analytics."
                }
            ]}
            benefits={[
                "Higher Retention",
                "Lower Support Costs",
                "Increased Conversion",
                "Competitive Advantage",
                "User Satisfaction"
            ]}
        />
    )
}
