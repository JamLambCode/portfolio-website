import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Cloud } from "lucide-react";

interface AboutSectionProps {
  scrollY: number;
  skills: string[];
}

const AboutSection = ({ scrollY, skills }: AboutSectionProps) => {
  return (
    <section
      id="about"
      className="py-16 lg:py-32 px-4 lg:px-6 bg-gray-50 dark:bg-gray-800 transition-colors snap-start">
      <div
        className="container mx-auto"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        <div className="max-w-6xl mx-auto">
          {/* Mobile-first grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center mb-12 lg:mb-20">
            <div className="order-2 lg:order-1">
              <h2 className="scroll-animate opacity-0 text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 lg:mb-8 leading-tight uppercase tracking-wide">
                EXPERTISE ACROSS FULL-STACK & AI
              </h2>
              <p className="scroll-animate opacity-0 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Building scalable systems and leading digital transformation at
                Velour Medical. Passionate about machine learning, cloud
                infrastructure, and creating meaningful impact through code.
              </p>
            </div>

            {/* About Image - Responsive and mobile-friendly */}
            <div className="order-1 lg:order-2 w-full h-48 sm:h-64 lg:h-96 overflow-hidden rounded-lg">
              <img
                src="/images/about.jpeg"
                alt="About Jakob Lamb"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: "center 70%",
                  transform: "scale(0.9)",
                }}
              />
            </div>
          </div>

          {/* Expertise Cards - Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
            <Card className="scroll-animate opacity-0 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900 dark:text-white text-sm sm:text-base lg:text-lg">
                  <Code
                    className="mr-2 sm:mr-3 text-orange-600 sm:w-6 sm:h-6"
                    size={20}
                  />
                  Full-Stack Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Experienced in building scalable web applications with modern
                  technologies like React, Node.js, and cloud platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="scroll-animate opacity-0 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900 dark:text-white text-sm sm:text-base lg:text-lg">
                  <Brain
                    className="mr-2 sm:mr-3 text-orange-600 sm:w-6 sm:h-6"
                    size={20}
                  />
                  Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Specialized in NLP and recommendation systems, with hands-on
                  experience in TF-IDF, Word2Vec, and DistilBERT.
                </p>
              </CardContent>
            </Card>

            <Card className="scroll-animate opacity-0 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-shadow sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900 dark:text-white text-sm sm:text-base lg:text-lg">
                  <Cloud
                    className="mr-2 sm:mr-3 text-orange-600 sm:w-6 sm:h-6"
                    size={20}
                  />
                  Cloud Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Led backend migrations to Google Cloud Platform, ensuring
                  scalability and security for enterprise applications.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="text-center">
            <h3 className="scroll-animate opacity-0 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 lg:mb-8 uppercase tracking-wide">
              TECHNICAL SKILLS
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-5xl mx-auto">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  className="scroll-animate opacity-0 bg-orange-400 hover:bg-orange-600 text-white transition-colors px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
