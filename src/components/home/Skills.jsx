function Skills() {
	const skillCategories = [
		{
			title: "Frontend",
			skills: [
				{ name: "React", level: 90 },
				{ name: "JavaScript", level: 85 },
				{ name: "TypeScript", level: 80 },
				{ name: "Tailwind CSS", level: 85 },
				{ name: "HTML/CSS", level: 90 }
			]
		},
		{
			title: "Backend",
			skills: [
				{ name: "Node.js", level: 80 },
				{ name: "Express", level: 75 },
				{ name: "Python", level: 70 },
				{ name: "REST APIs", level: 85 },
				{ name: "GraphQL", level: 65 }
			]
		},
		{
			title: "Tools & Others",
			skills: [
				{ name: "Git", level: 85 },
				{ name: "Docker", level: 70 },
				{ name: "AWS", level: 65 },
				{ name: "MongoDB", level: 75 },
				{ name: "PostgreSQL", level: 70 }
			]
		}
	];

	return (
		<section id="skills" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
					<div className="w-24 h-1 bg-cyan-600 mx-auto mb-6 sm:mb-8"></div>
					<p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
						Here are the technologies and tools I work with to bring ideas to life
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{skillCategories.map((category, index) => (
						<div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
							<h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">{category.title}</h3>
							<div className="space-y-3 sm:space-y-4">
								{category.skills.map((skill, skillIndex) => (
									<div key={skillIndex}>
										<div className="flex justify-between mb-2">
											<span className="text-gray-700 font-medium text-sm sm:text-base">{skill.name}</span>
											<span className="text-gray-500 text-xs sm:text-sm">{skill.level}%</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2">
											<div 
												className="bg-gradient-to-r from-cyan-600 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
												style={{ width: `${skill.level}%` }}
											></div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
