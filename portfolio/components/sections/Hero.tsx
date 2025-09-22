import Link from 'next/link';
import GlowButton from '@/components/GlowButton';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900 text-white pt-16">
      <div className="absolute inset-0 w-full h-full">
        {/* Background image with overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-900/80 to-gray-800/80 z-10"></div>
        <Image
          src="/images/hero_background.jpg"
          alt="Background"
          fill
          priority
          quality={85}
          className="object-cover object-center"
        />
      </div>
      
      <div className="container-custom z-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Achuth Krishna K
          </h1>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Motivated and versatile fresher with a strong foundation in Python, Java, SQL, and software development.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Kozhikode, Kerala, India</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 9539873040</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:achuthkrishnakkunnath@gmail.com" className="text-accent hover:underline">
                achuthkrishnakkunnath@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-2">
            <GlowButton href="https://www.linkedin.com/in/achuth-krishna-09b090320" color="blue" target="_blank">
              LinkedIn
            </GlowButton>
            <GlowButton href="/documents/ACHUTH_KRISHNA_RESUME.pdf" color="green" target="_blank">
              View CV
            </GlowButton>
            <GlowButton href="https://github.com/achu1010" color="purple" target="_blank">
              GitHub
            </GlowButton>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}