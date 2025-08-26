
import { useState } from 'react';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Close menu after clicking
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex text-md gap-7 nav-links">
                <li>
                    <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="hover:text-cyan-600 transition-colors duration-300 font-medium"
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => scrollToSection('about')}
                        className="hover:text-cyan-600 transition-colors duration-300 font-medium"
                    >
                        About
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => scrollToSection('skills')}
                        className="hover:text-cyan-600 transition-colors duration-300 font-medium"
                    >
                        Skills
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => scrollToSection('projects')}
                        className="hover:text-cyan-600 transition-colors duration-300 font-medium"
                    >
                        Projects
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => scrollToSection('contact')}
                        className="hover:text-cyan-600 transition-colors duration-300 font-medium"
                    >
                        Contact
                    </button>
                </li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
                onClick={toggleMenu}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
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
                    <li>
                        <button 
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                setIsMenuOpen(false);
                            }}
                            className="block w-full text-left hover:text-cyan-600 transition-colors duration-300 font-medium py-2"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('about')}
                            className="block w-full text-left hover:text-cyan-600 transition-colors duration-300 font-medium py-2"
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('skills')}
                            className="block w-full text-left hover:text-cyan-600 transition-colors duration-300 font-medium py-2"
                        >
                            Skills
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('projects')}
                            className="block w-full text-left hover:text-cyan-600 transition-colors duration-300 font-medium py-2"
                        >
                            Projects
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('contact')}
                            className="block w-full text-left hover:text-cyan-600 transition-colors duration-300 font-medium py-2"
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
