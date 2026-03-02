import {  FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/myway2.png';
import aboutImg from '../assets/aboutBaru.jpg';
import projectImg1 from '../assets/shopme.png';
import projectImg2 from '../assets/idMusik.png';
import projectImg3 from '../assets/haha.png';
import projectImg4 from '../assets/coindex2.avif';
import { FaDesktop, FaMobile, FaWebAwesome, FaWebflow } from 'react-icons/fa6';


export const assets = {
    profileImg, aboutImg,
}


export const aboutInfo = [
   {
  icon: FaMobileAlt,
  title: "Mobile Application",
  description:
    "Mengembangkan aplikasi mobile yang ringan, cepat, dan nyaman digunakan.",
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
  title: "Mockup Design",
  description:
    "Membuat perancangan desain mockup yang rapi dan modern sebagai gambaran awal sebelum proses pengembangan dimulai.",
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
  title: 'Mobile Development',
  icon: FaMobileAlt,
  description:
    'Mengembangkan aplikasi mobile lintas platform dengan tools modern untuk hasil yang cepat dan stabil.',
  tags: ['Flutter', 'React Native']
},
{
  title: 'Frontend Development',
  icon: FaReact,
  description:
    'Membangun antarmuka yang responsif dan interaktif menggunakan berbagai framework modern.',
  tags: ['React', 'Vue.js', 'TypeScript']
},
{
  title: 'Backend Development',
  icon: FaServer,
  description:
    'Membuat aplikasi server-side yang kuat serta RESTful API yang aman dan mudah diakses.',
  tags: ['Node.js', 'Express', 'Laravel']
},
{
  title: 'Database Management',
  icon: FaDatabase,
  description:
    'Merancang dan mengoptimalkan database agar performa tetap stabil dan mampu menangani skala besar.',
  tags: ['PostgreSQL', 'MySQL', 'Firebase', 'Supabase']
},
{
  title: 'Tools & Technologies',
  icon: FaTools,
  description:
    'Kumpulan tools dan teknologi yang mendukung proses kerja saya dalam pengembangan aplikasi.',
  tags: ['Git & GitHub', 'VsCode', 'Figma', 'Android Studio']
}

];



export const projects = [
 {
  title: "ShopeMe - Ecommerce Platform",
  description:
    "Platform ecommerce lengkap dengan fitur keranjang belanja, autentikasi user, dan sistem pembayaran yang terintegrasi.",
  image: projectImg1,
  tech: ["Flutter", "Firebase", "Stripe"],
  icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
  demo: "#",
  code: "#",
},

{
  title: "ID Musik - Booking Studio Musik",
  description:
    "Aplikasi untuk memudahkan pengguna dalam melakukan booking studio musik secara online, lengkap dengan jadwal, detail ruangan, dan manajemen pemesanan.",
  image: projectImg2,
  tech: ["Flutter", "Supabase"],
  icons: [FaMobileAlt, FaCloud, FaDatabase],
  demo: "#",
  code: "#",
},
{
  title: "Athletic - Fitness Tracker",
  description:
    "Aplikasi mobile untuk memantau aktivitas olahraga, asupan nutrisi, dan perkembangan kesehatan secara berkala.",
  image: projectImg3,
  tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
  icons: [FaReact, FaDatabase],
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

