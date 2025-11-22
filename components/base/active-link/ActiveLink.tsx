"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PropsActionLink {
  route: string;
  label: string;
  children: React.ReactNode;
}

export const ActiveLink = ({ route, label, children }: PropsActionLink) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <Link
      href={route}
      className={`link flex items-center ${
        pathName === route ? "active-link" : ""
      }`}
    >
      {children}
      {label}
    </Link>
  );
};
