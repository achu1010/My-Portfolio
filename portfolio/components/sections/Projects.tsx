import { ReactNode } from 'react';
import RiveAnimation from '@/components/RiveAnimation';
import DarkBackground from '../DarkBackground';

interface ProjectCardProps {
  title: string;
  year: string;
  institution: string;
  description: string;
  tools: string[];
  githubLink?: string;
  isSmall?: boolean;
}

function ProjectCard({ title, year, institution, description, tools, githubLink, isSmall = false }: ProjectCardProps) {
  return (
    <div className={`card-dark group h-full flex flex-col rounded-lg ${isSmall ? 'scale-95 hover:scale-100' : ''} transition-transform duration-300`}>
      <div className="bg-blue-900/30 rounded-t-lg p-4 relative overflow-hidden h-40">
        <div className="absolute inset-0 opacity-20 group-hover:opacity-50 transition-opacity duration-300">
          <RiveAnimation
            src="/animations/project-animation.riv"
            className="w-full h-full object-cover"
            autoplay={true}
          />
        </div>
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 text-sm bg-blue-500 text-white rounded-full mb-2">
            {year}
          </span>
          <h3 className="text-xl font-bold text-blue-300">{title}</h3>
          <p className="text-gray-300">{institution}</p>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        
        <div className="mt-auto">
          <h4 className="font-medium text-blue-300 mb-2">Tools & Technologies</h4>
          <div className="flex flex-wrap gap-2 mb-3">
            {tools.map((tool, index) => (
              <span 
                key={index}
                className="bg-gray-800 text-blue-300 px-2 py-1 rounded text-sm border border-blue-500/20"
              >
                {tool}
              </span>
            ))}
          </div>
          
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-400 transition-colors mt-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding dark-section relative overflow-hidden">
      <DarkBackground />
      <div className="container-custom relative z-10">
        <h2 className="section-title text-blue-300">Projects</h2>
        
        {/* Major Projects */}
        <h3 className="text-xl font-semibold mb-6 text-blue-300 mt-8">Main Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          <ProjectCard 
            title="Multilingual Prompt Filtering For LLM Security"
            year="2025"
            institution="Pondicherry University"
            description="Developed a system to detect and filter harmful prompts in multiple languages before they reach Large Language Models. Implemented advanced NLP techniques and integration with Gemini AI API for enhanced security."
            tools={["Python", "PyTorch", "ReactJS", "Transformers", "Flask", "Gemini AI API"]}
            githubLink="https://github.com/achu1010/Prompt-filtering-for-LLM-Security.git"
          />
          
          <ProjectCard 
            title="Prompt Filtering For LLM Security"
            year="2024"
            institution="Pondicherry University"
            description="Created a system to filter malicious prompts targeting Large Language Models. Implemented pattern recognition and classification algorithms to identify potential attacks."
            tools={["Python", "NLTK", "TensorFlow", "Flask", "JavaScript"]}
          />
          
          <ProjectCard 
            title="Spam SMS Detection"
            year="2024"
            institution="Pondicherry University"
            description="Built a machine learning model to classify SMS messages as spam or legitimate. Utilized text preprocessing and feature extraction techniques to improve accuracy."
            tools={["Python", "Scikit-learn", "NLTK", "Pandas", "Matplotlib"]}
            githubLink="https://github.com/achu1010/SMS-SPAM-DETECTOR.git"
          />
        </div>
        
        {/* Small Projects */}
        <h3 className="text-xl font-semibold mb-6 text-blue-300">Small Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard 
            title="Book Management System"
            year="2023"
            institution="Personal Project"
            description="A comprehensive book management system for libraries with user authentication and role-based access control. Implements CRUD operations for book inventory and different permission levels for admins, librarians, and members."
            tools={["Python", "FastAPI", "SQLAlchemy", "SQLite", "JWT", "Pydantic", "Bcrypt"]}
            githubLink="https://github.com/achu1010/book-management-system.git"
            isSmall={true}
          />
          
          <ProjectCard 
            title="Social Media Platform"
            year="2023"
            institution="Personal Project"
            description="A social networking platform allowing users to create profiles, connect with friends, share posts, and interact through comments and likes."
            tools={["React", "Node.js", "Express", "MongoDB", "JWT", "Axios", "Tailwind CSS"]}
            githubLink="https://github.com/achu1010/Social-Media-Platform.git"
            isSmall={true}
          />
          
          <ProjectCard 
            title="Employee Management System"
            year="2022"
            institution="Personal Project"
            description="An HR system for managing employee data, tracking attendance, processing payroll, and handling leave requests efficiently."
            tools={["Java", "Spring Boot", "Spring Data JPA", "H2 Database", "Lombok", "Maven"]}
            githubLink="https://github.com/achu1010/Employee-management-system.git"
            isSmall={true}
          />
        </div>
      </div>
    </section>
  );
}