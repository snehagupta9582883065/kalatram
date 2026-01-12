"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 250 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const handleHoverStart = (e: Event) => {
            const target = e.target as HTMLElement
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.classList.contains("interactive")
            ) {
                setIsHovered(true)
            }
        }

        const handleHoverEnd = () => setIsHovered(false)

        window.addEventListener("mousemove", moveCursor)
        window.addEventListener("mouseover", handleHoverStart)
        window.addEventListener("mouseout", handleHoverEnd)

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            window.removeEventListener("mouseover", handleHoverStart)
            window.removeEventListener("mouseout", handleHoverEnd)
        }
    }, [cursorX, cursorY])

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/40 mix-blend-multiply"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovered ? 2.5 : 1,
                    backgroundColor: isHovered ? "rgba(79, 70, 229, 0.05)" : "transparent",
                }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
            />
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-primary"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovered ? 0 : 1,
                }}
            />
        </div>
    )
}
