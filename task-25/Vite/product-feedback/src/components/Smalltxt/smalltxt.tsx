import { FC, HTMLAttributes, ReactNode } from "react";

interface SmalltxtProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode;
    className?: string;
}

export const Smalltxt: FC<SmalltxtProps> = ({ children, className }) => {
    return (
        <p className={className}>
            {children}
        </p>
    )
}
