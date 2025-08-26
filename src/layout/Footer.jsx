
function Footer() {
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
                            <li>
                                <button 
                                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                                >
                                    Projects
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect</h3>
                        <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
                            <a 
                                href="https://github.com/colemanmatey" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300 text-sm sm:text-base"
                            >
                                💻
                            </a>
                            <a 
                                href="https://linkedin.com/in/coleman-matey" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300 text-sm sm:text-base"
                            >
                                💼
                            </a>
                            <a 
                                href="mailto:your.email@example.com"
                                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300 text-sm sm:text-base"
                            >
                                📧
                            </a>
                        </div>
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
