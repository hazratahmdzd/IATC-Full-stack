import { FC, HTMLAttributes, ReactNode } from "react";

interface Headingtprops extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

export const Headingtxt: FC<Headingtprops> = ( {children} ) => {
    return (
        <h3>{children}</h3>
    )
}