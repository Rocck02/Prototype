"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? "py-4 bg-obsidian/80 backdrop-blur-lg border-b border-white/5" : "py-8 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                >
                    <span className="text-2xl font-display font-bold tracking-tighter text-white">
                        REYES <span className="text-zinc-500 font-light">AUTO</span>
                    </span>
                </motion.div>

                <div className="hidden md:flex items-center gap-12">
                    {["Philosophy", "Process", "Services", "Portfolio"].map((item, i) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
                        >
                            {item}
                        </motion.a>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button
                            className="bg-white text-black hover:bg-satin-silver transition-all rounded-full px-8 h-10 text-xs font-bold uppercase tracking-widest"
                            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Reserve
                        </Button>
                    </motion.div>
                </div>

                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-obsidian border-b border-white/10 p-6 md:hidden"
                >
                    <div className="flex flex-col gap-6">
                        {["Philosophy", "Process", "Services", "Portfolio"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm uppercase tracking-widest text-zinc-400"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};
