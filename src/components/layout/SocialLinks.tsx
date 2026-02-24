'use client';

import { motion } from 'framer-motion';
import { socials } from '@/config/socials';
import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaYoutube,
    FaThreads,
    FaEnvelope,
} from 'react-icons/fa6';
import { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaYoutube,
    FaThreads,
    FaEnvelope,
};

export default function SocialLinks() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center gap-4 py-4 bg-gradient-to-t from-[#0a0f1c]/80 to-transparent backdrop-blur-sm md:static md:bg-transparent md:backdrop-blur-none">
            {socials.map((social) => {
                const Icon = iconMap[social.icon];
                if (!Icon) return null;
                return (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target={social.url.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white transition-colors"
                        whileHover={{
                            scale: 1.15,
                            rotate: 5,
                            boxShadow: `0 0 20px ${social.color}40`,
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Icon size={20} />
                    </motion.a>
                );
            })}
        </div>
    );
}
