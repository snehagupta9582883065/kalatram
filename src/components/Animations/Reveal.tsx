"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface RevealProps {
    children: React.ReactNode
    width?: "fit-content" | "100%"
    delay?: number
    duration?: number
    y?: number
}

export const Reveal = ({ children, width = "fit-content", delay = 0, duration = 0.5, y = 30 }: RevealProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export const StaggerContainer = ({ children, delayChildren = 0, staggerChildren = 0.1 }: { children: React.ReactNode, delayChildren?: number, staggerChildren?: number }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                visible: {
                    transition: {
                        delayChildren,
                        staggerChildren,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    )
}
