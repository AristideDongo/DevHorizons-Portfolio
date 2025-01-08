'use client'

export default function About() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#001F3F]">
        {/* Conteneur principal */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 sm:px-6 py-12">
          {/* Texte à gauche */}
          <div className="flex-1 md:ml-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <hr className="w-12 sm:w-16 mr-2 border-violet" />
              <span className="text-[14px] sm:text-[15px] font-semibold text-[#FEAE6F] capitalize">
                Here&apos;s a little about who I am
              </span>
            </div>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#F3F3E0] font-medium mb-6 leading-relaxed">
              Développeur passionné, je conçois des solutions numériques élégantes et fonctionnelles pour le Web et le mobile, alliant créativité et rigueur technique.
            </p>
            <h1 className="text-[42px] sm:text-[50px] lg:text-[70px] -mt-4 font-extrabold text-[#F3F3E0]">
              Sfotware
            </h1>
            <h1 className="text-[42px] sm:text-[50px] lg:text-[70px] -mt-4 font-extrabold text-[#006A67]">
              Developper
            </h1>
          </div>

          {/* Cartes avec titres et descriptions */}
          <div className="flex flex-col md:flex-row md:space-x-4 w-full mt-10 md:mt-0">
            {/* Première carte */}
            <div className="flex-1 p-4 sm:p-6 bg-[#D8D2C2] rounded-lg mb-6 md:mb-0">
              <h2 className="text-[20px] sm:text-[24px] underline text-[#222831] font-semibold mb-4">
                Création Web
              </h2>
              <p className="text-[#222831] text-[16px] sm:text-[18px]">
                J&apos;aide à construire des sites Web dynamiques, réactifs et performants, offrant une expérience utilisateur optimale.
              </p>
            </div>

            {/* Deuxième carte */}
            <div className="flex-1 p-4 sm:p-6 bg-[#FF9874] rounded-lg mb-6 md:mb-0">
              <h2 className="text-[20px] sm:text-[24px] underline text-[#222831] font-semibold mb-4">
                Applications Mobiles
              </h2>
              <p className="text-[#222831] text-[16px] sm:text-[18px]">
                Développement d&apos;applications mobiles innovantes pour Android et iOS, adaptées aux besoins des utilisateurs modernes.
              </p>
            </div>

            {/* Troisième carte */}
            <div className="flex-1 p-4 sm:p-6 bg-[#D8D2C2] rounded-lg">
              <h2 className="text-[20px] sm:text-[24px] underline text-[#222831] font-semibold mb-4">
                Solutions Personnalisées
              </h2>
              <p className="text-[#222831] text-[16px] sm:text-[18px]">
                Je propose des solutions sur mesure, adaptées aux objectifs de votre entreprise, pour stimuler l&apos;innovation et la croissance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
