import { Cardv1UI } from "@/types/global";
import { PokemonApiUI } from "./interface";
import { GalleryGrid } from "@/components/composite";

interface GetPortfolioUI {
  path: string;
  limit: number;
  offset: number;
}

const PORTFOLIO_API = "https://pokeapi.co/api/v2/pokemon?";

const getPortafolioInitialState = {
  path: PORTFOLIO_API,
  limit: 320,
  offset: 0,
};

const getIdFromId = (url: string) => Number(url.split("/").at(-2) ?? 0);

const getImageUrl = (id: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

const getLinkUrl = (id: number) => `/dashboard/proyectos/${id}`;

const getPortfolioList = async ({
  path,
  limit,
  offset,
}: GetPortfolioUI): Promise<Cardv1UI["cardInfoV1"][]> => {
  const data: PokemonApiUI = await fetch(
    `${path}limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const portfolioCard: Cardv1UI["cardInfoV1"][] = data.results.map((item) => ({
    id: getIdFromId(item.url),
    title: item.name ?? "Sin definir",
    description: "Portaflio de activo",
    imgURL: `${getImageUrl(getIdFromId(item.url))}`,
    btnLabel: "Visitar",
    goToURL: getLinkUrl(getIdFromId(item.url)),
  }));
  return portfolioCard;
};

export default async function ProyectPage() {
  const portfolio: Cardv1UI["cardInfoV1"][] = await getPortfolioList({
    ...getPortafolioInitialState,
  });

  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col justify-center items-center max-w-screen p-4">
        <h3 className="text-2xl font-bold text-black/85">Proyectos</h3>

        <h3 className="w-sm text-center text-black/85">
          Proyectos desarrollados
        </h3>

        <GalleryGrid portfolioList={portfolio} />

        <h6 className="text-lg text-slate-600 mt-2">
          KensAI sabemos lo que necesitas.
        </h6>
      </div>
    </div>
  );
}
