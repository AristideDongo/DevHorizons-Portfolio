'use client'
import Image from "next/image"
import Meta from "@/images/meta.webp"
import Experience from './experience';

export default function Work() {
  return (
    <>
      <div id='work' className="min-h-screen overflow-auto flex flex-col md:flex-row items-center justify-center bg-[#001F3F]">
        {/* Conteneur principal */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 sm:px-6 py-12 space-y-8 md:space-y-0">
          {/* Texte à gauche */}
          <div className="flex-1 text-center md:text-left md:ml-10">
            <div className="flex items-center justify-center md:justify-start">
              <hr className='w-16 sm:w-24 mr-2 border-violet' />
              <span className='text-[12px] sm:text-[15px] font-semibold text-[#FEAE6F] capitalize'>He has worked with</span>
            </div>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#F3F3E0] font-medium mb-6">
              j&apos;ai acquis une solide expérience dans le développement<br /> en créant des solutions intuitives <br /> et en collaborant avec des équipes diversifiées.
            </p>
            <h1 className="text-[36px] sm:text-[50px] md:text-[60px] lg:text-[80px] -mt-8 font-extrabold text-[#F3F3E0]">WORK</h1>
            <h1 className="text-[36px] sm:text-[50px] md:text-[60px] lg:text-[80px] -mt-8 font-extrabold text-[#73EC8B]">EXPERIENCE.</h1>
          </div>

          {/* Images des entreprises */}
          <div className="mt-8 md:mt-0 relative w-56 h-56 sm:w-72 sm:h-72 mx-auto">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 relative z-10">
                {/* Première rangée */}
                <Image src={Meta} alt="Microsoft" width={60} height={60} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                <Image src={Meta} alt="Amazon" width={60} height={60} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                <Image src={Meta} alt="Adobe" width={60} height={60} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />

                {/* Deuxième rangée */}
                <Image src={Meta} alt="Apple" width={60} height={60} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                <Image src={Meta} alt="Google Play" width={60} height={60} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                <Image src={Meta} alt="GitHub" width={60} height={60} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />

                {/* Troisième rangée */}
                <Image src={Meta} alt="MongoDB" width={60} height={60} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                <Image src={Meta} alt="Flutter" width={60} height={60} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                <Image src={Meta} alt="LinkedIn" width={60} height={60} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
              </div>
            </div>
            {/* Forme de cœur */}
            <div className="absolute inset-0 bg-[#001F3F] transform rotate-45 z-0"></div>
          </div>
        </div>
      </div>
      <Experience />
    </>
  );
}