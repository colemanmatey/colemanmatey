function About() {
	// Quick facts array to avoid repetition
	const quickFacts = [
		'Based in Waterloo, Ontario, CA',
		'Available for freelance work',
		'Always learning new technologies',
		'Open to collaboration'
	];

	return (
		<section id="about" className="py-20 sm:py-24 md:py-32 px-4 bg-white min-h-screen flex items-center">
			<div className="max-w-6xl mx-auto w-full">
				<div className="text-center mb-16">
					<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Me</h2>
					<div className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8"></div>
				</div>
				
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6 order-2 lg:order-1">
						<p className="text-lg text-gray-600 leading-relaxed">
							I'm a passionate full-stack developer with a love for creating innovative web solutions. 
							My journey in tech started with curiosity and has evolved into a career focused on 
							building applications that make a difference.
						</p>
						<p className="text-lg text-gray-600 leading-relaxed">
							I specialize in modern web technologies including React, Node.js, and cloud platforms. 
							I believe in writing clean, maintainable code and creating user experiences that are 
							both beautiful and functional.
						</p>
						<p className="text-lg text-gray-600 leading-relaxed">
							When I'm not coding, you can find me exploring new technologies, contributing to 
							open-source projects, or sharing knowledge with the developer community.
						</p>
					</div>
					
					<div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 order-1 lg:order-2">
						<h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
						<div className="space-y-4">
							{quickFacts.map((fact, index) => (
								<div key={index} className="flex items-center">
									<div className="w-3 h-3 bg-cyan-600 rounded-full mr-4 flex-shrink-0"></div>
									<span className="text-gray-700 text-base">{fact}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
