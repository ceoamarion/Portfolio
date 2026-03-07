import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Work', href: '#work' },
    { name: 'XR/BCI', href: '#xr' },
    { name: 'Philosophy', href: '#philosophy' }
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-dark-900/80 backdrop-blur-lg border-b border-white/5 py-4 shadow-2xl shadow-black/50' : 'bg-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                <a href="#" className="font-heading font-extrabold text-2xl tracking-tighter text-white hover:text-blue-400 transition-colors">
                    Amarion<span className="text-emerald-400">.</span>
                </a>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold tracking-wide uppercase text-gray-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-6 py-2.5 rounded-full border border-white/20 text-sm font-bold uppercase tracking-wide text-white hover:bg-white hover:text-black transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white transition-transform active:scale-95"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-dark-800/95 backdrop-blur-xl border-b border-white/10 shadow-2xl md:hidden">
                    <div className="flex flex-col p-8 gap-6">
                        {NAV_LINKS.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-xl font-bold font-heading text-gray-300 hover:text-white tracking-tight"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 px-6 py-4 text-center rounded-xl bg-blue-600 text-white font-bold tracking-wide hover:bg-blue-500 transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
