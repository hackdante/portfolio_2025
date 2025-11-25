interface GetPortfolioUI {
  path: string;
  limit: number;
  offset: number;
}

const PORTFOLIO_API = "https://pokeapi.co/api/v2/pokemon?";

const getPortafolioInitialState = {
  path: PORTFOLIO_API,
  limit: 20,
  offset: 0,
};

const getPortfolio = async ({ path, limit, offset }: GetPortfolioUI) => {
  const data = await fetch(`${path}limits=${limit}&offset=${offset}`)
  .then(res => res.json)

  console.log(data);
  return data;
};

export default async function  ProyectPage() {
  const portfolio = await  getPortfolio({ ...getPortafolioInitialState });

  console.log('portfolio ==>', portfolio)



  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col justify-center items-center min-h-screen  bg-black/10 p-4">
        <h3 className="text-2xl font-bold text-black/85">Proyectos</h3>

        <h3 className="w-sm text-center text-black/85">
          Proyectos desarrollados
        </h3>
        <div>-- {JSON.stringify(portfolio)}</div>
        <h6 className="text-lg text-slate-600 mt-2">
          KensAI sabemos lo que necesitas.
        </h6>
      </div>
    </div>
  );
}
