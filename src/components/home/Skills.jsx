function Skills() {
	const skillCategories = [
		{
			title: "Languages",
			skills: [
				{
					name: "JavaScript",
					logo: (
						<img 
							className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
							alt="JavaScript"
						/>
					)
				},
				{
					name: "Python",
					logo: (
						<img 
							className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
							alt="Python"
						/>
					)
				},
				{
					name: "C#",
					logo: (
						<img 
							className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
							alt="C#"
						/>
					)
				},
				{
					name: "Dart",
					logo: (
						<img 
							className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
							alt="Dart"
						/>
					)
				}
			]
		},
		{
			title: "Frameworks",
			skills: [
                {
					name: "Tailwind CSS",
					logo: (
						<img 
							className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
							alt="Tailwind CSS"
						/>
					)
				},
				{
					name: "React",
					logo: (
						<img 
							className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
							alt="React"
						/>
					)
				},
				{
					name: "Node.js",
					logo: (
						<img 
							className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
							alt="Node.js"
						/>
					)
				},
                {
					name: "Express",
					logo: (
						<img 
							className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
							alt="Express"
						/>
					)
				},
				{
					name: "Django",
					logo: (
						<img 
							className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
							alt="Django"
						/>
					)
				},
				{
					name: "ASP.NET Core",
					logo: (
						<img 
							className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
							alt="ASP.NET Core"
						/>
					)
				}
			]
		},
		{
			title: "Databases and Tools",
			skills: [
				{
					name: "PostgreSQL",
					logo: (
						<img 
							className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
							alt="PostgreSQL"
						/>
					)
				},
				{
					name: "SQL Server",
					logo: (
						<img 
							className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
							alt="SQL Server"
						/>
					)
				},
				{
					name: "MongoDB",
					logo: (
						<img 
							className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
							alt="MongoDB"
						/>
					)
				},
				{
					name: "Git",
					logo: (
						<img 
							className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
							alt="Git"
						/>
					)
				},
				{
					name: "Docker",
					logo: (
						<img 
							className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
							alt="Docker"
						/>
					)
				},
				{
					name: "VS Code",
					logo: (
						<img 
							className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
							alt="VS Code"
						/>
					)
				}
			]
		}
	];

	return (
		<section id="skills" className="py-20 sm:py-24 md:py-32 px-4 bg-gray-50 min-h-screen flex items-center">
			<div className="max-w-7xl mx-auto w-full">
				<div className="text-center mb-16">
					<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
					<div className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8"></div>
					<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
						Here are the technologies and tools I work with to bring ideas to life
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-12">
					{skillCategories.map((category, index) => (
						<div key={index} className="text-center">
							<h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">{category.title}</h3>
							<div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center">
								{category.skills.map((skill, skillIndex) => (
									<div key={skillIndex} className="flex flex-col items-center group">
										<div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
											{skill.logo}
										</div>
										<span className="text-gray-700 font-medium text-sm text-center">{skill.name}</span>
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
