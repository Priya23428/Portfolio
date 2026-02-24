'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardPopIn } from '@/components/motion/variants';
import GradientBackground from '@/components/layout/GradientBackground';
import { codingProfiles } from '@/config/codingProfiles';
import { FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
    FaGithub,
    SiLeetcode,
    FaHackerrank,
    SiCodechef,
};

export default function CodingPage() {
    return (
        <main className="page-container relative overflow-hidden">
            <GradientBackground variant="coding" />

            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="max-w-5xl mx-auto w-full space-y-10 relative z-10"
            >
                <motion.div variants={fadeInUp} className="text-center space-y-3">
                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
                        Competitive Programming
                    </p>
                    <h1 className="section-title text-white">
                        Coding <span className="text-gradient">Profiles</span>
                    </h1>
                    <p className="text-white/50 text-lg max-w-md mx-auto">
                        My competitive programming and open-source contributions
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    className="grid sm:grid-cols-2 gap-6"
                >
                    {codingProfiles.map((profile) => {
                        const Icon = iconMap[profile.icon];
                        return (
                            <motion.a
                                key={profile.platform}
                                href={profile.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={cardPopIn}
                                className="glass-card-hover p-6 block group"
                                style={{ perspective: '800px' }}
                                whileHover={{
                                    rotateY: 3,
                                    rotateX: -2,
                                    scale: 1.02,
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div
                                        className="p-3 rounded-xl"
                                        style={{ backgroundColor: `${profile.color}20` }}
                                    >
                                        {Icon && (
                                            <Icon
                                                size={28}
                                                style={{ color: profile.color }}
                                            />
                                        )}
                                    </div>

                                    <div className="flex-1 space-y-3">
                                        <div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                                                {profile.name}
                                            </h3>
                                            <p className="text-white/40 text-xs font-mono">
                                                {profile.url.replace('https://', '')}
                                            </p>
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-2">
                                            {profile.stats.map((stat) => (
                                                <div key={stat.label} className="text-center">
                                                    <div className="text-lg font-bold text-white/90 font-mono">
                                                        {stat.value}
                                                    </div>
                                                    <div className="text-[10px] text-white/40 uppercase tracking-wider">
                                                        {stat.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <span className="text-white/20 group-hover:text-blue-400 group-hover:translate-x-1 transition-all text-lg">
                                        →
                                    </span>
                                </div>
                            </motion.a>
                        );
                    })}
                </motion.div>

                {/* CTA to add more */}
                <motion.div variants={fadeInUp} className="text-center">
                    <p className="text-white/30 text-sm font-mono">
                        Update profiles in{' '}
                        <code className="text-blue-400/60">src/config/codingProfiles.ts</code>
                    </p>
                </motion.div>
            </motion.div>
        </main>
    );
}
