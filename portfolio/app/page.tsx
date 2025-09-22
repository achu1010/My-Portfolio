'use client';

import Hero from '@/components/sections/Hero';
import AboutMe from '@/components/sections/AboutMe';
import Education from '@/components/sections/Education';
import Languages from '@/components/sections/Languages';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import ConnectWithMe from '@/components/sections/ConnectWithMe';
import Footer from '@/components/sections/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Languages />
      <ConnectWithMe />
      <Footer />
    </main>
  );
}