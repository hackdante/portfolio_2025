"use client";

import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { CardTextUI } from "./interface";

export function CardText({
  title = "Sin definir",
  description = "Sin definir",
  icon: Icon = HiOutlineQuestionMarkCircle,
}: CardTextUI) {
  return (
    <div className="group relative flex flex-col w-full p-6 rounded-2xl transition-all duration-500 hover:bg-ui-text-primary/[0.02] border border-transparent hover:border-ui-text-primary/5">
      <div className="absolute inset-0 bg-linear-to-br from-ui-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" />

      <div className="flex justify-center md:justify-start mb-4">
        <div className="relative p-3 rounded-xl bg-ui-text-primary/[0.03] group-hover:bg-ui-primary/10 transition-colors duration-500">
          <Icon className="text-3xl text-ui-primary shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
        </div>
      </div>

      <div className="space-y-2 text-center md:text-left">
        <h3 className="text-sm md:text-xl text-ui-text-secondary leading-none font-semibold   transition-colors duration-300 group-hover:text-ui-text-primary">
          {title}
        </h3>

        <span className="text-lg md:text-md text-ui-text-primary font-light tracking-tight  leading-relaxed block">
          {description}
        </span>
      </div>

      <div className="mt-6 w-0 group-hover:w-full h-1px bg-linear-to-r from-ui-primary to-transparent transition-all duration-700 ease-in-out" />
    </div>
  );
}
