"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Scale, Award, Layers, Zap, Heart } from "lucide-react";

const trustPoints = [
    {
        title: "Fully Insured",
        description: "Complete coverage for high-value vehicles, giving you peace of mind while your car is with us.",
        icon: ShieldCheck,
        stat: "$5,000,000"
    },
    {
        title: "Eco-Friendly",
        description: "We use safe, biodegradable products that are gentle on your vehicle and the environment.",
        icon: Heart,
        stat: "SAFE CARE"
    },
    {
        title: "Expert Care",
        description: "Managed by certified professionals who specialize in high-end automotive restoration.",
        icon: Award,
        stat: "CERTIFIED"
    },
    {
        title: "Precision Work",
        description: "Every inch of your vehicle is checked and measured to ensure the highest standard of quality.",
        icon: Layers,
        stat: "144-POINT"
    }
];

export const TrustBlocks = () => {
    return (
        <section id="trust" className="py-24 px-6 bg-obsidian">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-[2rem] overflow-hidden">
                    {trustPoints.map((point, i) => (
                        <div
                            key={i}
                            className="group bg-obsidian p-10 hover:bg-white/[0.02] transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-12">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                                        <point.icon className="text-zinc-400 group-hover:text-white transition-colors w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-bold text-zinc-600 group-hover:text-zinc-400 transition-colors uppercase tracking-[0.2em]">
                                        {point.stat}
                                    </span>
                                </div>

                                <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-gradient transition-all">
                                    {point.title}
                                </h3>
                                <p className="text-zinc-500 text-sm font-sans leading-relaxed">
                                    {point.description}
                                </p>
                            </div>

                            {/* Hover Radial Shadow */}
                            <div className="absolute inset-0 bg-radial-gradient from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-bold mb-4">Trusted By Collectors At</p>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                        {["PORSCHE CLUB", "FERRARI CLUB OF AMERICA", "PCA", "DU PONT REGISTRY"].map((brand) => (
                            <span key={brand} className="text-sm font-display font-black tracking-tighter text-white">{brand}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
