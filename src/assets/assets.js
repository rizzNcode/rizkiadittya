import {
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

import profileImg from "../assets/rizki.jpg";
import profileSpidermanImg from "../assets/spiderman.jpg";
import aboutImg from "../assets/aboutBaru.jpg";
import projectImg1 from "../assets/mansio.png";
import projectImg2 from "../assets/id_music.png";
import projectImg3 from "../assets/goblog.png";
import projectImg4 from "../assets/coindex2.avif";
import { FaDesktop } from "react-icons/fa6";

// Playlist
import Appatie from "../assets/cover/appetie.png";
import Uyi2 from "../assets/cover/uyi2.png";
import Colourway from "../assets/cover/colourway.png";
import Only from "../assets/cover/only.png";
import Best from "../assets/cover/best.png";
import Intro from "../assets/cover/intro.png";
import Nov from "../assets/cover/nov.png";
import All from "../assets/cover/all.png";
import You from "../assets/cover/you.png";
import Love from "../assets/cover/love.png";
import Be from "../assets/cover/be.png";

export const assets = {
  profileImg,
  aboutImg,
  profileSpidermanImg,
  Appatie,
  Uyi2,
  Only,
  Colourway,
  Best,
  Intro,
  Nov,
  All,
  Love,
  Be,
};

export const aboutInfo = [
  {
    icon: FaMobileAlt,
    title: "Mobile & Web Development",
    // description:
    //   "Mengembangkan aplikasi mobile yang ringan, cepat, dan nyaman digunakan.",
    color: "text-primary",
  },
  {
    icon: FaDesktop,
    title: "Website Application",
    description:
      "Membangun website yang tidak hanya menarik secara visual, tetapi juga fungsional, responsif, dan mudah dikelola untuk mendukung kebutuhan bisnis.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design & System Architecture",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "Menuliskan kode yang bersih, terstruktur, dan mudah dipahami agar pengembangan jangka panjang tetap efisien dan terjaga kualitasnya.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Mobile Development",
    icon: FaMobileAlt,
    description:
      "Mengembangkan aplikasi mobile lintas platform dengan tools modern untuk hasil yang cepat dan stabil.",
    tags: ["Flutter", "React Native"],
  },
  {
    title: "Web Development",
    icon: FaDesktop,
    description:
      "Membangun antarmuka yang responsif dan interaktif menggunakan berbagai framework modern.",
    tags: ["React", "Next.JS", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description:
      "Membuat aplikasi server-side yang kuat serta RESTful API yang aman dan mudah diakses.",
    tags: ["Node.js", "Express"],
  },
  {
    title: "Database",
    icon: FaDatabase,
    description:
      "Merancang dan mengoptimalkan database agar performa tetap stabil dan mampu menangani skala besar.",
    tags: ["PostgreSQL", "MySQL", "NeonDB", "Supabase", "Firebase"],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Kumpulan tools dan teknologi yang mendukung proses kerja saya dalam pengembangan aplikasi.",
    tags: ["GitHub", "VsCode", "Figma", "Android Studio", "Postman"],
  },
];

export const projects = [
  {
    title: "Mansio - Real Estate Marketplace",
    description:
      "Platform jual beli properti online yang menyediakan informasi lengkap tentang properti dan layanan penjualan yang terintegrasi.",
    image: projectImg1,
    tech: ["React Native Expo", "Supabase", "Zustand"],
    demo: "#",
    code: "#",
  },

  {
    title: "ID Music - Booking Studio Musik",
    description:
      "Aplikasi untuk memudahkan pengguna dalam melakukan booking studio musik secara online, lengkap dengan jadwal, detail ruangan, dan manajemen pemesanan.",
    image: projectImg2,
    tech: ["Flutter", "Supabase"],
    demo: "#",
    code: "#",
  },
  {
    title: "GoBlog - Personal Blog",
    description:
      "Platform blog pribadi yang memungkinkan pengguna untuk menulis, mengelola, dan berbagi konten dengan mudah, dilengkapi dengan fitur pencarian dan kategori untuk memudahkan pengguna mencari suatu konten tertentu.",
    image: projectImg3,
    tech: ["Next.js", "Supabase", "Express"],
    demo: "#",
    code: "#",
  },
  {
    title: "Coindex - Crypto Tracking",
    description:
      "Aplikasi pelacak harga cryptocurrency secara real-time dengan tampilan yang ringan dan informatif.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "CoinGecko API"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
];

//   { title: "Judul Lagu 1", artist: "Artis 1", cover: "", link: "" },
//   { title: "Judul Lagu 2", artist: "Artis 2", cover: "", link: "" },
//   { title: "Judul Lagu 3", artist: "Artis 3", cover: "", link: "" },
//   { title: "Judul Lagu 4", artist: "Artis 4", cover: "", link: "" },
//   { title: "Judul Lagu 5", artist: "Artis 5", cover: "", link: "" },
//   { title: "Judul Lagu 6", artist: "Artis 6", cover: "", link: "" },
//   { title: "Judul Lagu 7", artist: "Artis 7", cover: "", link: "" },
//   { title: "Judul Lagu 8", artist: "Artis 8", cover: "", link: "" },
//   { title: "Judul Lagu 9", artist: "Artis 9", cover: "", link: "" },
//   { title: "Judul Lagu 10", artist: "Artis 10", cover: "", link: "" },
// ];

export const playlistData = [
  {
    title: "Only",
    artist: "Lee Hi",
    cover: Only,
    link: "https://open.spotify.com/track/6TBJkXHPhu3EsMk1bshwuI",
  },
  {
    title: "November Rain",
    artist: "Guns N' Roses",
    cover: Nov,
    link: "https://open.spotify.com/search/november%20rain",
  },
  {
    title: "Colourway",
    artist: "Novo Amor",
    cover: Colourway,
    link: "https://open.spotify.com/track/2oa53bhiNPCz2CGh26AYxi",
  },
  {
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    cover: Appatie,
    link: "https://open.spotify.com/track/7snQQk1zcKl8gZ92AnueZW",
  },
  {
    title: "All of My Days",
    artist: "KIM SE JEONG",
    cover: All,
    link: "https://open.spotify.com/track/2RBuzNyLuV1jXU8qi84Hiy",
  },
  {
    title: "You Are My Everything",
    artist: "GUMMY",
    cover: You,
    link: "https://open.spotify.com/track/4s80CRYk3rRPZE56NvmFi7",
  },
  {
    title: "Best Part (feat. H.E.R)",
    artist: "Daniel Caesar, H.E.R.",
    cover: Best,
    link: "https://open.spotify.com/track/1Q7EgiMOuwDcB0PJC6AzON",
  },

  {
    title: "love.",
    artist: "wave to earth",
    cover: Love,
    link: "https://open.spotify.com/track/5mtTAScDytxMMqZj14NmlN",
  },
  {
    title: "Intro (end of the world)",
    artist: "Ariana Grande",
    cover: Intro,
    link: "https://open.spotify.com/track/2o1pb13quMReXZqE7jWsgq",
  },

  {
    title: "Beautiful",
    artist: "Meego",
    cover: Be,
    link: "https://open.spotify.com/track/2OeBu4HHB54fOFAdlgK3Mf",
  },
];
