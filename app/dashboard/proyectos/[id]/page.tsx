import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PokemonUI, PortfolioPageIdPropsUI } from "./types";

export async function generateMetadata({
  params,
}: PortfolioPageIdPropsUI): Promise<Metadata> {
  const { id } = await params;

  const info = await getPortfolioById(Number(id));

  const { name } = info;

  return {
    title: `KENSAI | ${name}#${id}`,
    description: `Portafolio sección`,
    keywords: [
      "desarrollo de software",
      "software a medida",
      "web apps",
      "SaaS",
      "UX/UI",
      "desarrollo web",
      "frontend",
      "backend",
      "Vue 3",
      "React",
      "Next.js",
      "TypeScript",
      "sistemas empresariales",
      "arquitectura de software",
      "experiencias 3D",
      "Three.js",
      "GSAP",
      "telemedicina",
      "ERP",
      "productos digitales",
    ],
    authors: [{ name: "KENSAI | Leandro González" }],
    creator: "KENSAI",
    publisher: "KENSAI",
    robots: "index, follow",
  };
}

export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

const getPortfolioById = async (id: number): Promise<PokemonUI> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!res.ok) {
    notFound(); 
  }

  return res.json(); 
};

export default async function PortfolioPageId({
  params,
}: PortfolioPageIdPropsUI) {
  const { id } = await params;

  const portfolioData = await getPortfolioById(Number(id));

  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{portfolioData.id} {portfolioData.name}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={portfolioData.sprites.other?.dream_world.front_default ?? ""}
              width={150}
              height={150}
              alt={`Imagen del portfolioData ${portfolioData.name}`}
              style={{ width: "auto", height: "auto" }}
              className="mb-5"
            />

            <div className="flex flex-wrap">
              {portfolioData.moves.map((move) => (
                <p key={move.move.name} className="mr-2 capitalize">
                  {move.move.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Types</p>
            <div className="text-base font-medium text-navy-700 flex">
              {portfolioData.types.map((type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="text-base font-medium text-navy-700 flex">
              {portfolioData.weight}
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">
              <Image
                src={portfolioData.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${portfolioData.name}`}
                style={{ width: "auto", height: "auto" }}
              />

              <Image
                src={portfolioData.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${portfolioData.name}`}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">
              <Image
                src={portfolioData.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${portfolioData.name}`}
                style={{ width: "auto", height: "auto" }}
              />

              <Image
                src={portfolioData.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${portfolioData.name}`}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
