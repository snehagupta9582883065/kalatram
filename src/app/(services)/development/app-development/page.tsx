"use client"

import { ServiceLayout } from "@/components/templates/ServiceLayout"
import { Smartphone, Tablet, Layers, Wifi, Bell, Lock } from "lucide-react"

export default function AppDevelopmentPage() {
    return (
        <ServiceLayout
            title="Mobile App Development"
            subtitle="Native & Cross-Platform"
            description="Transform your ideas into powerful mobile experiences. We craft intuitive iOS and Android apps that users love to engage with."
            features={[
                {
                    title: "iOS Development",
                    description: "Native Swift/SwiftUI development for the highest performance on Apple devices.",
                    icon: Smartphone
                },
                {
                    title: "Android Development",
                    description: "Robust Kotlin/Java applications optimized for the fragmented Android ecosystem.",
                    icon: Tablet
                },
                {
                    title: "Cross-Platform",
                    description: "Cost-effective Flutter/React Native solutions that work flawlessly on both iOS and Android.",
                    icon: Layers
                },
                {
                    title: "Offline Capabilities",
                    description: "Apps that function seamlessly even with intermittent or no internet connection.",
                    icon: Wifi
                },
                {
                    title: "Real-Time Features",
                    description: "Integration of push notifications, live chat, and real-time data synchronization.",
                    icon: Bell
                },
                {
                    title: "Secure Architecture",
                    description: "Biometric authentication and encrypted data storage for maximum security.",
                    icon: Lock
                }
            ]}
            process={[
                {
                    title: "User Research",
                    description: "Understanding your target audience to design an app that solves real problems."
                },
                {
                    title: "Wireframing",
                    description: "Mapping out the user journey and core functionality before writing a single line of code."
                },
                {
                    title: "Development",
                    description: "Building the app using clean, maintainable code with a focus on performance."
                },
                {
                    title: "App Store Launch",
                    description: "Handling the complex submission and review process for Apple App Store and Google Play."
                },
                {
                    title: "Growth & Analytics",
                    description: "Integrating analytics tools to track user behavior and drive continuous improvement."
                }
            ]}
            benefits={[
                "Native Performance",
                "Intuitive UI/UX",
                "Cross-Platform Support",
                "App Store Optimization",
                "Post-Launch Support"
            ]}
        />
    )
}
