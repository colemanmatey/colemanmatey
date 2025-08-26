function About() {
	return (
		<section id="about" className="py-12 sm:py-16 md:py-20 px-4 bg-white">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
					<div className="w-24 h-1 bg-cyan-600 mx-auto mb-6 sm:mb-8"></div>
				</div>
				
				<div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
					<div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
						<p className="text-base sm:text-lg text-gray-600 leading-relaxed">
							I'm a passionate full-stack developer with a love for creating innovative web solutions. 
							My journey in tech started with curiosity and has evolved into a career focused on 
							building applications that make a difference.
						</p>
						<p className="text-base sm:text-lg text-gray-600 leading-relaxed">
							I specialize in modern web technologies including React, Node.js, and cloud platforms. 
							I believe in writing clean, maintainable code and creating user experiences that are 
							both beautiful and functional.
						</p>
						<p className="text-base sm:text-lg text-gray-600 leading-relaxed">
							When I'm not coding, you can find me exploring new technologies, contributing to 
							open-source projects, or sharing knowledge with the developer community.
						</p>
					</div>
					
					<div className="bg-gray-50 p-6 sm:p-8 rounded-xl order-1 lg:order-2">
						<h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Quick Facts</h3>
						<div className="space-y-3 sm:space-y-4">
							<div className="flex items-center">
								<div className="w-3 h-3 bg-cyan-600 rounded-full mr-4 flex-shrink-0"></div>
								<span className="text-gray-700 text-sm sm:text-base">Based in [Your Location]</span>
							</div>
							<div className="flex items-center">
								<div className="w-3 h-3 bg-cyan-600 rounded-full mr-4 flex-shrink-0"></div>
								<span className="text-gray-700 text-sm sm:text-base">Available for freelance work</span>
							</div>
							<div className="flex items-center">
								<div className="w-3 h-3 bg-cyan-600 rounded-full mr-4 flex-shrink-0"></div>
								<span className="text-gray-700 text-sm sm:text-base">Always learning new technologies</span>
							</div>
							<div className="flex items-center">
								<div className="w-3 h-3 bg-cyan-600 rounded-full mr-4 flex-shrink-0"></div>
								<span className="text-gray-700 text-sm sm:text-base">Open to collaboration</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
