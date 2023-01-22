import { CSSProperties } from "react";
import { productProps } from "../../../types";

type condition =  "usato" | "nuovo";

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