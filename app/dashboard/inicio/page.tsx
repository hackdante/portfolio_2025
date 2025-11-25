import { Hero } from "@/components/base";

export default function InitialPage() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col justify-center items-center min-h-screen  bg-black/10 p-4">
        <h3 className="text-2xl font-bold text-black/85">Bienvenido</h3>
        <div className="opacity-70">
          <Hero />
        </div>
        <h3 className="w-sm text-center text-black/85">
          Gestiona tus proyectos con claridad, velocidad y control. Todo lo que
          necesitas para avanzar está aquí.
        </h3>
        <h6 className="text-lg text-slate-600 mt-2">
          Somos la mejor alternativa
        </h6>
      </div>
    </div>
  );
}
