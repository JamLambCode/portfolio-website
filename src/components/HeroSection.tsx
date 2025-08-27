import { Mail, Linkedin, Github, ArrowDown } from "lucide-react";

interface HeroSectionProps {
  scrollY: number;
}

const HeroSection = ({ scrollY }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start">
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      {/* Hero Image - Responsive and mobile-friendly */}
      <div className="absolute right-2 sm:right-4 lg:right-10 top-1/2 transform -translate-y-1/2 translate-y-2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 block">
        <img
          src="/images/about.jpeg"
          alt="Jakob Lamber"
          className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white dark:border-gray-800"
          style={{
            transform: `translateY(${scrollY * 0.3}px) translateY(-50%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Responsive text sizing for mobile */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            <span className="block">EMERGING</span>
            <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              DEVELOPER
            </span>
            <span className="block text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-gray-600 dark:text-gray-400">
              & CREATOR
            </span>
          </h1>

          <div className="mt-6 sm:mt-8 lg:mt-12 mb-4 sm:mb-6 lg:mb-8">
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-2">
              SOFTWARE ENGINEER
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400">
              Computer Science Graduate, NYU '25
            </p>
          </div>

          <div className="flex justify-center space-x-4 sm:space-x-6 mt-6 sm:mt-8 lg:mt-16">
            <a
              href="mailto:lamber.jakob@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/jakob-lamber/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://github.com/JamLambCode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown
          className="text-gray-400 dark:text-gray-500 sm:w-6 sm:h-6"
          size={20}
        />
      </div>
    </section>
  );
};

export default HeroSection;
