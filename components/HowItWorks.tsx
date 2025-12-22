"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        number: "01",
        title: "Upload Your Sketch",
        description: "Take a photo or upload an image of your napkin sketch, wireframe, or whiteboard design.",
    },
    {
        number: "02",
        title: "AI Analyzes Structure",
        description: "Our vision model understands layouts, components, hierarchy, and your design intent.",
    },
    {
        number: "03",
        title: "Generate Production Code",
        description: "Receive clean, semantic code in your preferred framework — ready to deploy instantly.",
    },
    {
        number: "04",
        title: "Refine & Export",
        description: "Use voice or text commands to iterate. Export your complete project when satisfied.",
    },
];

export default function HowItWorks() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            id="how-it-works"
            className="relative py-32 px-6 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-6">
                        How It <span className="text-gradient">Works</span>
                    </h2>
                    <p className="text-xl text-primary-text-muted max-w-2xl mx-auto">
                        Four simple steps from napkin to production. No design experience required.
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-accent via-primary-accent-hover to-primary-accent/20" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            className={`relative mb-16 md:mb-24 ${i % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                                }`}
                        >
                            <div className="flex items-start gap-8 md:gap-0">
                                <motion.div
                                    className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary-accent to-primary-accent-hover flex items-center justify-center font-black text-2xl text-primary-bg glow-accent z-10"
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
                                >
                                    {step.number}
                                </motion.div>

                                <div
                                    className={`flex-1 ml-24 md:ml-0 ${i % 2 === 0 ? "md:mr-24" : "md:ml-24"
                                        }`}
                                >
                                    <motion.div
                                        className="bg-primary-secondary p-8 rounded-2xl border border-primary-accent/30 hover:border-primary-accent/50 transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                                        <p className="text-primary-text-muted text-lg leading-relaxed">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
