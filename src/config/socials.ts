export interface SocialLink {
    name: string;
    url: string;
    icon: string;
    color: string;
}

export const socials: SocialLink[] = [
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/haripriya-k',
        icon: 'FaLinkedin',
        color: '#0A66C2',
    },
    {
        name: 'GitHub',
        url: 'https://github.com/haripriya',
        icon: 'FaGithub',
        color: '#6e5494',
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/haripriya',
        icon: 'FaInstagram',
        color: '#E4405F',
    },
    {
        name: 'YouTube',
        url: 'https://youtube.com/@haripriya',
        icon: 'FaYoutube',
        color: '#FF0000',
    },
    {
        name: 'Threads',
        url: 'https://threads.net/@haripriya',
        icon: 'FaThreads',
        color: '#000000',
    },
    {
        name: 'Email',
        url: 'mailto:haripriyak234@gmail.com',
        icon: 'FaEnvelope',
        color: '#EA4335',
    },
];
