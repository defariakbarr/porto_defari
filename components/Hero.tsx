"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Mail } from "lucide-react";
import Link from "next/link";
import { easeStandard } from "@/lib/motion";

// Inline SVG brand icons
const GithubIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const roles = ["Backend Developer", "UI/UX Enthusiast", "Teaching Asisstant"];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && displayText.length < currentRole.length) {
            timeout = setTimeout(() => {
                setDisplayText(currentRole.slice(0, displayText.length + 1));
            }, 80);
        } else if (!isDeleting && displayText.length === currentRole.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText.length > 0) {
            timeout = setTimeout(() => {
                setDisplayText(displayText.slice(0, -1));
            }, 40);
        } else if (isDeleting && displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeStandard } },
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen grid-bg flex flex-col items-center justify-center px-6 overflow-hidden"
        >
            {/* Glow orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl w-full text-center relative z-10"
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-white/60 text-sm">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Available for work
                </motion.div>

                {/* Heading */}
                <motion.h1
                    variants={itemVariants}
                    className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-none mb-4"
                >
                    Hi, I&apos;m{" "}
                    <span className="gradient-text glow-text">Defari</span>
                </motion.h1>

                {/* Typing effect */}
                <motion.div
                    variants={itemVariants}
                    className="text-2xl sm:text-3xl font-semibold text-white/50 mb-6 h-10"
                >
                    <span>{displayText}</span>
                    <span className="blink text-blue-400">|</span>
                </motion.div>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-white/40 max-w-xl mx-auto text-lg leading-relaxed mb-10"
                >
                    Versatile Software Engineer & IoT Enthusiast. Bridging the gap between hardware, software, and secure digital ecosystems.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
                >
                    <Link
                        href="#projects"
                        className="group px-7 py-3.5 rounded-full font-semibold bg-blue-500 hover:bg-blue-400 text-white transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 flex items-center gap-2"
                    >
                        View Projects
                        <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
                    </Link>
                    <Link
                        href="#contact"
                        className="px-7 py-3.5 rounded-full font-semibold border border-white/10 hover:border-white/30 text-white/70 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
                    >
                        Contact Me
                    </Link>
                </motion.div>

                {/* Social links */}
                <motion.div variants={itemVariants} className="flex items-center justify-center gap-5">
                    {[
                        { href: "https://github.com/defari", icon: GithubIcon, label: "GitHub" },
                        { href: "https://linkedin.com/in/defari", icon: LinkedinIcon, label: "LinkedIn" },
                        { href: "mailto:defari@email.com", icon: Mail, label: "Email" },
                    ].map(({ href, icon: Icon, label }) => (
                        <Link
                            key={label}
                            href={href}
                            aria-label={label}
                            className="p-2.5 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 hover:bg-white/[0.05] transition-all duration-200"
                        >
                            <Icon size={18} />
                        </Link>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ArrowDown size={14} />
                </motion.div>
            </motion.div>
        </section>
    );
}
