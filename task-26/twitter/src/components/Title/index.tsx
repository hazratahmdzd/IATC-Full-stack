import { FC, createElement } from "react";

export const Title: FC<{ level: 1 | 2 | 3 | 4 | 5 | 6, children: any }> = ({ children, level }) => {
    return createElement(`h${level}`, {}, children);
}