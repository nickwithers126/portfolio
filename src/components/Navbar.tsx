'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#1f1f1f] text-white">
    {/* className="sticky top-0 z-50 backdrop-blur-md backdrop-saturate-150 bg-[rgba(31,31,31,0.75)]" */}
      <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" className="text-[#468be6] text-xl font-semibold">n_w</Link>
        <div className="flex space-x-6 text-md">
          <Link href="/" className="text-gray-400 hover:text-[#E9FCFF] transition">home</Link>
          <Link href="/projects" className="text-gray-400 hover:text-[#E9FCFF] transition">projects</Link>
          <Link href="/contact" className="text-gray-400 hover:text-[#E9FCFF] transition">contact</Link>
        </div>
      </div>
    </nav>
  );
}
