'use client'
import React, { useState } from 'react';
import { ChevronRight, GraduationCap } from 'lucide-react';
import { educations } from '@/data/educations';

const EducationSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="bg-[#001F3F] h-screen w-full p-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Colonne de gauche - Message d'introduction */}
      <div className="lg:col-span-1">
        <div className="sticky top-[100px]">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Parcours Académique
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              Mon parcours académique reflète ma passion pour l&apos;innovation technologique et mon engagement envers l&apos;excellence.
            </p>
            <p className="text-gray-600">
              Chaque étape de ma formation a été choisie stratégiquement pour développer une expertise pointue en développement web et en technologies cloud.
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
              <span className="text-gray-500 italic">Scroll pour découvrir mon parcours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Colonne de droite - Liste des formations */}
      <div className="lg:col-span-2 mt-[100px] space-y-4">
        {educations.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <button
              onClick={() => setActiveId(activeId === item.id ? null : item.id)}
              className="w-full p-6 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                  <GraduationCap className="h-6 w-6 text-blue-500" />               
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.school}</p>
                  <p className="text-sm text-gray-500">{item.period}</p>
                </div>
              </div>
              <ChevronRight
                className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                  activeId === item.id ? 'rotate-90' : ''
                }`}
              />
            </button>
            
            {activeId === item.id && (
              <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      <p className="text-gray-600">{achievement}</p>
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