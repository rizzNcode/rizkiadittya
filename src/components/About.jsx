import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";
import { div } from "framer-motion/m";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="tentang"
      className="py-4 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        {/* Heading */}
        <h2 className=" text-3xl font-bold text-center mb-4">
          Tentang <span className="text-primary">Saya</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          ketahui lebih lanjut tentang latar belakang saya
        </p>

        {/* image + my journey */}
        <div className="flex flex-col md:flex-row items-center gap-12 ">
          {/* image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden flex justify-center">
            <motion.img
              src={assets.aboutImg}
              alt="About"
              className="w-full h-auto md:h-[900px] object-cover object-center"
            />
          </div>

          {/* Text content */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h1 className="text-2xl font-semibold mb-6">Perjalanan Saya</h1>
              <p className="text-gray-300 mb-6">
                Sebenarnya dibagian ini niatnya mau di isi seputar perjalanan
                hidup dari bayi sampe sekarang, cuma males ngetik, nanti saja
                bagian ini saya update lagi.
              </p>
              <p className="text-gray-300 mb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quo
                atque perspiciatis autem, eligendi cum nam numquam ut deserunt
                eos sint perferendis laborum tempore mollitia, incidunt rem
                dolores provident veniam.
              </p>

              {/* Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="text-primary text-4xl">
                      <data.icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <div></div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
