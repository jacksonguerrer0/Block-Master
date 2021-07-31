import React from 'react'
import { Navbar,Nav, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import InputSearch from '../../../components/InputSearch'
import { logoutEvent } from '../../../redux/loginDucks'
import './menu.css'


const NavMenu = ({showSearchCarrusel, setShowSearchCarrusel}) => {
  const dispatch = useDispatch()
  const handleLogoutClick = () => {
        dispatch(logoutEvent())
  } 
  return (
    <Navbar className='pb-sm-5' expand="md"> 
    <Navbar.Toggle aria-controls="navbarScroll" className='buttonNavbar' />
    <Link to='/' className='d-none d-md-block' onClick={()=> {setShowSearchCarrusel(true)}}>
            <img src="https://i.imgur.com/vcIFPQU.png" alt="" />
    </Link>
    <Navbar.Collapse id="navbarScroll" className='contentItems'>
        <nav className='d-sm-flex navbar-nav'>
        <NavLink exact to="/"  className='itemNav' activeClassName='activeLink a' onClick={()=> {setShowSearchCarrusel(true)}}>
                Todas
        </NavLink>
        <NavLink to="/valorados"  className='itemNav' activeClassName='activeLink a' onClick={()=> {setShowSearchCarrusel(true)}}>
                Más Valorados
        </NavLink>
        <NavLink to="/guardados"  className='itemNav' activeClassName='activeLink a' onClick={()=> {setShowSearchCarrusel(true)}}>
                Guardados
        </NavLink>        
        <NavLink to="/admin"  className='itemNav' activeClassName='activeLink a' onClick={()=> {setShowSearchCarrusel(false)}}>
                ADMIN
        </NavLink>
        </nav>
    </Navbar.Collapse>
        {
                showSearchCarrusel &&     
                <>
                <InputSearch />
              </>
        }
      <i className="fas fa-sign-out-alt" onClick={handleLogoutClick}></i>
  </Navbar>
  )
}

export default NavMenu
