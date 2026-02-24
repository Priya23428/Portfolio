'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/components/motion/variants';
import GradientBackground from '@/components/layout/GradientBackground';

export default function ResumePage() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [showViewer, setShowViewer] = useState(false);

    return (
        <main className="page-container relative overflow-hidden">
            <GradientBackground variant="resume" />

            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="max-w-4xl mx-auto w-full space-y-8 relative z-10"
            >
                <motion.div variants={fadeInUp} className="text-center space-y-3">
                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
                        My Credentials
                    </p>
                    <h1 className="section-title text-white">
                        <span className="text-gradient">Resume</span>
                    </h1>
                    <p className="text-white/50 text-lg">
                        Download or view my resume below
                    </p>
                </motion.div>

                {/* Card flip container */}
                <motion.div variants={scaleIn} className="flex justify-center">
                    <div
                        className="relative w-full max-w-md cursor-pointer"
                        style={{ perspective: '1200px' }}
                        onClick={() => setIsFlipped(!isFlipped)}
                        onKeyDown={(e) => e.key === 'Enter' && setIsFlipped(!isFlipped)}
                        tabIndex={0}
                        role="button"
                        aria-label={isFlipped ? 'Show resume front' : 'Flip to see download options'}
                    >
                        <motion.div
                            className="relative w-full"
                            style={{ transformStyle: 'preserve-3d' }}
                            animate={{ rotateY: isFlipped ? 180 : 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 0.9, 0.33, 1] }}
                        >
                            {/* Front face */}
                            <div
                                className="w-full glass-card p-1 shadow-2xl"
                                style={{ backfaceVisibility: 'hidden' }}
                            >
                                <div className="bg-white rounded-xl overflow-hidden aspect-[3/4] flex items-center justify-center relative">
                                    {/* Resume preview placeholder */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white p-6 space-y-4">
                                        <div className="space-y-1">
                                            <div className="h-8 w-40 bg-[#0a0f1c] rounded" />
                                            <div className="h-3 w-52 bg-gray-300 rounded" />
                                        </div>
                                        <div className="h-px bg-blue-500" />
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <div className="h-3 w-20 bg-blue-500 rounded" />
                                                <div className="h-2 w-full bg-gray-200 rounded" />
                                                <div className="h-2 w-3/4 bg-gray-200 rounded" />
                                                <div className="h-2 w-5/6 bg-gray-200 rounded" />
                                                <div className="h-3 w-24 bg-blue-500 rounded mt-4" />
                                                <div className="h-2 w-full bg-gray-200 rounded" />
                                                <div className="h-2 w-2/3 bg-gray-200 rounded" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-3 w-20 bg-blue-500 rounded" />
                                                <div className="h-2 w-full bg-gray-200 rounded" />
                                                <div className="h-2 w-3/4 bg-gray-200 rounded" />
                                                <div className="h-2 w-5/6 bg-gray-200 rounded" />
                                                <div className="h-3 w-20 bg-blue-500 rounded mt-4" />
                                                <div className="h-2 w-full bg-gray-200 rounded" />
                                                <div className="h-2 w-2/3 bg-gray-200 rounded" />
                                            </div>
                                        </div>
                                        <div className="space-y-2 mt-4">
                                            <div className="h-3 w-16 bg-blue-500 rounded" />
                                            <div className="h-2 w-full bg-gray-200 rounded" />
                                            <div className="h-2 w-5/6 bg-gray-200 rounded" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 left-0 right-0 text-center">
                                        <span className="text-xs text-gray-400 font-mono">
                                            Click to flip →
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Back face */}
                            <div
                                className="absolute inset-0 w-full glass-card p-8 flex flex-col items-center justify-center gap-6"
                                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                            >
                                <div className="text-6xl" role="img" aria-label="document">
                                    📄
                                </div>
                                <h3 className="text-2xl font-bold text-white">Haripriya&apos;s Resume</h3>
                                <p className="text-white/50 text-center text-sm">
                                    Computer Science Graduate • AR & Unity Developer
                                </p>

                                <div className="space-y-3 w-full max-w-xs">
                                    <a
                                        href="/resume.pdf"
                                        download
                                        className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        ⬇️ Download PDF
                                    </a>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowViewer(true);
                                        }}
                                        className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 font-medium hover:bg-white/10 transition-colors"
                                    >
                                        👁️ View Inline
                                    </button>
                                </div>

                                <span className="text-xs text-white/30 font-mono">
                                    ← Click to flip back
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Inline viewer modal */}
                <AnimatePresence>
                    {showViewer && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
                            onClick={() => setShowViewer(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="w-full max-w-4xl h-[80vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
                                    <span className="font-semibold text-gray-700">
                                        Haripriya — Resume
                                    </span>
                                    <button
                                        onClick={() => setShowViewer(false)}
                                        className="px-3 py-1.5 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                                <iframe
                                    src="/resume.pdf"
                                    className="w-full h-full"
                                    title="Resume PDF viewer"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </main>
    );
}
