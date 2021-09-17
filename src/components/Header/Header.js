import './Header.css'
import { NavLink } from 'react-router-dom'
import logo from '../../TheNXTfrontier.png'
import logoLight from '../../TheNXTfrontier-light.svg'

function Header(props) {
  
  return (
    <nav className='nav-bar'>
      <img className='logo' src={logoLight} alt='The NXT Frontier logo' />
      <div className='links-container'>
        <NavLink to='/' 
          className='history-link'
          >Articles
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