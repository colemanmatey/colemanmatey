
import { useState } from 'react';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Navigation items array to avoid repetition
    const navItems = [
        { label: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
        { label: 'About', action: () => scrollToSection('about') },
        { label: 'Skills', action: () => scrollToSection('skills') },
        { label: 'Projects', action: () => scrollToSection('projects') },
        { label: 'Contact', action: () => scrollToSection('contact') }
    ];

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Close menu after clicking
    };

    const handleNavClick = (action) => {
        action();
        setIsMenuOpen(false); // Close mobile menu after clicking
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex text-base gap-8 nav-links">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <button 
                            onClick={item.action}
                            className="hover:text-cyan-600 transition-colors duration-300 font-medium cursor-pointer"
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <button 
                onClick={toggleMenu}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 cursor-pointer"
                aria-label="Toggle menu"
            >
                <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Mobile Navigation Menu */}
            <div className={`absolute top-12 right-0 bg-white shadow-lg rounded-lg border border-gray-200 py-4 px-6 min-w-48 transform transition-all duration-300 md:hidden ${
                isMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }`}>
                <ul className="space-y-4">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <button 
                                onClick={() => handleNavClick(item.action)}
                                className="block w-full text-left hover:text-cyan-600 transition-colors duration-300 font-medium py-2 cursor-pointer text-base"
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Nav
