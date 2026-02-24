'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { pageVariants, reducedPageVariants } from '../motion/variants';
import { useReducedMotion } from '@/lib/hooks';

interface PageTransitionProps {
    children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname();
    const reducedMotion = useReducedMotion();
    const variants = reducedMotion ? reducedPageVariants : pageVariants;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="min-h-screen"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
