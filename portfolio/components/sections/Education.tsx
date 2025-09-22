import { ReactNode } from 'react';
import styles from './TimelineAnimation.module.css';
import DarkBackground from '../DarkBackground';

interface TimelineItemProps {
  year: string;
  title: string;
  institution: string;
  description: ReactNode;
  isLast?: boolean;
  index?: number;
}

function TimelineItem({ year, title, institution, description, isLast = false, index = 0 }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12">
      {!isLast && (
        <div className="absolute top-5 left-3 w-0.5 h-full bg-blue-900/30 overflow-visible">
          <div 
            className={styles.timelineGlowPulse} 
            style={{ animationDelay: `${index * 1.5}s` }}
          ></div>
          <div className={styles.timelineGlowLine}></div>
        </div>
      )}
      <div 
        className={`absolute top-5 left-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-gray-900 z-10 ${styles.timelineNode}`}
        style={{ animationDelay: `${index * 1.5}s` }}
      ></div>
      <div className="card-dark p-6 rounded-lg transition-all duration-300 hover:translate-x-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        <span className="inline-block px-3 py-1 mb-3 text-sm bg-blue-500/20 text-blue-300 rounded-full">
          {year}
        </span>
        <h3 className="text-xl font-semibold mb-2 text-blue-300">{title}</h3>
        <h4 className="text-lg font-medium mb-3 text-gray-300">{institution}</h4>
        <div className="text-gray-300">{description}</div>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="career" className="section-padding dark-section relative overflow-hidden">
      <DarkBackground />
      <div className="container-custom relative z-10">
        <h2 className="section-title text-blue-300">Career Timeline</h2>
        <div className="mt-10">
          <TimelineItem
            year="July - August 2025"
            title="Software Development Intern"
            institution="applyGoat pvt lmt (Start-up)"
            description={
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Used TypeScript to create Chrome extensions to automate job applications on platforms like SuccessFactors, Workday, FirstDay, and Oracle Taleo.</li>
                <li>Developed web pages and implemented logic to generate ATS scores for resumes by integrating AI APIs.</li>
                <li>Created websites using Bubble.io, a no-code platform for web application development.</li>
                <li>Collaborated with team members using GitHub, working on project branches using Git commands.</li>
                <li>Tracked work assignments and completion status using JIRA for efficient project management.</li>
                <li>Created workflows for generating AI-powered cover letters and CVs for users.</li>
              </ul>
            }
            index={0}
          />
          <TimelineItem
            year="2023 - 2025"
            title="Master of Computer Applications (MCA)"
            institution="Pondicherry University"
            description={
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>CGPA: 8.04</li>
                <li>Specialized in Computer Science and Applications with focus on software development, algorithms, and data structures.</li>
              </ul>
            }
            index={1}
          />
          <TimelineItem
            year="2020 - 2023"
            title="Bachelor of Science in Physics"
            institution="Calicut University"
            description={
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>CGPA: 7.83</li>
                <li>Developed strong analytical and problem-solving skills through rigorous study of physical systems and mathematical models.</li>
                <li>Served as an NSS Volunteer for 3 years during this period.</li>
              </ul>
            }
            index={2}
          />
          <TimelineItem
            year="2018 - 2020"
            title="Higher Secondary Education (Science Stream)"
            institution="GHSS Avitanallur"
            description={
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Scored 97.38% in Science Stream</li>
                <li>Won 1st Prize in Kerala State Sastrolsavam for Improvised Experiment (2019-2020) - Topic: Eddie Current</li>
                <li>Served as Scout Troop Leader (2019-2020)</li>
              </ul>
            }
            index={3}
          />
          <TimelineItem
            year="2016 - 2017"
            title="Rajyapuraskar Award"
            institution="Bharat Scout and Guide "
            description={
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Served as a Scout for 7 years</li>
                <li>Led the Troop as Troop Leader for 2 years (2016-2017 & 2019-2020)</li>
              </ul>
            }
            isLast={true}
            index={4}
          />
        </div>
      </div>
    </section>
  );
}