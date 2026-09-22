'use client';
import ProjectCard from './ProjectCard';
import Link from 'next/link';

const featuredProjects = [
    {
        image: '/ito2.png',
        title: 'Ito',
        description: 'An AI-assisted itinerary planner that organizes trips and audits them for timing conflicts, travel inefficiencies, and missing bookings. Built to make complex travel plans easier to manage.',
        tags: ['NextJS', 'TailwindCSS', 'TypeScript', 'SupaBase', 'OpenAI API'],
        links: [
            { label: 'website', url: 'https://ito-trips.vercel.app/' },
            { label: 'code', url: 'https://github.com/nickwithers126/ito' }
        ],
    },
    {
        image: '/logobuddy.png',
        title: 'LogoBuddy',
        description:
            'A minimalist logo generator that turns brand input into clean, custom icons using OpenAI’s GPT‑Image‑2.5 Flare. Designed for founders and creatives who want fast, simple branding without design skills.',
        tags: ['NextJS', 'TailwindCSS', 'TypeScript', 'OpenAI API'],
        links: [
            { label: 'website', url: 'https://logobuddy.app' },
            { label: 'code', url: 'https://github.com/nickwithers126/logo-gen-app' }
        ],
    }
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
