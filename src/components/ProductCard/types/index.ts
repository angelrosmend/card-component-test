import { CSSProperties } from "react";
import { productProps } from "../../../types";

export interface conditionProps{
    condition:  "usato" | "nuovo";
};

export interface CardProps{
    className: string;
    style: CSSProperties;
    item: productProps;
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

export interface CardPriceProps{
    currentPrice: number,
    oldPrice:number | null,
    currency: "€" | "$";
}