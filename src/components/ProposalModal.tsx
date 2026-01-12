"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ProposalForm } from "@/components/ProposalForm"

interface ProposalModalProps {
    isOpen: boolean
    onClose: () => void
}

export function ProposalModal({ isOpen, onClose }: ProposalModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg z-10"
                    >
                        <div className="relative">
                            <button
                                onClick={onClose}
                                className="absolute -top-12 right-0 md:-right-12 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            >
                                <X size={24} />
                            </button>

                            {/* Render the enhanced form component */}
                            <ProposalForm />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
