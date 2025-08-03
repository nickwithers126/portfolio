'use client';
import ProjectCard from './ProjectCard';
import Link from 'next/link';

const featuredProjects = [
    {
        image: '/logobuddy.png',
        title: 'LogoBuddy',
        description:
            'A minimalist logo generator that turns brand input into clean, custom icons using OpenAI’s GPT-Image-1. Designed for founders and creatives who want fast, simple branding without design skills.',
        tags: ['NextJS', 'TailwindCSS', 'TypeScript', 'OpenAI API'],
        links: [
            { label: 'website', url: 'https://logobuddy.app' },
            { label: 'code', url: 'https://github.com/nickwithers126/logo-gen-app' }
        ],
    },
    {
        image: '/spinery.png',
        title: 'Spinery',
        description:
            'A 3D virtual bookshelf where users can search for books, save them to a shelf, and manage their library with real-time sync using Firebase and the Google Books API.',
        tags: ['NextJS', 'TailwindCSS', 'TypeScript', 'Firebase', 'React Three Fiber', 'Google Books API'],
        links: [
            { label: 'website', url: 'https://spinery.vercel.app/' },
            { label: 'code', url: 'https://github.com/nickwithers126/spinery' }
        ],
    },
];

export default function FeaturedProjects() {
    return (
        <section className="mt-20 max-w-5xl mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#E9FCFF]">featured projects</h2>
                <Link href="/projects" className="text-md text-gray-400 hover:text-[#E9FCFF] transition">
                    view more →
                </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {featuredProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
}
