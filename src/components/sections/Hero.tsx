"use client";

import { motion, Variants, TargetAndTransition } from "framer-motion";
import { Mail, Terminal, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TechStack } from "@/components/sections/TechStack"; 

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};
const floatAnimation: TargetAndTransition = {
  y: [0, -12, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const floatAnimationDelayed: TargetAndTransition = { 
  y: [0, 10, 0], 
  transition: { 
    duration: 5, 
    repeat: Infinity, 
    ease: "easeInOut", 
    delay: 1 
  } 
};

export function Hero() {
  return (
    <section className="relative flex flex-col justify-center min-h-[95vh] py-8 lg:py-2 px-4 md:px-8 overflow-hidden bg-white">
      
     
      <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-50/80 rounded-full blur-3xl -z-10 opacity-70 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-blue-50/80 rounded-full blur-3xl -z-10 opacity-70 -translate-x-1/3 translate-y-1/4" />

      <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center w-full max-w-7xl mx-auto mb-10 relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-12">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50/50 px-5 py-1 rounded-full border border-emerald-100 tracking-wide">
              Terbuka Untuk Bekerja
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Mari Bangun Produk Digital  <br className="hidden md:block" />
          
            <span className="bg-linear-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              yang Lebih Baik, Bersama.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Halo! Saya <span className="font-bold text-slate-900">Wadidur Rahman</span>. Saya seorang Fullstack Developer yang hobi ngerapiin kode dan bikin aplikasi web jadi <span className="font-semibold text-indigo-600">super kencang</span>. Intinya, saya rakit ide kamu jadi kenyataan lewat kodingan yang bersih.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link href="/contact" className="group flex items-center gap-2 bg-blue-00 text-white px-7 py-3.5 rounded-lg font-medium hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-slate-200">
              <Mail size={18} className="group-hover:translate-x-0.5 transition-transform" />
              <span>Hubungi Saya</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative py-8 lg:py-0"
        >
          <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-112.5">
            
            <div className="absolute inset-0 bg-indigo-600 rounded-3xl rotate-6 opacity-5 translate-x-4 translate-y-4" />
            <div className="absolute inset-0 border-2 border-slate-100 rounded-3xl -rotate-3 -translate-x-2 -translate-y-2" />
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 bg-white border border-slate-100">
              <Image 
                src="/profil.png" 
                alt="Wadidur Rahman - Fullstack Developer"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <motion.div 
              animate={floatAnimation}
              className="absolute -bottom-6 -left-4 md:-left-12 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 z-20 flex items-center gap-4 pr-8"
            >
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Terminal size={22} />
                </div>
                <div>
                    <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Focus</p>
                    <p className="text-sm font-bold text-slate-800">Clean Code</p>
                </div>
            </motion.div>

            <motion.div 
              animate={floatAnimationDelayed}
              className="absolute -top-6 -right-4 md:-right-8 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 z-20 flex items-center gap-4 pr-8"
            >
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    <Rocket size={22} />
                </div>
                <div>
                    <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Performance</p>
                    <p className="text-sm font-bold text-slate-800">Software Dev</p>
                </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="w-full text-center"
      >
        <span className="py-1 px-3 rounded-md bg-white border border-sky-100 text-sky-600 font-bold text-[10px] tracking-widest uppercase shadow-sm">
            Tech Stack
        </span>
        <TechStack />
      </motion.div>
    </section>
  );
}