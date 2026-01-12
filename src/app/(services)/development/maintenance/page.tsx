"use client"

import { ServiceLayout } from "@/components/templates/ServiceLayout"
import { ShieldCheck, Activity, RefreshCw, LifeBuoy, Server, Lock } from "lucide-react"

export default function MaintenancePage() {
    return (
        <ServiceLayout
            title="Website Maintenance"
            subtitle="Reliable Support & Care"
            description="Keep your website secure, fast, and up-to-date. Our dedicated team ensures your digital presence is always running at peak performance."
            features={[
                {
                    title: "Security Updates",
                    description: "Regular patching of vulnerabilities and software updates to prevent hacks.",
                    icon: ShieldCheck
                },
                {
                    title: "Uptime Monitoring",
                    description: "24/7 surveillance to detect and resolve downtime issues instantly.",
                    icon: Activity
                },
                {
                    title: "Content Updates",
                    description: "Fast turnaround on text, image, and product updates whenever you need them.",
                    icon: RefreshCw
                },
                {
                    title: "Technical Support",
                    description: "Direct access to experts for troubleshooting and technical queries.",
                    icon: LifeBuoy
                },
                {
                    title: "Backup Solutions",
                    description: "Daily automated backups to ensure your data is never lost.",
                    icon: Server
                },
                {
                    title: "SSL Management",
                    description: "Monitoring and renewal of SSL certificates for secure browsing.",
                    icon: Lock
                }
            ]}
            process={[
                {
                    title: "Audit & Onboarding",
                    description: "We scan your site for existing issues and set up our monitoring tools."
                },
                {
                    title: "Regular Maintenance",
                    description: "Scheduled weekly checks for updates, backups, and security scans."
                },
                {
                    title: "Priority Support",
                    description: "Submit requests via our portal and get expedited resolution."
                },
                {
                    title: "Performance Tuning",
                    description: "Ongoing optimization to keep your site speed competitive."
                },
                {
                    title: "Monthly Reporting",
                    description: "Detailed reports on site health, updates performed, and areas for improvement."
                }
            ]}
            benefits={[
                "Peace of Mind",
                "Improved Security",
                "Better Performance",
                "Lower Long-Term Costs",
                "Expert Assistance"
            ]}
            ctaText="Get a Maintenance Plan"
        />
    )
}
