import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-tp-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex-col md:flex flex-row items-center justify-between">
        {/* Right */}
        <div className="md:w-1/2 flex justify-center mt-8 mb-8 mt-8 relative">
          {/* Efek cahaya belakang */}
          <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-primary rounded-xl blur-2xl opacity-60"></div>

          {/* Gambar profil */}
          <motion.img
            className="relative mt-4 mb-4 w-64 h-64 md:w-80 md:h-80 object-cover object-[50%_20%] z-10 animate-float"
            src={assets.profileImg}
            alt="profile"
          />
        </div>

        {/* Left Sidebar */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hallo, Saya <span className="text-primary">Rizki Adittya</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 font-semibold typewriter">
            Mobile & Web Developer
          </h2>
          <p className="text-lg text-grey-300 mb-8">
            Awal kemunculan saya di dunia ini sekitar 19 tahun yang lalu. Saya
            merupakan si paling clean code garis keras.
          </p>
          <div className="flex flex-wrap items-center justify-start gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6287700314206"
              className="px-2 py-2 bg-green rounded-lg hover:bg-green/80 transition duration-300 flex items-center justify-center  shadow-[0_0_10px_rgba(255,255,255,0.15)] hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]"
            >
              <FaWhatsapp
                size={22}
                color="white"
                className="scale-130 shrink-0"
              />
            </a>

            {/* Instagram */}

            <a
              href="https://instagram.com/rz.kiw"
              className="px-2 py-2 rounded-lg font-medium text-white text-md md:text-base
whitespace-nowrap flex items-center justify-center gap-3
bg-[linear-gradient(to_right,#d946ef,#ec4899)]
hover:opacity-80 transition duration-300  shadow-[0_0_10px_rgba(255,255,255,0.15)] hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]"
            >
              <FaInstagram size={22} color="white" className="scale-130" />
            </a>

            {/* LinkedIn */}
            <a
              href=""
              className="px-2 py-2 bg-[#0A66C2] rounded-lg hover:bg-[#0A66C2]/80 transition duration-300 flex items-center justify-center  shadow-[0_0_10px_rgba(255,255,255,0.15)] hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]"
            >
              <FaLinkedinIn
                size={22}
                color="white"
                className="scale-130 shrink-0"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SirDodoll"
              className="px-2 py-2 rounded-lg bg-black/90 hover:bg-black/80 transition duration-300 flex items-center justify-center
             shadow-[0_0_10px_rgba(255,255,255,0.15)] hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]"
            >
              <FaGithub
                size={22}
                color="white"
                className="scale-130 shrink-0"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
