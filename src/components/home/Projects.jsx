function Projects() {
	const projects = [];

	return (
		<section id="projects" className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16 sm:mb-20">
					<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
						Featured Projects
					</h2>
					<div className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8"></div>
					<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
						Showcasing innovative solutions and cutting-edge development work that demonstrates 
						technical expertise and creative problem-solving
					</p>
				</div>

				{projects.length === 0 ? (
					<div className="max-w-4xl mx-auto">
						<div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-12 sm:p-16 text-center">
							<div className="relative mb-8">
								<div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
								<div className="relative text-7xl sm:text-8xl">🚀</div>
							</div>
							
							<h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
								Exciting Projects <span className="text-cyan-600">In Development</span>
							</h3>
							
							<p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
								I'm currently crafting innovative solutions and building exceptional digital experiences. 
								Each project represents a commitment to quality, innovation, and technical excellence.
							</p>
							
							<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
								<div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
									<div className="text-3xl mb-3">💡</div>
									<h4 className="font-semibold text-gray-800 mb-2">Innovation</h4>
									<p className="text-sm text-gray-600">Cutting-edge solutions</p>
								</div>
								<div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
									<div className="text-3xl mb-3">⚡</div>
									<h4 className="font-semibold text-gray-800 mb-2">Performance</h4>
									<p className="text-sm text-gray-600">Optimized & efficient</p>
								</div>
								<div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
									<div className="text-3xl mb-3">🎯</div>
									<h4 className="font-semibold text-gray-800 mb-2">Precision</h4>
									<p className="text-sm text-gray-600">Detail-oriented approach</p>
								</div>
							</div>
							
							<div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
								<span>Coming Soon</span>
								<div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
							</div>
						</div>
					</div>
				) : (
					<div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
								<div className="relative overflow-hidden">
									<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									<div className="p-8">
										<div className="text-4xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">
											{project.image}
										</div>
										<h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
											{project.title}
										</h3>
										<p className="text-gray-600 mb-6 leading-relaxed">
											{project.description}
										</p>
										
										<div className="mb-6">
											<div className="flex flex-wrap gap-2">
												{project.technologies.map((tech, techIndex) => (
													<span 
														key={techIndex}
														className="px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 text-sm rounded-full font-medium border border-cyan-200 hover:shadow-md transition-shadow duration-200"
													>
														{tech}
													</span>
												))}
											</div>
										</div>
										
										<div className="flex gap-4">
											<a 
												href={project.liveUrl}
												className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center py-3 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
											>
												Live Demo
											</a>
											<a 
												href={project.githubUrl}
												className="flex-1 border-2 border-cyan-600 text-cyan-600 text-center py-3 rounded-xl font-semibold hover:bg-cyan-600 hover:text-white transition-all duration-300 hover:scale-105"
											>
												GitHub
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}

export default Projects;
