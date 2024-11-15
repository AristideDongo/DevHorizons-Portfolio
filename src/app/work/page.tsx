'use client'
import Image from "next/image"
import Meta from "@/images/meta.webp"
import Experience from './experience';
import SocialMedias from '@/components/SocialMedias';

export default function page() {
  return (
    <>
      <div className="min-h-screen overflow-auto flex items-center justify-center bg-[#001F3F]">
        {/* Conteneur principal */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 py-12">
          {/* Texte à gauche */}
          <div className="flex-1 ml-10 text-center md:text-left">
            <div className="flex items-center">
              <hr className='w-16 sm:w-24 mr-1 border-violet' />
              <span className='text-[12px] sm:text-[15px] font-semibold text-[#FEAE6F] capitalize'>He has worked with</span>
            </div>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#F3F3E0] font-medium mb-6">
              j&apos;ai acquis une solide expérience dans le développement<br /> en créant des solutions intuitives <br /> et en collaborant avec des équipes diversifiées.
            </p>
            <h1 className="text-[50px] sm:text-[60px] md:text-[80px] -mt-8 font-extrabold text-[#F3F3E0]">WORK</h1>
            <h1 className="text-[50px] mb-5 sm:text-[60px] md:text-[80px] -mt-8 font-extrabold text-[#73EC8B]">EXPERIENCE.</h1>
          </div>

          {/* Images des entreprises */}
          <div className="mt-8 md:mt-0 relative w-72 h-72 mx-20">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="flex flex-wrap justify-center items-center relative z-10 space-x-4 space-y-4">
                {/* Première rangée */}
                <Image src={Meta}
                 alt="Microsoft"
                 width={80}
                 height={80}
                 className=" object-contain" />
                <Image src={Meta}
                 alt="Amazon"
                 width={80}
                 height={80}
                 className=" object-contain" />
                <Image src={Meta}
                 alt="Adobe"
                 width={80}
                 height={80}
                 className=" object-contain" />

                {/* Deuxième rangée */}
                <Image src={Meta}
                 alt="Apple"
                 width={80}
                 height={80}
                 className=" object-contain" />
                <Image src={Meta}
                 alt="Google Play"
                 width={80}
                 height={80}
                 className=" object-contain" />
                <Image src={Meta}
                 alt="GitHub"
                 width={80}
                 height={80}
                 className=" object-contain" />

                {/* Troisième rangée */}
                <Image src={Meta}
                 alt="MongoDB"
                 width={80}
                 height={80}
                 className=" object-contain" />
                <Image src={Meta}
                 alt="Flutter"
                 width={80}
                 height={80}
                 className=" object-contain" />
                <Image src={Meta}
                 alt="LinkedIn"
                 width={80}
                 height={80}
                 className="object-contain" />
              </div>
            </div>
            {/* Forme de cœur */}
            <div className="absolute inset-0 bg-[#001F3F] transform rotate-45 z-0"></div>
          </div>
        </div>
        <div className="hidden md:block">
        <SocialMedias />
        </div>
      </div>
      <Experience />
    </>
  );
}
