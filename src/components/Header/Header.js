import './Header.css'
import { NavLink } from 'react-router-dom'
import logo from '../../TheNXTfrontier.png'

function Header(props) {
  
  return (
    <nav className='nav-bar'>
      {/* <header className='header'>SpaceX</header> */}
      <img className='logo' src={logo} alt='The NXT Frontier logo' />
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