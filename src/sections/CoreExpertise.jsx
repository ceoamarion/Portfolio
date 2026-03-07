import React from 'react';
import { SKILL_CATEGORIES } from '../data';

export default function CoreExpertise() {
    return (
        <section id="expertise" className="max-w-6xl mx-auto px-6 py-24 scroll-m-24 border-t border-white/5">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-heading">
                    Technical Arsenal
                </h2>
                <p className="mt-4 text-xl text-gray-400 max-w-2xl">
                    A focused overview of the tools and disciplines I use to build scalable gameplay mechanisms and experimental interfaces.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {SKILL_CATEGORIES.map((category, idx) => {
                    const IconWrapper = category.icon;
                    return (
                        <div
                            key={idx}
                            className="glass-panel p-8 group hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute -inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                                <IconWrapper size={24} />
                            </div>

                            <h3 className="text-2xl font-semibold text-white mb-6 font-heading">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-dark-700/50 border border-white/5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:border-blue-500/30 transition-colors"
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
