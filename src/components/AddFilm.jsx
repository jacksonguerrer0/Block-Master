import React from 'react'
import ModalAddEditFilm from './ModalAddEditFilm'

const AddFilm = () => {
    return (
        <>
        <button data-bs-toggle="modal" 
        data-bs-target="#exampleModal2">
            Agregar una Pelicula
        </button>
        <ModalAddEditFilm />
        </>
    )
}

export default AddFilm