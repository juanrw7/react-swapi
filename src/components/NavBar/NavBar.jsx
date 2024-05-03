// npm modules
import { NavLink } from "react-router-dom"

import './NavBar.css'

const NavBar = () => {
  return (  
    <nav>
    <h1>STAR WARS STARSHIPS</h1>
    <div className="navlink-container">
      <NavLink to="/">See all Starships</NavLink>
    </div>
    </nav>
  )
}

export default NavBar;