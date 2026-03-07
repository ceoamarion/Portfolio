import React from 'react';
import { ABOUT_DATA } from '../data';

export default function About() {
    return (
        <section id="about" className="max-w-7xl mx-auto px-6 mt-16 scroll-m-24">
            <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-24 relative z-20">

                {/* Title side */}
                <div className="lg:w-1/3 flex-shrink-0 pt-8">
                    <h2 className="text-5xl md:text-6xl font-extrabold font-heading mb-6 tracking-tight text-white flex flex-col gap-4">
                        <span className="w-12 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full inline-block"></span>
                        {ABOUT_DATA.title}
                    </h2>
                    <p className="text-xl text-blue-400 font-medium">Bridging Design & Engineering</p>
                </div>

                {/* Content side */}
                <div className="lg:w-2/3 bg-dark-800/40 backdrop-blur-md border border-white/5 p-8 md:p-14 rounded-3xl relative overflow-hidden group hover:bg-dark-800/80 hover:border-white/10 transition-all duration-500 shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] group-hover:bg-blue-600/10 transition-colors duration-700 -translate-y-1/2 translate-x-1/2" />

                    <div className="flex flex-col gap-8 relative z-10">
                        {ABOUT_DATA.paragraphs.map((para, i) => (
                            <p key={i} className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                                {para}
                            </p>
                        ))}
                    </div>

                    <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-4 items-center opacity-80">
                        <span className="text-sm font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded">01</span>
                        <span className="text-sm uppercase tracking-widest text-gray-400 font-bold">Design</span>
                        <span className="w-8 border-t border-gray-600/30 inline-block mx-2"></span>
                        <span className="text-sm font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded">02</span>
                        <span className="text-sm uppercase tracking-widest text-gray-400 font-bold">Prototype</span>
                        <span className="w-8 border-t border-gray-600/30 inline-block mx-2"></span>
                        <span className="text-sm font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">03</span>
                        <span className="text-sm uppercase tracking-widest text-white font-bold">Build Phase</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
