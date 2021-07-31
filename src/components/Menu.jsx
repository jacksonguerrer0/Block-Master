import React from 'react'
import { useState } from 'react'
import Carrusel from '../layout/menu-styles/carrusel/Carrusel'
import NavMenu from '../layout/menu-styles/nav/NavMenu'

const Menu = () => {
    const [showSearchCarrusel, setShowSearchCarrusel] = useState(true)
    return (
    <div>
        <NavMenu  setShowSearchCarrusel={setShowSearchCarrusel} showSearchCarrusel={showSearchCarrusel} />
        {
            showSearchCarrusel && <Carrusel />
        }
    </div>
    )
}

export default Menu
