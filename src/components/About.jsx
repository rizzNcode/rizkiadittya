import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets, playlistData } from "../assets/assets";

// Cover album, atau kotak placeholder kalau cover kosong.
// Kalau lagu punya link, muncul ikon play saat di-hover.
const Cover = ({ src, alt, playable }) => (
  <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-lg overflow-hidden">
    {src ? (
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    ) : (
      <div
        className="w-full h-full bg-white/10 text-primary text-xl flex items-center justify-center"
        aria-hidden="true"
      >
        ♪
      </div>
    )}
    {playable && (
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-primary"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    )}
  </div>
);

// Satu baris lagu. Jadi link kalau ada URL, kalau tidak jadi div biasa.
const SongRow = ({ song, index }) => {
  const playable = Boolean(song.link);
  const base =
    "group flex items-center gap-3 sm:gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-2.5 transition-all duration-300";
  const hover = playable
    ? "hover:border-primary/50 hover:bg-white/[0.06] hover:translate-x-1"
    : "";

  const content = (
    <>
      <span
        className={`w-6 sm:w-8 text-center text-lg font-bold tabular-nums ${
          index < 3 ? "text-primary" : "text-gray-500"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <Cover src={song.cover} alt={song.title} playable={playable} />
      <div className="min-w-0 flex-1">
        <p className="font-semibold leading-snug break-words group-hover:text-primary transition-colors">
          {song.title}
        </p>
        <p className="text-sm text-gray-400 break-words">{song.artist}</p>
      </div>
      {playable && (
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 shrink-0 fill-none stroke-gray-500 group-hover:stroke-primary transition-colors"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 17L17 7M8 7h9v9" />
        </svg>
      )}
    </>
  );

  return playable ? (
    <a
      href={song.link}
      target="_blank"
      rel="noreferrer"
      aria-label={`Putar ${song.title} oleh ${song.artist}`}
      className={`${base} ${hover}`}
    >
      {content}
    </a>
  ) : (
    <div className={base}>{content}</div>
  );
};

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

        {/* Top 10 playlist */}
        <div className="mt-16 border-l-4 border-primary pl-5">
          <h3 className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Top 10 Playlist
          </h3>
          <ol className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col md:grid-rows-5 gap-x-8 gap-y-3">
            {playlistData.map((song, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: "easeOut",
                  delay: (i % 5) * 0.08,
                }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <SongRow song={song} index={i} />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
