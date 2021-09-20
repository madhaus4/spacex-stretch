import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import logoLight from '../../TheNXTfrontier-light.svg'
import './Header.css'


function Header() {
  const [isRocketsPage, setIsRocketsPage] = useState(false)

  const togglePageView = () => {
    setIsRocketsPage(!isRocketsPage)
  }

  return (
    <nav className='nav-bar'>
      <img className='logo' src={logoLight} alt='The NXT Frontier logo' />
      <div className='links-container'>
        {isRocketsPage && <NavLink to='/' 
          className='history-link'
          onClick={() => togglePageView()}
          >Home
        </NavLink>}
        {!isRocketsPage && <NavLink to='/rockets' 
          className='rockets-link' 
          onClick={() => togglePageView()}
          >Rockets
        </NavLink>}
      </div>
    </nav>
  )
}

export default Header;