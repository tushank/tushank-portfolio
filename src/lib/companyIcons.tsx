interface CompanyIconProps {
  company: string;
  className?: string;
}

// Company icon mappings using LinkedIn company logos and Simple Icons
const companyIconMap: Record<string, string> = {
  "Globant": "https://media.licdn.com/dms/image/v2/D4D0BAQHupr1U3gIQKA/company-logo_200_200/company-logo_200_200/0/1719839010650/globant_logo?e=1763596800&v=beta&t=nvzGwLC06CpPThBYpm4gzGk40ja77CLBWEejeZ0v4QY",
  "InfoCepts": "https://media.licdn.com/dms/image/v2/D560BAQEUVCxfcjvPPw/company-logo_200_200/company-logo_200_200/0/1688461463479/infocepts_logo?e=1763596800&v=beta&t=-NwfCNJRn0ew0J6cQvGHeotZT4zzy0FJQg6dfXdc4eg",
  "Persistent Systems": "https://media.licdn.com/dms/image/v2/D4D0BAQH5EcH5fkKmSg/company-logo_200_200/company-logo_200_200/0/1731934962856/persistent_systems_logo?e=1763596800&v=beta&t=sksgvxpmx6kl-Zag9_FK9aNkxlrb6aDLFNS0UAswYps",
  "GlobalLogic India": "https://media.licdn.com/dms/image/v2/D560BAQEcwaYik2791g/company-logo_200_200/B56ZV9kVCfHoAI-/0/1741568430537/globallogic_logo?e=1763596800&v=beta&t=1AlSPWxWd7DnIz4_Se6q8wZOBcgtcjInhmnhECwen8c"
};

export function CompanyIcon({ company, className = "w-full h-full" }: CompanyIconProps) {
  const iconUrl = companyIconMap[company];
  
  if (!iconUrl) {
    return (
      <div className={`${className} bg-white/10 rounded flex items-center justify-center text-xs font-bold text-white`}>
        {company.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <img
        src={iconUrl}
        alt={`${company} logo`}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

