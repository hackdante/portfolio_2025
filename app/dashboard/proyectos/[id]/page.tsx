import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PokemonUI, PortfolioPageIdPropsUI } from "./types";

const getPortfolioById = async (id: number): Promise<PokemonUI> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) notFound();
  return res.json();
};

export async function generateMetadata({
  params,
}: PortfolioPageIdPropsUI): Promise<Metadata> {
  const { id } = await params;
  const info = await getPortfolioById(Number(id));
  return {
    title: `KENSAI | ${info.name.toUpperCase()} #${id}`,
    description: `Detalle técnico del activo ${info.name}`,
  };
}

export default async function PortfolioPageId({
  params,
}: PortfolioPageIdPropsUI) {
  const { id } = await params;
  const data = await getPortfolioById(Number(id));

  return (
    <main className="min-h-screen bg-background px-6 py-12 transition-colors duration-500">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 flex flex-col items-center text-center">
          <span className="mb-2 text-sm font-bold tracking-widest text-primary uppercase">
            Especificaciones del Activo
          </span>
          <h1 className="text-5xl font-bold tracking-tight text-foreground capitalize sm:text-7xl">
            {data.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground/40">
            Identificador de red:{" "}
            <span className="text-foreground">#{data.id}</span>
          </p>
        </header>

 
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-4xl border border-ui-border bg-ui-border/5 p-12 md:col-span-2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--color-primary),transparent)] opacity-5" />
            <Image
              src={data.sprites.other?.dream_world.front_default ?? ""}
              width={400}
              height={400}
              alt={data.name}
              className="relative z-10 h-72 w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-110"
              priority
            />
          </div>


          <div className="flex flex-col gap-6">
            <div className="flex flex-1 flex-col justify-center rounded-4xl border border-ui-border bg-background p-8 shadow-sm">
              <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-foreground/30">
                Masa Corporal
              </h3>
              <p className="text-5xl font-semibold tracking-tighter text-foreground">
                {data.weight / 10}
                <span className="text-xl text-foreground/40 font-normal">
                  kg
                </span>
              </p>
            </div>

            {/* Types Badge Container */}
            <div className="flex flex-1 flex-col justify-center rounded-4xl border border-ui-border bg-background p-8 shadow-sm">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-foreground/30">
                Categorías
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.types.map((t) => (
                  <span
                    key={t.slot}
                    className="rounded-full bg-secondary px-4 py-1.5 text-xs font-bold text-white capitalize tracking-wide"
                  >
                    {t.type.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Interface Variations (Full Width) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-3">
            <div className="flex flex-col items-center rounded-4xl border border-ui-border bg-background p-10">
              <h3 className="mb-8 text-xs font-bold uppercase tracking-widest text-foreground/30">
                Interfaz Estándar
              </h3>
              <div className="flex gap-12">
                <SpriteDisplay
                  src={data.sprites.front_default}
                  label="Vista Frontal"
                />
                <SpriteDisplay
                  src={data.sprites.back_default}
                  label="Vista Posterior"
                />
              </div>
            </div>

            <div className="flex flex-col items-center rounded-4xl border border-ui-border bg-background p-10">
              <h3 className="mb-8 text-xs font-bold uppercase tracking-widest text-foreground/30">
                Edición Especial
              </h3>
              <div className="flex gap-12">
                <SpriteDisplay
                  src={data.sprites.front_shiny}
                  label="Front Chromatic"
                />
                <SpriteDisplay
                  src={data.sprites.back_shiny}
                  label="Back Chromatic"
                />
              </div>
            </div>
          </div>

          {/* 4. Technical Capabilities (Bottom Bar) */}
          <div className="rounded-4xl border border-ui-border bg-background p-10 md:col-span-3">
            <h3 className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-foreground/30">
              Funcionalidades Técnicas Disponibles
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {data.moves.slice(0, 10).map((m) => (
                <div
                  key={m.move.name}
                  className="flex items-center gap-2 rounded-xl bg-ui-border/10 px-4 py-3 transition-colors hover:bg-ui-border/20"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-xs font-semibold text-foreground/70 capitalize">
                    {m.move.name.replace("-", " ")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

/**
 * Sub-componente interno para la visualización de sprites
 */
function SpriteDisplay({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="rounded-3xl bg-ui-border/5 p-4 ring-1 ring-ui-border/50">
        <Image
          src={src}
          width={96}
          height={96}
          alt={label}
          className="h-24 w-24 object-contain"
        />
      </div>
      <span className="text-[10px] font-black uppercase tracking-tighter text-foreground/25">
        {label}
      </span>
    </div>
  );
}
