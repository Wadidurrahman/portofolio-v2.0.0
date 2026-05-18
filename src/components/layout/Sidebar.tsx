"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Download, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { NAV_ITEMS, NavItemType } from "@/constants";

export default function Sidebar() {
  const pathname = usePathname();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <aside className="hidden md:flex sticky top-0 left-0 h-screen w-72 bg-white border-r border-slate-200 shadow-sm z-50 flex-col">
        <div className="p-6 pb-4 flex flex-col items-center text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-24 w-24 mb-4 group cursor-pointer"
          >
             <div className="absolute inset-0 rounded-full border border-dashed border-slate-300 group-hover:border-blue-500 group-hover:rotate-180 transition-all duration-700"></div>
             <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-white shadow-md">
               <Image 
                 src="/profil.png" 
                 alt="Wadidur Rahman"
                 fill
                 className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                 priority
               />
             </div>
          </motion.div>
          
          <h1 className="text-lg font-bold text-slate-900 leading-tight">Wadidur Rahman</h1>
          <p className="text-xs font-bold text-blue-600 tracking-widest uppercase mt-1 bg-blue-50 px-2 py-1 rounded border border-blue-100">
              Fullstack Developer
          </p>

          <div className="flex items-center gap-2 mt-4">
              <SocialLink href="https://github.com" icon={Github} />
              <SocialLink href="https://linkedin.com" icon={Linkedin} />
          </div>
        </div>

        <motion.nav 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 overflow-y-auto px-4 py-4 space-y-1 scrollbar-hide"
        >
          {NAV_ITEMS.map((item: NavItemType) => {
            const isActive = pathname === item.href;
            return (
              <motion.div key={item.href} variants={itemVariants} className="relative">
                <Link
                  href={item.href}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden ${
                    isActive 
                      ? "text-blue-600 bg-blue-50 font-bold shadow-sm" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-medium"
                  }`}
                >
                  {isActive && (
                      <motion.span 
                          layoutId="activeNavIndicator"
                          className="absolute left-0 top-3 bottom-3 w-1 bg-blue-600 rounded-r-full"
                      />
                  )}
                  <item.icon 
                    size={18} 
                    className={`transition-colors duration-300 ${isActive ? "text-blue-600" : "text-slate-400 group-hover:text-blue-500"}`} 
                  />
                  <span className="text-sm tracking-wide">
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>
        
        <div className="p-4 mt-auto border-t border-slate-100 bg-white">
            <a
                href="/CV-Wadidur Rahman.pdf"
                download="CV-Wadidur Rahman.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-blue-700 text-white py-3 rounded-xl transition-all shadow-md active:translate-y-1 group"
            >
                <Download size={16} className="text-slate-200 group-hover:text-white transition-colors" />
                <span className="text-xs font-bold tracking-wider uppercase">Download CV</span>
            </a>
            <p className="text-xs text-slate-400 text-center mt-3 font-medium">
                © by Wadidur Rahman.
            </p>
        </div>
      </aside>

      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-2xl z-50 px-4 py-2 flex items-center justify-between">
        {NAV_ITEMS.slice(0, 2).map((item: NavItemType) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center w-16 h-12 rounded-lg transition-colors ${
                isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <item.icon size={20} className={isActive ? "text-blue-600" : "text-slate-400"} />
              <span className="text-xs font-medium mt-1">{item.label}</span>
            </Link>
          );
        })}

        <div className="relative -top-6">
          <a
            href="/CV-Wadidur Rahman.pdf"
            download="CV-Wadidur Rahman.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg border-4 border-white hover:bg-blue-700 transition-colors active:scale-95"
          >
            <Download size={24} />
          </a>
        </div>

        {NAV_ITEMS.slice(2).map((item: NavItemType) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center w-16 h-12 rounded-lg transition-colors ${
                isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <item.icon size={20} className={isActive ? "text-blue-600" : "text-slate-400"} />
              <span className="text-xs font-medium mt-1">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: LucideIcon }) {
    return (
        <a 
            href={href} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white border border-slate-200 text-slate-500 hover:text-white hover:bg-slate-900 hover:border-slate-900 rounded-lg transition-all duration-200 shadow-sm"
        >
            <Icon size={16} />
        </a>
    );
}