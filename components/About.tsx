"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, Layers } from "lucide-react";
import { easeStandard } from "@/lib/motion";
import Image from "next/image";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeStandard } },
};

const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
};

const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "20+", label: "Projects Built" },
    { value: "10+", label: "Happy Clients" },
];

const highlights = [
    {
        icon: Code2,
        title: "Robust Development",
        desc: "Building reliable and scalable software solutions using a diverse range of programming languages and modern architectures.",
    },
    {
        icon: Zap,
        title: "Analytical Thinking",
        desc: "Applying strong analytical skills and academic excellence to solve complex technical challenges with efficient solutions.",
    },
    {
        icon: Layers,
        title: "Hardware-Software Synergy",
        desc: "Connecting the physical and digital worlds through efficient IoT integration and seamless cross-platform communication.",
    },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-32 px-6">
            <div className="max-w-6xl mx-auto" ref={ref}>
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Section label */}
                    <motion.p variants={fadeUp} className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
                        About Me
                    </motion.p>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left: Text & Profile Card */}
                        <div>
                            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-10 leading-tight">
                                Turning ideas into{" "}
                                <span className="gradient-text">digital reality</span>
                            </motion.h2>

                            {/* Bio Layout with Profile Image */}
                            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                                {/* Profile Card Component */}
                                <motion.div 
                                    variants={fadeUp}
                                    className="flex-shrink-0 w-full md:w-56 bg-white/[0.03] border border-white/[0.06] rounded-3xl p-6 text-center"
                                >
                                    {/* Menggunakan object-[center_top] untuk mencegah kepala terpotong */}
                                    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-blue-500/20">
                                        <Image 
                                            src="/defari.jpg" 
                                            alt="Defari Akbar"
                                            fill
                                            className="object-cover object-[center_top]" // <-- TAMBAHKAN INI
                                        />
                                    </div>
                                    <h3 className="text-white font-bold tracking-tight">Meet Defari</h3>
                                </motion.div>

                                {/* Bio Texts */}
                                <div className="flex-1 space-y-6">
                                    <motion.p variants={fadeUp} className="text-white/80 leading-loose text-justify tracking-wide">
                                        I&apos;m Defari, an Information Technology student and Teaching Assistant Computer Network with a passion for building integrated technology. 
                                        My expertise spans the entire digital spectrum from developing IoT systems and low-level programming with C/C++, to architecting robust applications using Java, Go, and Python.
                                    </motion.p>
                                    <motion.p variants={fadeUp} className="text-white/80 leading-loose text-justify tracking-wide">
                                       With a near-perfect academic record, I don't just build systems. I ensure they are secure and efficient. Whether I'm crafting web interfaces with JavaScript & HTML, managing SQL databases, or exploring AI-driven solutions, I focus on creating seamless interactions between hardware and software to solve real-world challenges.
                                    </motion.p>
                                </div>
                            </div>

                            {/* Stats */}
                            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
                                {stats.map(({ value, label }) => (
                                    <div key={label} className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                        <div className="text-3xl font-black gradient-text mb-1">{value}</div>
                                        <div className="text-xs text-white/40">{label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right: Highlight cards */}
                        <motion.div variants={stagger} className="grid gap-4 lg:mt-24">
                            {highlights.map(({ icon: Icon, title, desc }) => (
                                <motion.div
                                    key={title}
                                    variants={fadeUp}
                                    className="group flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 hover:bg-blue-500/[0.04] transition-all duration-300"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">{title}</h3>
                                        <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}