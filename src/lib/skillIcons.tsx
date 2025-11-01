interface SkillIconProps {
  skill: string;
  className?: string;
}

// Skill icon mappings - using Simple Icons, DevIcons, and custom mappings
const skillIconMap: Record<string, string> = {
  // Frontend
  "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/000000",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Tailwind": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "Design Systems": "https://cdn.simpleicons.org/figma/F24E1E",
  "Storybook": "https://cdn.simpleicons.org/storybook/FF4785",
  
  // Backend
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "FastAPI": "https://cdn.simpleicons.org/fastapi/009688",
  "REST API": "https://cdn.simpleicons.org/rest/FF5733",
  "WebSocket": "https://cdn.simpleicons.org/socketdotio/010101",
  
  // Database
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "NoSQL": "https://cdn.simpleicons.org/mongodb/47A248",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  
  // Tools
  "CI/CD": "https://cdn.simpleicons.org/githubactions/2088FF",
  "Jest": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  "Playwright": "https://cdn.simpleicons.org/playwright/45ba4b",
  "GCP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  
  // Specialties
  "Core Web Vitals": "https://cdn.simpleicons.org/googlechrome/4285F4",
  "WCAG 2.2": "https://cdn.simpleicons.org/accessibilityinsights/7B68EE",
  "RAG": "https://cdn.simpleicons.org/openai/412991",
  "Agentic UI": "https://cdn.simpleicons.org/openai/412991"
};

export function SkillIcon({ skill, className = "w-5 h-5" }: SkillIconProps) {
  const iconUrl = skillIconMap[skill];
  
  if (!iconUrl) {
    return null;
  }

  return (
    <div className={`relative inline-flex items-center justify-center ${className} flex-shrink-0`}>
      <img
        src={iconUrl}
        alt={`${skill} icon`}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

