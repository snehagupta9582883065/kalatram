"use client"

import { ServiceLayout } from "@/components/templates/ServiceLayout"
import { ShoppingBag, CreditCard, ShoppingCart, BarChart, Truck, Users } from "lucide-react"

export default function EcommercePage() {
    return (
        <ServiceLayout
            title="Ecommerce Solutions"
            subtitle="Drive Sales Online"
            description="Build a powerful online store that converts visitors into loyal customers. We create custom ecommerce experiences tailored to your products."
            features={[
                {
                    title: "Custom Storefronts",
                    description: "Unique, branded designs that set you apart from competitors and tell your product story.",
                    icon: ShoppingBag
                },
                {
                    title: "Payment Gateways",
                    description: "Secure integration with Stripe, PayPal, Razorpay, and other global payment processors.",
                    icon: CreditCard
                },
                {
                    title: "Cart Optimization",
                    description: "Streamlined checkout flows designed to minimize cart abandonment and boost revenue.",
                    icon: ShoppingCart
                },
                {
                    title: "Inventory Management",
                    description: "Automated systems to track stock levels, orders, and fulfillment in real-time.",
                    icon: Truck
                },
                {
                    title: "Customer Analytics",
                    description: "Deep insights into customer behavior, purchasing patterns, and lifetime value.",
                    icon: Users
                },
                {
                    title: "Sales Reporting",
                    description: "Comprehensive dashboards to monitor revenue, growth, and key performance indicators.",
                    icon: BarChart
                }
            ]}
            process={[
                {
                    title: "Product Strategy",
                    description: "Analyzing your catalog and target market to structure a high-converting store."
                },
                {
                    title: "Design & UX",
                    description: "Crafting a shopping experience that makes browsing and buying effortless."
                },
                {
                    title: "Platform Setup",
                    description: "Configuring the backend, products, shipping rules, and taxes."
                },
                {
                    title: "Integration",
                    description: "Connecting shipping, payment, and marketing tools for a unified workflow."
                },
                {
                    title: "Launch & Growth",
                    description: "Executing a launch strategy and optimizing for sales from day one."
                }
            ]}
            benefits={[
                "High Conversion Rates",
                "Secure Payments",
                "Seamless Inventory",
                "Mobile-Ready Design",
                "SEO for Products"
            ]}
        />
    )
}
