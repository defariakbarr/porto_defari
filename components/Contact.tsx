"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowUpRight, Send } from "lucide-react"; // Tambah Instagram di sini (opsional jika ingin pakai lucide)
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

// Ikon Instagram Baru (Inline SVG)
const InstagramIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const socials = [
    {
        href: "https://github.com/defariakbarr",
        icon: GithubIcon,
        label: "GitHub",
        handle: "@defariakbarr",
        color: "hover:border-white/30 hover:bg-white/[0.04]",
    },
    {
        href: "https://www.linkedin.com/in/defari-akbar-25b916386?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        icon: LinkedinIcon,
        label: "LinkedIn",
        handle: "Defari Akbar",
        color: "hover:border-blue-500/40 hover:bg-blue-500/[0.06]",
    },
    {
        href: "https://instagram.com/defakbr",
        icon: InstagramIcon, // Menggunakan ikon Instagram baru
        label: "Instagram",
        handle: "@defakbr",
        color: "hover:border-pink-500/40 hover:bg-pink-500/[0.06]", // Warna disesuaikan ke Pink/Instagram
    },
];

// ... sisa kode fadeUp dan return komponen Contact tetap sama seperti sebelumnya
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: easeStandard },
    }),
};

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="contact" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
            {/* Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4 text-center"
                >
                    Contact
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4 text-center"
                >
                    Let&apos;s <span className="gradient-text">Work Together</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white/40 mb-16 max-w-lg mx-auto text-center"
                >
                    Have a project in mind? I&apos;m currently open for freelance work and full-time opportunities.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Email card */}
                    <motion.div
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-blue-500/30 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Send an Email</h3>
                        <p className="text-white/40 text-sm mb-6">
                            Best for project inquiries, collaborations, or just a hello.
                        </p>
                        <Link
                            href="mailto:defarianggara35262@gmail.com"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30"
                        >
                            <Send size={14} />
                            defarianggara35262@gmail.com
                        </Link>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        custom={1}
                        variants={fadeUp}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] transition-all duration-300"
                    >
                        <h3 className="text-lg font-bold text-white mb-6">Find Me Online</h3>
                        <div className="space-y-3">
                            {socials.map(({ href, icon: Icon, label, handle, color }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-between p-4 rounded-xl border border-white/[0.07] text-white/50 hover:text-white transition-all duration-200 group ${color}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon size={18} />
                                        <div>
                                            <div className="text-sm font-medium">{label}</div>
                                            <div className="text-xs text-white/30">{handle}</div>
                                        </div>
                                    </div>
                                    <ArrowUpRight size={15} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}