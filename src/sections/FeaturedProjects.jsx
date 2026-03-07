import React from 'react';
import { PROJECTS } from '../data';
import { ExternalLink, Play } from 'lucide-react';

export default function FeaturedProjects() {
    return (
        <section id="work" className="max-w-6xl mx-auto px-6 py-24 scroll-m-24 border-t border-white/5">
            <div className="mb-20 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold font-heading">
                    Featured Engineering Work
                </h2>
                <p className="mt-4 text-xl text-gray-400 max-w-3xl leading-relaxed">
                    Case studies on gameplay systems, mechanics prototyping, and applied interactions.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-32">
                {PROJECTS.map((project, idx) => (
                    <article
                        key={project.id}
                        className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                            }`}
                    >
                        {/* Visual Side */}
                        <div className="w-full lg:w-1/2 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <figure className="relative rounded-2xl overflow-hidden glass-panel aspect-video md:aspect-[4/3] group-hover:border-white/10 transition-colors">
                                <img
                                    src={project.image}
                                    alt={`${project.title} Screenshot`}
                                    className="w-full h-full object-cover filter brightness-[0.8] contrast-125 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-80" />

                                {/* Placeholder play button for missing videos */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white cursor-pointer hover:bg-white/20 transition-colors">
                                        <Play className="fill-white" size={32} />
                                    </div>
                                </div>
                            </figure>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-4xl font-bold font-heading text-white tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-xl text-blue-400 font-medium leading-snug">
                                    {project.hook}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 text-sm font-mono">
                                <span className="text-gray-300 px-3 py-1 bg-white/5 rounded-md hidden md:inline-block">Role:</span>
                                <span className="text-emerald-400 px-3 py-1 bg-white/5 rounded-md">{project.role}</span>
                            </div>

                            <p className="text-lg text-gray-400 leading-relaxed font-light">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-400 border border-white/10 rounded-full"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>

                            {project.caseStudy && (
                                <div className="w-full mt-4 glass-panel p-6 bg-dark-800/40">
                                    <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-semibold">Technical Highlights</h4>
                                    <ul className="space-y-3 text-sm md:text-base text-gray-300">
                                        <li className="flex gap-4">
                                            <strong className="text-white min-w-24 shrink-0">Systems:</strong>
                                            <span className="font-light">{project.caseStudy.systems}</span>
                                        </li>
                                        <li className="flex gap-4">
                                            <strong className="text-white min-w-24 shrink-0">Challenge:</strong>
                                            <span className="font-light">{project.caseStudy.challenge}</span>
                                        </li>
                                    </ul>
                                </div>
                            )}

                            <div className="pt-4">
                                <a
                                    href="#"
                                    className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
                                >
                                    View Details
                                    <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
