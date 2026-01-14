import React from "react";
import { 
  Globe, Code2, Terminal, Cpu, Layout, 
  Database, Server, Command,
  Home, User, FolderGit2, Award, LucideIcon
} from "lucide-react";

// --- 1. NAVIGATION DATA ---
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
    slug: "portfolio-v2",
    title: "Portfolio v2.0",
    description: "Website portofolio modern dengan performa tinggi, animasi interaktif Framer Motion, dan struktur kode modular.",
    tags: ["Next.js 15", "Tailwind CSS", "TypeScript"],
    image: "/project-portfolio.png",
    demoLink: "/",
    repoLink: "https://github.com/wadidurrahman",
    color: "bg-emerald-600",
    isFeatured: true,
  },
  {
    slug: "api-gateway-service",
    title: "E-Commerce API Gateway",
    description: "Backend Microservices untuk menangani ribuan request transaksi e-commerce dengan keamanan JWT dan Rate Limiting.",
    tags: ["Node.js", "Express", "Redis", "Docker"],
    image: "/project-api.png", 
    demoLink: "#",
    repoLink: "https://github.com/wadidurrahman",
    color: "bg-violet-600",
    isFeatured: true,
  },
];

// =========================================
// 4. SERVICES DATA
// =========================================
export const SERVICES_DATA = [
  {
    title: "Web Development",
    icon: <Globe size={24} />,
    description: "Membangun website yang responsif, cepat, dan fungsional menggunakan teknologi modern seperti Next.js dan Laravel.",
  },
  {
    title: "UI/UX Implementation",
    icon: <Layout size={24} />, // Ganti Server dengan Layout agar relevan dengan UI
    description: "Mengubah desain menjadi kode antarmuka (Frontend) yang presisi, interaktif, dan nyaman dilihat dengan Tailwind CSS.",
  },
  {
    title: "Backend & API",
    icon: <Server size={24} />,
    description: "Merancang logika server dan REST API sederhana yang aman untuk kebutuhan integrasi data antara Frontend dan Backend.",
  },
  {
    title: "Database Management",
    icon: <Database size={24} />,
    description: "Merancang struktur database (ERD) yang rapi dan relasional untuk memastikan data aplikasi tersimpan dengan baik.",
  },
];

// =========================================
// 5. EDUCATION DATA (Tambahkan ini)
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
// 5. CERTIFICATION DATA (MBKM & Bootcamp)
// =========================================
export const CERTIFICATION_DATA = [
  {
    title: "Studi Independen - Web Development",
    issuer: "Infinite Learning (Kampus Merdeka)",
    year: "2023",
    credentialLink: "#", 
    description: "Program intensif pengembangan web fullstack. Berhasil membangun proyek akhir dengan kolaborasi tim dan penerapan best practice industri.",
    skills: ["React", "Responsive Design", "Teamwork"]
  },
  {
    title: "Cloud Computing Professional",
    issuer: "Alibaba Cloud",
    year: "2023",
    credentialLink: "#",
    description: "Mendalami infrastruktur cloud, manajemen server ECS, dan deployment aplikasi modern di infrastruktur cloud berskala global.",
    skills: ["Cloud Architecture", "ECS", "DevOps"]
  },
  {
    title: "Fullstack Web Developer",
    issuer: "Udemy Bootcamp",
    year: "2022",
    credentialLink: "#",
    description: "Menyelesaikan kursus komprehensif mencakup fundamental HTML, CSS, Javascript, hingga Backend modern dengan Node.js.",
    skills: ["Javascript", "Node.js", "MongoDB"]
  },
];

