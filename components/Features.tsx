"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
    {
        title: "Sketch Upload",
        description: "Simply snap a photo of your napkin or whiteboard sketch and upload it. Supports any format.",
        icon: (
            <svg className="w-16 h-16" fill="none" stroke="#FAFAFA" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "AI Vision Understanding",
        description: "Our multimodal AI analyzes your sketch structure, layout, and design intent with incredible accuracy.",
        icon: (
            <svg className="w-16 h-16" fill="none" stroke="#FAFAFA" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        title: "Instant UI Generation",
        description: "Get production-ready React, Vue, or HTML code in seconds. Clean, semantic, and optimized.",
        icon: (
            <svg className="w-16 h-16" fill="none" stroke="#FAFAFA" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        title: "Voice & Text Edits",
        description: "Refine your UI using natural language. Say 'make it darker' or 'add a gradient' — it just works.",
        icon: (
            <svg className="w-16 h-16" fill="none" stroke="#FAFAFA" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
        ),
    },
    {
        title: "Export Clean Code",
        description: "Download your complete project with organized files, proper structure, and zero dependencies.",
        icon: (
            <svg className="w-16 h-16" fill="none" stroke="#FAFAFA" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
];

export default function Features() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <section
            ref={ref}
            id="features"
            className="relative py-32 px-6 bg-primary-secondary/30"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-6">
                        Powered By <span className="text-gradient">Intelligence</span>
                    </h2>
                    <p className="text-xl text-primary-text-muted max-w-2xl mx-auto">
                        Everything you need to turn imagination into reality, backed by
                        cutting-edge AI technology.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            className="group relative"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative bg-primary-secondary p-8 rounded-2xl border border-primary-accent/20 hover:border-primary-accent/50 transition-all duration-300 h-full">
                                <div className="mb-6">{feature.icon}</div>
                                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-primary-text-muted leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
