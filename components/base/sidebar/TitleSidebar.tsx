import Link from "next/link";
import { TitleSidebarUI } from "./interface";
import Image from "next/image";

export const TitleSidebar = ({
  icon,
  route,
  title,
  subtitle,
  logo,
}: TitleSidebarUI) => {
  return (
    <div id="logo" className="mt-4">
      <Image
        src={logo}
        alt="Perfil de usuario"
        width={235}
        height={91}
        loading="eager"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="my-4 pl-6 pr-4">
        <Link
          href={route ?? "/"}
          aria-label={
            title && subtitle ? `${title} | ${subtitle}` : "Sin definir"
          }
        >
          <div className="flex text-blue-500">
            {icon}
            <div className="ml-2">
              <h2 className="text-lg md:text-xl font-bold text-white">
                {title}
              </h2>
              <p className="text-slate-500 text-sm">{subtitle}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
