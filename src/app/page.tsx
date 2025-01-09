'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Image1 from '@/images/Devices-pana.png';
import CertificationPage from '@/components/Sections/certificate/Certifictations';
import Contact from '@/components/Sections/contact/contact';
import FormationPage from '@/components/Sections/formations/Formations';
import Work from '@/components/Sections/work/Work';
import Me from '@/components/Sections/me/Me';
import Project from '@/components/Sections/projet/project';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div id="header" className="min-h-screen bg-[#001F3F]">
      {/* Section principale avec l'image et le texte */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 py-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {/* Texte à gauche */}
          <div className="flex-1 text-center md:text-left md:ml-10">
            <div className="flex items-center justify-center md:justify-start">
              <span className='text-[15px] mb-5 font-semibold text-[#FEAE6F] capitalize'>who am i?</span>
            </div>
            <h1 className="text-[40px] sm:text-[60px] md:text-[90px] -mt-8 font-extrabold text-[#EAD8B1]">John Doe</h1>
            <p className="text-[18px] sm:text-[22px] md:text-[25px] text-[#6A9AB0] font-bold mb-6">
              Développeur web passionné par la création d&apos;applications modernes et performantes.
            </p>
            <button className="px-5 py-3 sm:px-6 sm:py-4 bg-transparent text-[#EAD8B1] border-2 border-[#EAD8B1] rounded-lg text-lg sm:text-xl font-semibold hover:bg-[#EAD8B1] hover:text-[#001F3F] transition duration-300">
              Download Resume
            </button>
          </div>

          {/* Image à droite */}
          <div className="mt-8 md:mt-0 md:w-1/2">
            <Image
              src={Image1}
              width={600}
              height={600}
              alt="Photo de profil"
              className="object-cover mx-auto w-full max-w-[300px] md:max-w-[600px]"
            />
          </div>
          
        </motion.div>     
      </div>

      {/* Sections suivantes */}
      <div className="w-full">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Me/>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <FormationPage/>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <CertificationPage />
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Work />
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Project />
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Contact/>
        </motion.div>
      </div>
    </div>
  );
}