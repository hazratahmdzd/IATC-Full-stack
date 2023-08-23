import { FC, ReactNode } from "react";
import googleLogo from "../../..//public/google-icon.png";
import button from '../Button/button.module.css'

interface ButtonProps {
    children: ReactNode;
}

export const ButtonGoogle: FC<ButtonProps> = ({ children }) => {
    return (
        <div>
            <button className={button.btn}>
                <img className={button.img} src={googleLogo}/>
                {children}
            </button>
        </div>
    )
}