'use client';

import { ReactNode } from 'react';
import PageTransition from '@/components/layout/PageTransition';

export default function ClientLayout({ children }: { children: ReactNode }) {
    return <PageTransition>{children}</PageTransition>;
}
