import React from 'react'
import { Navbar,Nav, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logoutEvent } from '../../../redux/loginDucks'
import './menu.css'


const NavMenu = () => {
  const dispatch = useDispatch()
  const handleLogoutClick = () => {
        dispatch(logoutEvent())
  } 
  return (
    <Navbar className='pb-sm-5' expand="md"> 
    <Navbar.Toggle aria-controls="navbarScroll" className='buttonNavbar' />
    <Link to='/' className='d-none d-md-block'>
            <img src="https://i.imgur.com/vcIFPQU.png" alt="" />
    </Link>
    <Navbar.Collapse id="navbarScroll" className='contentItems'>
        <nav className='d-sm-flex navbar-nav'>
        <NavLink exact to="/"  className='itemNav' activeClassName='activeLink a'>
                Todas
        </NavLink>
        <NavLink to="/Valorados"  className='itemNav' activeClassName='activeLink a' >
                Más Valorados
        </NavLink>
        <NavLink to="/Guardados"  className='itemNav' activeClassName='activeLink a'>
                Guardados
        </NavLink>
        </nav>
    </Navbar.Collapse>
    <Form className="d-flex barraBusqueda">
        <Form.Control
          type="search"
          placeholder="Buscar"
          className="mr-2 inputBusqueda shadow-none"
          aria-label="Search"
        />
        <button className="buttonSearch">
        <i className="fas fa-search"></i>
        </button>
      </Form>
      <i className="fas fa-sign-out-alt" onClick={handleLogoutClick}></i>
  </Navbar>
  )
}

export default NavMenu
