import { Nav } from "../.."
import { Outlet, Link } from "react-router-dom"
import crewStyle from './crew.module.css'
 
export const CrewLayout = () => {
  return (
    <div className={crewStyle.main} >
      <Nav>
      <Link className={crewStyle.link} to='/'>
            <b>00</b>
            HOME
        </Link>
        <Link className={crewStyle.link} to='/destinations'>
            <b>01</b>
            DESTINATIONS
        </Link>
        <Link id={crewStyle.checked} className={crewStyle.link} to='/crew'>
            <b>02</b>
            CREW
        </Link>
        <Link className={crewStyle.link} to='/technology'>
            <b>03</b>
            TECHNOLOGY
        </Link>
      </Nav>

      <div className={crewStyle.content}>
        <h1 id={crewStyle.bigtxt}>
            <span id={crewStyle.span}>02</span>
            MEET YOUR CREW
        </h1>
        <div>
        <Outlet />
        </div>
      </div>

    </div>
  )
}