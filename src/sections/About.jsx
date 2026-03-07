import React from 'react';
import { ABOUT_DATA } from '../data';

export default function About() {
    return (
        <section id="about" className="max-w-6xl mx-auto px-6 mt-16 scroll-m-24">
            <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-24 relative z-20">

                {/* Title side */}
                <div className="md:w-1/3 flex-shrink-0">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 flex items-center gap-4">
                        <span className="w-8 h-1 bg-blue-500 rounded-full inline-block"></span>
                        {ABOUT_DATA.title}
                    </h2>
                </div>

                {/* Content side */}
                <div className="md:w-2/3 glass-panel p-8 md:p-12 relative overflow-hidden group hover:border-blue-500/20 transition-colors duration-500">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] group-hover:bg-blue-600/10 transition-colors" />

                    <div className="flex flex-col gap-6 relative z-10">
                        {ABOUT_DATA.paragraphs.map((para, i) => (
                            <p key={i} className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
                                {para}
                            </p>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-4 items-center opacity-80">
                        <span className="text-sm font-mono text-blue-400">01</span>
                        <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">Design</span>
                        <span className="w-4 border-t border-gray-600 inline-block mx-2"></span>
                        <span className="text-sm font-mono text-blue-400">02</span>
                        <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">Prototype</span>
                        <span className="w-4 border-t border-gray-600 inline-block mx-2"></span>
                        <span className="text-sm font-mono text-emerald-400">03</span>
                        <span className="text-sm uppercase tracking-widest text-gray-200 font-medium">Build</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
