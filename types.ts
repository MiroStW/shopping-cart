export interface AbilityType {
  id: number;
  name: string;
  effect: string;
}

export interface PokemonType {
  name: string;
  id: number;
  height: number;
  abilities?: AbilityType[];
  sprite: string;
}

export interface CartItemType {
  product: PokemonType;
  quantity: number;
}
