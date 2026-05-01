"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { easeStandard } from "@/lib/motion";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = ["hero", "about", "skills", "projects", "contact"];
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: easeStandard }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-[#080808]/80 backdrop-blur-xl border-b border-white/[0.06]"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="#hero" className="text-xl font-black tracking-tighter text-white">
                        Defari
                    </Link>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map(({ href, label }) => {
                            const isActive = activeSection === href.slice(1);
                            return (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${isActive
                                                ? "text-white"
                                                : "text-white/50 hover:text-white"
                                            }`}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-pill"
                                                className="absolute inset-0 bg-white/[0.08] rounded-full border border-white/10"
                                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative">{label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* CTA */}
                    <Link
                        href="#contact"
                        className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-blue-500 hover:bg-blue-400 text-white transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                        Hire Me
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white/60 hover:text-white p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 left-0 right-0 z-40 bg-[#0f0f0f]/95 backdrop-blur-xl border-b border-white/[0.06] md:hidden py-4"
                    >
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className="block px-6 py-3 text-sm text-white/60 hover:text-white hover:bg-white/[0.04] transition-colors"
                            >
                                {label}
                            </Link>
                        ))}
                        <div className="px-6 pt-2">
                            <Link
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="block text-center py-2.5 rounded-xl text-sm font-semibold bg-blue-500 text-white"
                            >
                                Hire Me
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
