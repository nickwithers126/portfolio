import Image from "next/image";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto py-16 px-6 items-center gap-10">

      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold text-white">
          hey, i’m nick. 👨‍💻
        </h1>
        <h3 className="text-xl">
          software engineer from norcal 🌲
        </h3>
        <p>i care how things work, how they’re built, and how they look. <br />
           i like building and picking up new tools along the way.</p>

        {/* Action buttons */}
        <div className="flex gap-6 pt-2 justify-center md:justify-start">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-gray-400 rounded hover:text-[#E9FCFF] transition text-sm border"
          >
            Resume
            <FaFileDownload size={18} />
          </a>

          <a
            href="https://github.com/nickwithers126"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#E9FCFF] transition mt-1">
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/nick-withers-5a08a9219/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#E9FCFF] transition mt-1">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image src="/me.JPG" alt="personal picture" width={280} height={280} className="rounded-xl" />
      </div>
    </div>
  );
}
