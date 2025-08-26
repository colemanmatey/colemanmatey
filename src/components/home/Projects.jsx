function Projects() {
	const projects = [
		{
			title: "E-Commerce Platform",
			description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
			technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
			image: "🛒",
			liveUrl: "#",
			githubUrl: "#"
		},
		{
			title: "Task Management App",
			description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
			technologies: ["React", "Express", "Socket.io", "PostgreSQL", "Material-UI"],
			image: "📋",
			liveUrl: "#",
			githubUrl: "#"
		},
		{
			title: "Weather Dashboard",
			description: "A responsive weather application that provides current conditions, forecasts, and weather maps using external APIs.",
			technologies: ["JavaScript", "Weather API", "Chart.js", "CSS3", "HTML5"],
			image: "🌤️",
			liveUrl: "#",
			githubUrl: "#"
		},
		{
			title: "Portfolio Website",
			description: "A modern, responsive portfolio website showcasing my work and skills. Built with React and deployed on GitHub Pages.",
			technologies: ["React", "Vite", "Tailwind CSS", "GitHub Pages"],
			image: "💼",
			liveUrl: "#",
			githubUrl: "#"
		}
	];

	return (
		<section id="projects" className="py-12 sm:py-16 md:py-20 px-4 bg-white">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Featured Projects</h2>
					<div className="w-24 h-1 bg-cyan-600 mx-auto mb-6 sm:mb-8"></div>
					<p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
						Here are some of my recent projects that showcase my skills and passion for development
					</p>
				</div>

				<div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project, index) => (
						<div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
							<div className="p-6 sm:p-8">
								<div className="text-3xl sm:text-4xl mb-4 text-center">{project.image}</div>
								<h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{project.title}</h3>
								<p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>
								
								<div className="mb-4 sm:mb-6">
									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech, techIndex) => (
											<span 
												key={techIndex}
												className="px-2 sm:px-3 py-1 bg-cyan-100 text-cyan-800 text-xs sm:text-sm rounded-full font-medium"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
								
								<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
									<a 
										href={project.liveUrl}
										className="flex-1 bg-cyan-600 text-white text-center py-2 sm:py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300 text-sm sm:text-base"
									>
										Live Demo
									</a>
									<a 
										href={project.githubUrl}
										className="flex-1 border-2 border-cyan-600 text-cyan-600 text-center py-2 sm:py-3 rounded-lg font-semibold hover:bg-cyan-600 hover:text-white transition-colors duration-300 text-sm sm:text-base"
									>
										GitHub
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
