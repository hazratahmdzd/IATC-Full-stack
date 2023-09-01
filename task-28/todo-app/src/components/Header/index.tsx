import { FC, ReactNode } from "react"
import headerStyles from "./header.module.css"


interface HeaderProps {
    children: ReactNode
}

export const Header: FC<HeaderProps> = ({ children }) => {
    return (
        <div className={headerStyles.header}>
            <h1 className={headerStyles.title} >TODO</h1>
            {children}
        </div>
    )
}