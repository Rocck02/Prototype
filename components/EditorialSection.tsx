"use client";

import { motion } from "framer-motion";

interface EditorialSectionProps {
    title: string;
    subtitle: string;
    description: string;
    reversed?: boolean;
}

export const EditorialSection = ({ title, subtitle, description, reversed = false }: EditorialSectionProps) => {
    return (
        <section className="py-40 px-6 bg-obsidian overflow-hidden">
            <div className={`max-w-7xl mx-auto flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} gap-24 items-center`}>
                <div className="md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 font-bold mb-8 block font-sans">
                            {subtitle}
                        </span>
                        <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 text-white leading-[0.9] tracking-tighter text-sheen">
                            {title}
                        </h2>
                    </motion.div>
                </div>

                <div className="md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="relative"
                    >
                        <div className="absolute -left-12 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
                        <p className="text-xl md:text-3xl text-zinc-400 font-sans leading-relaxed italic font-light">
                            "{description}"
                        </p>

                        <div className="mt-16 flex items-center gap-8">
                            <div className="h-px w-24 bg-white/20" />
                            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">Standard of Excellence</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
