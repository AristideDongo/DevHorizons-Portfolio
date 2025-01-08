'use client'
import React, { useState } from 'react';
import { ChevronRight, GraduationCap } from 'lucide-react';
import { educations } from '@/data/educations';

const EducationSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div id='educations' className="bg-[#001F3F] min-h-screen w-full p-4 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-12">
        {/* Colonne de gauche - Message d'introduction */}
        <div className="lg:col-span-1">
          <div className="sticky top-[80px] sm:top-[100px]">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Parcours Académique
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-gray-300">
                Mon parcours académique reflète ma passion pour l&apos;innovation technologique et mon engagement envers l&apos;excellence.
              </p>
              <p className="text-sm sm:text-base text-gray-400">
                Chaque étape de ma formation a été choisie stratégiquement pour développer une expertise pointue en développement web et en technologies cloud.
              </p>
              <div className="mt-6 sm:mt-8 flex items-center space-x-3 sm:space-x-4">
                <div className="h-1 w-12 sm:w-20 bg-blue-500 rounded"></div>
                <span className="text-sm sm:text-base text-gray-400 italic">Scroll pour découvrir mon parcours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne de droite - Liste des formations */}
        <div className="lg:col-span-2 mt-[60px] sm:mt-[100px] space-y-4">
          {educations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                className="w-full p-4 sm:p-6 flex items-center justify-between"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                  <div className="text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{item.school}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{item.period}</p>
                  </div>
                </div>
                <ChevronRight
                  className={`h-4 w-4 sm:h-5 sm:w-5 text-gray-400 transition-transform duration-300 ${
                    activeId === item.id ? 'rotate-90' : ''
                  }`}
                />
              </button>

              {activeId === item.id && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-gray-100">
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{item.description}</p>
                  <div className="space-y-2">
                    {item.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <p className="text-xs sm:text-sm text-gray-600">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;