import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Link {
  title: string;
  url: string;
  description: string;
}

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  links: Link[];
}

export default function CategoryCard({ title, icon, links }: CategoryCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-white/10 rounded-lg">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      <div className="space-y-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 rounded-lg hover:bg-white/10 transition-all group"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-white group-hover:text-white/90">{link.title}</h3>
              <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white/90" />
            </div>
            <p className="text-sm text-white/60 mt-1">{link.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}