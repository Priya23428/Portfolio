import { Variants } from 'framer-motion';

export const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 0.9, 0.33, 1];
export const EASE_OUT_QUART: [number, number, number, number] = [0.25, 1, 0.5, 1];

export const pageVariants: Variants = {
    initial: {
        opacity: 0,
        y: 40,
        scale: 0.98,
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: EASE_OUT_EXPO,
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        y: -30,
        scale: 0.98,
        transition: {
            duration: 0.5,
            ease: EASE_OUT_QUART,
        },
    },
};

export const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: EASE_OUT_EXPO },
    },
};

export const fadeIn: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

export const staggerContainer: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
};

export const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: EASE_OUT_EXPO },
    },
};

export const slideInLeft: Variants = {
    initial: { opacity: 0, x: -60 },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: EASE_OUT_EXPO },
    },
};

export const slideInRight: Variants = {
    initial: { opacity: 0, x: 60 },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: EASE_OUT_EXPO },
    },
};

export const cardPopIn: Variants = {
    initial: { opacity: 0, scale: 0.85, rotateX: 15 },
    animate: {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        transition: {
            duration: 0.6,
            ease: EASE_OUT_EXPO,
        },
    },
};

export const glowPulse = {
    boxShadow: [
        '0 0 20px rgba(59, 130, 246, 0.3)',
        '0 0 40px rgba(59, 130, 246, 0.6)',
        '0 0 20px rgba(59, 130, 246, 0.3)',
    ],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' as const },
};

// Reduced motion variants
export const reducedPageVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

export const reducedFadeIn: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } },
};
