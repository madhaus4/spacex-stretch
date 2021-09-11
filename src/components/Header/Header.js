import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  
  return (
    <nav>
      <header>SpaceX</header>
      <NavLink to='/'>History</NavLink>
      <NavLink to='/rockets'>Rockets</NavLink>
    </nav>
  )
}

export default Header;