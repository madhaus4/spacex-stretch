import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  
  return (
    <nav className='nav-bar'>
      <header className='header'>SpaceX</header>
      <NavLink to='/' className='history-link'>History</NavLink>
      <NavLink to='/rockets' className='rockets-link'>Rockets</NavLink>
    </nav>
  )
}

export default Header;