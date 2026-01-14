"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Github, Calendar, ArrowRight, Code2, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- DATA DUMMY ---
const projects = [
  {
    title: "Sistem Manajemen KIP-K",
    category: "Web Application",
    date: "Jan 2026",
    image: "/project-1.jpg", 
    tech: ["Next.js", "Tailwind", "MySQL"],
    description: "Platform analisis data statistik untuk memantau korelasi antara literasi keuangan dan gaya hidup mahasiswa.",
    demoLink: "https://demo-project.com",
    repoLink: "https://github.com/username/repo",
    isPrivate: false,
  },
  {
    title: "E-Commerce Dashboard",
    category: "Dashboard UI",
    date: "Des 2025",
    image: "/project-2.jpg",
    tech: ["React", "Redux", "Node.js"],
    description: "Dashboard admin high-performance untuk memantau stok dan penjualan real-time dengan grafik interaktif.",
    demoLink: "https://demo-shop.com",
    repoLink: "https://github.com/username/shop",
    isPrivate: false,
  },
  {
    title: "Company Profile PT Güntner",
    category: "Landing Page",
    date: "Nov 2025",
    image: "/project-3.jpg",
    tech: ["Laravel", "Bootstrap", "jQuery"],
    description: "Redesign website korporat dengan fokus pada SEO dan load speed, meningkatkan retensi pengunjung.",
    demoLink: "https://guntner.com",
    repoLink: "",
    isPrivate: true,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }, // Stagger lebih cepat agar responsif
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  },
};

export function FeaturedProjects() {
  return (
    <section className="py-8 px-4 md:px-8 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-64 bg-liner-to-b from-white to-slate-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-3"
            >
               <span className="py-1 px-3 rounded-md bg-white border border-sky-100 text-sky-600 font-bold text-[10px] tracking-widest uppercase shadow-sm">
                  Portfolio & Karya
               </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight"
            >
              Karya Nyata. <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-blue-600">Dampak Nyata.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-slate-500 text-lg leading-relaxed"
            >
              Koleksi proyek pilihan yang dikembangkan dengan presisi, fokus pada performa, dan pengalaman pengguna terbaik.
            </motion.p>
          </div>
          
          {/* Tombol Desktop */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="hidden md:block"
          >
            <Link href="/projects" className="group flex items-center gap-2 text-slate-600 font-semibold hover:text-sky-600 transition-colors">
              <span>Lihat Semua Proyek</span>
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-sky-100 group-hover:text-sky-600 transition-all">
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* --- Projects Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.article 
              key={index}
              variants={cardVariants}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-200 shadow-sm hover:shadow-2xl hover:shadow-sky-100/50 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 z-10 transition-colors duration-500" />
                
                {/* Badge Category */}
                <div className="absolute top-4 left-4 z-20">
                   <span className="bg-white/95 backdrop-blur-sm text-slate-700 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm border border-slate-100 flex items-center gap-1.5">
                     <Layers size={10} className="text-sky-500" />
                     {project.category}
                   </span>
                </div>

                {/* Placeholder Image Logic (Ganti dengan Image Next.js jika sudah ada gambar) */}
                 <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-300">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                 </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col grow">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} /> {project.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="mt-auto mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-[10px] font-semibold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-5 border-t border-slate-50">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-sky-600 text-white text-xs font-semibold py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-sky-500/20"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  
                  {project.isPrivate ? (
                      <button 
                        disabled
                        className="flex items-center justify-center gap-2 bg-slate-50 text-slate-400 text-xs font-semibold py-2.5 rounded-lg cursor-not-allowed border border-slate-100"
                      >
                        <Code2 size={14} /> Private
                      </button>
                   ) : (
                    <a 
                      href={project.repoLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-xs font-semibold py-2.5 rounded-lg transition-all"
                    >
                      <Github size={14} /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 md:hidden">
            <Link 
                href="/projects" 
                className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl shadow-sm hover:bg-slate-50 transition-colors"
            >
              Lihat Semua Proyek <ArrowRight size={16} />
            </Link>
        </div>

      </div>
    </section>
  );
}