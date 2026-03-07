import React from 'react';
import { EXPERIMENTAL_PROJECTS } from '../data';

export default function ExperimentalSection() {
    return (
        <section id="xr" className="max-w-6xl mx-auto px-6 py-24 scroll-m-24 border-t border-white/5 bg-gradient-to-b from-dark-900 to-dark-800">
            <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-heading inline-block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                    Experimental XR & Interfaces
                </h2>
                <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
                    Exploring the future of human-computer interaction through BCI prototyping, spatial computing, and biometric feedback systems.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {EXPERIMENTAL_PROJECTS.map((project, idx) => (
                    <div
                        key={project.id}
                        className="flex flex-col gap-6 glass-panel p-8 md:p-10 relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-64 rounded-xl overflow-hidden glass-panel relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover filter brightness-[0.7] contrast-125 group-hover:scale-105 transition-all duration-700"
                            />
                        </div>

                        <div className="space-y-4 pt-4 relative z-10">
                            <h3 className="text-2xl font-bold font-heading text-white">
                                {project.title}
                            </h3>
                            <p className="text-lg text-emerald-400 font-medium leading-snug">
                                {project.hook}
                            </p>
                            <p className="text-gray-400 font-light leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5 relative z-10">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 text-gray-300 rounded-md"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
