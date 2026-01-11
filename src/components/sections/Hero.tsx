"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TechStack } from "@/components/sections/TechStack";

export function Hero() {
  return (
    <section className="relative flex flex-col justify-center min-h-[90vh] py-2 px-4 md:px-0 overflow-hidden">
      
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl -z-10 opacity-60 -translate-x-1/3" />

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto mb-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-100 tracking-wide">
              Tersedia untuk Proyek Baru
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Membangun Sistem Web <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-indigo-600">
              Modern & Berdampak.
            </span>
          </h1>

          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Saya <span className="font-bold text-slate-900">Wadidur Rahman</span>. Fullstack Developer yang berpengalaman mengubah tantangan teknis menjadi aplikasi web yang <span className="font-semibold text-slate-900">efisien</span> dan <span className="font-semibold text-slate-900">skalabel</span>. Spesialisasi dalam ekosistem <span className="font-semibold text-blue-600">Next.js</span> & <span className="font-semibold text-indigo-600">Laravel</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link href="/projects" className="group flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-md font-bold hover:bg-blue-700 transition-all shadow-lg active:translate-y-0.5">
              Lihat Hasil Karya
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link href="/resume" className="flex items-center gap-2 bg-white text-slate-700 border border-slate-300 px-8 py-3.5 rounded-md font-bold hover:bg-slate-50 hover:border-slate-400 transition-all active:translate-y-0.5 shadow-sm">
              <Download size={18} />
              Unduh CV
            </Link>

            <div className="flex items-center gap-2 px-4 border-l border-slate-200 ml-2">
              <Link href="https://github.com" target="_blank" className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors">
                <Github size={20} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="p-2 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-75 h-95 md:w-95 md:h-120">
            <div className="absolute inset-0 bg-blue-600 rounded-md rotate-6 opacity-10 translate-x-4 translate-y-4" />
            <div className="absolute inset-0 border-2 border-slate-200 rounded-md -rotate-3 -translate-x-2.5 -translate-y-2.5" />
            
            <div className="relative w-full h-full rounded-md overflow-hidden shadow-2xl bg-white border-4 border-white">
              <Image 
                src="/profil.png" 
                alt="Wadidur Rahman"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-md shadow-xl border border-slate-100 z-10 max-w-40"
            >
               <p className="text-[10px] font-bold text-slate-400 mb-1">Core Competency</p>
               <p className="text-xs font-bold text-slate-800 leading-tight">Clean Code & Scalable Architecture</p>
            </motion.div>
          </div>
        </motion.div>

      </div>

      <div className="w-full mt-auto">
        <div className="text-center mb-6">
             <p className="text-xs font-bold text-slate-400 tracking-[0.2em]">Technologies & Tools</p>
        </div>
        <TechStack />
      </div>

    </section>
  );
}