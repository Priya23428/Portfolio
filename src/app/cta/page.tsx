'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp, staggerContainer, scaleIn } from '@/components/motion/variants';
import GradientBackground from '@/components/layout/GradientBackground';

export default function CTAPage() {
    return (
        <main className="page-container relative overflow-hidden">
            <GradientBackground variant="cta" />

            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="max-w-3xl mx-auto w-full text-center space-y-8 relative z-10"
            >
                <motion.div variants={fadeInUp} className="space-y-4">
                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
                        Ready to collaborate?
                    </p>
                    <h1 className="section-title text-white">
                        Let&apos;s Build Something{' '}
                        <span className="text-shimmer">Extraordinary</span>
                    </h1>
                    <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
                        I&apos;m passionate about creating immersive AR experiences, interactive 3D
                        applications, and bringing creative visions to life through technology.
                    </p>
                </motion.div>

                <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* Primary CTA */}
                    <Link href="/contact">
                        <motion.div
                            className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-xl cursor-pointer overflow-hidden"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(34, 211, 238, 0.3)',
                            }}
                            whileTap={{ scale: 0.98 }}
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(59, 130, 246, 0.3)',
                                    '0 0 40px rgba(59, 130, 246, 0.5)',
                                    '0 0 20px rgba(59, 130, 246, 0.3)',
                                ],
                            }}
                            transition={{
                                boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                            }}
                        >
                            {/* Motion blur overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-cyan-400/0 group-hover:from-blue-400/20 group-hover:to-cyan-400/20 group-hover:backdrop-blur-[1px] transition-all duration-300" />
                            <span className="relative z-10 flex items-center gap-3">
                                ✉️ Contact Me
                            </span>
                        </motion.div>
                    </Link>

                    {/* Secondary CTA */}
                    <Link href="/resume">
                        <motion.div
                            className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white/80 font-semibold text-xl cursor-pointer hover:bg-white/10 hover:border-blue-500/30 transition-all"
                            whileHover={{
                                scale: 1.03,
                                boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            📄 View Resume
                        </motion.div>
                    </Link>
                </motion.div>

                {/* Highlight cards */}
                <motion.div
                    variants={staggerContainer}
                    className="grid sm:grid-cols-3 gap-4 mt-12"
                >
                    {[
                        { icon: '🎮', title: 'Game Dev', desc: 'Unity, C#, 2D/3D' },
                        { icon: '📱', title: 'AR/VR', desc: 'ARCore, Vuforia, WebXR' },
                        { icon: '🎨', title: '3D Design', desc: 'Blender, PBR, HDRI' },
                    ].map((item) => (
                        <motion.div
                            key={item.title}
                            variants={fadeInUp}
                            className="glass-card-hover p-6 text-center"
                        >
                            <span className="text-3xl" role="img" aria-label={item.title}>
                                {item.icon}
                            </span>
                            <h3 className="text-white font-semibold mt-3">{item.title}</h3>
                            <p className="text-white/50 text-sm mt-1">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </main>
    );
}
