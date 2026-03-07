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
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

                <a href="#" className="font-heading font-bold text-xl tracking-tight text-white hover:text-blue-400 transition-colors">
                    Amarion<span className="text-blue-500">.</span>
                </a>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-5 py-2 rounded-full border border-white/10 text-sm font-medium text-white hover:bg-white hover:text-black transition-all"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-[#12121a] border-b border-white/10 shadow-2xl md:hidden">
                    <div className="flex flex-col p-6 gap-4">
                        {NAV_LINKS.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-gray-300 hover:text-white"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 px-6 py-3 text-center rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
