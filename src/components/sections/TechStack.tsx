"use client";

import { motion } from "framer-motion";
import React from "react";
import { TECH_ROW_1, TECH_ROW_2, TechItem } from "@/constants";

export function TechStack() {
  return (
    <div className="w-full py-10 space-y-6 overflow-hidden select-none relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <MarqueeRow items={TECH_ROW_1} direction="left" speed={30} />
      <MarqueeRow items={TECH_ROW_2} direction="right" speed={30} />
    </div>
  );
}

interface MarqueeRowProps {
  items: TechItem[];
  direction: "left" | "right";
  speed: number;
}

function MarqueeRow({ items, direction, speed }: MarqueeRowProps) {
  const duplicatedItems = Array(10).fill(items).flat();

  return (
    <div className="flex w-full overflow-hidden">
      <motion.div 
        className="flex gap-4 pr-4"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: speed 
        }}
      >
        {duplicatedItems.map((tech, i) => (
          <div 
            key={i} 
            className="group flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-lg whitespace-nowrap text-sm font-semibold text-slate-600 shadow-sm hover:border-blue-500 hover:text-blue-600 hover:shadow-md transition-all duration-300 cursor-default"
          >
            <span className="text-slate-400 group-hover:text-blue-500 transition-colors">
                {tech.icon}
            </span>
            {tech.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}