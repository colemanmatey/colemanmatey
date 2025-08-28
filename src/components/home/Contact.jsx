import { useState } from "react";
import emailjs from '@emailjs/browser';
import Button from "../common/Button";
import { ContactSocialIcons } from "../common/SocialIcons";

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

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

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const resetForm = () => {
		setFormData({
			name: '',
			email: '',
			subject: '',
			message: ''
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			// EmailJS configuration from environment variables
			const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
			const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
			const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
			const yourEmail = import.meta.env.VITE_YOUR_EMAIL;

			// Check if environment variables are set
			if (!serviceId || !templateId || !publicKey || !yourEmail) {
				throw new Error('EmailJS configuration missing. Please check your environment variables.');
			}

			// Prepare the email data
			const templateParams = {
				from_name: formData.name,
				from_email: formData.email,
				subject: formData.subject,
				message: formData.message,
				to_email: yourEmail,
				reply_to: formData.email,
			};

			// Send email using EmailJS
			await emailjs.send(serviceId, templateId, templateParams, publicKey);
			
			setSubmitStatus('success');
			resetForm();
			
		} catch (error) {
			console.error('Email sending failed:', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
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
						{/* Success Message */}
						{submitStatus === 'success' && (
							<div className="mb-6 p-4 bg-green-600 bg-opacity-20 border border-green-500 rounded-lg">
								<div className="flex items-center">
									<div className="text-green-400 mr-3">✓</div>
									<div>
										<h4 className="text-green-400 font-semibold">Message Sent Successfully!</h4>
										<p className="text-green-300 text-sm">Thank you for reaching out. I'll get back to you soon!</p>
									</div>
								</div>
							</div>
						)}

						{/* Error Message */}
						{submitStatus === 'error' && (
							<div className="mb-6 p-4 bg-red-600 bg-opacity-20 border border-red-500 rounded-lg">
								<div className="flex items-center">
									<div className="text-red-400 mr-3">✗</div>
									<div>
										<h4 className="text-red-400 font-semibold">Error Sending Message</h4>
										<p className="text-red-300 text-sm">Please try again or contact me through social media.</p>
									</div>
								</div>
							</div>
						)}

						<form onSubmit={handleSubmit} className="space-y-6">
							{formFields.map((field, index) => (
								<div key={index}>
									<label htmlFor={field.id} className="block text-base font-medium mb-2">{field.label}</label>
									<input 
										type={field.type}
										id={field.id}
										name={field.name}
										value={formData[field.name]}
										onChange={handleInputChange}
										required={field.required}
										disabled={isSubmitting}
										className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 text-base disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
										placeholder={field.placeholder}
									/>
								</div>
							))}
							
							<div>
								<label htmlFor="message" className="block text-base font-medium mb-2">Message</label>
								<textarea 
									id="message" 
									name="message"
									value={formData.message}
									onChange={handleInputChange}
									rows="4"
									required
									disabled={isSubmitting}
									className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 resize-none text-base disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
									placeholder="Tell me about your project..."
								></textarea>
							</div>
							
							<Button 
								text={isSubmitting ? "Sending..." : "Send Message"}
								type="submit"
								disabled={isSubmitting}
								style={`w-full py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer text-base ${
									isSubmitting 
										? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
										: 'bg-cyan-600 text-white hover:bg-cyan-700 hover:scale-105'
								}`}
							/>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
