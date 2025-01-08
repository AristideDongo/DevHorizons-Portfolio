import React from 'react';
import { Calendar, School } from 'lucide-react';
import { formationsSuivies } from '@/data/formations';

const FormationPage = () => {


  return (
    <div className="min-h-screen bg-[#001F3F] py-16">
      {/* Formations Suivies */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl mt-[20px] text-[#F3F3E0] font-bold">Formations</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formationsSuivies.map((formation, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{formation.titre}</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <School className="w-5 h-5 mr-2" />
                    <span>{formation.institution}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{formation.dates}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Compétences acquises:</h4>
                  <div className="flex flex-wrap gap-2">
                    {formation.competences.map((comp, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
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