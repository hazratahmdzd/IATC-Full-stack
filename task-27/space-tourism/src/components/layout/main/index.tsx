import { Nav } from "../.."
import mainStyle from './main.module.css'
import { Outlet, Link } from "react-router-dom"
 
export const MainLayout = () => {
  return (
    <div className={mainStyle.main} >
      <Outlet />
      <Nav>
      <Link id={mainStyle.checked} className={mainStyle.link} to='/'>
            <b>00</b>
            HOME
        </Link>
        <Link className={mainStyle.link} to='/destinations'>
            <b>01</b>
            DESTINATIONS
        </Link>
        <Link className={mainStyle.link} to='/crew'>
            <b>02</b>
            CREW
        </Link>
        <Link className={mainStyle.link} to='/technology'>
            <b>03</b>
            TECHNOLOGY
        </Link>
      </Nav>
      <div className={mainStyle.content}>
      <div className={mainStyle.text}>
      <h3>SO, YOU WANT TO TRAVEL TO</h3>
      <h1 className={mainStyle.maintext} >SPACE</h1>
      <p className={mainStyle.smalltxt}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className={mainStyle.whitebox}>
        <h1>EXPLORE</h1>
      </div>
      </div>

    </div>
  )
}
