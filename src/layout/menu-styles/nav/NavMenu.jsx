import React from 'react'
// import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import InputSearch from '../../../components/InputSearch'
import { ContentNav } from './navMenuStyled'


const NavMenu = ({showSearchCarrusel, setShowSearchCarrusel}) => {
//   const dispatch = useDispatch()

  return (
   <ContentNav> 
           <div className='box'></div>
    <Link to='/' className='contentImg' onClick={()=> {setShowSearchCarrusel(true)}}>
            <img src="https://i.imgur.com/vcIFPQU.png" alt="" />
    </Link>
    <i className="fas fa-bars hamburger"></i>
    <input type="checkbox"  />
    <nav className='navbar-nav'>
        <NavLink exact to="/"  className='itemNav' activeClassName='activeLink a' 
        onClick={()=> {setShowSearchCarrusel(true)}}>
                Todas
        </NavLink>
        <NavLink to="/valorados"  className='itemNav' activeClassName='activeLink a' 
        onClick={()=> {setShowSearchCarrusel(true)}}>
                Más Valorados
        </NavLink>
        <NavLink to="/guardados"  className='itemNav' activeClassName='activeLink a' 
        onClick={()=> {setShowSearchCarrusel(true)}}>
                Guardados
        </NavLink>        
        <NavLink to="/admin"  className='itemNav' activeClassName='activeLink a' 
        onClick={()=> {setShowSearchCarrusel(false)}}>
                ADMIN
        </NavLink>
        <InputSearch />
     </nav>
   </ContentNav>
  )
}

export default NavMenu
