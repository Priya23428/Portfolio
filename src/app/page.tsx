'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/components/motion/variants';
import GradientBackground from '@/components/layout/GradientBackground';
import SocialLinks from '@/components/layout/SocialLinks';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0f1c] to-[#1e1b4b]" />
  ),
});

const achievements = [
  'Robotics Teacher at Bricks4kidz STEM',
  'Data Analytics & Visualization Intern',
  'Google IT Automation Certificate',
  'AR & VR Certified Developer',
];

export default function HeroAboutPage() {
  return (
    <main className="page-container relative overflow-hidden">
      <GradientBackground variant="hero" />
      <HeroScene />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* Left: Hero text */}
        <motion.div variants={slideInLeft} className="space-y-6">
          <motion.div variants={fadeInUp}>
            <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">
              Hello, I&apos;m
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
              <span className="text-shimmer">Haripriya</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mt-3 font-light">
              Computer Science Graduate
            </p>
            <p className="text-lg text-cyan-400/80 font-medium mt-1">
              AR & Unity Developer • 3D Artist
            </p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-white/60 leading-relaxed max-w-lg text-base"
          >
            Motivated and adaptable developer eager to contribute to dynamic teams.
            Quick learner with expertise spanning the entire project lifecycle —
            from AR applications and Unity game development to data visualization
            and interactive web experiences.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            <Link
              href="/cta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors shadow-lg shadow-blue-500/20"
            >
              Hire Me
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 font-medium border border-white/10 transition-colors"
            >
              View Projects
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Right: About / Achievements */}
        <motion.div variants={slideInRight} className="space-y-6">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gradient">About Me</span>
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-2">
                  Education
                </h3>
                <p className="text-white/70 text-sm">
                  <strong className="text-white/90">B.Sc. Computer Science</strong> — Avinashilingam Institute,
                  Coimbatore (2021–2024) — CGPA 7.19
                </p>
              </div>

              <div>
                <h3 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-2">
                  Experience
                </h3>
                <p className="text-white/70 text-sm">
                  <strong className="text-white/90">Bricks4kidz STEM Learning</strong> — Robotics Teacher &
                  Content Creator (Sept 2024 – Present)
                </p>
                <p className="text-white/70 text-sm mt-1">
                  <strong className="text-white/90">Anuswaryaa Enterprises</strong> — Data Analytics Intern,
                  Tableau & Power BI (June – July 2023)
                </p>
              </div>

              <div>
                <h3 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-2">
                  Top Achievements
                </h3>
                <ul className="space-y-2">
                  {achievements.map((item, i) => (
                    <motion.li
                      key={item}
                      variants={fadeInUp}
                      custom={i}
                      className="flex items-start gap-2 text-white/70 text-sm"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tech badges */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
            {['Unity', 'Blender', 'AR/VR', 'Python', 'C#', 'C++', 'Canva', 'Power BI'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-white/60"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}
