import Image from "next/image";
import {
  MdDashboard,
  MdCalculate,
  MdPeopleAlt,
  MdHomeFilled,
  MdWork 
} from "react-icons/md";
import { SideMenuItem, TitleSidebar } from "@/components/base";
import { SideMenuItemUI } from "@/components/base/side-menu-item/interface";

const defaultIconSize: number = 30;

const titleInitialState = {
  route: "/dashboard/inicio",
  title: "Bienvenido a nuestro dashboard",
  subtitle: "Amamos nuestro trabajo",
  icon: <MdDashboard size={defaultIconSize} />,
  logo: "/images/light--logo-sm.png",
};

const sideMenuItems: SideMenuItemUI[] = [
  {
    title: "Inicio",
    description: "Página principal",
    route: "/dashboard/inicio",
    icon: <MdHomeFilled size={defaultIconSize} />,
  },
  {
    title: "Usuarios",
    description: "Manejo de personal",
    route: "/dashboard/usuarios",
    icon: <MdPeopleAlt size={defaultIconSize} />,
  },
  {
    title: "Contador",
    description: "Suma y reste",
    route: "/dashboard/contador",
    icon: <MdCalculate size={defaultIconSize} />,
  },
    {
    title: "Proyectos",
    description: "Suma y reste",
    route: "/dashboard/proyectos",
    icon: <MdWork  size={defaultIconSize} />,
  },
];

export const LeftSidebar = () => {
  const iconsSize: number = 40;
  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-auto">
      <TitleSidebar {...titleInitialState} />

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              width={iconsSize}
              height={iconsSize}
              alt="Perfil de usuario"
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            LEANDRO GONZALEZ
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {sideMenuItems.map((item, index) => (
          <SideMenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
