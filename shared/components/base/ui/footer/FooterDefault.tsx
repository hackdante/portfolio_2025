import { FooterDefaultUI } from "./interface";

export function FooterDefault({
  copyRight = ` KENSAI INTERACTIVE STUDIO // ACTIVOS DIGITALES RENTABLES`,
  description = `  Ingeniería de alto rendimiento para decisiones críticas`,
}: FooterDefaultUI) {
  return (
    <>
      <footer className="w-full py-8 border-t border-ui-border text-center font-mono">
        <p className="text-[10px] text-ui-muted-foreground">
          © {new Date().getFullYear()} {copyRight}
        </p>
        <p className="mt-2 text-[9px] opacity-60 uppercase">{description}</p>
      </footer>
    </>
  );
}
