export interface Skill {
    name: string;
    level: number; // 0-100
    icon?: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: '3D & Design',
        skills: [
            { name: 'Blender', level: 85 },
            { name: '3D Modeling', level: 80 },
            { name: 'Canva', level: 75 },
            { name: 'PBR Materials', level: 70 },
        ],
    },
    {
        title: 'Game Development',
        skills: [
            { name: 'Unity Engine', level: 85 },
            { name: 'C#', level: 80 },
            { name: 'Game Design', level: 75 },
            { name: '2D/3D Animation', level: 70 },
        ],
    },
    {
        title: 'AR / VR',
        skills: [
            { name: 'AR Foundation', level: 85 },
            { name: 'Vuforia', level: 75 },
            { name: 'WebXR', level: 65 },
            { name: 'ARKit / ARCore', level: 70 },
        ],
    },
    {
        title: 'Programming',
        skills: [
            { name: 'Python', level: 80 },
            { name: 'C++', level: 75 },
            { name: 'C#', level: 80 },
            { name: 'TypeScript', level: 65 },
        ],
    },
    {
        title: 'Web & Tools',
        skills: [
            { name: 'React / Next.js', level: 65 },
            { name: 'Three.js / R3F', level: 60 },
            { name: 'Tableau / Power BI', level: 70 },
            { name: 'Git / GitHub', level: 75 },
        ],
    },
];
