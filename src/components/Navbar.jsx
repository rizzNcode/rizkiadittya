import React, { useState, useEffect } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import MobileNavbar from "./MobileNavbar";

// Satu daftar section untuk desktop & mobile
export const navItems = [
  { id: "home", label: "Beranda" },
  { id: "tentang", label: "Tentang Saya" },
  { id: "skill", label: "Skill" },
  { id: "project", label: "Project" }, // samakan dengan id di section Project
  { id: "pesan", label: "Pesan" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Deteksi section yang sedang tampil saat scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      // section dianggap aktif saat melewati area tengah layar
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSectionClick = (id) => {
    setActiveSection(id);
    setShowMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-3xl font-bold text-white">
            Rizki <span className="text-primary">Adittya</span>
            <span>.</span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-10">
            {navItems.map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(id);
                  }}
                  className={`relative transition duration-300 hover:text-primary group ${
                    isActive ? "text-primary" : "text-white/80"
                  }`}
                >
                  <span>{label}</span>
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile icon */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              aria-label={showMenu ? "Tutup menu" : "Buka menu"}
              className="text-white text-2xl p-2"
            >
              {showMenu ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {showMenu && (
        <MobileNavbar
          activeSection={activeSection}
          handleSectionClick={handleSectionClick}
          onClose={() => setShowMenu(false)}
        />
      )}
    </>
  );
};

export default Navbar;