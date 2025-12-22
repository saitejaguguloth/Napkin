"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-32 px-6 overflow-hidden">
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-5xl md:text-7xl font-black leading-tight">
                        Ready To Turn Your
                        <br />
                        <span className="text-gradient">Ideas Into Reality?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-primary-text-muted max-w-3xl mx-auto leading-relaxed">
                        Join thousands of developers and designers who are building faster
                        with NAPKIN. No credit card required.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-12"
                >
                    <motion.button
                        className="px-12 py-5 bg-primary-accent text-primary-bg text-xl font-bold rounded-xl hover:bg-primary-accent-hover transition-all duration-300 glow-accent-strong"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Creating For Free
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-primary-text-muted"
                >
                    {[
                        "✓ No credit card required",
                        "✓ Unlimited sketches",
                        "✓ Export anytime",
                    ].map((item, i) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                        >
                            {item}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
