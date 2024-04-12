import { FC, ReactNode } from "react"
import headerStyles from "./header.module.css"


interface HeaderProps {
    children: ReactNode
    modeHandler: () => void;
}

export const Header: FC<HeaderProps> = ({ children, modeHandler }) => {
    return (
        <div className={headerStyles.header} onClick={modeHandler}>
            <h1 className={headerStyles.title} >TODO</h1>
            {children}
        </div>
    )
}