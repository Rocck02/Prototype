"use client";

import { motion } from "framer-motion";

export const PremiumBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-obsidian">
            {/* Fine Grain Texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* Refined Cinematic Glows - White / Off-White Only */}
            <motion.div
                animate={{
                    x: ["-10vw", "10vw", "-10vw"],
                    y: ["-5vh", "15vh", "-5vh"],
                    opacity: [0.06, 0.12, 0.06],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ willChange: "transform, opacity" }}
                className="absolute -top-[20%] -left-[10%] w-[100vw] h-[100vw] rounded-full bg-gradient-to-br from-white/10 to-transparent blur-[160px]"
            />

            <motion.div
                animate={{
                    x: ["5vw", "-15vw", "5vw"],
                    y: ["10vh", "-10vh", "10vh"],
                    opacity: [0.04, 0.08, 0.04],
                    scale: [1.1, 0.9, 1.1],
                }}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                }}
                style={{ willChange: "transform, opacity" }}
                className="absolute top-[20%] -right-[20%] w-[90vw] h-[90vw] rounded-full bg-gradient-to-bl from-white/5 to-transparent blur-[200px]"
            />

            {/* Subtle Deep Bloom */}
            <motion.div
                animate={{
                    opacity: [0.02, 0.05, 0.02],
                    scale: [0.85, 1, 0.85],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ willChange: "opacity" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] rounded-full bg-white blur-[250px]"
            />

            {/* Luxury Depth Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />
            <div className="absolute inset-0 bg-black/10 pointer-events-none backdrop-blur-[0.5px]" />
        </div>
    );
};
