import React from "react";

const ProjectCard = ({ title, description, image, tech, tall }) => {
  return (
    <div className="bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer flex flex-col h-full">
      {/* Gambar */}
      <img src={image} alt={title} className="w-full h-auto object-cover" />

      {/* Konten */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>

        {/* Tag Teknologi */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark-400 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Tombol */}
        <div className="mt-auto">
          {/* <a className="block text-center px-4 py-2 bg-primary rounded-lg font-medium hover:bg-primary/50 transition duration-300">
            Lihat
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
