import { useEffect, useState } from 'react';

function Projects() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let mounted = true;

		const normalize = (p) => ({
			title: p.title || p.name || 'Untitled Project',
			description: p.description || p.summary || '',
			technologies: Array.isArray(p.technologies)
				? p.technologies
				: Array.isArray(p.tech)
				? p.tech
				: Array.isArray(p.stack)
				? p.stack
				: [],
			liveUrl: p.liveUrl || p.url || p.link || '#',
			githubUrl: p.githubUrl || p.repo || p.github || '#',
			image: p.image || p.icon || '🔧',
			status: p.status || p.state || '',
			category: p.category || p.type || '',
		});

		async function load() {
			try {
				const API_URL = import.meta.env.VITE_API_URL;
				const API_VERSION = import.meta.env.VITE_API_VERSION

				if (!API_URL) {
				console.error('API URL is not defined in environment variables');
				}


				const res = await fetch(`${API_URL}/${API_VERSION}/projects`, { cache: 'no-cache' });
				console.log('API Response status:', res.status, res.ok);
				if (!res.ok) {
					console.error('API request failed with status', res.status);
					return;
				}

				const ct = (res.headers.get('content-type') || '').toLowerCase();
				if (!ct.includes('application/json')) {
					console.error('Invalid content type:', ct);
					return;
				}

				const json = await res.json();
				console.log('API response data:', json);
				const data = Array.isArray(json)
					? json
					: Array.isArray(json.projects)
					? json.projects
					: Array.isArray(json.data)
					? json.data
					: [];

				console.log('Normalized data:', data);
				if (data.length > 0 && mounted) {
					setProjects(data.map(normalize));
				}
			} catch (err) {
				console.error('Failed to load projects', err);
			} finally {
				if (mounted) setLoading(false);
			}
		}

		load();
		return () => {
			mounted = false;
		};
	}, []);

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
									{project.status ? (
										<span className="absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-cyan-50 text-cyan-700 border border-cyan-100">
											{project.status}
										</span>
									) : null}
									{project.category ? (
										<div className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">
											{project.category}
										</div>
									) : null}
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
										
										<a 
											href={project.githubUrl}
											className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
										>
											GitHub
										</a>
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
