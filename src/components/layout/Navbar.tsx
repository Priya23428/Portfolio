'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/config/navigation';
import { useIsMobile } from '@/lib/hooks';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function Navbar() {
    const pathname = usePathname();
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = useState(false);

    if (isMobile) {
        return (
            <>
                {/* Mobile hamburger */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed top-4 right-4 z-50 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-colors"
                    aria-label="Open navigation menu"
                >
                    <HiMenuAlt3 size={24} />
                </button>

                {/* Mobile drawer */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                                onClick={() => setIsOpen(false)}
                            />
                            <motion.nav
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-[#0a0f1c]/95 backdrop-blur-xl border-l border-white/10 p-6 pt-16"
                                role="navigation"
                                aria-label="Main navigation"
                            >
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors"
                                    aria-label="Close navigation menu"
                                >
                                    <HiX size={24} />
                                </button>
                                <ul className="space-y-2">
                                    {navItems.map((item, i) => (
                                        <motion.li
                                            key={item.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all ${pathname === item.href
                                                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                                        : 'text-white/70 hover:text-white hover:bg-white/5'
                                                    }`}
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.nav>
                        </>
                    )}
                </AnimatePresence>
            </>
        );
    }

    // Desktop sidebar nav
    return (
        <nav
            className="fixed left-0 top-0 bottom-0 z-50 w-16 hover:w-48 transition-all duration-300 group bg-[#0a0f1c]/50 backdrop-blur-xl border-r border-white/5 flex flex-col items-center justify-center"
            role="navigation"
            aria-label="Main navigation"
        >
            <ul className="space-y-3">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all relative ${isActive
                                        ? 'text-blue-400'
                                        : 'text-white/40 hover:text-white/80'
                                    }`}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {/* Active dot */}
                                <span
                                    className={`w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all ${isActive
                                            ? 'bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.6)]'
                                            : 'bg-white/20 group-hover:bg-white/30'
                                        }`}
                                />
                                {/* Label (visible on hover) */}
                                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
