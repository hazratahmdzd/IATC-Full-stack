import { FC, ReactNode } from "react";
import button from './button.module.css'

interface ButtonProps {
    children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children }) => {
    return (
        <div>
            <button className={button.btn}>{children}</button>
        </div>
    )
}