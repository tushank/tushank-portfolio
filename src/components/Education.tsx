"use client";
import Section from "./Section";
import { person } from "@/lib/resume";
import { ScrollAnimation } from "./ScrollAnimation";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {person.education.map((edu) => (
          <ScrollAnimation key={edu.school}>
            <article className="card p-5 sm:p-6 md:p-8 lg:p-10 hover:-translate-y-1">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors flex-shrink-0">
                  <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">{edu.degree}</h3>
                  <p className="text-indigo-400 text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4">{edu.school}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-6 text-gray-400 text-xs sm:text-sm md:text-base">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.note && (
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span>{edu.note}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </ScrollAnimation>
        ))}
      </div>
    </Section>
  );
}
