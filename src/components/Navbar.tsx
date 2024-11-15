'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuActive = () => {
    setIsOpen(!isOpen);
  };

  const menuClose = () => {
    setIsOpen(false);
  }

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
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-full left-0 w-full bg-[#001F3F] md:static md:flex md:items-center md:justify-end md:w-auto`}
      >
        <Link
          href="/"
          onClick={menuClose}
          className="block px-4 py-2 text-lg hover:bg-[#003366] md:hover:bg-transparent md:hover:text-gray-400"
        >
          Home
        </Link>
        <Link
          href="/me"
          onClick={menuClose}
          className="block px-4 py-2 text-lg hover:bg-[#003366] md:hover:bg-transparent md:hover:text-gray-400"
        >
          Me
        </Link>
        <Link
          href="/work"
          onClick={menuClose}
          className="block px-4 py-2 text-lg hover:bg-[#003366] md:hover:bg-transparent md:hover:text-gray-400"
        >
          Work
        </Link>
        <Link
          href="/project"
          className="block px-4 py-2 text-lg hover:bg-[#003366] md:hover:bg-transparent md:hover:text-gray-400"
        >
          Project
        </Link>
        <Link
          href="/contact"
          onClick={menuClose}
          className="block px-4 py-2 text-lg hover:bg-[#003366] md:hover:bg-transparent md:hover:text-gray-400"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
