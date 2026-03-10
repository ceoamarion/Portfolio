import React from 'react';
import { EXPERIMENTAL_PROJECTS } from '../data';

export default function ExperimentalSection() {
    return (
        <section id="xr" className="max-w-7xl mx-auto px-6 py-24 scroll-m-24 border-t border-white/5 bg-dark-900 rounded-[3rem] mt-24 mb-12 shadow-[0_-40px_100px_rgba(0,0,0,0.5)]">
            <div className="mb-20 text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading inline-block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-blue-600 tracking-tight">
                    Experimental XR & Interfaces
                </h2>
                <p className="mt-8 text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                    Exploring the future of human-computer interaction through BCI prototyping, spatial computing, and biometric feedback systems.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {EXPERIMENTAL_PROJECTS.map((project, idx) => (
                    <div
                        key={project.id}
                        className="flex flex-col gap-6 bg-dark-800/40 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-3xl relative group overflow-hidden hover:bg-dark-800/80 hover:border-emerald-500/30 transition-all duration-500 shadow-2xl"
                    >
                        {/* Ambient glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-600/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="h-72 rounded-2xl overflow-hidden bg-dark-900 relative shadow-inner border border-white/5">
                            {project.youtubeId ? (
                                <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&controls=0&start=${project.youtubeStart || 0}&playlist=${project.youtubeId}&rel=0&showinfo=0&modestbranding=1`}
                                        title={project.title}
                                        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 scale-[1.35] group-hover:scale-[1.4] filter brightness-[0.6] contrast-125 group-hover:brightness-[0.85] transition-all duration-1000"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media; picture-in-picture"
                                        tabIndex="-1"
                                    />
                                </div>
                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover filter brightness-[0.6] contrast-125 group-hover:scale-105 group-hover:brightness-[0.85] transition-all duration-700"
                                />
                            )}
                        </div>

                        <div className="space-y-4 pt-6 relative z-10">
                            <h3 className="text-3xl font-bold font-heading text-white tracking-tight">
                                {project.title}
                            </h3>
                            <p className="text-xl text-emerald-400 font-medium leading-snug">
                                {project.hook}
                            </p>
                            <p className="text-lg text-gray-300 font-light leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto pt-8 border-t border-white/10 relative z-10 w-full">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 rounded-full"
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
