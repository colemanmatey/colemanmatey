import Button from "../common/Button";
import { ContactSocialIcons } from "../common/SocialIcons";

function Contact() {
	// Form fields array to avoid repetition
	const formFields = [
		{
			id: 'name',
			name: 'name',
			type: 'text',
			label: 'Name',
			placeholder: 'Your Name',
			required: true
		},
		{
			id: 'email',
			name: 'email',
			type: 'email',
			label: 'Email',
			placeholder: 'your.email@example.com',
			required: true
		},
		{
			id: 'subject',
			name: 'subject',
			type: 'text',
			label: 'Subject',
			placeholder: 'Project Inquiry',
			required: true
		}
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		alert("Thank you for your message! I'll get back to you soon.");
	};

	return (
		<section id="contact" className="py-16 sm:py-20 md:py-24 px-4 bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Get In Touch</h2>
					<div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
					<p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
						I'm always interested in new opportunities and exciting projects. Let's connect!
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					<div className="order-2 lg:order-1">
						<h3 className="text-2xl sm:text-3xl font-bold mb-6">Let's Work Together</h3>
						<p className="text-gray-300 mb-8 leading-relaxed text-lg">
							Whether you have a project in mind, want to collaborate, or just want to say hello, 
							I'd love to hear from you. Feel free to reach out through any of the channels below.
						</p>
						
						<ContactSocialIcons />
					</div>

					<div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 order-1 lg:order-2">
						<form onSubmit={handleSubmit} className="space-y-6">
							{formFields.map((field, index) => (
								<div key={index}>
									<label htmlFor={field.id} className="block text-base font-medium mb-2">{field.label}</label>
									<input 
										type={field.type}
										id={field.id}
										name={field.name}
										required={field.required}
										className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 text-base"
										placeholder={field.placeholder}
									/>
								</div>
							))}
							
							<div>
								<label htmlFor="message" className="block text-base font-medium mb-2">Message</label>
								<textarea 
									id="message" 
									name="message"
									rows="4"
									required
									className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 resize-none text-base"
									placeholder="Tell me about your project..."
								></textarea>
							</div>
							
							<Button 
								text="Send Message"
								style="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300 cursor-pointer text-base"
							/>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
