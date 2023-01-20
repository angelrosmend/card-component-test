import { CSSProperties } from "react";

type condition =  "usato" | "nuovo";

export interface productDetails{
    id: number,
    image: string | string[], 
    title: string,
    brand: string,
    year: number | string,
    condition: string,
    favorite: boolean,
    description: string,
    price: number,
    old_price: number | null,
    taglia: string[],
    colori_qty: number | string,
    stars: number,
    rating: number | string,
    currency: string,
    eBike: string,
}

export interface CardProps{
    className: string;
    style: CSSProperties;
    item: productDetails;
}

export interface cardTagProps{
    label: string;
    content: string,
    mode: "primary" | "secondary";
    style?: CSSProperties;
}

export interface favoriteProps{
    isFavorite: boolean;
    id: string;
}