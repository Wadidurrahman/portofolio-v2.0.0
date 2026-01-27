"use client";

import { motion, Variants } from "framer-motion";
import { SERVICES_DATA } from "@/constants";

export function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-4 px-4 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block mb-3"
            >
                <span className="py-1 px-3 rounded-md bg-white border border-sky-100 text-sky-600 font-bold text-[10px] tracking-widest uppercase shadow-sm">
                    Keahlian & Layanan
                </span>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight"
            >
                Solusi Digital <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-blue-600">Terintegrasi</span>
            </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative h-48 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-sky-200/50 overflow-hidden transition-all duration-500 ease-out"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 group-hover:scale-90 group-hover:opacity-0">
                <div className="w-10 h-10 mb-4 text-sky-600 bg-sky-50 border border-sky-100 rounded-lg flex items-center justify-center transition-transform duration-500">
                   {service.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-800 text-center uppercase tracking-wide">
                  {service.title}
                </h3>
                <div className="mt-4 w-6 h-0.5 bg-slate-200 rounded-full" />
              </div>

         
              <div className="absolute inset-0 bg-linear-to-b from-white via-sky-50 to-sky-100 p-6 flex items-center justify-center text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-10">
                <div>
                    <h3 className="text-sky-800 font-bold text-xs mb-2 uppercase tracking-wider">
                        {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">
                        {service.description}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}