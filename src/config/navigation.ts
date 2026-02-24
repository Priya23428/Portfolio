export interface NavItem {
    label: string;
    href: string;
    shortLabel: string;
}

export const navItems: NavItem[] = [
    { label: 'Home', href: '/', shortLabel: 'Home' },
    { label: 'Hire Me', href: '/cta', shortLabel: 'CTA' },
    { label: 'Resume', href: '/resume', shortLabel: 'CV' },
    { label: 'Projects', href: '/projects', shortLabel: 'Work' },
    { label: 'Skills', href: '/skills', shortLabel: 'Skills' },
    { label: 'Contact', href: '/contact', shortLabel: 'Contact' },
    { label: 'Coding', href: '/coding', shortLabel: 'Code' },
];
