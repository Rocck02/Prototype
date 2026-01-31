"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RefinedHeroProps {
    onBookingClick: () => void;
}

export const RefinedHero = ({ onBookingClick }: RefinedHeroProps) => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden bg-obsidian">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                    className="mb-12"
                >
                    <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 font-bold mb-8 block">
                        EST. 2018 — FORT LAUDERDALE
                    </span>
                    <h1 className="text-[clamp(3rem,10vw,8rem)] font-display font-bold leading-[0.9] tracking-tighter text-white mb-12 text-sheen">
                        {"RESTORE. PROTECT. ".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.1, delay: i * 0.05 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                        <br />
                        <motion.span
                            initial={{ clipPath: "inset(0 100% 0 0)" }}
                            animate={{ clipPath: "inset(0 0% 0 0)" }}
                            transition={{ duration: 1.5, delay: 1.5, ease: [0.23, 1, 0.32, 1] }}
                            className="text-gradient inline-block"
                        >
                            PERFECT.
                        </motion.span>
                    </h1>
                </motion.div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        className="max-w-xl"
                    >
                        <p className="text-xl md:text-2xl text-zinc-400 font-sans leading-relaxed mb-12 border-l border-white/10 pl-8">
                            Showroom-quality restoration and protection for vehicles
                            that deserve to stay in perfect condition.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <Button
                                onClick={onBookingClick}
                                className="group relative h-16 px-10 bg-white text-black hover:bg-satin-silver transition-all duration-500 rounded-full overflow-hidden"
                            >
                                <span className="relative z-10 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                                    Initiate Transformation <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Button>

                            <Button
                                variant="outline"
                                className="h-16 px-10 border-white/10 text-white hover:bg-white/5 transition-all duration-500 rounded-full text-xs font-bold uppercase tracking-widest"
                            >
                                Our Philosophy
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                        className="hidden lg:flex flex-col items-end gap-16 text-right"
                    >
                        <div>
                            <p className="text-4xl font-display font-bold text-white mb-2">99.7%</p>
                            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Defect Removal Rate</p>
                        </div>
                        <div>
                            <p className="text-4xl font-display font-bold text-white mb-2">1,200+</p>
                            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Vehicles Meticulously Restored</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Aesthetic Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[9px] uppercase tracking-[0.5em] text-zinc-600 font-bold">Scroll</span>
                <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>
        </section>
    );
};
