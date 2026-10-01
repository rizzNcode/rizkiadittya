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

import profileImg from "../assets/spiderman.jpg";
import aboutImg from "../assets/aboutBaru.jpg";
import projectImg1 from "../assets/mansio.png";
import projectImg2 from "../assets/id_music.png";
import projectImg3 from "../assets/goblog.png";
import projectImg4 from "../assets/coindex2.avif";
import { FaDesktop } from "react-icons/fa6";

export const assets = {
  profileImg,
  aboutImg,
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
