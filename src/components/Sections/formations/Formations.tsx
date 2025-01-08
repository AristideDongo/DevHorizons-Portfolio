import React from 'react';
import { Calendar, School } from 'lucide-react';
import { formationsSuivies } from '@/data/formations';

const FormationPage = () => {
  return (
    <div id='formations' className="min-h-screen bg-[#001F3F] py-12 sm:py-16">
      {/* Formations Suivies */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-20">
        <div className="flex items-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl mt-[20px] text-[#F3F3E0] font-bold">Formations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {formationsSuivies.map((formation, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{formation.titre}</h3>
                <div className="space-y-2 sm:space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <School className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-sm sm:text-base">{formation.institution}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-sm sm:text-base">{formation.dates}</span>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4">
                  <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Compétences acquises:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {formation.competences.map((comp, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs sm:text-sm"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FormationPage;