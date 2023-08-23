import { Outlet, Link } from "react-router-dom";
import { TwitterBackground } from "../..";
import main from './main.module.css'
import { FC, HTMLAttributes } from "react";

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
}

export const MainLayout: FC<MainLayoutProps> = ({className}) => {
    return (
        <div className={main.mainlayout}>
            <div className={main.mainleft}>
                <TwitterBackground/>
            </div>
            <div className={main.mainright}>
                <Outlet />
            </div>
        </div>
    );
}