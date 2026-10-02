import React from "react";
import { navItems } from "./Navbar";

const MobileNavbar = ({ activeSection, handleSectionClick, onClose }) => {
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      ></div>

      <div className="fixed top-16 right-0 h-[calc(100vh-4rem)] w-3/4 max-w-[280px] bg-dark-100/95 z-50 shadow-lg flex flex-col pt-10 px-8 gap-2 rounded-l-2xl">
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              handleSectionClick(id);
            }}
            className={`w-full py-2 px-4 text-left text-lg rounded-lg transition-all duration-300 ${
              activeSection === id
                ? "bg-primary text-white scale-[1.03] shadow-md"
                : "text-gray-200 hover:text-primary hover:bg-primary/10"
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
};

export default MobileNavbar;
