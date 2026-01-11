"use client";

import { motion } from "framer-motion";
import { 
  Code2, Terminal, Database, Cpu, Globe, 
  Layout, Server, Smartphone, Layers, Command 
} from "lucide-react";

const row1 = [
  { name: "Next.js", icon: <Globe size={16} /> },
  { name: "React", icon: <Code2 size={16} /> },
  { name: "Laravel", icon: <Terminal size={16} /> },
  { name: "TypeScript", icon: <Cpu size={16} /> },
  { name: "Tailwind", icon: <Layout size={16} /> },
];

const row2 = [
  { name: "MySQL", icon: <Database size={16} /> },
  { name: "Docker", icon: <Server size={16} /> },
  { name: "Framer Motion", icon: <Layers size={16} /> },
  { name: "Git", icon: <Command size={16} /> },
  { name: "Mobile", icon: <Smartphone size={16} /> },
];

export function TechStack() {
  return (
    <div className="w-full py-8 space-y-4 overflow-hidden select-none relative">
      
      <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-slate-50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-slate-50 to-transparent z-10" />

      {/* Baris 1: Kiri ke Kanan */}
      <div className="flex w-full">
        <motion.div 
          className="flex gap-4 pr-4"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {/* Duplikasi array berulang kali agar tidak putus */}
          {[...row1, ...row1, ...row1, ...row1, ...row1, ...row1, ...row1, ...row1].map((tech, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-md whitespace-nowrap text-sm font-semibold text-slate-600 shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors">
              {tech.icon} {tech.name}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Baris 2: Kanan ke Kiri */}
      <div className="flex w-full">
        <motion.div 
          className="flex gap-4 pr-4"
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {[...row2, ...row2, ...row2, ...row2, ...row2, ...row2, ...row2, ...row2].map((tech, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-md whitespace-nowrap text-sm font-semibold text-slate-600 shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors">
              {tech.icon} {tech.name}
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}