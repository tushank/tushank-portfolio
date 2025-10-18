import Section from "./Section";
import { person } from "@/lib/resume";

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
      <div className="space-y-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="card p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="badge text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        {/* Additional Skills */}
        <div className="card p-6">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
            Additional Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {person.keywords.filter(skill => 
              !Object.values(skillCategories).flat().includes(skill)
            ).map((skill) => (
              <span key={skill} className="badge text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
