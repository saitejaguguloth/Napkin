"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function DemoPreview() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            id="demo"
            className="relative py-32 px-6 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-6">
                        See The <span className="text-gradient">Magic</span> In Action
                    </h2>
                    <p className="text-xl text-primary-text-muted max-w-2xl mx-auto">
                        Watch as a simple napkin sketch transforms into pixel-perfect,
                        production-ready code in seconds.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-12"
                >
                    <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative bg-primary-secondary p-8 rounded-2xl border border-primary-accent/30 hover:border-primary-accent/50 transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-4 text-primary-accent">
                                Input: Napkin Sketch
                            </h3>
                            <div className="bg-primary-bg rounded-lg p-12 flex items-center justify-center min-h-[400px]">
                                <svg
                                    className="w-full h-full"
                                    viewBox="0 0 400 400"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="50"
                                        y="50"
                                        width="300"
                                        height="60"
                                        fill="none"
                                        stroke="#D4C9BE"
                                        strokeWidth="3"
                                        strokeDasharray="5,5"
                                    />
                                    <text
                                        x="200"
                                        y="85"
                                        textAnchor="middle"
                                        fill="#D4C9BE"
                                        fontSize="16"
                                        fontFamily="monospace"
                                    >
                                        HEADER
                                    </text>
                                    <rect
                                        x="50"
                                        y="140"
                                        width="300"
                                        height="150"
                                        fill="none"
                                        stroke="#D4C9BE"
                                        strokeWidth="3"
                                        strokeDasharray="5,5"
                                    />
                                    <text
                                        x="200"
                                        y="220"
                                        textAnchor="middle"
                                        fill="#D4C9BE"
                                        fontSize="24"
                                        fontFamily="monospace"
                                    >
                                        HERO
                                    </text>
                                    <circle cx="100" cy="340" r="20" fill="none" stroke="#1DCD9F" strokeWidth="3" />
                                    <text
                                        x="130"
                                        y="348"
                                        fill="#1DCD9F"
                                        fontSize="14"
                                        fontFamily="monospace"
                                    >
                                        Button
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative bg-primary-secondary p-8 rounded-2xl border border-primary-accent/50 hover:border-primary-accent transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-4 text-primary-accent">
                                Output: Production UI
                            </h3>
                            <div className="bg-primary-bg rounded-lg overflow-hidden min-h-[400px]">
                                <div className="bg-primary-secondary p-4 border-b border-primary-accent/20">
                                    <div className="text-sm font-mono text-primary-text">
                                        MyWebsite
                                    </div>
                                </div>
                                <div className="p-12 space-y-8">
                                    <div>
                                        <h4 className="text-4xl font-black mb-4">
                                            Welcome to <span className="text-gradient">Future</span>
                                        </h4>
                                        <p className="text-primary-text-muted">
                                            From sketch to reality in seconds
                                        </p>
                                    </div>
                                    <motion.button
                                        className="px-8 py-3 bg-primary-accent text-primary-bg font-bold rounded-lg glow-accent"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        Get Started
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary-secondary rounded-full border border-primary-accent/30">
                        <motion.div
                            className="w-3 h-3 bg-primary-accent rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-sm font-medium">
                            Transform happens in &lt; 3 seconds
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
