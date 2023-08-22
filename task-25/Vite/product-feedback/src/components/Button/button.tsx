import { FC, HTMLAttributes, ReactNode } from "react";
import feedcardButton from './button.module.css';


interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}

export const Button: FC<ButtonProps> = ( { children, className } ) => {
    return (
        <button className={feedcardButton.feedcardbtn}>{children}</button>
    )
}