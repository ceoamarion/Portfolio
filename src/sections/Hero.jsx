import React from 'react';
import { HERO_DATA } from '../data';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center -mt-20 pt-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTM5IDM5VjFIMUMxdjM4aDM4eiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-50" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
                <div className="max-w-4xl">

                    <div className="flex flex-wrap gap-2 mb-8">
                        {HERO_DATA.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-400">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] mb-6 tracking-tight">
                        {HERO_DATA.headline}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
                        {HERO_DATA.subheadline}
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                        <a href="#work" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-lg transition-colors">
                            Contact Me
                        </a>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <a href="#about" className="text-gray-500 hover:text-white transition-colors">
                    <ChevronDown size={32} />
                </a>
            </div>
        </section>
    );
}
