import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import Carrusel from '../layout/menu-styles/carrusel/Carrusel'
import NavMenu from '../layout/menu-styles/nav/NavMenu'

const Menu = () => {
    const [showSearchCarrusel, setShowSearchCarrusel] = useState(true)
    const url = useLocation()
    useEffect(() => {
        if(url.pathname === '/admin'){
            setShowSearchCarrusel(false)
        }else{
            setShowSearchCarrusel(true)
        }
    }, [url.pathname])
    return (
    <>
        <NavMenu  setShowSearchCarrusel={setShowSearchCarrusel} showSearchCarrusel={showSearchCarrusel} />
        {
            showSearchCarrusel && <Carrusel />
        }
    </>
    )
}

export default Menu
