import React from 'react';
import { HERO_DATA } from '../data';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[95vh] flex items-center justify-center -mt-20 pt-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen opacity-60 animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] mix-blend-screen opacity-60 animate-pulse" style={{ animationDuration: '6s' }} />

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTM5IDM5VjFIMUMxdjM4aDM4eiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-60 mask-image-linear-gradient-to-b" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="max-w-5xl">

                    <div className="flex flex-wrap gap-3 mb-10">
                        {HERO_DATA.tags.map(tag => (
                            <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-gray-300 shadow-sm backdrop-blur-sm shadow-blue-500/5">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold font-heading leading-[1.05] mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-400">
                        {HERO_DATA.headline}
                    </h1>

                    <p className="text-xl md:text-3xl text-gray-400 max-w-3xl mb-14 leading-relaxed font-light">
                        {HERO_DATA.subheadline}
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                        <a href="#work" className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all flex items-center gap-3 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-1">
                            Explore Engineering Work
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="px-10 py-4 bg-dark-800/50 backdrop-blur-md hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all hover:-translate-y-1">
                            Contact Me
                        </a>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <a href="#about" className="text-gray-500 hover:text-white transition-colors flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest font-bold">Scroll</span>
                    <ChevronDown size={28} />
                </a>
            </div>
        </section>
    );
}
