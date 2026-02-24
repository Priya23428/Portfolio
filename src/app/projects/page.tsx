'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { fadeInUp, staggerContainer, cardPopIn } from '@/components/motion/variants';
import GradientBackground from '@/components/layout/GradientBackground';
import { projects, categories, Project } from '@/config/projects';

function ProjectCard({ project }: { project: Project }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
        stiffness: 200,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
        stiffness: 200,
        damping: 20,
    });

    function handleMouseMove(e: React.MouseEvent) {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    const categoryColors: Record<string, string> = {
        unity: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
        ar: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
        blender: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
        webgl: 'bg-green-500/20 text-green-400 border-green-500/30',
        other: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    };

    return (
        <motion.div
            ref={cardRef}
            variants={cardPopIn}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                perspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="glass-card-hover overflow-hidden group cursor-pointer"
        >
            {/* Thumbnail area */}
            <div className="aspect-video bg-gradient-to-br from-blue-900/30 to-purple-900/30 relative overflow-hidden">
                {/* Placeholder with icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl opacity-30">
                        {project.category === 'ar' ? '📱' : project.category === 'unity' ? '🎮' : project.category === 'blender' ? '🎨' : '🌐'}
                    </span>
                </div>
                {/* Hover overlay with bloom effect */}
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-500" />
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5 space-y-3" style={{ transform: 'translateZ(20px)' }}>
                <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>
                    <span
                        className={`px-2 py-0.5 text-xs font-mono rounded-md border ${categoryColors[project.category]}`}
                    >
                        {project.category.toUpperCase()}
                    </span>
                </div>

                <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-white/40 border border-white/5"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <span className="text-xs text-white/30 font-mono">{project.platform}</span>
                    <div className="flex gap-2">
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                Demo →
                            </a>
                        )}
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-white/40 hover:text-white/60 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                Code →
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filtered =
        activeFilter === 'all'
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <main className="page-container relative overflow-hidden">
            <GradientBackground variant="projects" />

            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="max-w-6xl mx-auto w-full space-y-8 relative z-10"
            >
                <motion.div variants={fadeInUp} className="text-center space-y-3">
                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
                        Portfolio
                    </p>
                    <h1 className="section-title text-white">
                        My <span className="text-gradient">Projects</span>
                    </h1>
                </motion.div>

                {/* Filter tabs */}
                <motion.div variants={fadeInUp} className="flex justify-center gap-2 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveFilter(cat.key)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeFilter === cat.key
                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                    : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Project grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filtered.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>

                {filtered.length === 0 && (
                    <div className="text-center py-12 text-white/30">
                        No projects in this category yet.
                    </div>
                )}
            </motion.div>
        </main>
    );
}
