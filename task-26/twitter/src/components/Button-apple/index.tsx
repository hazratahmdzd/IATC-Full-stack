import { FC, ReactNode } from "react";
import appleLogo from "../../..//public/logo-apple.png";
import button from '../Button/button.module.css'

interface ButtonProps {
    children: ReactNode;
}

export const ButtonApple: FC<ButtonProps> = ({ children }) => {
    return (
        <div>
            <button className={button.btn} >
                <img className={button.img} src={appleLogo}/>
                {children}
            </button>
        </div>
    )
}