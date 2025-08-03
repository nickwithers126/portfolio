'use client';
import { useState } from 'react';
import Image from 'next/image';

type Entry = {
  date: string;
  logo: string;
  title: string;
  subtitle: string;
  bullets: string[];
};

const workData: Entry[] = [
  {
    date: 'May 2024 – Present',
    logo: '/ftb.png',
    title: 'California Franchise Tax Board',
    subtitle: 'Full Stack Software Developer',
    bullets: [
      'Devloped internal tools using .NET',
      'Built dashboards and paginated reports',
      'Supported enterprise rollout of a cloud-based asset management platform'
    ]
  },
  {
    date: 'Aug 2023 – May 2024',
    logo: '/boeing.jpg',
    title: 'Boeing',
    subtitle: 'Software Test Automation Engineer',
    bullets: [
      'Automated test cases for multiple web applications',
      'Built a regression test suite',
      'Helped design and implement a reusable test automation framework'
    ]
  },
];

const educationData: Entry[] = [
  {
    date: 'Sep 2019 – Dec 2022',
    logo: '/ucd.png',
    title: 'University of California, Davis',
    subtitle: 'BS in Computer Science',
    bullets: [
      'Graduated with honors',
      'GPA: 3.96',
    ]
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');
  const data = activeTab === 'work' ? workData : educationData;

  return (
    <section className="mt-10 max-w-5xl mx-auto px-6">

      {/* Tabs */}
      <div className="mb-3 p-1 text-sm bg-[#468be6] rounded-xl">
        <button
          onClick={() => setActiveTab('work')}
          className={`px-2 py-1 w-1/2 font-semibold rounded-lg ${activeTab === 'work' ? 'bg-[#1f1f1f] text-[#E9FCFF]' : 'bg-[#468be6] text-[#1f1f1f]'}`}
        >
          work
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`px-2 py-1 w-1/2 font-semibold rounded-lg ${activeTab === 'education' ? 'bg-[#1f1f1f] text-[#E9FCFF]' : 'bg-[#468be6] text-[#1f1f1f]'}`}
        >
          education
        </button>
      </div>


      {/* Timeline container */}
      <div className="relative pl-6 rounded-xl border border-gray-400">

        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-[44px] w-[1px] bg-gray-400" />

        {/* Timeline content */}
        <div className="space-y-10 py-2">
          {data.map((item, i) => (
            <div key={i} className="relative flex items-start gap-4 mt-2">

              {/* Timeline dot or logo */}
              <div className="z-10 shrink-0 flex justify-center">
                <div className="mt-3">
                  <Image
                    src={item.logo}
                    width={40}
                    height={40}
                    alt="logo"
                    className="rounded-full"
                  />
                </div>
              </div>

              {/* Content block */}
              <div className="space-y-1">
                <p className="text-xs text-gray-400">{item.date}</p>
                <h3 className="text-md font-semibold text-[#E9FCFF]">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.subtitle}</p>
                <ul className="list-disc list-inside text-xs text-gray-400 space-y-1">
                  {item.bullets.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section >
  );
}
