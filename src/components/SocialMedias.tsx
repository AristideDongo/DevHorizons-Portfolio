import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from 'next/link';



export default function SocialMedias() {
  return (
    <>
    {/* Icônes de réseaux sociaux sur les bords de l'écran */}
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-10">
        <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <MdOutlineMailOutline size={40} className="text-[#EAD8B1] hover:scale-75 transition" />
        </Link>
        <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} className="text-[#EAD8B1] hover:scale-75  transition" />
        </Link>
        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} className="text-[#EAD8B1] hover:scale-75  transition" />
        </Link>
        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <BsTwitterX size={40} className="text-[#EAD8B1] hover:scale-75  transition" />
        </Link>
      </div>

      {/* Bordure entre les icônes et le bas de l'écran */}
      <div className="fixed left-8 bottom-0 w-[3px] h-[200px] bg-gray-300 z-0"></div>
    </>
  )
}