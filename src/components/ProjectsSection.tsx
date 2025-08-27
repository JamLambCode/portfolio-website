import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  tech: string[];
  period: string;
  image?: string;
}

interface ProjectsSectionProps {
  scrollY: number;
  projects: Project[];
}

const ProjectsSection = ({ scrollY, projects }: ProjectsSectionProps) => {
  return (
    <section
      id="projects"
      className="py-16 lg:py-32 px-4 lg:px-6 bg-gray-50 dark:bg-gray-800 transition-colors snap-start">
      <div
        className="container mx-auto"
        style={{ transform: `translateY(${scrollY * 0.03}px)` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="scroll-animate opacity-0 text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6 uppercase tracking-wide">
              FEATURED PROJECTS
            </h2>
            <p className="scroll-animate opacity-0 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 uppercase tracking-wider">
              Innovation through code and creativity
            </p>
          </div>

          {/* Mobile-first project grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div key={index} className="space-y-4 sm:space-y-6">
                {/* Project Image - Responsive sizing */}
                <div className="w-full h-40 sm:h-48 lg:h-64 overflow-hidden bg-gray-200 dark:bg-gray-700 rounded-lg">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                      <p className="text-sm sm:text-base uppercase tracking-wide">
                        {project.title} Image
                      </p>
                    </div>
                  )}
                </div>

                {/* Project Card */}
                <Card className="scroll-animate opacity-0 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                      <CardTitle className="text-base sm:text-lg lg:text-xl text-gray-900 dark:text-white uppercase tracking-wide leading-tight">
                        {project.title}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs w-fit">
                        {project.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
