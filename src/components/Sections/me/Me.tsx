'use client'
import Image from 'next/image'
import ImagePerso from "@/images/Devices-pana.png"

export default function AboutMe() {
  return (
    <div id="about" className="min-h-screen overflow-y-hidden flex flex-col items-center justify-center bg-[#001F3F]">
      {/* Main container */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 sm:px-6 py-12 space-y-8 md:space-y-0">
        {/* Left text content */}
        <div className="flex-1 md:ml-10 text-center md:text-left">
          <div className="flex mb-8 items-center justify-center md:justify-start">
            <h1 className="text-3xl sm:text-4xl mt-[20px] text-[#F3F3E0] font-bold">
              Qui suis-je ?
            </h1>
          </div>
          <p className="text-[18px] sm:text-[20px] text-[#F3F3E0] font-medium mb-6 leading-relaxed">
            Passionné par le développement <br />
            <span className="text-[#73EC8B] text-[20px] sm:text-[22px] font-extrabold">
              et la création numérique
            </span>
            <br />
            depuis plus de 5 ans
          </p>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] -mt-4 font-extrabold text-[#F3F3E0]">
            Créatif.
          </h1>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] -mt-4 font-extrabold text-[#73EC8B]">
            Innovant.
          </h1>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] -mt-4 font-extrabold text-[#F3F3E0]">
            Passionné.
          </h1>
          
          {/* Additional description */}
          <p className="mt-8 text-[#F3F3E0] text-lg leading-relaxed max-w-xl">
            Je suis un développeur full-stack qui aime relever des défis techniques 
            et créer des expériences numériques mémorables. Mon approche combine 
            créativité et rigueur technique pour donner vie à vos projets.
          </p>
        </div>

        {/* Right image section */}
        <div className="mt-8 md:mt-0 relative w-80 h-80 sm:w-96 sm:h-96 mx-auto">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src={ImagePerso}
              alt="Profile picture"
              fill
              className="object-cover w-full h-full"
              priority
            />
            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-[#73EC8B] mix-blend-overlay opacity-20"></div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#73EC8B] opacity-20 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
}