"use client";
import Link from "next/link";
import { SideMenuItemUI } from "./interface";
import { usePathname } from "next/navigation";

export const SideMenuItem = ({
  title,
  description,
  icon,
  route,
}: SideMenuItemUI) => {
  const pathName = usePathname();

  return (
    <>
      <Link
        href={route}
        className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 ${
          pathName === route ? "active-link" : ""
        } `}
      >
        {icon}
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-5">{title}</span>
          <span className="text-sm hidden md:block">{description}</span>
        </div>
      </Link>
    </>
  );
};
