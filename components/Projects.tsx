"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Star } from "lucide-react";
import Link from "next/link";
import { easeStandard } from "@/lib/motion";

// Inline SVG brand icon
const GithubIcon = ({ size = 15 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

const projects = [
    {
        title: "SiGalong",
        description:
            "An early warning system for landslides designed in Figma with a focus on real-time monitoring and user accessibility. Developed to meet publication standards for scientific journals.",
        tech: ["Figma", "UI/UX", "Environmental Research"],
        image: "/SiGalong2.png",
        github: "https://github.com/Revaldo-udean/SiGalong2.0",
        demo: "",
        stars: 43,
        featured: true,
        gradient: "from-blue-600/20 to-violet-600/20",
        border: "hover:border-blue-500/40",
    },
    {
        title: "Scool",
        description:
            "A robust school management platform featuring Role-Based Access Control (RBAC) for Teachers, Class Advisors (Wali Kelas), and Students to streamline academic administration.",
        tech: ["Laravel", "PHP", "SQL", "Bootstrap"],
        image: "/Scool1.png",
        github: "https://github.com/defariakbarr/Administrasi_sekolah",
        demo: "",
        stars: 84,
        featured: true,
        gradient: "from-violet-600/20 to-pink-600/20",
        border: "hover:border-violet-500/40",
    },
    {
        title: "CatatUang",
        description:
            "A specialized personal finance management tool built with Java Servlets to track incomes, expenses, and visualize financial health through data-driven charts.",
        tech: ["Java Servlets", "Java EE", "JSP (JavaServer Pages)", "SQL", "Bootstrap"],
        image: "/CatatUang1.png",
        github: "https://github.com/defariakbarr/CatatUang",
        demo: "",
        stars: 56,
        featured: false,
        gradient: "from-emerald-600/20 to-blue-600/20",
        border: "hover:border-emerald-500/40",
    },
    {
        title: "Voyager",
        description:
            "An award-winning IoT and renewable energy solution implemented in Cibalung Village, Bogor, featuring smart soil monitoring and micro-hydro power systems.",
        tech: ["IoT", "C++", "Java", "Go", "Python", "SQL", "XAMPP"],
        image: "/voyager3.JPG", 
        github: "https://github.com/defariakbarr/voyager",
        demo: "",
        stars: 128,
        featured: false,
        gradient: "from-orange-600/20 to-red-600/20",
        border: "hover:border-orange-500/40",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: easeStandard },
    }),
};

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="projects" className="py-32 px-6">
            <div className="max-w-6xl mx-auto" ref={ref}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4"
                >
                    Projects
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4"
                >
                    Things I&apos;ve <span className="gradient-text">Built</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white/40 mb-16 max-w-xl"
                >
                    A curated selection of projects I&apos;m proud of — from side projects to production apps.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            whileHover={{ y: -6, scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className={`group relative p-7 rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/[0.07] ${project.border} transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 flex flex-col`}
                        >
                            {/* Featured badge */}
                            {project.featured && (
                                <span className="absolute top-5 right-5 text-xs px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/20 font-medium">
                                    Featured
                                </span>
                            )}

                            {/* image */}
                            <div className="relative h-44 w-full mb-6 overflow-hidden rounded-xl border border-white/10 bg-black/20">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay gradient agar gambar menyatu dengan desain dark mode */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Title & stars */}
                            <div className="flex items-start gap-3 mb-3">
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                <div className="flex items-center gap-1 text-white/30 text-xs mt-0.5">
                                    <Star size={12} />
                                    {project.stars}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                                {project.description}
                            </p>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] text-white/50 border border-white/[0.07]"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-4">
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-200"
                                >
                                    <GithubIcon size={15} />
                                    Code
                                </Link>
                                {project.demo && (
                                <Link
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm text-white/50 hover:text-blue-400 transition-colors duration-200"
                                >
                                    <ExternalLink size={15} />
                                    Live Demo
                                </Link>
                            )}
                        </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
