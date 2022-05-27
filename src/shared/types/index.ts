export interface DataReturnType {
  isLoading: boolean;
  error: string | null;
  data:
    | {
        [index: string]: any;
      }[]
    | null;
}

export interface Ability {
  id: number;
  name: string;
  effect: string;
}

export interface Pokemon {
  name: string;
  id: number;
  height: number;
  abilities?: Ability[];
  sprite: string;
}

export interface CartItem {
  product: Pokemon;
  quantity: number;
}
