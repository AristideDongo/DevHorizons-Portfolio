'use client'
import { useState } from 'react';
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";


const experienceData = [
  {
    title: 'Développeur Front-End',
    company: 'Entreprise A',
    description: 'Développement d\'interfaces utilisateur dynamiques.',
    date: 'Janvier 2022 - Présent',
  },
  {
    title: 'Développeur Back-End',
    company: 'Entreprise B',
    description: 'Création d\'API et gestion de bases de données.',
    date: 'Juillet 2020 - Décembre 2021',
  },
  {
    title: 'Stagiaire Développement Web',
    company: 'Entreprise C',
    description: 'Assistance dans le développement de projets Web.',
    date: 'Mai 2019 - Juin 2020',
  },
];

export default function Experience() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % experienceData.length);
  };

  const prevCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + experienceData.length) % experienceData.length
    );
  };

  return (
    <div className='bg-[#001F3F]'>
    <div className="w-full max-w-4xl h-[90px] mx-auto p-4">
      <div className="shadow-sm shadow-[#ECF8F9] bg-[#ECF8F9] rounded-lg p-6">
        <h2 className="text-2xl text-black font-bold mb-2">{experienceData[currentCardIndex].title}</h2>
        <h3 className="text-lg text-gray-700 mb-4">{experienceData[currentCardIndex].company}</h3>
        <p className="text-gray-900 text-xl font-semibold mb-4">{experienceData[currentCardIndex].description}</p>
        <p className="text-base text-end font-semibold text-gray-600">{experienceData[currentCardIndex].date}</p>
      </div>

    </div>
      <div className="flex gap-5 p-20 mt-40 justify-center">
        <button
          onClick={prevCard}
          className="bg-[#116D6E] text-white py-5 px-6 hover:scale-95 transition duration-300 rounded-lg"
        >
          <GrChapterPrevious />
        </button>
        <button
          onClick={nextCard}
          className="bg-[#116D6E] text-white py-5 px-6 hover:scale-95 transition duration-300 rounded-lg"
        >
          <GrChapterNext />
        </button>
      </div>
    </div>
  );
}
