"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface PremiumCardProps {
    children: React.ReactNode;
    delay?: number;
    highlight?: boolean;
}

export const PremiumCard = ({ children, delay = 0, highlight = false }: PremiumCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className={`group relative p-10 rounded-[2.5rem] border transition-all duration-700 bg-obsidian overflow-hidden ${highlight
                ? "border-white/20 shadow-[0_32px_64px_-16px_rgba(255,255,255,0.05)]"
                : "border-white/5"
                }`}
        >
            {/* Decorative High-Precision Glow */}
            <div className={`absolute -top-px -left-px -right-px h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />

            {/* Background Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

            {/* Content Wrapper */}
            <div className="relative z-10 h-full flex flex-col">
                {children}
            </div>

            {/* Dynamic Corner Highlight */}
            <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-white/5 rounded-full blur-xl animate-pulse" />
            </div>
        </motion.div>
    );
};
