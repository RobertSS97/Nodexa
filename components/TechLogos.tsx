import Image from 'next/image';
import React from 'react';

interface TechLogo {
  name: string;
  url: string;
  alt: string;
}

const techLogos: TechLogo[] = [
  {
    name: 'React',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    alt: 'Logo React JS'
  },
  {
    name: 'Next.js',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    alt: 'Logo Next.js'
  },
  {
    name: 'TypeScript',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    alt: 'Logo TypeScript'
  },
  {
    name: 'Node.js',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    alt: 'Logo Node.js'
  },
  {
    name: 'TailwindCSS',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    alt: 'Logo TailwindCSS'
  },
  {
    name: 'MongoDB',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    alt: 'Logo MongoDB'
  },
  {
    name: 'PostgreSQL',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    alt: 'Logo PostgreSQL'
  },
  {
    name: 'Docker',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    alt: 'Logo Docker'
  }
];

export default function TechLogos() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-8">
      {techLogos.map((tech) => (
        <div 
          key={tech.name} 
          className="flex flex-col items-center justify-center p-2 bg-gradient-to-br from-black/50 to-blue-950/30 rounded-lg border border-blue-900/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 group"
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12 mb-2">
            <Image 
              src={tech.url} 
              alt={tech.alt}
              fill
              className="object-contain filter drop-shadow-[0_0_8px_rgba(59,130,246,0.4)] group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] transition-all duration-300"
            />
          </div>
          <span className="text-center text-xs md:text-sm text-gray-200 font-medium">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}