import Button from "../common/Button";

function Contact() {
	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		alert("Thank you for your message! I'll get back to you soon.");
	};

	return (
		<section id="contact" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-900 text-white">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
					<div className="w-24 h-1 bg-cyan-400 mx-auto mb-6 sm:mb-8"></div>
					<p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
						I'm always interested in new opportunities and exciting projects. Let's connect!
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
					<div className="order-2 lg:order-1">
						<h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Let's Work Together</h3>
						<p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
							Whether you have a project in mind, want to collaborate, or just want to say hello, 
							I'd love to hear from you. Feel free to reach out through any of the channels below.
						</p>
						
						<div className="space-y-4 sm:space-y-6">
							<div className="flex items-center">
								<div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
									<span className="text-lg sm:text-xl">📧</span>
								</div>
								<div>
									<h4 className="font-semibold text-sm sm:text-base">Email</h4>
									<p className="text-gray-300 text-sm sm:text-base">your.email@example.com</p>
								</div>
							</div>
							
							<div className="flex items-center">
								<div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
									<span className="text-lg sm:text-xl">💼</span>
								</div>
								<div>
									<h4 className="font-semibold text-sm sm:text-base">LinkedIn</h4>
									<p className="text-gray-300 text-sm sm:text-base">linkedin.com/in/coleman-matey</p>
								</div>
							</div>
							
							<div className="flex items-center">
								<div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
									<span className="text-lg sm:text-xl">💻</span>
								</div>
								<div>
									<h4 className="font-semibold text-sm sm:text-base">GitHub</h4>
									<p className="text-gray-300 text-sm sm:text-base">github.com/colemanmatey</p>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-gray-800 p-6 sm:p-8 rounded-xl order-1 lg:order-2">
						<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
								<input 
									type="text" 
									id="name" 
									name="name"
									required
									className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
									placeholder="Your Name"
								/>
							</div>
							
							<div>
								<label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
								<input 
									type="email" 
									id="email" 
									name="email"
									required
									className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
									placeholder="your.email@example.com"
								/>
							</div>
							
							<div>
								<label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
								<input 
									type="text" 
									id="subject" 
									name="subject"
									required
									className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
									placeholder="Project Inquiry"
								/>
							</div>
							
							<div>
								<label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
								<textarea 
									id="message" 
									name="message"
									rows="4"
									required
									className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 resize-none text-sm sm:text-base"
									placeholder="Tell me about your project..."
								></textarea>
							</div>
							
							<Button 
								text="Send Message"
								style="w-full bg-cyan-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300 cursor-pointer text-sm sm:text-base"
							/>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
