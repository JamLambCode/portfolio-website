import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  image?: string;
}

interface ExperienceSectionProps {
  scrollY: number;
  experience: Experience[];
}

const ExperienceSection = ({ scrollY, experience }: ExperienceSectionProps) => {
  return (
    <section
      id="experience"
      className="py-16 lg:py-32 px-4 lg:px-6 bg-white dark:bg-gray-900 transition-colors snap-start">
      <div
        className="container mx-auto"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="scroll-animate opacity-0 text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6 uppercase tracking-wide">
              PROFESSIONAL EXPERIENCE
            </h2>
            <p className="scroll-animate opacity-0 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 uppercase tracking-wider">
              Building the future, one project at a time
            </p>
          </div>

          {/* Mobile-first experience layout */}
          <div className="space-y-8 lg:space-y-16">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                {/* Mobile: Stack layout, Desktop: Timeline layout */}
                <div className="lg:hidden">
                  {/* Mobile Experience Card */}
                  <Card className="scroll-animate opacity-0 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    {job.image ? (
                      <div className="mb-4">
                        <img
                          src={job.image}
                          alt={job.company}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    ) : (
                      <div className="mb-4 w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 flex items-center justify-center rounded-lg border border-orange-200 dark:border-orange-700">
                        <div className="text-center text-orange-600 dark:text-orange-300">
                          <div className="w-16 h-16 bg-orange-300 dark:bg-orange-600 mx-auto mb-3 rounded-lg flex items-center justify-center">
                            <svg
                              className="w-8 h-8 text-orange-600 dark:text-orange-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                              />
                            </svg>
                          </div>
                          <p className="text-sm font-medium uppercase tracking-wide">
                            Company Image
                          </p>
                        </div>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <Calendar className="mr-2 text-orange-400" size={16} />
                        <Badge
                          variant="outline"
                          className="border-orange-200 dark:border-orange-700 text-orange-500 dark:text-orange-300 text-xs">
                          {job.period}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white uppercase tracking-wide">
                        {job.title}
                      </CardTitle>
                      <p className="text-base sm:text-lg font-semibold text-orange-400 uppercase tracking-wide">
                        {job.company}
                      </p>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="mr-1" size={14} />
                        <p className="text-sm uppercase tracking-wide">
                          {job.location}
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 sm:space-y-3">
                        {job.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-sm sm:text-base text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="text-orange-600 mr-2 sm:mr-3 font-bold text-xs">
                              •
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Desktop Timeline Layout */}
                <div className="hidden lg:block relative">
                  {/* Timeline line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-200 dark:bg-orange-800 h-full"></div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}>
                    <div
                      className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                      {job.image ? (
                        <div className="mb-6">
                          <img
                            src={job.image}
                            alt={job.company}
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      ) : (
                        <div className="mb-6 w-full h-64 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 flex items-center justify-center rounded-lg border border-orange-200 dark:border-orange-700">
                          <div className="text-center text-orange-600 dark:text-orange-300">
                            <div className="w-20 h-20 bg-orange-300 dark:bg-orange-600 mx-auto mb-4 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-10 h-10 text-orange-600 dark:text-orange-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                              </svg>
                            </div>
                            <p className="text-base font-medium uppercase tracking-wide">
                              Company Image
                            </p>
                          </div>
                        </div>
                      )}

                      <Card className="scroll-animate opacity-0 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <div className="flex items-center mb-2">
                            <Calendar
                              className="mr-2 text-orange-400"
                              size={16}
                            />
                            <Badge
                              variant="outline"
                              className="border-orange-200 dark:border-orange-700 text-orange-500 dark:text-orange-300">
                              {job.period}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl lg:text-2xl text-gray-900 dark:text-white uppercase tracking-wide">
                            {job.title}
                          </CardTitle>
                          <p className="text-lg font-semibold text-orange-400 uppercase tracking-wide">
                            {job.company}
                          </p>
                          <div className="flex items-center text-gray-600 dark:text-gray-300">
                            <MapPin className="mr-1" size={14} />
                            <p className="text-sm uppercase tracking-wide">
                              {job.location}
                            </p>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {job.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="text-gray-600 dark:text-gray-300 flex items-start">
                                <span className="text-orange-600 mr-3 font-bold">
                                  •
                                </span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="w-5/12"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
