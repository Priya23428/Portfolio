export interface CodingProfile {
    name: string;
    platform: string;
    url: string;
    icon: string; // react-icons name
    color: string;
    stats: { label: string; value: string }[];
}

export const codingProfiles: CodingProfile[] = [
    {
        name: 'GitHub',
        platform: 'github',
        url: 'https://github.com/haripriya',
        icon: 'FaGithub',
        color: '#6e5494',
        stats: [
            { label: 'Repositories', value: '15+' },
            { label: 'Top Language', value: 'C#' },
            { label: 'Contributions', value: '200+' },
        ],
    },
    {
        name: 'LeetCode',
        platform: 'leetcode',
        url: 'https://leetcode.com/haripriya',
        icon: 'SiLeetcode',
        color: '#FFA116',
        stats: [
            { label: 'Problems Solved', value: '50+' },
            { label: 'Contest Rating', value: '1400+' },
            { label: 'Badges', value: '3' },
        ],
    },
    {
        name: 'HackerRank',
        platform: 'hackerrank',
        url: 'https://hackerrank.com/haripriya',
        icon: 'FaHackerrank',
        color: '#2EC866',
        stats: [
            { label: 'Stars', value: '⭐⭐⭐' },
            { label: 'Badges', value: '5' },
            { label: 'Certificates', value: '2' },
        ],
    },
    {
        name: 'CodeChef',
        platform: 'codechef',
        url: 'https://codechef.com/users/haripriya',
        icon: 'SiCodechef',
        color: '#5B4638',
        stats: [
            { label: 'Rating', value: '1200+' },
            { label: 'Problems Solved', value: '30+' },
            { label: 'Division', value: 'Div 3' },
        ],
    },
];
