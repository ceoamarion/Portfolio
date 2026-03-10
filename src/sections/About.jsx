import React from 'react';
import { ABOUT_DATA } from '../data';

export default function About() {
    return (
        <section id="about" className="max-w-7xl mx-auto px-6 py-32 scroll-m-20 border-t border-white/5 relative">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="flex flex-col lg:flex-row gap-16 relative z-10">

                <div className="lg:w-1/3">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading mb-6 tracking-tighter text-white">
                        {ABOUT_DATA.title}
                    </h2>
                    <div className="h-1 w-20 bg-emerald-500 rounded-full mb-8"></div>
                    <p className="text-emerald-400 font-bold tracking-wide uppercase text-sm mb-6">Bridging Design & Engineering</p>
                </div>

                <div className="lg:w-2/3 space-y-8">
                    {ABOUT_DATA.paragraphs.map((paragraph, idx) => (
                        <p key={idx} className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                            {paragraph}
                        </p>
                    ))}

                    <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-dark-800/40 border border-white/5 rounded-2xl relative overflow-hidden group">
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            <h4 className="text-white font-bold mb-2">Architect</h4>
                            <p className="text-sm text-gray-400">Building scalable systems that empower gameplay.</p>
                        </div>
                        <div className="p-6 bg-dark-800/40 border border-white/5 rounded-2xl relative overflow-hidden group">
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            <h4 className="text-white font-bold mb-2">Prototype</h4>
                            <p className="text-sm text-gray-400">Validating mechanics through rapid iteration.</p>
                        </div>
                        <div className="p-6 bg-dark-800/40 border border-white/5 rounded-2xl relative overflow-hidden group">
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            <h4 className="text-white font-bold mb-2">Evolve</h4>
                            <p className="text-sm text-gray-400">Exploring future-facing inputs like BCI and Spatial Computing.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
