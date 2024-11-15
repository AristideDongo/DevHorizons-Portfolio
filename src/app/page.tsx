'use client'
import Image from 'next/image';

import Image1 from '@/images/Devices-pana.png';
import SocialMedias from '@/components/SocialMedias';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#001F3F]">
      {/* Conteneur principal */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 py-12">
        {/* Texte à gauche */}
        <div className="flex-1 ml-10 text-center md:text-left">
          <div className="flex items-center">
            <hr className='w-16 sm:w-24 mr-1 border-violet' />
            <span className='text-[15px] font-semibold text-[#FEAE6F] capitalize'>who am i?</span>
          </div>
          <h1 className="text-[90px] -mt-8 font-extrabold text-[#EAD8B1]">John Doe</h1>
          <p className="text-[25px] text-[#6A9AB0] font-bold mb-6">
            Développeur web passionné par la création d&apos;applications modernes et performantes.
          </p>
          <button className="px-8 py-6 bg-transparent text-[#EAD8B1] border-2 border-[#EAD8B1] rounded-lg text-xl font-semibold hover:bg-[#EAD8B1] hover:text-[#001F3F] transition duration-300">
            Download Resume
          </button>
        </div>

        {/* Image à droite */}
        <div className="mt-8 md:mt-0 md:w-1/2 hidden md:block "> {/* Agrandir l'image */}
          <Image
            src={Image1}
            width={600}
            height={600}
            alt="Photo de profil"
            className="object-cover mx-auto"
          />
        </div>
      </div>
      <div className='hidden md:block'>
      <SocialMedias/>
      </div>
    </div>
  );
}
