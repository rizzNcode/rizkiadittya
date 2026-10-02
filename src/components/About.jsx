import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

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
        <div className="flex flex-col md:flex-row md:items-stretch gap-12">
          {/* image */}
          <div className="md:w-1/2 relative rounded-2xl overflow-hidden">
            <motion.img
              src={assets.aboutImg}
              alt="About"
              className="w-full h-auto md:absolute md:inset-0 md:h-full object-cover object-center"
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
            <div className="h-full flex flex-col justify-between gap-8 py-2 md:px-4">
              {/* Nama */}
              <div>
                <h1 className="text-3xl font-bold">
                  Rizki Adittya <span>Paturohman</span>
                </h1>
              </div>

              {/* Latar belakang */}
              <div className="border-l-4 border-primary pl-5">
                <h3 className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
                  Latar Belakang
                </h3>
                <p className="text-base text-gray-300 leading-relaxed text-justify">
                  Saya lahir di Bandung pada 22 April 2006 sebagai anak ke-2
                  dari 4 bersaudara. Saya lulusan SMK Negeri 1 Katapang. Tahun
                  pertama setelah lulus SMK, saya bekerja freelance sebagai
                  mobile developer (walaupun lebih banyak menganggurnya sih),
                  sebelum akhirnya melanjutkan kuliah di Universitas Teknologi
                  Bandung, program studi Informatika.
                </p>
              </div>

              {/* Kepribadian & hobi */}
              <div className="border-l-4 border-primary pl-5">
                <h3 className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
                  Kepribadian & Hobi
                </h3>
                <p className="text-base text-gray-300 leading-relaxed text-justify">
                  Saya orangnya cenderung introvert dan cenderung lebih nyaman
                  sendirian atau bersama beberapa teman dekat saja, tapi saya
                  juga bisa jadi lebih aktif kalau diperlukan. Hobi saya bermain
                  gitar & futsal (walaupun keduanya belum terlalu jago). Fun
                  fact, saya suka sekali berkendara motor malam-malam tepat
                  setelah hujan baru reda. Saya menyukai suasana itu, saya juga
                  pemandangan langit malam dan langit menjelang subuh.
                </p>
              </div>

              {/* Dunia software engineer */}
              <div className="border-l-4 border-primary pl-5">
                <h3 className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
                  Dunia Software Engineering
                </h3>
                <p className="text-base text-gray-300 leading-relaxed text-justify">
                  Di dunia software engineering, saya tertarik secara khusus
                  pada bidang mobile development, walaupun sekarang baru sebatas
                  mengeksplorasi cross-platform mobile development. Saya belum
                  pernah membuat aplikasi dengan bahasa native seperti Java,
                  Kotlin, atau Swift. Awal saya belajar coding kurang lebih
                  seperti kebanyakan orang, mulai dari dasar web development
                  dengan HTML, CSS, dan JavaScript, lalu mencoba-coba framework
                  seperti React, Next.js, dan belajar backend menggunakan
                  Node.js (Express). Saya juga pernah belajar PHP dan Laravel
                  waktu masih di SMK, tapi jujur saja, sekarang saya sudah tidak
                  memakai PHP lagi selain pada saat uji kompetensi di SMK. Saya
                  mulai belajar mobile development saat PKL di PT Jerbee. Di
                  sana saya pertama kali belajar Flutter, dan selama PKL saya
                  membuat satu aplikasi sampai selesai, mulai dari perancangan
                  sistem, desain UI/UX, sampai tahap testing dan deployment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
