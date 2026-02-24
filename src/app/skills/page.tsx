'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { fadeInUp, staggerContainer } from '@/components/motion/variants';
import GradientBackground from '@/components/layout/GradientBackground';
import { skillCategories, Skill } from '@/config/skills';

function AnimatedCounter({ value, duration = 1.5 }: { value: number; duration?: number }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => Math.round(v));
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const controls = animate(count, value, {
            duration,
            ease: [0.22, 0.9, 0.33, 1],
        });
        const unsubscribe = rounded.on('change', (v) => setDisplay(v));
        return () => {
            controls.stop();
            unsubscribe();
        };
    }, [count, rounded, value, duration]);

    return <span className="font-mono font-bold text-blue-400">{display}%</span>;
}

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
    const barRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (barRef.current) observer.observe(barRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            ref={barRef}
            variants={fadeInUp}
            className="space-y-2"
            role="progressbar"
            aria-valuenow={skill.level}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${skill.name}: ${skill.level}% proficiency`}
        >
            <div className="flex items-center justify-between">
                <span className="text-white/80 text-sm font-medium">{skill.name}</span>
                {isVisible && <AnimatedCounter value={skill.level} duration={1 + index * 0.1} />}
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{
                        duration: 1 + index * 0.1,
                        delay: index * 0.05,
                        ease: [0.22, 0.9, 0.33, 1],
                    }}
                />
            </div>
        </motion.div>
    );
}

export default function SkillsPage() {
    return (
        <main className="page-container relative overflow-hidden">
            <GradientBackground variant="skills" />

            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="max-w-5xl mx-auto w-full space-y-10 relative z-10"
            >
                <motion.div variants={fadeInUp} className="text-center space-y-3">
                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
                        Proficiency
                    </p>
                    <h1 className="section-title text-white">
                        My <span className="text-gradient">Skills</span>
                    </h1>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={fadeInUp}
                            className="glass-card p-6 space-y-5"
                        >
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-400" />
                                {category.title}
                            </h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, i) => (
                                    <SkillBar key={skill.name} skill={skill} index={i} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional skills tags */}
                <motion.div variants={fadeInUp} className="text-center space-y-3">
                    <p className="text-white/40 text-sm font-mono">Also proficient in</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {[
                            'Teamwork',
                            'Leadership',
                            'Problem Solving',
                            'Event Organizing',
                            'Communication',
                            'Data Visualization',
                            'Content Creation',
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1.5 text-xs rounded-lg bg-gold-400/10 border border-amber-500/20 text-amber-400/80 font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </main>
    );
}
