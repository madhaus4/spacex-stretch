import './Header.css'
import { NavLink } from 'react-router-dom'

function Header(props) {
  
  return (
    <nav className='nav-bar'>
      <header className='header'>SpaceX</header>
      <div className='links-container'>
        <NavLink to='/' 
          className='history-link'
          >History
        </NavLink>
        <NavLink to='/rockets' 
          className='rockets-link' 
          >Rockets
        </NavLink>
      </div>
    </nav>
  )
}

export default Header;