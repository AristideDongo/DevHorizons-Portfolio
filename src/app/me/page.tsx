'use client'
import { FaGithub } from 'react-icons/fa';
import { DiReact, DiHtml5, DiCss3, DiGit } from "react-icons/di";
import { SiNextdotjs, SiNestjs, SiTypescript, SiMongodb, SiFlutter, SiJavascript } from 'react-icons/si';
import About from './about';
import SocialMedias from '@/components/SocialMedias';

export default function Me() {
  return (
    <>
      <div className="min-h-screen overflow-y-hidden flex flex-col items-center justify-center bg-[#001F3F]">
        {/* Conteneur principal */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 sm:px-6 py-12 space-y-8 md:space-y-0">
          {/* Texte à gauche */}
          <div className="flex-1 md:ml-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <hr className="w-16 sm:w-24 mr-2 border-violet" />
              <span className="text-[15px] font-semibold text-[#FEAE6F] capitalize">
                How does he approach problem-solving?
              </span>
            </div>
            <p className="text-[18px] sm:text-[20px] text-[#F3F3E0] font-medium mb-6 leading-relaxed">
              Je crée des solutions <br />
              <span className="text-[#73EC8B] text-[20px] sm:text-[22px] font-extrabold">
                Web et des applications mobiles
              </span>
              <br />
              élégantes, fonctionnelles et intuitives
            </p>
            <h1 className="text-[48px] sm:text-[60px] lg:text-[70px] -mt-4 font-extrabold text-[#F3F3E0]">
              Transformez.
            </h1>
            <h1 className="text-[48px] sm:text-[60px] lg:text-[70px] -mt-4 font-extrabold text-[#73EC8B]">
              Réalisez.
            </h1>
            <h1 className="text-[48px] mb-4 sm:text-[60px] lg:text-[70px] -mt-4 font-extrabold text-[#F3F3E0]">
              Révolutionnez.
            </h1>
          </div>

          {/* Icônes de la stack en forme de cœur */}
          <div className="mt-8 md:mt-0 relative w-72 h-72 mx-auto">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="flex flex-wrap justify-center items-center relative z-10">
                <DiReact size={60} className="m-2 text-[#3b82f6]" />
                <SiJavascript size={60} className="m-2 text-[#f59e0b]" />
                <DiHtml5 size={60} className="m-2 text-[#f97316]" />
                <DiCss3 size={60} className="m-2 text-[#2563eb]" />
                <DiGit size={60} className="m-2 text-[#ea580c]" />
                <FaGithub size={60} className="m-2 text-[#181717]" />
                <SiNextdotjs size={60} className="m-2 text-[#000000]" />
                <SiNestjs size={60} className="m-2 text-[#e11d48]" />
                <SiTypescript size={60} className="m-2 text-[#1e40af]" />
                <SiMongodb size={60} className="m-2 text-[#4caf50]" />
                <SiFlutter size={60} className="m-2 text-[#02569b]" />
              </div>
            </div>
            {/* Forme de cœur */}
            <div className="absolute inset-0 bg-[#001F3F] transform rotate-45 z-0"></div>
          </div>
        </div>
        <div className='hidden md:block'>
        <SocialMedias />
        </div>
      </div>
      <About />
    </>
  );
}
