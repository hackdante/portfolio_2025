import Link from "next/link";
import type { IconBaseProps } from "react-icons";
import {
  MdHome,
  MdAttachment,
  MdPhoneInTalk,
  MdCoPresent,
  MdOutlineQuestionMark,
} from "react-icons/md";
import { ActiveLink } from "@/components/base";

type NavIconsUI =
  | "MdHome"
  | "MdAttachment"
  | "MdPhoneInTalk"
  | "MdCoPresent"
  | "MdOutlineQuestionMark";

const navIcons: Record<NavIconsUI, React.ComponentType<IconBaseProps>> = {
  MdHome,
  MdAttachment,
  MdPhoneInTalk,
  MdCoPresent,
  MdOutlineQuestionMark,
};

const delayAsync = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const navItems: { route: string; label: string; icon: NavIconsUI }[] = [
  { route: "/sobre-nosotros", label: "Nosotros", icon: "MdCoPresent" },
  { route: "/portafolio", label: "Portafolio", icon: "MdAttachment" },
  { route: "/contacto", label: "Contacto", icon: "MdPhoneInTalk" },
];

export const Navbar = async () => {
  const CurrentIcon = (icon: NavIconsUI = "MdOutlineQuestionMark") => {
    const Icon = navIcons[icon];
    return <Icon size="1.2rem" className="mr-2" />;
  };

  const Separator = () => <span className="mx-5">|</span>;

  await delayAsync(400);
  return (
    <nav className="flex text-black/80 bg-blue-900/30 p-2 m-2 shadow-lg rounded">
      <div className="flex-none">
        <Link className="flex items-center" href="/">
          <MdHome className="mr-2" />
          <span className="font-bold">Inicio</span>
        </Link>
      </div>

      <div className="flex flex-1 justify-end items-center">
        {navItems.map(({ route, label, icon }, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <Separator />}
            <ActiveLink route={route} label={label}>
              {CurrentIcon(icon)}
            </ActiveLink>
          </div>
        ))}
      </div>
    </nav>
  );
};
