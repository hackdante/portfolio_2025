export function EngineeringGrid() {
  return (
    <div 
      className="fixed inset-0 z-[-1] pointer-events-none select-none overflow-hidden" 
      aria-hidden="true"
    >
 
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--ui-border-10) 1px, transparent 1px),
            linear-gradient(to bottom, var(--ui-border-10) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(circle at 50% 40%, black, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black, transparent 90%)'
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% -10%, var(--ui-accent-low, rgba(59, 130, 246, 0.1)), transparent 50%)',
        }}
      />
    </div>
  );
}