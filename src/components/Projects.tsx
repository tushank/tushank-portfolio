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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <ScrollAnimation key={p.title}>
            <article className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all group">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                  {p.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {p.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-1 text-xs bg-purple-500/20 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Link 
                    href={p.link} 
                    target="_blank"
                    onClick={() => trackEngagement('project_view', p.title)}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </Link>
                  <Link 
                    href={p.link} 
                    target="_blank"
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </Link>
                </div>
              </div>
            </article>
          </ScrollAnimation>
        ))}
      </div>
    </Section>
  );
}
