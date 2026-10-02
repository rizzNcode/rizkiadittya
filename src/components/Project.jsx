import { motion } from "framer-motion";
import React from "react";
import { projects } from "../assets/assets";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="project"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Proje
          <span className="text-primary">ct</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          {" "}
          Berikut merupakan beberapa project yang telah saya kerjakan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Project card */}
          {projects.map((Project, index) => (
            <div>
              <ProjectCard key={index} {...Project}
               />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
