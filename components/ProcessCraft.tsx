"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Target, Zap, Waves, Sparkles, Binary } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Deep Cleaning",
        subtitle: "GENTLE & EFFECTIVE",
        description: "We remove deep-seated dirt and grime that regular washing can't touch. Our process prepares every surface for a perfect finish without using harsh chemicals.",
        details: [
            { label: "METHOD", value: "Multi-Stage Decon" },
            { label: "PURITY", value: "Surface Level" },
            { label: "CHEMISTRY", value: "Safe & Balanced" }
        ],
        icon: Waves
    },
    {
        id: "02",
        title: "Paint Correction",
        subtitle: "REMOVING SCRATCHES",
        description: "We carefully polish the paint to remove scratches and swirls. This restores the original shine and leaves the surface looking like smooth glass.",
        details: [
            { label: "TOOLS", value: "Precision Polishing" },
            { label: "MEASUREMENT", value: "Digital Testing" },
            { label: "LIGHTING", value: "High-Clarity Shop" }
        ],
        icon: Target
    },
    {
        id: "03",
        title: "Ceramic Coating",
        subtitle: "ULTIMATE PROTECTION",
        description: "Our durable ceramic coating adds a long-lasting layer of protection. It shields your car from the elements while making it incredibly easy to keep clean.",
        details: [
            { label: "DURABILITY", value: "5-9 Years" },
            { label: "STRENGTH", value: "Hardened Shield" },
            { label: "FINISH", value: "Ultra-Gleam" }
        ],
        icon: Shield
    }
];

export const ProcessCraft = () => {
    const [activeStep, setActiveStep] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section id="process" ref={containerRef} className="py-40 px-6 bg-obsidian relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    <div className="sticky top-40">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 font-bold mb-8 block font-sans">
                                THE METHODOLOGY
                            </span>
                            <h2 className="text-5xl md:text-7xl font-display font-bold mb-12 text-white leading-tight text-sheen">
                                A Protocol of <br />
                                <span className="text-gradient italic">Infinite</span> Precision.
                            </h2>
                            <p className="text-zinc-400 text-xl font-sans leading-relaxed mb-16 max-w-lg">
                                We've codified the detailing process into a repeatable, scientific framework.
                                Move through the stages to understand the technical depth of our craft.
                            </p>

                            <div className="space-y-4">
                                {steps.map((step, i) => (
                                    <button
                                        key={step.id}
                                        onMouseEnter={() => setActiveStep(i)}
                                        className={`w-full group flex items-center justify-between p-8 rounded-2xl border transition-all duration-500 ${activeStep === i
                                            ? "bg-white/5 border-white/10"
                                            : "border-transparent opacity-40 hover:opacity-100"
                                            }`}
                                    >
                                        <div className="flex items-center gap-6">
                                            <span className="text-sm font-display text-zinc-500">{step.id}</span>
                                            <span className="text-xl font-display font-bold text-white">{step.title}</span>
                                        </div>
                                        {activeStep === i && (
                                            <motion.div layoutId="arrow" className="text-white">
                                                <Zap size={20} className="fill-white" />
                                            </motion.div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="relative pt-10">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                            className="glass p-12 md:p-16 rounded-[2.5rem] border-white/5 bg-obsidian/50"
                        >
                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    {(() => {
                                        const Icon = steps[activeStep].icon;
                                        return <Icon className="text-white w-6 h-6" />;
                                    })()}
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
                                    {steps[activeStep].subtitle}
                                </span>
                            </div>

                            <h3 className="text-4xl font-display font-bold text-white mb-8 text-sheen">
                                {steps[activeStep].title}
                            </h3>

                            <p className="text-zinc-400 text-lg font-sans leading-relaxed mb-16">
                                {steps[activeStep].description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
                                {steps[activeStep].details.map((detail, i) => (
                                    <div key={i}>
                                        <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2">{detail.label}</p>
                                        <p className="text-sm font-sans text-white font-medium">{detail.value}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
