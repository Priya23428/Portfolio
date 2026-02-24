'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { fadeInUp, staggerContainer, scaleIn } from '@/components/motion/variants';
import GradientBackground from '@/components/layout/GradientBackground';
import SocialLinks from '@/components/layout/SocialLinks';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    subject: z.string().min(3, 'Subject must be at least 3 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
    honeypot: z.string().max(0), // spam protection
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: { honeypot: '' },
    });

    const onSubmit = async (data: ContactFormData) => {
        if (data.honeypot) return; // bot detected

        setStatus('sending');

        try {
            // EmailJS integration - replace with your service/template/public key
            // import emailjs from '@emailjs/browser';
            // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            //   from_name: data.name,
            //   from_email: data.email,
            //   subject: data.subject,
            //   message: data.message,
            // }, 'YOUR_PUBLIC_KEY');

            // Simulated send for demo
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setStatus('success');
            reset();
            setTimeout(() => setStatus('idle'), 4000);
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <main className="page-container relative overflow-hidden">
            <GradientBackground variant="contact" />

            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="max-w-4xl mx-auto w-full space-y-8 relative z-10"
            >
                <motion.div variants={fadeInUp} className="text-center space-y-3">
                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
                        Get in Touch
                    </p>
                    <h1 className="section-title text-white">
                        <span className="text-gradient">Contact</span> Me
                    </h1>
                    <p className="text-white/50 text-lg max-w-md mx-auto">
                        Have a project idea or want to collaborate? Let&apos;s talk!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-8">
                    {/* Form */}
                    <motion.div variants={fadeInUp} className="md:col-span-3">
                        <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-6 md:p-8 space-y-5">
                            {/* Honeypot - hidden from humans */}
                            <input
                                {...register('honeypot')}
                                tabIndex={-1}
                                autoComplete="off"
                                className="absolute opacity-0 h-0 w-0 pointer-events-none"
                                aria-hidden="true"
                            />

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="text-sm text-white/60 font-medium">
                                        Name *
                                    </label>
                                    <motion.input
                                        id="name"
                                        {...register('name')}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-blue-500/50 focus:bg-white/8 transition-all outline-none"
                                        placeholder="Your name"
                                        whileFocus={{ borderColor: 'rgba(59, 130, 246, 0.5)' }}
                                    />
                                    {errors.name && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-xs"
                                        >
                                            {errors.name.message}
                                        </motion.p>
                                    )}
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-sm text-white/60 font-medium">
                                        Email *
                                    </label>
                                    <motion.input
                                        id="email"
                                        type="email"
                                        {...register('email')}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-blue-500/50 focus:bg-white/8 transition-all outline-none"
                                        placeholder="you@example.com"
                                        whileFocus={{ borderColor: 'rgba(59, 130, 246, 0.5)' }}
                                    />
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-xs"
                                        >
                                            {errors.email.message}
                                        </motion.p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="subject" className="text-sm text-white/60 font-medium">
                                    Subject *
                                </label>
                                <motion.input
                                    id="subject"
                                    {...register('subject')}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-blue-500/50 focus:bg-white/8 transition-all outline-none"
                                    placeholder="Project inquiry, collaboration, etc."
                                    whileFocus={{ borderColor: 'rgba(59, 130, 246, 0.5)' }}
                                />
                                {errors.subject && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-xs"
                                    >
                                        {errors.subject.message}
                                    </motion.p>
                                )}
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="message" className="text-sm text-white/60 font-medium">
                                    Message *
                                </label>
                                <motion.textarea
                                    id="message"
                                    rows={5}
                                    {...register('message')}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-blue-500/50 focus:bg-white/8 transition-all outline-none resize-none"
                                    placeholder="Tell me about your project..."
                                    whileFocus={{ borderColor: 'rgba(59, 130, 246, 0.5)' }}
                                />
                                {errors.message && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-xs"
                                    >
                                        {errors.message.message}
                                    </motion.p>
                                )}
                            </div>

                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="text-center py-4 space-y-2"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', damping: 10, stiffness: 200 }}
                                            className="text-5xl"
                                        >
                                            ✅
                                        </motion.div>
                                        <p className="text-green-400 font-semibold">Message sent successfully!</p>
                                        <p className="text-white/40 text-sm">I&apos;ll get back to you soon.</p>
                                    </motion.div>
                                ) : status === 'error' ? (
                                    <motion.div
                                        key="error"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: [0, -5, 5, -5, 0] }}
                                        exit={{ opacity: 0 }}
                                        className="text-center py-4 space-y-2"
                                    >
                                        <div className="text-5xl">❌</div>
                                        <p className="text-red-400 font-semibold">Failed to send message</p>
                                        <p className="text-white/40 text-sm">
                                            Please try again or use the email below.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.button
                                        key="submit"
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/20 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                    >
                                        {status === 'sending' ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <motion.span
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                                    className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                />
                                                Sending...
                                            </span>
                                        ) : (
                                            'Send Message ✨'
                                        )}
                                    </motion.button>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>

                    {/* Contact info sidebar */}
                    <motion.div variants={fadeInUp} className="md:col-span-2 space-y-6">
                        <div className="glass-card p-6 space-y-4">
                            <h3 className="text-lg font-bold text-white">Quick Contact</h3>
                            <div className="space-y-3">
                                <a
                                    href="mailto:haripriyak234@gmail.com"
                                    className="flex items-center gap-3 text-white/60 hover:text-blue-400 transition-colors text-sm"
                                >
                                    <span className="text-lg">📧</span>
                                    haripriyak234@gmail.com
                                </a>
                                <a
                                    href="tel:+919080226890"
                                    className="flex items-center gap-3 text-white/60 hover:text-blue-400 transition-colors text-sm"
                                >
                                    <span className="text-lg">📞</span>
                                    +91 9080226890
                                </a>
                                <div className="flex items-center gap-3 text-white/60 text-sm">
                                    <span className="text-lg">📍</span>
                                    Coimbatore, Tamil Nadu, India
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6 space-y-4">
                            <h3 className="text-lg font-bold text-white">Connect</h3>
                            <SocialLinks />
                        </div>

                        <motion.div variants={scaleIn} className="glass-card p-6 text-center">
                            <p className="text-white/40 text-sm">
                                Prefer email? Write directly to
                            </p>
                            <a
                                href="mailto:haripriyak234@gmail.com"
                                className="text-blue-400 hover:text-blue-300 font-medium text-sm mt-1 inline-block"
                            >
                                haripriyak234@gmail.com
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </main>
    );
}
