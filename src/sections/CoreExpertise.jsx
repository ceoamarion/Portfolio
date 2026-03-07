import React from 'react';
import { SKILL_CATEGORIES } from '../data';

export default function CoreExpertise() {
    return (
        <section id="expertise" className="max-w-7xl mx-auto px-6 py-24 scroll-m-24 border-t border-white/5">
            <div className="mb-20 max-w-3xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white">
                    Technical Arsenal
                </h2>
                <p className="mt-6 text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                    A focused overview of the tools and disciplines I use to architect scalable gameplay logic and experimental interfaces.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 gap-6">
                {SKILL_CATEGORIES.map((category, idx) => {
                    const IconWrapper = category.icon;
                    return (
                        <div
                            key={idx}
                            className="bg-dark-800/40 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-3xl group hover:bg-dark-800/80 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden shadow-2xl"
                        >
                            {/* Ambient glow effect on hover */}
                            <div className="absolute top-0 right-0 p-32 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors duration-700" />
                            <div className="absolute -inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-white/5 rounded-2xl flex items-center justify-center mb-8 text-blue-400 group-hover:scale-110 transition-transform duration-500">
                                <IconWrapper size={28} />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 font-heading tracking-tight">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3 relative z-10">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-dark-900/50 border border-white/5 rounded-xl text-sm md:text-base font-medium text-gray-300 group-hover:border-white/10 hover:!border-blue-400 hover:text-white transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
