"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Layers, Code2, ArrowUpRight, Search } from "lucide-react";
import { PROJECTS_DATA } from "@/constants";

type ProjectItem = {
  title: string;
  image?: string;
  tags?: string[];
  description: string;
  demoLink?: string;
  repoLink?: string;
  category?: string;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function ProjectsPage() {
  const projects = (PROJECTS_DATA as ProjectItem[]) || [];

  return (
    <section className="min-h-screen py-2 px-4 md:px-8 bg-slate-50 relative">
      <div className="absolute top-0 inset-x-0 h-96 bg-linear-to-b from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">  
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sky-100 shadow-sm mb-2"
            >
                <Layers size={14} className="text-sky-500" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Semua Proyek
                </span>
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
            >
                Eksplorasi <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-blue-600">Karya Digital</span>
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            >
                Dokumentasi lengkap aplikasi yang telah saya bangun dengan fokus pada performa, skalabilitas, dan pengalaman pengguna yang presisi.
            </motion.p>
        </div>

        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
            {projects.map((project, index) => (
                <motion.article
                    key={index}
                    variants={cardVariants}
                    className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200/60 hover:border-sky-200 transition-all duration-500 hover:-translate-y-1"
                >
                    <div className="relative w-full h-52 overflow-hidden bg-slate-100 border-b border-slate-50">
                        {project.image ? (
                           <>
                             <Image 
                               src={project.image} 
                               alt={project.title}
                               fill
                               className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                             />
                             <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500" />
                           </>
                        ) : (
                           <div className="flex items-center justify-center w-full h-full text-slate-300 bg-slate-50">
                             <Code2 size={48} className="opacity-30" />
                           </div>
                        )}
                        
                        {project.demoLink && project.demoLink !== "#" && (
                            <div className="absolute top-3 right-3 translate-y-10px opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                <span className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-600 shadow-sm border border-emerald-100">
                                    <span className="relative flex h-1.5 w-1.5">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                    </span>
                                    Live Demo
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col grow p-6">
                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-sky-600 transition-colors duration-300 flex items-center justify-between">
                                {project.title}
                                <ArrowUpRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-sky-500" />
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                                {project.description}
                            </p>
                        </div>

                        <div className="mt-auto mb-6">
                            <div className="flex flex-wrap gap-2">
                                {project.tags?.slice(0, 4).map((tag, idx) => (
                                    <span key={idx} className="text-[10px] font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100 group-hover:border-sky-100 group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors duration-300">
                                            {tag}
                                    </span>
                                ))}
                                {(project.tags?.length || 0) > 4 && (
                                    <span className="text-[10px] font-semibold text-slate-400 px-1 py-1">
                                            +{(project.tags?.length || 0) - 4}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-5 border-t border-slate-50">
                            {project.demoLink && project.demoLink !== "#" ? (
                                <Link 
                                    href={project.demoLink} 
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-semibold hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300"
                                >
                                    <ExternalLink size={14} /> Live Demo
                                </Link>
                            ) : (
                                <button disabled className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-400 text-xs font-semibold cursor-not-allowed">
                                    <ExternalLink size={14} /> Offline
                                </button>
                            )}
                            
                            {project.repoLink && project.repoLink !== "#" ? (
                                <Link 
                                    href={project.repoLink} 
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
                                >
                                    <Github size={14} /> Code
                                </Link>
                            ) : (
                                <button disabled className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-100 text-slate-300 text-xs font-semibold cursor-not-allowed">
                                    <Code2 size={14} /> Private
                                </button>
                            )}
                        </div>
                    </div>
                </motion.article>
            ))}
        </motion.div>

        {projects.length === 0 && (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 px-6 bg-white rounded-2xl border border-dashed border-slate-200"
            >
                <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                    <Search className="text-slate-400" size={24} />
                </div>
                <h3 className="text-base font-bold text-slate-800">Belum ada proyek ditemukan</h3>
                <p className="text-slate-500 text-sm mt-2 max-w-sm mx-auto">
                    Data proyek sedang disiapkan atau belum ditambahkan ke dalam database.
                </p>
            </motion.div>
        )}
      </div>
    </section>
  );
}