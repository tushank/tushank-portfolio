import Section from "./Section";
import { person } from "@/lib/resume";
import { SkillIcon } from "@/lib/skillIcons";

export default function Skills() {
  // Group skills by category
  const skillCategories = {
    "Frontend": ["Angular", "React", "Next.js", "TypeScript", "Tailwind", "Design Systems", "Storybook"],
    "Backend": ["Node.js", "Express", "FastAPI", "REST API", "WebSocket"],
    "Database": ["MongoDB", "MySQL", "NoSQL", "Redis"],
    "Tools": ["CI/CD", "Jest", "Playwright", "GCP", "Docker", "Git"],
    "Specialties": ["Core Web Vitals", "WCAG 2.2", "RAG", "Agentic UI"]
  };

  return (
    <Section id="skills" title="Skills">
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="card p-5 sm:p-6 md:p-8 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 sm:mb-6 flex items-center">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-indigo-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
              {category}
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill) => (
                <span key={skill} className="badge text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2">
                  <SkillIcon skill={skill} className="w-4 h-4 sm:w-5 sm:h-5" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        {/* Additional Skills - Only show if there are skills not in categories */}
        {(() => {
          const allCategorizedSkills = Object.values(skillCategories).flat();
          const additionalSkills = person.keywords.filter(skill => 
            !allCategorizedSkills.includes(skill)
          );
          
          if (additionalSkills.length === 0) return null;
          
          return (
            <div className="card p-5 sm:p-6 md:p-8 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 sm:mb-6 flex items-center">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-pink-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                Additional Skills
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {additionalSkills.map((skill) => (
                  <span key={skill} className="badge text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2">
                    <SkillIcon skill={skill} className="w-4 h-4 sm:w-5 sm:h-5" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </Section>
  );
}
