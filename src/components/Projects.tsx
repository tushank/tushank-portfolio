"use client";
import Section from "./Section";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { trackEngagement } from "@/lib/analytics";
import { ScrollAnimation } from "./ScrollAnimation";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((p) => (
          <ScrollAnimation key={p.title}>
            <article className="card overflow-hidden group h-full flex flex-col hover:-translate-y-1">
              <div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 group-hover:text-indigo-400 transition-colors">
                  {p.title}
                </h3>
                
                <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed flex-grow">
                  {p.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {p.tags.map(t => (
                    <span key={t} className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-purple-500/20 text-purple-300 rounded-md font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 sm:gap-6 mt-auto">
                  {p.link !== "#" && (
                    <>
                      <Link 
                        href={p.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEngagement('project_view', p.title)}
                        className="flex items-center gap-1.5 sm:gap-2 text-gray-300 hover:text-white transition-colors text-sm sm:text-base group/link"
                        aria-label={`View ${p.title} source code`}
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:scale-110 transition-transform" aria-hidden="true" />
                        <span>Code</span>
                      </Link>
                      <Link 
                        href={p.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2 text-gray-300 hover:text-white transition-colors text-sm sm:text-base group/link"
                        aria-label={`View ${p.title} live demo`}
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:scale-110 transition-transform" aria-hidden="true" />
                        <span>Live</span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </article>
          </ScrollAnimation>
        ))}
      </div>
    </Section>
  );
}
