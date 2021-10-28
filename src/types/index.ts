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
  id: number;
  name: string;
  imgUrl: string;
  height: number;
  abilities: {}[];
}

export interface CartItem {
  product: Pokemon;
  quantity: number;
}
