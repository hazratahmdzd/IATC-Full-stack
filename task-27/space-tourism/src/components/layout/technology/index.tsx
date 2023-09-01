import { Nav } from "../.."
import { Outlet, Link } from "react-router-dom"
import technologyStyle from './technology.module.css'
 
export const TechnologyLayout = () => {
  return (
    <div className={technologyStyle.main} >
      <Outlet />
      <Nav>
      <Link className={technologyStyle.link} to='/'>
            <b>00</b>
            HOME
        </Link>
        <Link className={technologyStyle.link} to='/destinations'>
            <b>01</b>
            DESTINATIONS
        </Link>
        <Link className={technologyStyle.link} to='/crew'>
            <b>02</b>
            CREW
        </Link>
        <Link id={technologyStyle.checked} className={technologyStyle.link} to='/technology'>
            <b>03</b>
            TECHNOLOGY
        </Link>
      </Nav>

    </div>
  )
}