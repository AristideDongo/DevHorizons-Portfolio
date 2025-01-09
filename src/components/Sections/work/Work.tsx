'use client'

export default function Work() {
  const companies = [
    {
      name: "Meta",
      role: "Senior Frontend Developer",
      period: "2022 - Present",
      description: "Développement d'applications web performantes"
    },
    {
      name: "Microsoft",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Création de solutions cloud innovantes"
    },
    {
      name: "Amazon",
      role: "Software Engineer",
      period: "2018 - 2020",
      description: "Optimisation des systèmes de e-commerce"
    }
  ]

  return (
    <div id='work' className="min-h-screen flex flex-col items-center justify-center bg-[#001F3F] py-16">
      <div className="w-full max-w-7xl px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center md:text-left mb-16">
          <div className="flex mb-8 items-center justify-center md:justify-start">
            <span className='text-3xl sm:text-4xl mt-[20px] text-[#F3F3E0] font-bold'>
              Parcours Professionnel
            </span>
          </div>
          <p className="text-[18px] sm:text-[20px] text-[#F3F3E0] font-medium my-6 leading-relaxed max-w-2xl">
            J&apos;ai eu l&apos;opportunité de collaborer avec des entreprises 
            innovantes et de contribuer à des projets ambitieux qui ont façonné 
            mon expertise.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="bg-[#002b59] rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="text-[#F3F3E0] font-bold text-xl">
                    {company.name}
                  </h3>
                  <p className="text-[#FEAE6F]">{company.period}</p>
                </div>
              </div>
              <h4 className="text-[#73EC8B] font-semibold text-lg mb-2">
                {company.role}
              </h4>
              <p className="text-[#F3F3E0] text-sm">
                {company.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Experience Button */}
        <div className="text-center mt-12">
          <button className="bg-[#73EC8B] text-[#001F3F] px-8 py-3 rounded-full font-semibold 
            transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Voir plus d&apos;expériences
          </button>
        </div>
      </div>
    </div>
  );
}