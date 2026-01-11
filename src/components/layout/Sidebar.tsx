"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Download, LucideIcon } from "lucide-react";
import { NAV_ITEMS, NavItemType } from "@/constants";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full w-full p-6">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="h-28 w-28 relative rounded-full shadow-lg ring-1 ring-slate-200 mb-5 overflow-hidden group cursor-pointer">
          <Image 
            src="/profil.png" 
            alt="Foto Profil"
            fill
            className="object-cover object-top group-hover:scale-110 transition-transform duration-500 ease-out"
            priority
          />
        </div>
        
        <h1 className="text-xl font-bold tracking-tight text-slate-900">Wadidur Rahman</h1>
        
        <div className="mt-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-md">
            <p className="text-xs font-bold text-blue-700 tracking-wider">Fullstack Developer</p>
        </div>

        <div className="flex items-center gap-3 mt-6">
            <Link href="https://github.com" target="_blank" className="p-2.5 bg-slate-50 text-slate-500 hover:text-white hover:bg-slate-900 rounded-md transition-all">
                <Github size={18} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="p-2.5 bg-slate-50 text-slate-500 hover:text-white hover:bg-blue-700 rounded-md transition-all">
                <Linkedin size={18} />
            </Link>
        </div>
      </div>

      <nav className="flex flex-col space-y-2 flex-1 overflow-y-auto scrollbar-hide">
        {NAV_ITEMS.map((item: NavItemType) => (
          <NavItem 
            key={item.href} 
            href={item.href} 
            label={item.label} 
            icon={item.icon} 
          />
        ))}
        
        <div className="pt-6 mt-4 border-t border-slate-100">
            <Link
                href="/cv-wadidur.pdf" 
                target="_blank" 
                className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-blue-700 text-white py-3.5 rounded-md transition-all shadow-sm hover:shadow-md active:translate-y-0.5"
            >
                <Download size={16} />
                <span className="text-xs font-bold tracking-wider">Download CV</span>
            </Link>
        </div>
      </nav>
      
      <div className="mt-auto pt-6 text-center">
        <p className="text-[10px] font-semibold text-slate-400 tracking-widest">
            © 2026 Wadidur Rahman. All rights reserved.
        </p>
      </div>
    </div>
  );
}

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

function NavItem({ href, icon: Icon, label }: NavItemProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all duration-200 font-medium border border-transparent hover:border-blue-100"
    >
      <Icon size={18} className="group-hover:text-blue-600 transition-colors" />
      <span className="text-sm font-semibold tracking-wide">{label}</span>
    </Link>
  );
}