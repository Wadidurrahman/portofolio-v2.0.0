"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { Award, Calendar, ExternalLink, X, FileText, Hash, ChevronRight, Eye } from "lucide-react";
import { CERTIFICATION_DATA } from "@/constants";

type CertificationItem = {
  title: string;
  issuer: string;
  year: string;
  credentialLink?: string; 
  description: string;
  skills?: string[];
  image?: string; 
};

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const headerChildVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 100
        }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
        opacity: 0, 
        y: 50,
        filter: "blur(10px)", 
        scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      scale: 1,
      transition: { 
          type: "spring",
          damping: 25,
          stiffness: 120
      } 
    }
  };

  const shimmerVariants = {
    initial: { x: "-100%", opacity: 0 },
    hover: { 
        x: "150%", 
        opacity: 1,
        transition: { 
            duration: 0.8, 
            ease: "easeInOut" as const,
            repeat: 0
        } 
    }
  };

  const certificates = CERTIFICATION_DATA as unknown as CertificationItem[];

  return (
    <section className="min-h-full pt-6 md:pt-10 pb-12 px-4 md:px-8 bg-slate-50/50">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 max-w-3xl border-l-4 border-blue-600 pl-6 relative"
        >
            <div className="absolute -left-20 -top-20 w-40 h-40 bg-blue-100 rounded-full blur-[100px] opacity-50 pointer-events-none" />

            <motion.div variants={headerChildVariants} className="text-blue-600 font-bold tracking-wider uppercase text-sm">
               Profesional & Akademik
            </motion.div>
            
            <motion.h1 
                variants={headerChildVariants}
                className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight"
            >
                Sertifikasi, Publikasi <br />
                & Pengakuan Industri.
            </motion.h1>
            
            <motion.p 
                variants={headerChildVariants}
                className="text-slate-600 text-lg leading-relaxed"
            >
                Dokumentasi validasi kompetensi, hak kekayaan intelektual (HKI), serta jejak partisipasi dalam pengembangan teknologi dan riset ilmiah.
            </motion.p>
        </motion.div>

        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {certificates.map((cert, index) => (
                <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className="group relative bg-white border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col h-full overflow-hidden"
                >
                    <motion.div 
                        variants={shimmerVariants}
                        className="absolute inset-0 -skew-x-12 z-0 pointer-events-none bg-linear-to-r from-transparent via-white/40 to-transparent w-full h-full"
                    />

                    <div className="h-44 bg-slate-100 relative overflow-hidden border-b border-slate-100 flex items-center justify-center z-10 group-hover:bg-blue-50/50 transition-colors duration-500">
                        {cert.image ? (
                             <Image 
                               src={cert.image} 
                               alt={cert.title}
                               fill
                               className="object-cover group-hover:scale-105 transition-transform duration-700"
                             />
                        ) : (
                            <>
                                <div className="absolute inset-0 bg-slate-200/50 pattern-grid-lg opacity-20" />
                                <div className="relative z-10 p-4 text-center">
                                     <motion.div 
                                        whileHover={{ scale: 1.1, rotate: 5 }} 
                                        transition={{ type: "spring", stiffness: 300 }}
                                     >
                                        <Award className="w-12 h-12 text-slate-400 mx-auto mb-3 group-hover:text-blue-600 transition-colors duration-500" />
                                     </motion.div>
                                     <span className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-white/80 px-3 py-1 rounded-full backdrop-blur-xs">
                                        {cert.issuer}
                                     </span>
                                </div>
                            </>
                        )}
                        
                        {cert.image && <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />}
                    </div>

                    <div className="p-7 flex flex-col grow relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-2.5 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-md border border-slate-200 group-hover:border-blue-200 group-hover:text-blue-700 transition-colors">
                                {cert.year}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors duration-300">
                            {cert.title}
                        </h3>

                        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                            {cert.description}
                        </p>

                        <div className="mt-auto space-y-5">
                            {cert.skills && cert.skills.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {cert.skills.slice(0, 3).map((skill, idx) => (
                                        <span key={idx} className="text-[10px] font-medium text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                                            {skill}
                                        </span>
                                    ))}
                                    {cert.skills.length > 3 && (
                                        <span className="text-[10px] font-medium text-slate-400 px-1 py-1">
                                            +{cert.skills.length - 3}
                                        </span>
                                    )}
                                </div>
                            )}

                            <button 
                                onClick={() => setSelectedCert(cert)}
                                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-bold 
                                hover:bg-blue-600 hover:text-white hover:border-blue-600 
                                transition-all duration-300 group/btn active:scale-[0.98]"
                            >
                                <Eye size={16} />
                                Lihat Detail
                                <ChevronRight size={16} className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>

        <AnimatePresence>
            {selectedCert && (
                <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />
                    
                    {/* PERBAIKAN UKURAN POPUP DI SINI */}
                    <motion.div 
                        layoutId={`card-${selectedCert.title}`}
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1, 
                            y: 0,
                            transition: { 
                                type: "spring", 
                                stiffness: 350, 
                                damping: 25 
                            } 
                        }}
                        exit={{ 
                            opacity: 0, 
                            scale: 0.95, 
                            y: 20,
                            transition: { duration: 0.2 } 
                        }}
                        // PERUBAHAN: max-w-2xl menjadi max-w-xl dan tambah max-h-[80vh]
                        className="relative w-full max-w-xl max-h-[80vh] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-white sticky top-0 z-10">
                            <h3 className="font-bold text-slate-900 truncate pr-4">Detail Dokumen</h3>
                            <button 
                                onClick={() => setSelectedCert(null)}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-red-500"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="overflow-y-auto p-6 md:p-8">
                            <div className="w-full h-48 md:h-64 bg-slate-100 rounded-2xl mb-8 flex items-center justify-center border-2 border-dashed border-slate-200 relative group overflow-hidden">
                                {selectedCert.image ? (
                                    <Image 
                                        src={selectedCert.image} 
                                        alt={selectedCert.title}
                                        fill
                                        className="object-contain"
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] opacity-50" />
                                        <div className="relative text-center space-y-2 z-10">
                                            <FileText className="w-16 h-16 text-slate-300 mx-auto group-hover:scale-110 group-hover:text-blue-500 transition-all duration-300" />
                                            <p className="text-sm text-slate-400 font-medium">Pratinjau Belum Tersedia</p>
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">{selectedCert.title}</h2>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                                        <span className="flex items-center gap-1.5 font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                            <Award size={16} />
                                            {selectedCert.issuer}
                                        </span>
                                        <span className="flex items-center gap-1.5 font-medium">
                                            <Calendar size={16} />
                                            {selectedCert.year}
                                        </span>
                                    </div>
                                </div>

                                <div className="prose prose-slate prose-sm max-w-none">
                                    <h4 className="text-slate-900 font-bold mb-3 flex items-center gap-2 text-base">
                                        <Hash size={18} className="text-blue-500" />
                                        Deskripsi & Cakupan
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed text-base">
                                        {selectedCert.description}
                                    </p>
                                </div>

                                {selectedCert.skills && selectedCert.skills.length > 0 && (
                                    <div>
                                        <h4 className="text-slate-900 font-bold mb-4 text-sm uppercase tracking-wide">
                                            Kompetensi Terkait
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedCert.skills.map((skill, idx) => (
                                                <span key={idx} className="px-3 py-1.5 bg-white text-slate-700 text-sm font-bold rounded-md border border-slate-200 shadow-xs">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3 sticky bottom-0">
                            <button 
                                onClick={() => setSelectedCert(null)}
                                className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-xl transition-colors"
                            >
                                Tutup
                            </button>
                            {selectedCert.credentialLink && selectedCert.credentialLink !== "#" && (
                                <a 
                                    href={selectedCert.credentialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2.5 text-sm font-bold bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20"
                                >
                                    <ExternalLink size={18} />
                                    Buka Dokumen Asli
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>

      </div>
    </section>
  );
}