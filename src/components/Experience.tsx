"use client";
import Section from "./Section";
import { person } from "@/lib/resume";
import { ScrollAnimation } from "./ScrollAnimation";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { CompanyIcon } from "@/lib/companyIcons";

export default function Experience() {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {person.experience.map((job) => (
          <ScrollAnimation key={job.company}>
            <article className="group relative card overflow-hidden hover:-translate-y-1">
              <div className="p-5 sm:p-6 md:p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-3 sm:p-4 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center overflow-hidden">
                    <CompanyIcon company={job.company} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">{job.role}</h3>
                    <p className="text-indigo-400 text-sm sm:text-base md:text-lg lg:text-xl">{job.company}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-6 text-gray-400 text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>{job.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2.5 sm:space-y-3 lg:space-y-4">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-gray-300 leading-relaxed">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-500 rounded-full mt-2 sm:mt-2.5 mr-3 sm:mr-4 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base md:text-lg">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </ScrollAnimation>
        ))}
      </div>
    </Section>
  );
}
