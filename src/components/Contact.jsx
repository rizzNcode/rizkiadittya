import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import React from "react";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="kontak"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold mb-4 text-primary">
          Kontak
        </h2>
        <p className="text-center font-light max-w-4xl text-3xl mx-auto mb-16 text-gray-200">
          Hubungi Saya
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-16">
          {/* Email */}
          <div className="flex flex-col items-center bg-dark-300 p-6 rounded-xl hover:-translate-y-2 transition">
            <FaEnvelope className="text-primary text-3xl mb-3" />
            <h4 className="text-lg font-semibold">Email</h4>
            <p className="text-gray-400 text-sm">rizkiadittya2006@gmail.com</p>
          </div>

          {/* Telepon */}
          <div className="flex flex-col items-center bg-dark-300 p-6 rounded-xl hover:-translate-y-2 transition">
            <FaPhoneAlt className="text-primary text-3xl mb-3" />
            <h4 className="text-lg font-semibold">Telepon</h4>
            <p className="text-gray-400 text-sm">+62 877 0031 4206</p>
          </div>

          {/* Lokasi */}
          <div className="flex flex-col items-center bg-dark-300 p-6 rounded-xl hover:-translate-y-2 transition">
            <FaMapMarkerAlt className="text-primary text-3xl mb-3" />
            <h4 className="text-lg font-semibold">Lokasi</h4>
            <p className="text-gray-400 text-sm">Bandung, Jawa barat</p>
          </div>
        </div>

        {/* Form Contact */}
        <div className="max-w-xl mx-auto bg-dark-300 p-8 rounded-2xl shadow-lg">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nama */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2 font-medium">Nama</label>
              <input
                type="text"
                placeholder="Masukkan nama "
                className="bg-dark-400 p-3 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="Masukkan email "
                className="bg-dark-400 p-3 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Pesan */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-gray-300 mb-2 font-medium">Pesan</label>
              <textarea
                rows="5"
                placeholder="Tulis pesan..."
                className="bg-dark-400 p-3 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>

            {/* Tombol kirim */}
            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/70 transition"
              >
                <FaPaperPlane /> Kirim Pesan
              </button>
            </div>
          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-10">
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-primary text-2xl transition"
            >
              <FaLinkedin className="text-[#0077B5]" />
            </a>
             <a
              href="https://wa.me/6287700314206"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-primary text-2xl transition"
            >
              <FaWhatsapp className="text-[#25D366]" />
            </a>
            <a
              href="https://instagram.com/rz.kiw"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-primary text-2xl transition"
            >
              <FaInstagram className="text-[#E1306C]" />
            </a>
            <a
              href="https://github.com/sir_dodoll"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-primary text-2xl transition"
            >
              <FaGithub />
            </a>
           
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
