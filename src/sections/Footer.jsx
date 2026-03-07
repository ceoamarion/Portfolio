import React from 'react';
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="border-t border-white/10 bg-dark-900 pt-32 pb-16 scroll-m-24 relative overflow-hidden">

            {/* Background flare */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold font-heading mb-8">
                    Interested in working together? <br />
                    <span className="text-blue-500">Let’s build something ambitious.</span>
                </h2>

                <p className="text-xl text-gray-400 font-light mb-16">
                    I am always open to discussing technical design roles, prototyping challenges, and XR experimentation.
                </p>

                <a
                    href="mailto:ceoamarion@gmail.com"
                    className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors text-lg group"
                >
                    <Mail size={24} />
                    ceoamarion@gmail.com
                    <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-50" />
                </a>

                <div className="flex flex-wrap items-center justify-center gap-8 mt-24 pt-16 border-t border-white/5">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                        <Github size={20} />
                        <span>GitHub</span>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                        <Linkedin size={20} />
                        <span>LinkedIn</span>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                        <FileText size={20} />
                        <span>Resume (PDF)</span>
                    </a>
                </div>

                <div className="mt-16 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p>© {new Date().getFullYear()} Amarion Anderson. All rights reserved.</p>
                    <div className="flex gap-4">
                        <span>Built with React & Vite</span>
                        <span>•</span>
                        <span>Designed for the Future</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
