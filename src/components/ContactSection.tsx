import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-16 lg:py-32 px-4 lg:px-6 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white snap-start">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="scroll-animate opacity-0 text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 uppercase tracking-wide">
            LET'S CONNECT
          </h2>
          <p className="scroll-animate opacity-0 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 lg:mb-12 leading-relaxed">
            I'm always interested in discussing new opportunities, innovative
            projects, or just connecting with fellow developers. Let's build
            something amazing together!
          </p>

          {/* Mobile-first button layout */}
          <div className="scroll-animate opacity-0 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6 items-center">
            <Button
              asChild
              className="w-full sm:w-auto bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-wide transition-all duration-300 transform hover:scale-105">
              <a
                href="mailto:mr.jamlamb@gmail.com"
                className="flex items-center justify-center">
                <Mail
                  className="mr-2 sm:mr-3"
                  size={18}
                  className="sm:w-5 sm:h-5"
                />
                Send me an email
              </a>
            </Button>

            <Button
              asChild
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-wide transition-all duration-300 transform hover:scale-105">
              <a href="#" className="flex items-center justify-center">
                <Linkedin
                  className="mr-2 sm:mr-3"
                  size={18}
                  className="sm:w-5 sm:h-5"
                />
                Connect on LinkedIn
              </a>
            </Button>

            <Button
              asChild
              className="w-full sm:w-auto bg-transparent text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-wide transition-all duration-300 transform hover:scale-105">
              <a href="#" className="flex items-center justify-center">
                <Github
                  className="mr-2 sm:mr-3"
                  size={18}
                  className="sm:w-5 sm:h-5"
                />
                View GitHub
              </a>
            </Button>
          </div>

          <div className="scroll-animate opacity-0 mt-8 sm:mt-12 lg:mt-16 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-lg uppercase tracking-wide">
              Ready to turn ideas into reality?
              <span className="text-orange-600 font-semibold">
                {" "}
                Send me a message!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
