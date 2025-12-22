"use client";

import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-primary-secondary border-t border-primary-accent/20 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h3 className="text-3xl font-extrabold tracking-tight mb-2">NAPKIN</h3>
                        <p className="text-sm text-primary-text-muted">
                            From Sketch to Reality
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex gap-6"
                    >
                        {["Twitter", "GitHub", "Discord"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-primary-text-muted hover:text-primary-accent transition-colors"
                            >
                                {social}
                            </a>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-sm text-primary-text-muted pt-6 border-t border-primary-accent/20 w-full text-center"
                    >
                        © {currentYear} NAPKIN. All rights reserved.
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
