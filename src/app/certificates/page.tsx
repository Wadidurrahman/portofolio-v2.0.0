"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { Award, Calendar, ExternalLink, X, FileText, Hash, ChevronRight, Sparkles } from "lucide-react";
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
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 }
    }
  };

  const certificates = CERTIFICATION_DATA as unknown as CertificationItem[];

  return (
    <section className="min-h-screen py-1  px-4 md:px-8 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-96 h-96 rounded-full bg-blue-100/40 blur-[80px]" />
        <div className="absolute top-[20%] -left-[10%] w-72 h-72 rounded-full bg-sky-100/40 blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-10">
        
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm text-blue-600 text-xs font-bold tracking-wide uppercase"
          >
            <Sparkles size={14} className="text-blue-500 fill-blue-500" />
            Profesional & Akademik
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight"
          >
            Sertifikasi & <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-sky-500">Pencapaian</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-sm md:text-base leading-relaxed"
          >
            Validasi kompetensi resmi dan jejak partisipasi pengembangan teknologi.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group h-full flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-40 bg-slate-50 overflow-hidden border-b border-slate-100">
                {cert.image ? (
                  <Image 
                    src={cert.image} 
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[12px_12px]" />
                    <Award className="w-12 h-12 text-blue-200 group-hover:text-blue-400 transition-colors duration-300 transform group-hover:scale-110" />
                  </div>
                )}
                
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2 py-1 bg-white/90 backdrop-blur-md text-slate-600 text-[10px] font-bold rounded-md shadow-sm border border-slate-100 flex items-center gap-1">
                    <Calendar size={10} className="text-amber-700" />
                    {cert.year}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col grow">
                <div className="mb-3">
                  <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded mb-2">
                    {cert.issuer}
                  </span>
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-3 flex">
                  {cert.description}
                </p>

                <div className="pt-3 border-t border-slate-50 mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills?.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
                    {cert.skills && cert.skills.length > 3 && (
                      <span className="text-[10px] font-medium text-slate-400 px-1 py-0.5">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => setSelectedCert(cert)}
                    className="w-full py-2 rounded-lg bg-white border border-blue-100 text-blue-600 text-xs font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 flex items-center justify-center gap-1.5 group/btn"
                  >
                    Lihat Detail
                    <ChevronRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
              />
              
              <motion.div 
                layoutId={`modal-${selectedCert.title}`}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-lg bg-white rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[85vh]"
              >
                <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-white sticky top-0 z-20">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Award size={16} className="text-blue-500" />
                    <span className="text-xs font-bold uppercase tracking-wide">Detail Dokumen</span>
                  </div>
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="overflow-y-auto p-5 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                  <div className="w-full bg-slate-50 rounded-lg border border-slate-100 overflow-hidden mb-6 group relative aspect-2/1 flex items-center justify-center">
                    {selectedCert.image ? (
                      <Image 
                        src={selectedCert.image} 
                        alt={selectedCert.title}
                        fill
                        className="object-contain p-2"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-slate-300 gap-2">
                        <FileText size={40} className="text-slate-200" />
                        <span className="text-xs font-medium">Pratinjau tidak tersedia</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-5">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-full border border-blue-100">
                          {selectedCert.issuer}
                        </span>
                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full border border-slate-200">
                          {selectedCert.year}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-slate-800 leading-tight">
                        {selectedCert.title}
                      </h2>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                      <h4 className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-2">
                        <Hash size={14} className="text-blue-500" />
                        Deskripsi
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed text-justify">
                        {selectedCert.description}
                      </p>
                    </div>

                    {selectedCert.skills && selectedCert.skills.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold text-slate-800 mb-2 uppercase tracking-wide">
                          Kompetensi
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedCert.skills.map((skill, idx) => (
                            <span 
                              key={idx} 
                              className="px-2.5 py-1 bg-white text-slate-600 text-[10px] font-semibold rounded border border-slate-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-2 sticky bottom-0 z-20">
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    Tutup
                  </button>
                  {selectedCert.credentialLink && selectedCert.credentialLink !== "#" && (
                    <a 
                      href={selectedCert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5"
                    >
                      <ExternalLink size={14} />
                      Buka Dokumen
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