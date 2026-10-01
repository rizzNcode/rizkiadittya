import { motion } from "framer-motion";
import React from "react";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      id="skill"
      className="bg-dark-100 py-20"
    >
      <div className="container px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="text-primary">Skill</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Masih pemula bg
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              {/* Header: Icon + Title */}
              <div className="flex items-center mb-4">
                <skill.icon className="w-12 h-12 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4 leading-relaxed tracking-wide max-w-xl">
                {skill.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-dark-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
