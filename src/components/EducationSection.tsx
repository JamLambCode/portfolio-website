import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EducationSectionProps {
  scrollY: number;
  nyuImage: string;
}

const EducationSection = ({ scrollY, nyuImage }: EducationSectionProps) => {
  return (
    <section className="py-16 lg:py-32 px-4 lg:px-6 bg-white dark:bg-gray-900 transition-colors snap-start">
      <div
        className="container mx-auto text-center"
        style={{ transform: `translateY(${scrollY * 0.02}px)` }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="scroll-animate opacity-0 text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 lg:mb-12 uppercase tracking-wide">
            EDUCATION
          </h2>

          {/* Mobile-first education layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Education Image - Responsive sizing */}
            <div className="order-1 lg:order-1 w-full h-48 sm:h-64 lg:h-80 overflow-hidden rounded-lg">
              <img
                src={nyuImage}
                alt="NYU Campus"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Education Card */}
            <Card className="scroll-animate opacity-0 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-left order-2 lg:order-2">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-gray-900 dark:text-white uppercase tracking-wide">
                  NEW YORK UNIVERSITY
                </CardTitle>
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-orange-600 uppercase tracking-wide">
                  Bachelor's, Computer Science
                </p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                  Aug 2021 - May 2025 • GPA: 3.8
                </p>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 uppercase tracking-wide text-sm sm:text-base">
                    Academic Distinctions
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Cum Laude, University Honors Scholar, French National Honors
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 uppercase tracking-wide text-sm sm:text-base">
                    Relevant Coursework
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Data Structures, Algorithms, Computer Systems Organization,
                    Natural Language Processing, Data Management and Analysis,
                    Applied Internet Technologies
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
