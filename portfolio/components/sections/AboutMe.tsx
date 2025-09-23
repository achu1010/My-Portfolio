import Image from 'next/image';

const AboutMe = () => {
  return (
    <section className="relative py-16 flex justify-center items-center" id="about">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/aboutme_bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 w-[1152px] h-[648px] overflow-y-auto px-10 py-8 bg-black/20 backdrop-blur-sm rounded-lg border border-gray-700 shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-white drop-shadow-lg">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-10 h-[500px] py-4 px-2">
          <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div className="relative w-80 h-96 rounded-lg overflow-hidden border-4 border-blue-500 shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300">
              <Image
                src="/images/Achuth_Photo.jpg"
                alt="Achuth Krishna K"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 px-4">
            <p className="text-lg mb-5 text-white drop-shadow-lg text-justify">
              Hello! I'm Achuth Krishna K, a passionate software developer with a strong focus on creating 
              efficient and user-friendly applications. I love solving complex problems and turning ideas into reality.
            </p>
            <p className="text-lg mb-5 text-white drop-shadow-lg text-justify">
              With expertise in various programming languages and frameworks, I strive to deliver high-quality
              solutions that meet both technical requirements and user needs. My approach combines technical excellence
              with creativity to build applications that stand out.
            </p>
            <p className="text-lg mb-5 text-white drop-shadow-lg text-justify">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or enhancing my skills through continuous learning. I believe in the power of technology to transform lives
              and am committed to making a positive impact through my work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;