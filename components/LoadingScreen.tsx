"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { easeStandard } from "@/lib/motion";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 4;
            });
        }, 20);

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1800);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#080808]"
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: easeStandard }}
                >
                    {/* Logo mark */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-10"
                    >
                        <span className="text-4xl font-black text-white tracking-tighter">
                            <span className="gradient-text">Defari</span>{" "}Akbar Anggara
                        </span>
                    </motion.div>

                    {/* Progress bar */}
                    <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${count}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>

                    <motion.p
                        className="mt-4 text-xs text-white/30 font-mono tracking-widest"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {count}%
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
