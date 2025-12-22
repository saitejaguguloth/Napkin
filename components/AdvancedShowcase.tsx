"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { duration });
            return controls.stop;
        }
    }, [isInView, value, duration, count]);

    useEffect(() => {
        const unsubscribe = rounded.on("change", (latest) => setDisplayValue(latest));
        return () => unsubscribe();
    }, [rounded]);

    return <span ref={ref}>{displayValue}</span>;
}

export default function AdvancedShowcase() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const showcaseItems = [
        { title: "Text Reveal", color: "from-primary-accent/20 to-primary-accent-hover/20" },
        { title: "Bounce Cards", color: "from-purple-500/20 to-pink-500/20" },
        { title: "Grid Glow", color: "from-primary-accent-hover/20 to-primary-accent/20" },
    ];

    return (
        <section ref={ref} className="relative py-32 px-6 bg-primary-secondary/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-6">
                        Advanced <span className="text-gradient">UI Interactions</span>
                    </h2>
                    <p className="text-xl text-primary-text-muted max-w-2xl mx-auto">
                        Modern component library with stunning animations and interactions
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {showcaseItems.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="relative group"
                            whileHover={{ y: -10 }}
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                            />
                            <div className="relative bg-primary-secondary p-12 rounded-2xl border border-primary-accent/30 hover:border-primary-accent/60 transition-all duration-300 min-h-[250px] flex items-center justify-center">
                                <motion.h3
                                    className="text-3xl font-bold"
                                    initial={{ opacity: 0, filter: "blur(10px)" }}
                                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: i * 0.2 }}
                                >
                                    {item.title}
                                </motion.h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-primary-secondary p-12 rounded-2xl border border-primary-accent/30"
                >
                    <h3 className="text-3xl font-bold mb-8 text-center">Live Stats</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Components", value: 127 },
                            { label: "Animations", value: 89 },
                            { label: "Variants", value: 234 },
                            { label: "Happy Users", value: 5420 },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-5xl font-black text-gradient mb-2">
                                    <Counter value={stat.value} />
                                </div>
                                <div className="text-sm text-primary-text-muted">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="aspect-square bg-primary-secondary rounded-xl border border-primary-accent/20 relative overflow-hidden group cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-primary-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                initial={false}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    className="w-12 h-12 rounded-full bg-primary-accent/20"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 180, 360],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
