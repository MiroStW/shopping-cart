export interface DataReturnType {
  isLoading: boolean;
  error: string | null;
  data:
    | {
        [index: string]: any;
      }[]
    | null;
}

export interface Pokemon {
  name: string;
  id: number;
  height: number;
  abilities?: {
    id: number;
    name: string;
    effect: string;
  }[];
  sprite: string;
}

export interface CartItemType {
  product: Pokemon;
  quantity: number;
}
