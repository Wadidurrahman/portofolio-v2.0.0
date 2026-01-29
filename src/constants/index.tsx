import React from "react";
import { 
  Globe, Code2, Terminal, Cpu, Layout, 
  Database, Server, Command,
  Home, User, FolderGit2, Award, LucideIcon
} from "lucide-react";


export interface NavItemType {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItemType[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Me", href: "/about", icon: User },
   { label: "Sertifikat", href: "/certificates", icon: Award },
  { label: "Projects", href: "/projects", icon: FolderGit2 },
];

// --- 2. TECH STACK DATA ---
export interface TechItem {
  name: string;
  icon: React.ReactNode;
}

export const TECH_ROW_1: TechItem[] = [
  { name: "Next.js", icon: <Globe size={16} /> },
  { name: "React", icon: <Code2 size={16} /> },
  { name: "TypeScript", icon: <Cpu size={16} /> },
  { name: "Tailwind", icon: <Layout size={16} /> },
  { name: "Laravel", icon: <Terminal size={16} /> },
  { name: "CodeIgniter", icon: <Terminal size={16} /> },
];

export const TECH_ROW_2: TechItem[] = [
  { name: "MySQL", icon: <Database size={16} /> },
  { name: "Git", icon: <Command size={16} /> },
];

// --- 3. PROJECTS DATA ---
export const PROJECTS_DATA = [
  {
    slug: "Milano laundry",
    title: "Milano Laundry Management System",
    description: "Sistem informasi manajemen laundry komprehensif untuk operasional kasir, pelacakan pesanan real-time, dan laporan keuangan.",
    tags: ["React.js", "Laravel", "TailwindCSS", "MySQL"],
    image: "/ImageProject/Milanolaundry.png",
    demoLink: "#",
    repoLink: "https://github.com/wadidurrahman",
    color: "bg-blue-600",
    isFeatured: true,
  },
  {
    slug: "Juragan Ikan", 
    title: "Sistem Juragan Ikan",
    description: "Sistem untuk manajemen penjualan untuk bisnis empang perikanan di tulungagung.",
    tags: ["React.js","TailwindCSS", "Express.js", "Framotion", "MongoDB"],
    image: "/ImageProject/juraganikan.png",
    demoLink: "https://juraganikan-4czua4jwp-wadiddrrhmns-projects.vercel.app/",
    repoLink: "https://github.com/Wadidurrahman/juragan_ikan.git",
    color: "bg-violet-600",
    isFeatured: true,
  },
    {
    slug: "Pengembangan Estimator.id",
    title: "Estimator.id - Pengembangan Fitur RAB",
    description: "Pengembangan Fitur RAB pada sistem estimator.id pada perhitungan AHS yang mengiplementasikan rumus excel yang sebelumnya menggunakan spredsheet di rubah menjadi sistem otomatis menghitung sesaui rumus dan akurat .",
    tags: ["React.js", "Tailwind CSS", "CodeIgniter", "MySQL"],
    image: "/ImageProject/estimator.png",
    demoLink: "estimator.id",
    repoLink: "https://github.com/Wadidurrahman/Pengembangan-Estimator.id.git",
    color: "bg-emerald-600",
    isFeatured: true,
  },
  {
    title: "ShifTara", 
    category: "Shiftara - AI-Integrated Smart Shift Scheduler",
    date: "Jan 2026",
    image: "/ImageProject/shiftara.png",
    tech: ["React.js", "TailwindCSS", "Nest.js", "AI Integration", "Supabase"],
    description: "SHIFTARA adalah Alat Web Penjadwal Shift Cerdas Terintegrasi AI untuk mempermudah penjadwalan.",
    demoLink: "https://guntner.com",
    repoLink: "",
    isPrivate: true,
  },
  {
    title: "Sistem CarproBan",
    category: "Sistem Kasir Carproban Kasihan Bantul Yogyakarta",
    date: "Sep 2025",
    image: "/ImageProject/CarproBan.png",
    tech: ["CodeIgniter", "TailwindCSS" ],
    description: "Sistem yang dirancang untuk kebutuhan kasir CarproBan untuk kemudahan management stok di beberapa cabang .",
    demoLink: "https://Carproban.id",
    repoLink: "https://github.com/Wadidurrahman",
    isPrivate: false,
  },
  
];

// =========================================
// 4. SERVICES DATA
// =========================================
export const SERVICES_DATA = [
  {
    title: "Fullstack Web Development",
    icon: <Globe size={24} />,
    description: "Membangun website dari nol baik dari sisi frontend hingga backend.",
  },
  {
    title: "UI/UX Implementation",
    icon: <Layout size={24} />,
    description: "Mengubah desain menjadi kode antarmuka (Frontend) yang presisi, interaktif, dan nyaman dilihat dengan Tailwind CSS.",
  },
  {
    title: "AI Integration & Smart Solutions",
    icon: <Server size={24} />,
    description: "Mengintegrasikan solusi AI untuk fitur pintar seperti chatbot cerdas atau analisis otomatis.",
  },
  {
    title: "Maintenance & Optimization",
    icon: <Database size={24} />,
    description: "Layanan jangka panjang (Refactoring, Update, Bug Fixes, dan Data Base Tuning).",
  },
];

// =========================================
// 5. EDUCATION DATA 
// =========================================
export const EDUCATION_DATA = [
  {
    institution: "Universitas Alma Ata Yogyakarta",
    degree: "S1 Informatika",
    year: "2021 - 2025",
    description: "Lulusan dengan fokus pada pengembangan perangkat lunak (Software Engineering). Telah menyelesaikan seluruh kewajiban akademik dan siap berkontribusi di industri profesional.",
  },
];

// =========================================
// 5. EXPERIENCE DATA (MAGANG BICON) - BARU
// =========================================
export const EXPERIENCE_DATA = [
  {
    company: "PT Baracipta Esa Engineering (Beecon)",
    role: "IT Internship - Fullstack Developer",
    year: "November 2024 - Februari 2025", 
    description: "Turut serta dalam pengembangan fitur Rencana Anggaran Biaya (RAB) pada platform Estimator.id. Berkontribusi dalam penulisan kode (coding) sebagai untuk memastikan fitur berfungsi sesuai kebutuhan sistem.",
    skills: ["CodeIgniter","MySQL"],
  },
   {
    company: "CarProBan (Bengkel Mobil)",
    role: "Perancangan Sistem Kasir & Stock Gudang Ban- Fullstack Developer",
    year: "2025  ", 
    description: "Perancangan sistem kasir & pembaruan stock Gudang Ban di beberapa cabang dengan berkolaborasi dengan asistem manager. Berkontribusi dalam penulisan kode (coding) sebagai Fullsatck Developer untuk memastikan fitur berfungsi sesuai kebutuhan sistem.",
    skills: ["CodeIgniter","MySQL"],
  },
];

// =========================================
// 5. CERTIFICATION DATA 
// =========================================
export const CERTIFICATION_DATA = [
  {
    title: "Studi Independen Ang-6 - Fullstack Web Development",
    issuer: "Infinite Learning (Kampus Merdeka)",
    year: "2023",
    image: "/Sartifikat/MSIB.png", 
    description: "Program intensif pengembangan web fullstack. Berhasil membangun proyek akhir dengan kolaborasi tim dan penerapan best practice industri.",
    skills: ["React", "Exspress.js", "Responsive Design", "Teamwork"]
  },
   {
    title: "Infinite Learning Bactsh-6 - Fullstack Web Development",
    issuer: "Infinite Learning ",
    year: "2023",
    image: "/Sartifikat/InfiniteLearning.png", 
    description: "Program intensif pengembangan web fullstack. Berhasil membangun proyek akhir dengan kolaborasi tim dan penerapan best practice industri.",
    skills: ["React", "Exspress.js", "Responsive Design", "Teamwork"]
  },
  {
    title: "Alibaba Cloud - Cloud Computing",
    issuer: "Alibaba Cloud",
    year: "2023",
    image: "/Sartifikat/Sartifikatalibabacloud.jpg", 
    description: "Mendalami infrastruktur cloud, manajemen server ECS, dan deployment aplikasi modern di infrastruktur cloud berskala global.",
    skills: ["Cloud Architecture", "ECS", "DevOps"]
  },
  {
    title: "Mastering React.js & Node.js",
    issuer: "Mastering React.js & Node.js firebase authentication",
    year: "2025",
    image: "/Sartifikat/udemy.png", 
    description: "Menyelesaikan kursus komprehensif mencakup pengembangan authentication menggunakan Firebase, manajemen state, dan pembuatan RESTful API dengan Node.js.",
    skills: ["Javascript", "Node.js", "MongoDB"]
  },
   {
    title: "Code Politan - Dasar Pemrograman Web",
    issuer: "Code Politan CSS",
    year: "2024",
    image: "/Sartifikat/codepolitan.png", 
    description: "Menyelesaikan kursus komprehensif mencakup pengembangan authentication menggunakan Firebase, manajemen state, dan pembuatan RESTful API dengan Node.js.",
    skills: ["Javascript", "Node.js", "MongoDB"]
  },
  {
    title: "HKI - Hak Kekayaan Intelektual",
    issuer: "Sartifikat HKI",
    year: "2024",
    image: "/Sartifikat/HKI.png", 
    description: "•	Pemegang Hak Cipta: Inovasi Rolade Lele sebagai Solusi Gizi untuk Mengatasi Stunting dan Meningkatkan Kemandirian UMKM",
    skills: ["jurnal artikel"]
  },
  
];

