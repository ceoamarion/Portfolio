import React from 'react';
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="border-t border-white/10 bg-dark-900 pt-32 pb-16 scroll-m-24 relative overflow-hidden">

            {/* Background flare */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-5xl md:text-7xl font-extrabold font-heading mb-10 tracking-tight">
                    Interested in working together? <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Let’s build something ambitious.</span>
                </h2>

                <p className="text-xl md:text-2xl text-gray-400 font-light mb-16 max-w-3xl mx-auto leading-relaxed">
                    I am actively seeking roles as a Technical Designer, Systems Prototyper, or XR Developer. Open to discussing ambitious technical challenges and game logic architectures.
                </p>

                <a
                    href="mailto:ceoamarion@gmail.com"
                    className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-bold rounded-full hover:bg-gray-200 hover:scale-105 transition-all text-xl group shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                >
                    <Mail size={26} />
                    ceoamarion@gmail.com
                    <ArrowUpRight size={26} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-70" />
                </a>

                <div className="flex flex-wrap items-center justify-center gap-10 mt-32 pt-16 border-t border-white/10">
                    <a href="https://github.com/ceoamarion" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-medium">
                        <Github size={22} />
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/amarion-anderson-0498b5205/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-medium">
                        <Linkedin size={22} />
                        <span>LinkedIn</span>
                    </a>
                    <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-medium">
                        <FileText size={22} />
                        <span>Resume (PDF)</span>
                    </a>
                </div>

                <div className="mt-16 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-6 font-medium">
                    <p>© {new Date().getFullYear()} Amarion Anderson. All rights reserved.</p>
                    <div className="flex gap-4">
                        <span className="text-gray-500">Built with React & Vite</span>
                        <span className="text-gray-700">•</span>
                        <span className="text-gray-500">Designed for Ambitious Systems</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
