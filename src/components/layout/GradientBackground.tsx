'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/lib/hooks';

interface GradientBackgroundProps {
    variant?: 'hero' | 'cta' | 'resume' | 'projects' | 'skills' | 'contact' | 'coding';
}

const colorThemes = {
    hero: ['#0a0f1c', '#0f172a', '#1e1b4b', '#0c1445'],
    cta: ['#0a0f1c', '#1e1b4b', '#312e81', '#0f172a'],
    resume: ['#0a0f1c', '#0c1445', '#1e3a5f', '#0f172a'],
    projects: ['#0a0f1c', '#0f172a', '#1a1a2e', '#16213e'],
    skills: ['#0a0f1c', '#1e1b4b', '#0d1b2a', '#0f172a'],
    contact: ['#0a0f1c', '#0f172a', '#1b2838', '#0c1445'],
    coding: ['#0a0f1c', '#1e1b4b', '#16213e', '#0f172a'],
};

export default function GradientBackground({ variant = 'hero' }: GradientBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const reducedMotion = useReducedMotion();
    const colors = colorThemes[variant];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener('resize', resize);

        const draw = () => {
            time += reducedMotion ? 0 : 0.003;
            const w = canvas.width;
            const h = canvas.height;

            // Base gradient
            const grad = ctx.createLinearGradient(0, 0, w, h);
            grad.addColorStop(0, colors[0]);
            grad.addColorStop(1, colors[1]);
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, w, h);

            // Animated blobs
            if (!reducedMotion) {
                for (let i = 0; i < 3; i++) {
                    const x = w * (0.3 + 0.4 * Math.sin(time + i * 2.1));
                    const y = h * (0.3 + 0.4 * Math.cos(time * 0.7 + i * 1.7));
                    const r = Math.min(w, h) * (0.2 + 0.1 * Math.sin(time * 0.5 + i));

                    const blobGrad = ctx.createRadialGradient(x, y, 0, x, y, r);
                    blobGrad.addColorStop(0, colors[i + 1] + '40');
                    blobGrad.addColorStop(1, 'transparent');
                    ctx.fillStyle = blobGrad;
                    ctx.fillRect(0, 0, w, h);
                }
            }

            animId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, [colors, reducedMotion]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10"
            style={{ filter: 'blur(60px)' }}
            aria-hidden="true"
        />
    );
}
