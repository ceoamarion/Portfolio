import React from 'react';
import { PROJECTS } from '../data';
import { ExternalLink, Play, Github, Code2 } from 'lucide-react';

export default function FeaturedProjects() {
    return (
        <section id="work" className="max-w-7xl mx-auto px-6 py-24 scroll-m-24">
            <div className="mb-24 space-y-6 max-w-3xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white">
                    Featured Engineering Work
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                    Deep dives into gameplay systems, architectural mechanics, and applied spatial interactions.
                </p>
            </div>

            <div className="space-y-40">
                {PROJECTS.map((project, idx) => (
                    <article
                        key={project.id}
                        className={`group flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                            }`}
                    >
                        {/* Visual Side */}
                        <div className="w-full lg:w-1/2 relative">
                            {/* Decorative ambient glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-emerald-600/30 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <figure className="relative rounded-3xl overflow-hidden bg-dark-800 border border-white/10 shadow-2xl aspect-video md:aspect-[4/3] group-hover:border-white/20 transition-all duration-500">
                                <img
                                    src={project.image}
                                    alt={`Screenshot: ${project.title}`}
                                    className="w-full h-full object-cover filter brightness-75 contrast-125 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                                />
                                {/* subtle vignette */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent opacity-90" />

                                {/* Placeholder Video play overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="p-5 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/20 hover:scale-110 transition-all shadow-xl">
                                        <Play className="fill-white" size={28} />
                                    </button>
                                </div>
                            </figure>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-8">

                            <div className="space-y-3 w-full">
                                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                                    <h3 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-4 py-1.5 rounded-full border border-emerald-400/20">
                                        {project.role}
                                    </span>
                                </div>
                                <p className="text-xl md:text-2xl text-blue-400 font-medium leading-snug pt-2">
                                    {project.hook}
                                </p>
                            </div>

                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 w-full">
                                {project.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-300 border border-white/10 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>

                            {project.caseStudy && (
                                <div className="w-full mt-6 bg-dark-800/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden group-hover:border-white/10 transition-colors">
                                    {/* subtle accent line */}
                                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-600/50" />

                                    <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-5 font-bold flex items-center gap-2">
                                        <Code2 size={16} /> Technical Architecture
                                    </h4>

                                    <ul className="space-y-5 text-sm md:text-base text-gray-300">
                                        <li className="flex flex-col md:flex-row gap-2 md:gap-6">
                                            <strong className="text-white min-w-28 shrink-0 font-semibold tracking-wide uppercase text-xs pt-1">The Goal:</strong>
                                            <span className="font-light leading-relaxed text-gray-300">{project.caseStudy.goal}</span>
                                        </li>
                                        <li className="flex flex-col md:flex-row gap-2 md:gap-6">
                                            <strong className="text-white min-w-28 shrink-0 font-semibold tracking-wide uppercase text-xs pt-1">Systems:</strong>
                                            <span className="font-light leading-relaxed text-gray-300">{project.caseStudy.systems}</span>
                                        </li>
                                        <li className="flex flex-col md:flex-row gap-2 md:gap-6">
                                            <strong className="text-white min-w-28 shrink-0 font-semibold tracking-wide uppercase text-xs pt-1">Challenge:</strong>
                                            <span className="font-light leading-relaxed text-blue-100">{project.caseStudy.challenge}</span>
                                        </li>
                                    </ul>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-4 pt-4 w-full">
                                <a
                                    href="#"
                                    className="flex-1 md:flex-none justify-center group flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                                >
                                    Read Case Study
                                    <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                                <a
                                    href="#"
                                    className="flex-1 md:flex-none justify-center group flex items-center gap-2 px-8 py-4 bg-dark-800 border border-white/10 hover:bg-dark-700 hover:border-white/20 text-white font-semibold rounded-xl transition-all"
                                >
                                    <Github size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
