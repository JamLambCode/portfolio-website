import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800 z-50 transition-colors">
      <div className="container mx-auto px-4 lg:px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
            Jakob Lamber
          </h1>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
              About
            </a>
            <a
              href="#experience"
              className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
              Contact
            </a>
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
