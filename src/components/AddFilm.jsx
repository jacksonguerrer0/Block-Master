import React from 'react'
import styled from 'styled-components'
import ModalAddEditFilm from './ModalAddFilm'

const ContainerAddFilm = styled.div`
    display: inline-flex;
    .buton-add{
        padding: 0.3rem;
        border-radius: 0.3rem;
        border: none;
        background-color: #28A745;
        color: whitesmoke;
    }
`
const AddFilm = () => {
    return (
        <ContainerAddFilm>
        <button data-bs-toggle="modal" 
        data-bs-target="#exampleModal2" className='buton-add'>
            Agregar una Pelicula
        </button>
        <ModalAddEditFilm />
        </ContainerAddFilm>
    )
}

export default AddFilm