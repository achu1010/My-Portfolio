import DarkBackground from '../DarkBackground';

interface LanguageItemProps {
  language: string;
  level: string;
  percentage: number;
}

function LanguageItem({ language, level, percentage }: LanguageItemProps) {
  return (
    <div className="mb-6 card-dark p-4 rounded-lg">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-blue-300">{language}</span>
        <span className="text-gray-300">{level}</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5 mt-2">
        <div 
          className="bg-blue-500 h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function Languages() {
  return (
    <section id="languages" className="section-padding dark-section relative overflow-hidden">
      <DarkBackground />
      <div className="container-custom relative z-10">
        <h2 className="section-title text-blue-300">Languages</h2>
        <div className="max-w-2xl mx-auto mt-8">
          <LanguageItem language="English" level="Fluent" percentage={100} />
          <LanguageItem language="Malayalam" level="Fluent" percentage={100} />
          <LanguageItem language="Hindi" level="Fluent" percentage={100} />
          <LanguageItem language="Tamil" level="Intermediate" percentage={70} />
        </div>
      </div>
    </section>
  );
}