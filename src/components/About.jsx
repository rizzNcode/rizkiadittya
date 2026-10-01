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
          Latar belakang, hobby dan lain lain
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
              <h1 className="text-2xl font-semibold mb-6">
                Rizki Adittya Paturohman
              </h1>
              <p className="text-base text-gray-300 mb-5 leading-relaxed tracking-wide max-w-xl">
                22 April 2006 merupakan awal kemunculan saya di dunia ini, saya
                lahir di Bandung, merupakan anak ke-2 dari 4 bersaudara. Saya
                alumni SDN Pangauban 2, SMPN 1 Katapang dan SMKN 1 Katapang,
                tahun pertama setelah saya lulus SMK saya kerja freelance jadi
                mobile developer (walaupun lebih banyak nganggurnya sih),
                sebelum akhirnya saya masuk ke Universitas Teknologi Bandung,
                prodi Informatika.
              </p>
              <p className="text-base text-gray-300 mb-5 leading-relaxed tracking-wide max-w-xl">
                Saya orangnya cenderung introvert dan cenderung lebih nyaman
                ngobrol sama 1-4 orang saja daripada ngobrol sama banyak orang
                sekaligus, bukan karena tidak suka atau malu, tapi ntahlah, itu
                kayak otomatis aja, kalau saya ada dikerumunan banyak orang,
                saya cenderung jarang sekali aktif, kecuali kalau memang ada
                paksaan yang mengharuskan saya nimbrung.
              </p>
              <p className="text-base text-gray-300 mb-10 leading-relaxed tracking-wide max-w-xl">
                Hobby saya futsal sama main gitar (walaupun keduanya tidak
                jago), selain itu, saya juga sangat suka sekali petrichor, aroma
                tanah yang muncul saat / setelah hujan, terus saya suka sama
                apalagi ya? entahlah, saya suka sekali banyak hal, udara &
                pemandangan langit sebelum subuh, Barcelona, ayam geprek,
                pesawat masih banyak lagi. Jadi seperti itulah kurang lebih,
                sekian terimakasih.
              </p>

              {/* Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-3 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="text-primary text-5xl flex items-center justify-center mb-4">
                      <data.icon />
                    </div>
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
