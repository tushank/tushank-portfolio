"use client";
import Section from "./Section";
import { person } from "@/lib/resume";
import { ScrollAnimation } from "./ScrollAnimation";
import { MapPin, Mail, Phone, Briefcase, Award } from "lucide-react";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Main Content */}
        <ScrollAnimation>
          <div className="card p-6 sm:p-8 md:p-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text-accent">
                  {person.name}
                </h3>
                <p className="text-lg sm:text-xl text-indigo-400 mb-4 font-medium">
                  {person.title}
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  {person.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-400">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 flex-shrink-0" />
                  <span>{person.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-400">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 flex-shrink-0" />
                  <a 
                    href={`mailto:${person.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {person.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-400">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 flex-shrink-0" />
                  <a 
                    href={`tel:${person.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {person.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Highlights */}
        <div className="space-y-6">
          <ScrollAnimation>
            <div className="card p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Professional Focus
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Enterprise & AI-powered web applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Design systems & component libraries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Performance optimization & Core Web Vitals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Accessibility compliance (WCAG 2.1/2.2)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Agentic UI & LLM workflow integration</span>
                </li>
              </ul>
            </div>
          </ScrollAnimation>

          {person.awards && person.awards.length > 0 && (
            <ScrollAnimation>
              <div className="card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Award className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Awards & Recognition
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  {person.awards.map((award, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0"></span>
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          )}
        </div>
      </div>
    </Section>
  );
}

