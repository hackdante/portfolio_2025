"use client";

import React from "react";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer 
} from "react-icons/si";
import { TechStackUI } from "./interface";

export const TechStack: React.FC<TechStackUI> = ({ 
  orientation = 'horizontal',
  size = 28,
  colorize
}) => {
  
  const CORE_STACK = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Motion", icon: SiFramer },
  ];

  const iconColorClass = colorize ?? "text-neutral-500 dark:text-neutral-400";

  return (
    <div className={`
      flex gap-6 items-center justify-center
      ${orientation === 'horizontal' ? 'flex-row' : 'flex-col'}
    `}>
      {CORE_STACK.map((tech) => {
        const Icon = tech.icon;
        return (
          <div 
            key={tech.name} 
            className="group flex flex-col items-center gap-1.5"
          >
            <Icon 
              size={size} 
              className={`transition-colors duration-300 ${iconColorClass} group-hover:text-blue-500`} 
            />
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};