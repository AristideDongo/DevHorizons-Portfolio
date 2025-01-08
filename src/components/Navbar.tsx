'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Squeeze } from 'hamburger-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('header');
  const [isOpen, setIsOpen] = useState(false);

  const menuActive = () => {
    setIsOpen(!isOpen);
  };

  const menuClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'header';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute('id') || 'header';
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between p-4 bg-[#001F3F] text-white fixed top-0 left-0 w-full shadow-md z-50">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/">JD</Link>
      </div>

      {/* Bouton Hamburger pour mobile */}
      <button
        className="text-white text-2xl md:hidden focus:outline-none"
        onClick={menuActive}
        aria-label="Toggle Menu"
      >
        <Squeeze
          color="white"
          size={24}
          toggled={isOpen}
          toggle={menuActive}
          label="Toggle menu"
        />
      </button>

      {/* Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-full left-0 w-full bg-[#001F3F] md:static md:flex md:items-center md:justify-end md:w-auto`}
      >
        <Link
          href="#header"
          onClick={menuClose}
          className={`block px-4 py-2 text-lg hover:bg-[#003366] md:hover:bg-transparent md:hover:text-gray-400 relative`}
        >
          Home
          {activeSection === 'header' && (
            <motion.div
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </Link>
        <Link
          href="#me"
          onClick={menuClose}
          className={`block px-4 py-2 text-lg hover:bg-[#003366] md:hover:bg-transparent md:hover:text-gray-400 relative`}
        >
          Me
          {activeSection === 'me' && (
            <motion.div
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </Link>
        <Link
          href="#educations"
          onClick={menuClose}
          className={`block px-4 py-2 text-lg hover:bg-[#003366] md:hover:bg-transparent md:hover:text-gray-400 relative`}
        >
          Educations
          {activeSection === 'educations' && (
            <motion.div
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </Link>
        <Link
          href="#formations"
          onClick={menuClose}
          className={`block px-4 py-2 text-lg hover:bg-[#003366] md:hover:bg-transparent md:hover:text-gray-400 relative`}
        >
          Formations
          {activeSection === 'formations' && (
            <motion.div
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </Link>
        <Link
          href="#certificate"
          onClick={menuClose}
          className={`block px-4 py-2 text-lg hover:bg-[#003366] md:hover:bg-transparent md:hover:text-gray-400 relative`}
        >
          Certificate
          {activeSection === 'certificate' && (
            <motion.div
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </Link>
        <Link
          href="#work"
          onClick={menuClose}
          className={`block px-4 py-2 text-lg hover:bg-[#003366] md:hover:bg-transparent md:hover:text-gray-400 relative`}
        >
          Work
          {activeSection === 'work' && (
            <motion.div
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </Link>
        <Link
          href="#project"
          onClick={menuClose}
          className={`block px-4 py-2 text-lg hover:bg-[#003366] md:hover:bg-transparent md:hover:text-gray-400 relative`}
        >
          Project
          {activeSection === 'project' && (
            <motion.div
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </Link>
        <Link
          href="#contact"
          onClick={menuClose}
          className={`block px-4 py-2 text-lg hover:bg-[#003366] md:hover:bg-transparent md:hover:text-gray-400 relative`}
        >
          Contact
          {activeSection === 'contact' && (
            <motion.div
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </Link>
      </div>
    </nav>
  );
}