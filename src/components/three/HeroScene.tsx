'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useIsMobile, useReducedMotion } from '@/lib/hooks';

function Particles({ count = 200 }: { count?: number }) {
    const mesh = useRef<THREE.Points>(null);

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
            mesh.current.rotation.y = state.clock.elapsedTime * 0.03;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                    count={count}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#60a5fa"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

function FloatingTorus() {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.x = state.clock.elapsedTime * 0.15;
            mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
            mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
        }
    });

    return (
        <mesh ref={mesh}>
            <torusKnotGeometry args={[1.2, 0.35, 128, 32]} />
            <meshStandardMaterial
                color="#3b82f6"
                emissive="#1d4ed8"
                emissiveIntensity={0.3}
                roughness={0.3}
                metalness={0.8}
                wireframe
            />
        </mesh>
    );
}

function FloatingRing() {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.z = state.clock.elapsedTime * 0.1;
            mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
        }
    });

    return (
        <mesh ref={mesh} position={[2, -0.5, -1]}>
            <torusGeometry args={[0.8, 0.05, 16, 64]} />
            <meshStandardMaterial
                color="#22d3ee"
                emissive="#0891b2"
                emissiveIntensity={0.5}
                transparent
                opacity={0.6}
            />
        </mesh>
    );
}

export default function HeroScene() {
    const isMobile = useIsMobile();
    const reducedMotion = useReducedMotion();

    if (reducedMotion) {
        return (
            <div className="absolute inset-0 -z-10 opacity-30">
                <div className="w-full h-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-full blur-3xl" />
            </div>
        );
    }

    return (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 60 }}
                dpr={isMobile ? 1 : 1.5}
                gl={{ antialias: !isMobile, powerPreference: isMobile ? 'low-power' : 'high-performance' }}
            >
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} />
                <pointLight position={[-5, -5, 5]} intensity={0.4} color="#22d3ee" />
                <FloatingTorus />
                {!isMobile && <FloatingRing />}
                <Particles count={isMobile ? 80 : 200} />
            </Canvas>
        </div>
    );
}
