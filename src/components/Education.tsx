"use client";
import Section from "./Section";
import { person } from "@/lib/resume";
import { ScrollAnimation } from "./ScrollAnimation";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-8">
        {person.education.map((edu) => (
          <ScrollAnimation key={edu.school}>
            <article className="bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-all p-6 sm:p-8">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 sm:p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-indigo-400 text-base sm:text-lg mb-2">{edu.school}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.note && (
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
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
