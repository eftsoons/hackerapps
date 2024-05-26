import { CSSProperties, ReactNode } from "react";

export interface Node {
    children: ReactNode;
    height?: string
    style?: CSSProperties;
}