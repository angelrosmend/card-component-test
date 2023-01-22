export interface productProps {
  id: number;
  image: string | string[];
  title: string;
  brand: string;
  year: number | string;
  condition: string;
  favorite: boolean;
  description: string;
  price: number;
  old_price: number | null;
  taglia: string[];
  colori_qty: number | string;
  stars: number;
  rating: number | string;
  currency: string;
  eBike: string;
}

export interface productsState {
  data: productProps[];
  loading: boolean;
  error: boolean;
  errorMessage: any;
}
