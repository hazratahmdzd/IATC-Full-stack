import logo from '../../assets/shared/logo.svg'
import navstyle from './nav.module.css'
import { ReactNode } from 'react'
import { FC } from 'react'

interface NavProps {
    children: ReactNode | ReactNode[];
}

export const Nav: FC<NavProps> = ({children}) => {
  return (
    <div className={navstyle.main}>
      <img className={navstyle.img} src={logo} alt="logo" />
      <div className={navstyle.horizontal}></div>
      <div className={navstyle.nav}>
        <div className={navstyle.navmain}>
            {children}
        </div>
      </div>
    </div>
  )
}
