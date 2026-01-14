"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-700 z-0">
         <div className="absolute inset-0 opacity-10 bg-radial-gradient(#ffffff33_1px,transparent_1px) background-size:20px_20px" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight"
        >
          Punya Ide Proyek Menarik? <br />
          Mari Kita Wujudkan.
        </motion.h2>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.3 }}
        >
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-xl active:scale-95"
            >
              <Mail size={20} />
              Hubungi Saya
              <ArrowRight size={20} />
            </Link>
        </motion.div>
      </div>
    </section>
  );
}