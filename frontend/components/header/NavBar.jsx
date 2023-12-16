import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import { AiOutlineArrowUp } from 'react-icons/ai';

const NavigationLinks = ({ links }) => {
  return (
    <div className="lg:hidden flex flex-col mt-4">
      {links.map((link, index) => (
        <Link
          key={index}
          className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-200 transition border-b2 cursor-pointer"
          to={link.path}
        >
          {link.display}
        </Link>
      ))}
    </div>
  );
};

const Navbar = () => {
  const navLinks = [
    {
      path: '/home',
      display: 'Home',
    },
    {
      path: '/doctors',
      display: 'Find a Doctor',
    },
    {
      path: '/services',
      display: 'Services',
    },
    {
      path: '/contact',
      display: 'Contact',
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      <div className="h-10vh flex flex-col lg:flex-row justify-between z-50 text-cyan-900 lg:py-5 px-20 py-4">
        <div className="flex items-center">
          <span className="text-3xl font-bold px--4">MediFleX</span>
          <div className="lg:hidden flex items-center justify-end font-normal">
            <button className="text-2xl px-4" onClick={toggleMobileMenu}>
              &#9776; {/* Hamburger Icon */}
            </button>
          </div>
        </div>
        {/* Mobile Menu (Right-aligned) */}
        {isMobileMenuOpen && <NavigationLinks links={navLinks} />}
        {/* Desktop Menu (Left-aligned) */}
        <div className="lg:flex md:flex hidden lg:justify-end">
          <ul className="lg:flex md:flex lg:space-x-4 md:space-x-4 lg:items-center">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-500 transition border-b2 cursor-pointer"
              >
                <Link to={link.path}>{link.display}</Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          className={`${
            isScrolled ? 'block' : 'hidden'
          } fixed bottom-4 right-4 bg-cyan-500 text-white py-2 px-4 rounded-full h-12 w-12 shadow-md`}
          onClick={scrollToTop}
        >
          <AiOutlineArrowUp />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
