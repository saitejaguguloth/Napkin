"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-6xl mx-auto px-6 text-center"
            >
                <motion.div variants={itemVariants} className="space-y-6 mb-12">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-tight">
                        FROM A{" "}
                        <span className="relative inline-block">
                            <span className="text-gradient">ROUGH SKETCH</span>
                            <motion.span
                                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary-accent to-primary-accent-hover"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1, delay: 1 }}
                            />
                        </span>
                        <br />
                        TO A REAL WEBSITE.
                    </h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-primary-text-muted max-w-3xl mx-auto leading-relaxed"
                    >
                        Transform hand-drawn napkin sketches into production-ready UI code
                        with the power of multimodal AI. No design tools. No frameworks. Just
                        your creativity.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <motion.button
                        className="px-10 py-4 bg-primary-accent text-primary-bg text-lg font-bold rounded-lg hover:bg-primary-accent-hover transition-all duration-300 glow-accent hover:glow-accent-strong"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Turn Sketch Into UI
                    </motion.button>
                    <motion.button
                        className="px-10 py-4 border-2 border-primary-accent text-primary-accent text-lg font-bold rounded-lg hover:bg-primary-accent/10 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Watch Demo
                    </motion.button>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto"
                >
                    {[
                        { label: "Sketches Processed", value: "10K+" },
                        { label: "Lines of Code", value: "2M+" },
                        { label: "Happy Developers", value: "5K+" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="text-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-4xl md:text-5xl font-black text-gradient mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-primary-text-muted">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <svg
                    className="w-6 h-6 text-primary-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </motion.div>
        </section>
    );
}
