export interface PokemonListApiUI {
  name: string;
  url: string;
}
export interface PokemonApiUI {
  count: number;
  next: string | null;
  previus: string | null;
  results: PokemonListApiUI[];
}

