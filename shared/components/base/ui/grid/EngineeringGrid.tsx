export function EngineeringGrid() {
  return (
    <div
      className="fixed inset-0 z-[-1] pointer-events-none select-none overflow-hidden bg-background"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-30 dark:opacity-50"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, var(bg-dark/10), transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-ui-border) 1.5px, transparent 1.5px),
            linear-gradient(to bottom, var(--color-ui-border) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(circle at 50% 40%, black 20%, rgba(0,0,0,0.3) 60%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 40%, black 20%, rgba(0,0,0,0.3) 60%, transparent 90%)",
        }}
      />

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
    </div>
  );
}
