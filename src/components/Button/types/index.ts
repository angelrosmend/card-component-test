import { CSSProperties, ReactNode } from "react";

export interface ButtonProps{
    label: string;
    className?: string;
    style?: CSSProperties;
    icon?: ReactNode;
    mode?: "primary" | "secondary"
}