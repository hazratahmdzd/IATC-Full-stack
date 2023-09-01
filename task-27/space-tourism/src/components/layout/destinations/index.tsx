import { Nav } from "../.."
import { Outlet, Link } from "react-router-dom"
import destinationsStyle from './destinations.module.css'
 
export const DestinationsLayout = () => {
  return (
    <div className={destinationsStyle.main} >
      <Nav>
      <Link className={destinationsStyle.link} to='/'>
            <b>00</b>
            HOME
        </Link>
        <Link id={destinationsStyle.checked} className={destinationsStyle.link} to='/destinations'>
            <b>01</b>
            DESTINATIONS
        </Link>
        <Link className={destinationsStyle.link} to='/crew'>
            <b>02</b>
            CREW
        </Link>
        <Link className={destinationsStyle.link} to='/technology'>
            <b>03</b>
            TECHNOLOGY
        </Link>
      </Nav>

      <div className={destinationsStyle.content}>
        <h1 id={destinationsStyle.bigtxt}>
            <span id={destinationsStyle.span}>01</span>
            PICK YOUR DESTINATION
        </h1>
        <div>
        <Outlet />
        </div>
      </div>

    </div>
  )
}