import React from 'react';
import { PHILOSOPHY } from '../data';

export default function DesignPhilosophy() {
    return (
        <section id="philosophy" className="max-w-6xl mx-auto px-6 py-24 scroll-m-24 border-t border-white/5">
            <div className="flex flex-col md:flex-row gap-16 lg:gap-24">

                <div className="md:w-1/3">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                        Design <br /> Philosophy
                    </h2>
                    <p className="text-xl text-gray-400 font-light">
                        My approach to building mechanics, prototypes, and digital spaces.
                    </p>
                </div>

                <div className="md:w-2/3 flex flex-col gap-12">
                    {PHILOSOPHY.map((item, idx) => (
                        <div key={idx} className="relative group">
                            <div className="absolute -left-6 top-1 font-mono text-sm text-blue-500/50 group-hover:text-blue-400 transition-colors">
                                0{idx + 1}
                            </div>
                            <h3 className="text-2xl font-semibold font-heading text-white mb-4 pl-0">
                                {item.title}
                            </h3>
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
