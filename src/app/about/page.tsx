"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Download, GraduationCap, Calendar, MapPin, Briefcase } from "lucide-react"; 
import { EDUCATION_DATA, EXPERIENCE_DATA } from "@/constants"; 
import Link from "next/link";

type EducationItem = {
  institution: string;
  degree: string;
  year: string;
  description: string;
};

type ExperienceItem = {
  company: string;
  role: string;
  year: string;
  description: string;
};

export default function AboutPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const } 
    }
  };

  return (
    <section className="relative min-h-full py-8 px-4 md:px-8 overflow-hidden">
      

      <div className="absolute top-0 left-0 w-30 h-96 bg-blue-100/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-7 order-2 lg:order-1"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Halo, Saya <br />
              <span className="text-blue-600">
                Wadidur Rahman.
              </span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="space-y-5 text-slate-600 text-lg leading-relaxed">
              <p>
                <strong>Fresh Graduate S1 Informatika</strong> dari Universitas Alma Ata. Saya fokus membangun aplikasi web modern menggunakan <strong>Next.js</strong> dan <strong>Laravel</strong>, dengan ketertarikan khusus pada integrasi <strong>AI</strong>.
              </p>
              <p>
                Siap beradaptasi dengan cepat dan memiliki rencana strategis untuk memperluas keahlian ke ranah <strong>Mobile Development</strong> di masa depan.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
               <Link 
                  href="/cv-wadidur.pdf" 
                  target="_blank"
               >
                 <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3.5 rounded-md font-bold hover:bg-blue-700 transition-colors shadow-lg text-sm cursor-pointer"
                 >
                    <Download size={18} /> Unduh CV
                 </motion.div>
               </Link>
               
               <motion.div 
                  className="flex items-center gap-2 px-5 py-3.5 rounded-md border border-slate-200 text-slate-700 text-sm font-semibold bg-white shadow-sm"
               >
                  <MapPin size={18} className="text-blue-600" />
                  Yogyakarta, Indonesia
               </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative w-full max-w-sm aspect-4/5">
                <div className="absolute top-4 -right-4 w-full h-full border-2 border-slate-200 rounded-md z-0 hidden md:block" />
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-slate-100 rounded-md z-0" />
                
                <div className="relative w-full h-full rounded-md overflow-hidden shadow-xl z-10 bg-slate-50 border border-slate-100">
                  <Image 
                    src="/aboutme.png" 
                    alt="Wadidur Rahman" 
                    fill 
                    className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-in-out" 
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 to-transparent pointer-events-none" />
                </div>
            </div>
          </motion.div>
        </div>

        {/* --- EXPERIENCE SECTION (BARU) --- */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10 border-b border-slate-200 pb-4">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-md border border-indigo-100">
                    <Briefcase size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Pengalaman Kerja</h2>
            </motion.div>

            <div className="relative border-l-2 border-slate-200 ml-3.5 space-y-12 py-2">
                {EXPERIENCE_DATA.map((job: ExperienceItem, index: number) => (
                    <motion.div 
                        key={index} 
                        variants={itemVariants}
                        className="relative pl-8 group"
                    >
                        {/* Timeline Dot */}
                        <span className="absolute -left-2.25 top-1.5 h-4 w-4 bg-white border-2 border-slate-400 group-hover:border-indigo-600 group-hover:bg-indigo-600 transition-colors duration-300 rotate-45" />
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                {job.role}
                            </h3>
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200 w-fit">
                                <Calendar size={14} />
                                {job.year}
                            </div>
                        </div>
                        
                        <p className="text-indigo-600 font-semibold text-sm mb-3">{job.company}</p>
                        <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                            {job.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>

        {/* --- EDUCATION SECTION --- */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10 border-b border-slate-200 pb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-md border border-blue-100">
                    <GraduationCap size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Riwayat Pendidikan</h2>
            </motion.div>

            <div className="relative border-l-2 border-slate-200 ml-3.5 space-y-12 py-2">
                {EDUCATION_DATA.map((edu: EducationItem, index: number) => (
                    <motion.div 
                        key={index} 
                        variants={itemVariants}
                        className="relative pl-8 group"
                    >
                        {/* Timeline Dot */}
                        <span className="absolute -left-2.25 top-1.5 h-4 w-4 bg-white border-2 border-slate-400 group-hover:border-blue-600 group-hover:bg-blue-600 transition-colors duration-300 rotate-45" />
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {edu.institution}
                            </h3>
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200 w-fit">
                                <Calendar size={14} />
                                {edu.year}
                            </div>
                        </div>
                        
                        <p className="text-blue-600 font-semibold text-sm mb-3">{edu.degree}</p>
                        <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                            {edu.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>

      </div>
    </section>
  );
}