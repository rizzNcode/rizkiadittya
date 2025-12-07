import React, { useState, useEffect } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const handleSectionClick = (href) => {
    setActiveSection(href);
    setShowMenu(false); 
    if (href.startsWith('#')) {
        const element = document.getElementById(href.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };


  return (
    <>
      <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="#" className="text-3xl font-bold text-white">
              Rizki <span className="text-primary">Adittya</span><span>.</span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-10">
            {['#home', '#tentang', '#skill', '#projek', '#kontak'].map((href, index) => {
                const label = ['Beranda', 'Tentang Saya', 'Skill', 'Projek', 'Kontak'][index];
                const isActive = activeSection === href;

                return (
                    <a 
                        key={href}
                        href={href} 
                        onClick={() => handleSectionClick(href)}
                        // Class desktop bersyarat: text-primary jika aktif, text-white/80 jika tidak
                        className={`relative transition duration-300 hover:text-primary group 
                                    ${isActive ? 'text-primary' : 'text-white/80'}`}
                    >
                        <span>{label}</span>
                        <span className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300 
                                            ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                        />
                    </a>
                );
            })}
          </div>

          {/* Mobile icon */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMenu(prev => !prev)}
              aria-label={showMenu ? "Tutup menu" : "Buka menu"}
              className="text-white text-2xl p-2"
            >
              {showMenu ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu component */}
      {showMenu && (
        <MobileNavbar 
          activeSection={activeSection}
          handleSectionClick={handleSectionClick}
        />
      )}
    </>
  );
};

export default Navbar;