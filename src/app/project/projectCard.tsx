import Image from 'next/image'
import { ProjectsData } from '@/data/project'
import Link from 'next/link'


export default function projectCard() {
    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="grid mt-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {ProjectsData.map((project) => (
                    <div
                        key={project.id}
                        className="rounded bg-[#ECF8F9] overflow-hidden shadow-lg flex flex-col">
                        <div className="relative">
                            <Link href={`/project/${project.id}`}  target='_blank'>
                                <Image
                                    className="w-full"
                                    src={project.image[0]}
                                    alt="Sunset in the mountains"
                                    width={0}
                                    height={0}
                                />
                                <div
                                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                </div>
                            </Link>
                                <div
                                    className="text-xs absolute top-0 right-0 bg-[#001524] px-4 py-2 text-white mt-3 mr-3 rounded-xl">
                                    {project.year}
                                </div>
                        </div>
                        <div className="flex flex-wrap max-w-xl w-full p-4 gap-4 md:gap-6 justify-center items-center text-sm text-white md:text-md">
                            {/* Conteneur pour les technologies */}
                            <div className="bg-transparent rounded px-4 py-2">
                                <p className="font-semibold text-center text-[#222831] text-2xl">Technologies:</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techno.map((tech, index) => (
                                        <span key={index} className="bg-[#222831] text-cyan-500 px-3 py-2 mt-3 rounded-md text-sm">{tech.name}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Titre du projet */}
                            <Link href={`/project/${project.id}`} target='_blank'>
                            <p className="text-black font-extrabold text-xl mt-2 md:mt-0">
                                {project.title}
                            </p>
                            </Link>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}