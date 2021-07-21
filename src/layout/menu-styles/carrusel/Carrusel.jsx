import React from 'react'
import { ButtonIndicator } from './carruselStyled'
import './carrusel.css'


const Carrusel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide containerCarrusel" data-bs-ride="carousel" >
            <ButtonIndicator className="carousel-indicators ">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active  buttonRadio" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className='buttonRadio'></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className="buttonRadio"></button>
            </ButtonIndicator>
            <div className="carousel-inner ">
                <div className="carousel-item active img-fluid">
                    <img src="https://i.imgur.com/mWPQtaT.png" className="d-block w-100 imgCarrusel" alt="Mulan" />
                    <div className="containerButton  d-flex">
                        <button className='primary buttonCarrusel'><i className="fas fa-play"></i>VER AHORA</button>
                        <button className='secondary buttonCarrusel'><i className="fas fa-plus"></i>VER DESPUÉS</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/XTBBS2P.png" className="d-block w-100 imgCarrusel" alt="Raya" />
                    <div className="containerButton  d-flex">
                        <button className='primary buttonCarrusel'><i className="fas fa-play"></i>VER AHORA</button>
                        <button className='secondary buttonCarrusel'><i className="fas fa-plus"></i>VER DESPUÉS</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/xjRApG0.png" className="d-block w-100 imgCarrusel" alt="Unidos" />
                    <div className="containerButton  d-flex">
                    <button className='primary buttonCarrusel'><i className="fas fa-play"></i>VER AHORA</button>
                        <button className='secondary buttonCarrusel'><i className="fas fa-plus"></i>VER DESPUÉS</button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev d-none" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next d-none" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carrusel
