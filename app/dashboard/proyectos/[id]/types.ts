export interface PokemonUI {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  moves: {
    move: {
      name: string;
    };
  }[];

  types: {
     slot: string;
    type: {
      name: string;
     
    };
  }[];

  weight: number;
}

export interface PortfolioPageIdPropsUI {
  params: Promise<{
    id: string;
  }>;
}
