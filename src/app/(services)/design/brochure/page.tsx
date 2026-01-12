"use client"

import { ServiceLayout } from "@/components/templates/ServiceLayout"
import { Book, FileText, Printer, Image, Layout, Box } from "lucide-react"

export default function BrochurePage() {
    return (
        <ServiceLayout
            title="Brochure Design"
            subtitle="Tangible Marketing"
            description="Create a lasting impression with professionally designed brochures, catalogs, and company profiles. Perfect for trade shows, meetings, and mailers."
            features={[
                {
                    title: "Company Profiles",
                    description: "Professional multi-page booklets showcasing your company's story and services.",
                    icon: Book
                },
                {
                    title: "Product Catalogs",
                    description: "Organized, beautiful layouts to display your product range.",
                    icon: Box
                },
                {
                    title: "Tri-Fold Brochures",
                    description: "Compact, information-rich deliverables for handouts and mailers.",
                    icon: Layout
                },
                {
                    title: "Sales Sheets",
                    description: "One-pagers designed to support your sales team's pitch.",
                    icon: FileText
                },
                {
                    title: "E-Brochures",
                    description: "Interactive PDF versions optimized for digital sharing and email.",
                    icon: Image
                },
                {
                    title: "Print Management",
                    description: "Handling technical specs and coordinating with printers for high-quality results.",
                    icon: Printer
                }
            ]}
            process={[
                {
                    title: "Content Strategy",
                    description: "Determining the hierarchy of information and key messages."
                },
                {
                    title: "Layout Design",
                    description: "Creating a structure that guides the reader's eye effectively."
                },
                {
                    title: "Visual Asset Creation",
                    description: "Selecting stock photos or creating custom graphics/charts."
                },
                {
                    title: "Typesetting",
                    description: "Ensuring readability with professional font choices and spacing."
                },
                {
                    title: "Pre-Press",
                    description: "Preparing files with bleed, crop marks, and correct color profiles."
                }
            ]}
            benefits={[
                "Physical Presence",
                "Credibility Booster",
                "Sales Support",
                "Information Density",
                "Tangible Value"
            ]}
        />
    )
}
