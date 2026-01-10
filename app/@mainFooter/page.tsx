"use client";

export default function MainLogoSlot() {
  return (
     <footer className="w-full py-8 border-t border-ui-border text-center font-mono">
      <div className="mb-4 space-x-6 text-[10px] uppercase tracking-widest">
        <a href="#config" className="hover:text-white transition-colors">
          Kensai Config
        </a>
        <a href="#onboarding" className="hover:text-white transition-colors">
          Kensai Onboarding
        </a>
        <a href="#data" className="hover:text-white transition-colors">
          Kensai Data
        </a>
      </div>
      <p className="text-[10px] text-ui-muted-foreground">
        © {new Date().getFullYear()} KENSAI INTERACTIVE STUDIO // ACTIVOS
        DIGITALES RENTABLES
      </p>
      <p className="mt-2 text-[9px] opacity-60 uppercase">
        Ingeniería de alto rendimiento para decisiones críticas
      </p>
    </footer>
  );
}