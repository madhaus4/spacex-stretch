import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  
  return (
    <NavLink to='/rockets'>
      Rockets
    </NavLink>
  )
}

export default Header;