
import { FooterSocialIcons } from "../components/common/SocialIcons";

function Footer() {
    // Quick links array to avoid repetition
    const quickLinks = [
        { label: 'About', sectionId: 'about' },
        { label: 'Projects', sectionId: 'projects' },
        { label: 'Contact', sectionId: 'contact' }
    ];

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <div className="text-center sm:text-left">
                        <div className='text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex justify-center sm:justify-start'>
                            <span className='bg-cyan-600 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-l-lg'>C</span>
                            <span className='bg-gray-700 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-r-lg'>M</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                            Building beautiful, functional web applications with passion and precision.
                        </p>
                    </div>
                    
                    <div className="text-center sm:text-left">
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
                        <ul className="space-y-1 sm:space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <button 
                                        onClick={() => scrollToSection(link.sectionId)}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect</h3>
                        <FooterSocialIcons />
                    </div>
                </div>
                
                <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
                    <p className="text-gray-400 text-sm sm:text-base">
                        &copy; Copyright 2025 - Coleman Matey. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
