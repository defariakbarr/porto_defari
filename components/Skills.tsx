"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { easeStandard } from "@/lib/motion";

const skillGroups = [
    {
        title: "Frontend",
        color: "blue",
        skills: [
            { name: "Java", level: 90 },
            { name: "Go", level: 90 },
            { name: "Phyton", level: 88 },
            { name: "C/C++", level: 85 },
            { name: "JavaScript", level: 80 },
            { name: "SQL", level: 85 },
            { name: "PHP", level: 85 },
        ],
    },
    {
        title: "Styling",
        color: "violet",
        skills: [
            { name: "React & Next.js", level: 90 },
            { name: "Laravel", level: 85 },
            { name: "IoT Ecosystem (Arduino/ESP32)", level: 82 },
            { name: "Tailwind CSS & Framer Motion", level: 80 },
        ],
    },
    {
        title: "Tools & Backend",
        color: "emerald",
        skills: [
            { name: "Network Security (Wireshark/Kali)", level: 85 },
            { name: "Figma", level: 80 },
            { name: "Git & GitHub", level: 80 },
            { name: "Machine Learning Concepts", level: 75 },
            { name: "Vercel", level: 70 },
        ],
    },
];

const colorMap: Record<string, string> = {
    blue: "from-blue-500 to-blue-400",
    violet: "from-violet-500 to-violet-400",
    emerald: "from-emerald-500 to-emerald-400",
};

const badgeColorMap: Record<string, string> = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

const techBadges = [
    "JavaScript", "TypeScript", "Java", "Go", "Python", "PHP", "C/C++",
    "React", "Next.js", "Laravel", "Java EE", "IoT", "SQL", "REST API", 
    "Git", "Figma", "Vercel"
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeStandard } },
};

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="skills" className="py-32 px-6 bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto" ref={ref}>
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4"
                >
                    Skills
                </motion.p>
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4"
                >
                    My <span className="gradient-text">Tech Stack</span>
                </motion.h2>
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-white/40 mb-16 max-w-xl"
                >
                    Technologies I&apos;ve been working with and continuously learning.
                </motion.p>

                {/* Skill groups with progress bars */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {skillGroups.map((group, gi) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: gi * 0.15, ease: easeStandard }}
                            className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
                        >
                            <h3 className={`text-sm font-semibold mb-6 px-3 py-1 rounded-full inline-block border ${badgeColorMap[group.color]}`}>
                                {group.title}
                            </h3>
                            <div className="space-y-5">
                                {group.skills.map((skill, si) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-white/70">{skill.name}</span>
                                            <span className="text-xs text-white/30">{skill.level}%</span>
                                        </div>
                                        <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full bg-gradient-to-r ${colorMap[group.color]} rounded-full`}
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                                transition={{ duration: 1, delay: gi * 0.15 + si * 0.08, ease: easeStandard }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tech badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap gap-3 justify-center"
                >
                    {techBadges.map((badge, i) => (
                        <motion.span
                            key={badge}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                            className="px-4 py-2 rounded-full text-sm text-white/60 border border-white/[0.08] bg-white/[0.03] hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/[0.06] transition-all duration-200 cursor-default"
                        >
                            {badge}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
