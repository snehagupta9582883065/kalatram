"use client"

import { ServiceLayout } from "@/components/templates/ServiceLayout"
import { Store, Palette, Plug, RefreshCcw, Rocket, Search } from "lucide-react"

export default function ShopifyPage() {
    return (
        <ServiceLayout
            title="Shopify Development"
            subtitle="Certified Shopify Partners"
            description="Leverage the world's leading ecommerce platform. We build high-converting Shopify stores that are easy to manage and scale."
            features={[
                {
                    title: "Theme Customization",
                    description: "Tailoring premium themes or building from scratch to perfectly match your brand identity.",
                    icon: Palette
                },
                {
                    title: "Shopify Plus",
                    description: "Enterprise-level solutions for high-volume merchants needing advanced scalability.",
                    icon: Store
                },
                {
                    title: "App Integration",
                    description: "Seamlessly connecting your store with ERP, CRM, and marketing automation tools.",
                    icon: Plug
                },
                {
                    title: "Migration Services",
                    description: "Safe and secure transfer of data from WooCommerce, Magento, or other platforms to Shopify.",
                    icon: RefreshCcw
                },
                {
                    title: "Speed Optimization",
                    description: "Fine-tuning code and assets to achieve lightning-fast loading times.",
                    icon: Rocket
                },
                {
                    title: "Shopify SEO",
                    description: "Optimizing structure and content to rank higher in search results.",
                    icon: Search
                }
            ]}
            process={[
                {
                    title: "Requirements Analysis",
                    description: "Understanding your business model and technical needs for the Shopify ecosystem."
                },
                {
                    title: "Theme Development",
                    description: "Customizing the frontend to create a unique and engaging shopping experience."
                },
                {
                    title: "Data Migration",
                    description: "Importing products, customers, and orders with zero data loss."
                },
                {
                    title: "App Configuration",
                    description: "Setting up essential apps for reviews, loyalty programs, and marketing."
                },
                {
                    title: "Training & Handover",
                    description: "Teaching your team how to manage orders, products, and content effectively."
                }
            ]}
            benefits={[
                "Fast Time-to-Market",
                "Easy Management",
                "Scalable Infrastructure",
                "24/7 Security",
                "Global Payment Support"
            ]}
        />
    )
}
