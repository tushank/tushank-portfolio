"use client";
import Section from "./Section";
import { person } from "@/lib/resume";
import { ScrollAnimation } from "./ScrollAnimation";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="space-y-8 sm:space-y-12">
        {person.experience.map((job) => (
          <ScrollAnimation key={job.company}>
            <article className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
                    <Briefcase className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">{job.role}</h3>
                    <p className="text-indigo-400 text-base sm:text-lg">{job.company}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-400 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{job.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-gray-300 leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">{bullet}</span>
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
