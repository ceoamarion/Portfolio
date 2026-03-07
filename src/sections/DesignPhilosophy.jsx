import React from 'react';
import { PHILOSOPHY } from '../data';

export default function DesignPhilosophy() {
    return (
        <section id="philosophy" className="max-w-7xl mx-auto px-6 py-24 scroll-m-24 border-t border-white/5">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

                <div className="lg:w-1/3 pt-4">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading mb-8 tracking-tighter text-white">
                        Design <br /> Philosophy
                    </h2>
                    <p className="text-xl md:text-2xl text-blue-400 font-light leading-relaxed">
                        My approach to building mechanics, engineering prototypes, and architecting digital spaces.
                    </p>
                </div>

                <div className="lg:w-2/3 flex flex-col gap-16">
                    {PHILOSOPHY.map((item, idx) => (
                        <div key={idx} className="group relative">
                            {/* Decorative line */}
                            <div className="absolute top-0 -left-6 md:-left-12 w-1 h-full bg-blue-600/20 group-hover:bg-blue-500 transition-colors duration-500 rounded-full" />

                            <div className="flex items-baseline gap-4 mb-4">
                                <span className="font-mono text-lg font-bold text-blue-500/50 group-hover:text-blue-400 transition-colors">
                                    0{idx + 1}.
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold font-heading text-white tracking-tight">
                                    {item.title}
                                </h3>
                            </div>

                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light md:pl-10">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
