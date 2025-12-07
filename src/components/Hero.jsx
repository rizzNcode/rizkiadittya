import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaInstagram, FaWhatsapp } from "react-icons/fa6";
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
          <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-primary rounded-full blur-2xl opacity-60"></div>

          {/* Gambar profil */}
          <motion.img
            className="relative mt-4 mb-4 w-64 h-64 md:w-80 md:h-80 object-cover object-[50%_30%] z-10 rounded-full animate-float"
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
            Saya muncul di dunia ini sekitar 19 tahun yang lalu. Saya merupakan
            si paling clean code garis keras.
          </p>
          <div className="flex flex-wrap items-center justify-start gap-3">
            <a
              href="https://wa.me/6287700314206"
              className="px-3 py-3 bg-green rounded-lg font-medium hover:bg-primary/20 transition duration-300 text-md md:text-base whitespace-nowrap flex items-center justify-center gap-2"
            >
              WhatsApp
              <FaWhatsapp size={22} color="white" />
            </a>
            <a
              href="https://instagram.com/rz.kiw"
              className="px-3 py-3 rounded-lg font-medium text-white text-md md:text-base
whitespace-nowrap flex items-center justify-center gap-2
bg-[linear-gradient(to_right,#d946ef,#ec4899)]
hover:opacity-80 transition duration-300"
            >
              Instagram
              <FaInstagram size={22} color="white" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
