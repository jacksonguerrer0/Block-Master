import React from 'react'
import './carrusel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContainerCarousel } from './carruselStyled';

const Carrusel = () => {
    return (
        <ContainerCarousel id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
                <img src="https://i.imgur.com/XTBBS2P.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
                <img src="https://i.imgur.com/mWPQtaT.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
                <img src="https://i.imgur.com/xjRApG0.png" className="d-block w-100" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </ContainerCarousel>
    )
}

export default Carrusel
