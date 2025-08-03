'use client';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  links: { label: string; url: string }[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col justify-between h-full rounded-xl border border-gray-400 p-4 transition">
      {/* Top content */}
      <div className="space-y-3">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="rounded-md w-full object-cover"
        />
        <h3 className="text-md font-semibold text-[#E9FCFF]">{project.title}</h3>
        <p className="text-xs text-gray-400">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-[#092f64] text-[#E9FCFF] text-[10px] px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Button links pinned to bottom */}
      <div className="flex gap-2 pt-4">
        {project.links.map((link, idx) => (
          <Link
            key={idx}
            href={link.url}
            className="text-xs text-gray-400 border border-gray-400 hover:text-[#E9FCFF] hover:border-[#E9FCFF] px-3 py-1 rounded-md transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
