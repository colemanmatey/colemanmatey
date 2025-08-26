import Button from "../common/Button";

function Hero() {
	const scrollToAbout = () => {
		document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className="relative bg-gradient-to-br from-cyan-800 via-cyan-700 to-blue-800 text-white py-16 sm:py-24 md:py-32 px-4 min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
				<div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
				<div className="absolute bottom-10 sm:bottom-20 left-1/2 w-56 sm:w-80 h-56 sm:h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
			</div>
			
			<div className="relative z-10 text-center max-w-4xl mx-auto w-full">
				{/* Avatar placeholder */}
				<div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white border-opacity-30">
					<span className="text-2xl sm:text-4xl font-bold text-white">CM</span>
				</div>
				
				<h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent animate-fade-in leading-tight">
					Hi, I'm Coleman Matey
				</h1>
				<p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-cyan-100 font-light px-4">
					Full Stack Developer & Problem Solver
				</p>
				<p className="text-base sm:text-lg mb-6 sm:mb-8 text-cyan-200 max-w-2xl mx-auto leading-relaxed px-4">
					I create beautiful, functional web applications that solve real-world problems. 
					Passionate about clean code, user experience, and continuous learning.
				</p>
				
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
					<Button 
						text="Explore My Work" 
						style="w-full sm:w-auto bg-white text-cyan-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-cyan-100 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer text-center"
						onClick={scrollToAbout}
					/>
					<Button 
						text="Get In Touch" 
						style="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-cyan-900 hover:scale-105 transition-all duration-300 cursor-pointer text-center"
						onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
					/>
				</div>
			</div>
		</div>
	);
}

export default Hero;
