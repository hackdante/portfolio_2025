import { Cardv1UI } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const CardV1 = ({ cardInfoV1 }: Cardv1UI) => {
  const { title, description, imgURL, btnLabel, goToURL } = cardInfoV1;

  return (
    <div className="group relative w-full max-w-[280px] overflow-hidden rounded-[24px] border border-ui-border bg-background/60 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      
      {/* Contenedor Superior: Enfoque en el producto/imagen */}
      <div className="flex flex-col items-center px-8 pt-10 pb-6">
        <div className="relative mb-6 h-28 w-28 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110">
          <Image
            src={imgURL}
            fill
            alt={title}
            className="object-contain"
            sizes="112px"
            priority={false}
          />
        </div>

        <h3 className="text-[21px] font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-center text-[13px] leading-relaxed text-foreground/50 font-medium">
          {description}
        </p>

        <Link 
          href={goToURL}
          className="mt-6 flex h-8 items-center justify-center rounded-button bg-primary px-5 text-[12px] font-semibold text-white transition-all hover:opacity-90 active:scale-95"
        >
          {btnLabel}
        </Link>
      </div>

      {/* Sección Inferior: Acciones secundarias con estilo iOS */}
      <div className="border-t border-ui-border/50 bg-ui-border/5">
        <ActionLink 
          href="/account/campaigns" 
          title="Campaigns" 
          icon={<path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />}
        />
        <ActionLink 
          href="/account/donations" 
          title="Donations" 
          icon={<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
          isLast
        />
      </div>
    </div>
  );
};

const ActionLink = ({ href, title, icon, isLast }: { href: string; title: string; icon: React.ReactNode; isLast?: boolean }) => (
  <Link
    href={href}
    className={`group/item flex items-center justify-between px-6 py-4 transition-colors hover:bg-ui-border/20 ${!isLast ? 'border-b border-ui-border/30' : ''}`}
  >
    <div className="flex items-center gap-3">
      <div className="text-foreground/70 transition-colors group-hover/item:text-primary">
        <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="h-4 w-4">
          {icon}
        </svg>
      </div>
      <span className="text-[13px] font-medium text-foreground/80">{title}</span>
    </div>
    <svg className="h-3 w-3 text-foreground/30 transition-transform group-hover/item:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </Link>
);