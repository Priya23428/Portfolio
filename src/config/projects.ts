export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: 'unity' | 'ar' | 'blender' | 'webgl' | 'other';
  thumbnail: string;
  demoUrl?: string;
  repoUrl?: string;
  downloadUrl?: string;
  platform: string;
}

export const projects: Project[] = [
  {
    id: 'ar-shopping',
    title: 'AR Shopping Assistance',
    description:
      'An augmented reality shopping assistant built with Unity and AR Foundation. Users can visualize furniture and products in their real-world environment before purchasing.',
    tech: ['Unity', 'AR Foundation', 'C#', 'Blender'],
    category: 'ar',
    thumbnail: '/projects/ar-shopping.jpg',
    platform: 'Android / iOS',
  },
  {
    id: 'water-level',
    title: 'Water Level Identifier',
    description:
      'IoT-based water level monitoring system using Arduino and water level sensors. Real-time data visualization and alerts for overflow prevention.',
    tech: ['Arduino', 'C++', 'Sensors', 'IoT'],
    category: 'other',
    thumbnail: '/projects/water-level.jpg',
    platform: 'Embedded / IoT',
  },
  {
    id: '3d-environment',
    title: '3D Environment Design',
    description:
      'Photorealistic 3D environment created in Blender with PBR materials, volumetric lighting, and optimized for real-time rendering in Unity.',
    tech: ['Blender', 'Unity', 'PBR', 'HDRI'],
    category: 'blender',
    thumbnail: '/projects/3d-env.jpg',
    platform: 'Desktop',
  },
  {
    id: 'ar-marker-demo',
    title: 'AR Marker Detection App',
    description:
      'Marker-based AR experience that detects printed patterns and overlays interactive 3D models with animations and sound effects.',
    tech: ['Unity', 'Vuforia', 'C#', 'Blender'],
    category: 'ar',
    thumbnail: '/projects/ar-marker.jpg',
    platform: 'Android',
  },
  {
    id: 'webgl-showcase',
    title: 'WebGL Interactive Gallery',
    description:
      'A browser-based 3D gallery showcasing artwork and models using Three.js and react-three-fiber with orbit controls and lighting effects.',
    tech: ['Three.js', 'React', 'WebGL', 'GLSL'],
    category: 'webgl',
    thumbnail: '/projects/webgl-gallery.jpg',
    platform: 'Web',
  },
  {
    id: 'unity-platformer',
    title: 'Unity 2D Platformer',
    description:
      'A fun 2D platformer game with custom physics, sprite animations, and level design. Features multiple levels with increasing difficulty.',
    tech: ['Unity', 'C#', '2D Animation', 'Tilemap'],
    category: 'unity',
    thumbnail: '/projects/platformer.jpg',
    platform: 'Desktop / Mobile',
  },
];

export const categories = [
  { key: 'all', label: 'All' },
  { key: 'unity', label: 'Unity' },
  { key: 'ar', label: 'AR' },
  { key: 'blender', label: 'Blender' },
  { key: 'webgl', label: 'WebGL' },
] as const;
