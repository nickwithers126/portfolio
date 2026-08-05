'use client'

import Image from "next/image";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

export default function Intro() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto py-16 px-6 items-center gap-10">

      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 space-y-4 text-[#E9FCFF]">
        <h1 className="text-4xl font-bold ">
          hey, i’m nick! 👨‍💻
        </h1>
        <h3 className="text-xl">
          software developer from northern california 🌲
        </h3>
        <p>
          i care about how things work, how they’re built, and how they feel to use.
        </p>

        {/* Action buttons */}
        <div className="flex gap-6 pt-2 justify-center md:justify-start">
          <a
            href="/nick_withers_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-gray-400 rounded-xl hover:text-[#E9FCFF] transition text-sm border"
          >
            resume
            <FaFileDownload size={18} />
          </a>

          <a
            href="https://github.com/nickwithers126"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#E9FCFF] transition mt-2">
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/nick-withers-5a08a9219/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#E9FCFF] transition mt-2">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image src="/me2.JPG" alt="personal picture" width={280} height={280} className="rounded-xl" loading="eager"/>
      </div>
    </div>
  );
}
