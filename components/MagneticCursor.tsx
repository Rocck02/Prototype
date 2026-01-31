"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const MagneticCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.getAttribute("data-magnetic")
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Cursor Glow */}
            <motion.div
                className="fixed top-0 left-0 w-32 h-32 rounded-full bg-white/[0.03] blur-3xl pointer-events-none z-[998] hidden md:block"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    left: -64,
                    top: -64,
                    scale: isHovered ? 1.5 : 1,
                }}
            />
            {/* Main Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[999] mix-blend-difference hidden md:block"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    left: -16,
                    top: -16,
                    scale: isHovered ? 2.5 : 1,
                    backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "transparent",
                }}
                transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.5 }}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" style={{ height: '4px' }} />
                </div>
            </motion.div>
        </>
    );
};
