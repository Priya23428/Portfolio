import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import ClientLayout from './client-layout';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://haripriya-portfolio.vercel.app'),
  title: {
    default: 'Haripriya | AR & Unity Developer Portfolio',
    template: '%s | Haripriya Portfolio',
  },
  description:
    'Portfolio of Haripriya — Computer Science Graduate specializing in Augmented Reality, Unity Game Development, Blender 3D, and interactive experiences.',
  keywords: [
    'Haripriya',
    'AR Developer',
    'Unity Developer',
    'Blender',
    '3D Artist',
    'Augmented Reality',
    'Portfolio',
    'Game Developer',
  ],
  authors: [{ name: 'Haripriya' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://haripriya-portfolio.vercel.app',
    siteName: 'Haripriya Portfolio',
    title: 'Haripriya | AR & Unity Developer Portfolio',
    description:
      'Interactive portfolio showcasing augmented reality, Unity game development, and 3D design projects.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haripriya | AR & Unity Developer Portfolio',
    description:
      'Interactive portfolio showcasing augmented reality, Unity game development, and 3D design projects.',
  },
  robots: { index: true, follow: true },
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Haripriya',
  jobTitle: 'Computer Science Graduate & AR Developer',
  url: 'https://haripriya-portfolio.vercel.app',
  email: 'haripriyak234@gmail.com',
  telephone: '+919080226890',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  knowsAbout: [
    'Augmented Reality',
    'Unity Game Engine',
    'Blender 3D',
    'Python',
    'C++',
    'C#',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Avinashilingam Institute for Home Science and Higher Education for Women',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0a0f1c] text-slate-200`}
      >
        <Navbar />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
