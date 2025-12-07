import React, { useState, useEffect } from "react";

const sections = ["home", "tentang", "skill", "projek", "kontak"];

const MobileNavbar = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    setActiveSection(id);
    setTimeout(onClose, 150); 
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      ></div>

      <div className="fixed top-16 right-0 h-[calc(100vh-4rem)] w-3/4 max-w-[280px] bg-dark-100/95 z-50 shadow-lg flex flex-col pt-10 px-8 gap-2 rounded-l-2xl">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => handleClick(id)}
            className={`w-full py-2 px-4 text-left text-lg rounded-lg transition-all duration-300 ${
              activeSection === id
                ? "bg-primary text-white scale-[1.03] shadow-md"
                : "text-gray-200 hover:text-primary hover:bg-primary/10"
            }`}
          >
            {id === "home"
              ? "Beranda"
              : id === "tentang"
              ? "Tentang Saya"
              : id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </>
  );
};

export default MobileNavbar;
