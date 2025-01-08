import React from 'react';
import { Award, Calendar} from 'lucide-react';
import Image from 'next/image';
import { certifications } from '@/data/certificate'; 

const CertificationPage = () => {

  return (
    <div className="min-h-screen bg-[#001F3F] py-16">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mt-[50px] max-w-3xl mx-auto">
          <h1 className="text-4xl text-[#F3F3E0] font-bold mb-6">Mes Certifications</h1>
          <p className="text-xl text-gray-400">
            Ces certifications témoignent de mon engagement continu dans l&apos;apprentissage
            et la maîtrise des technologies modernes du développement web et du cloud computing.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* Certifications Grid */}
        {certifications.map((category, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="w-6 h-6 mr-2 text-blue-600" />
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((cert, certIdx) => (
                <div key={certIdx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <Image
                        src={cert.logoUrl}
                        alt={`${cert.issuer} logo`}
                        width={80}
                        height={80}
                        className="w-16 h-16 rounded-lg mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-bold">{cert.title}</h3>
                        <p className="text-gray-600">{cert.issuer}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{cert.date}</span>
                      {cert.validity && (
                        <span className="ml-2 text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          Validité: {cert.validity}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 mb-4">{cert.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Compétences certifiées:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationPage;