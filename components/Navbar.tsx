"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            className="fixed bottom-6 left-0 right-0 z-50 flex justify-center"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-primary-secondary border border-primary-accent/30 backdrop-blur-lg rounded-full px-8 py-3 shadow-2xl">
                <div className="flex items-center gap-8">
                    {["Features", "How It Works", "Demo"].map((item, i) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                            className="text-sm font-medium text-primary-text-muted hover:text-primary-accent transition-colors relative group hidden md:block"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {item}
                            <span className="absolute -top-1 left-0 w-0 h-0.5 bg-primary-accent group-hover:w-full transition-all duration-300"></span>
                        </motion.a>
                    ))}
                    <motion.button
                        className="px-6 py-2 bg-primary-accent text-primary-bg font-semibold rounded-full hover:bg-primary-accent-hover transition-all duration-300 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Try Demo
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
}
