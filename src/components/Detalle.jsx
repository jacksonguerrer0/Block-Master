import React, { useState } from 'react'
import '../layout/menu-styles/carrusel/carrusel.css'
import '../layout/all-films/detalle/detalle.css'
import { Span } from '../styles/tagsText'
import { CardFilm, Pegatin } from '../layout/all-films/card-film/CardFilm'
const Detalle = ({element}) => {
    return (
        <>
            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered  modal-xl ">
                <div className="modal-content">
                    <div className="modal-header">
                        <i className="fas fa-times" data-bs-dismiss="modal" aria-label="Close"></i>
                    </div>
                    <div className="modal-body">
                        <div className='containerImg'>
                        <CardFilm className='imgDetalle' style={!element?{backgroundColor: 'var(--primary)'}: {border:'0px'}} imagen={element?.imagen}>
                            <Pegatin style={element?.raiting <= 50 ? {border: '2px solid var(--blue)'}:{border: '2px solid var(--primary)'} }>

                                <i className="fas fa-star" style={{color: "var(--primary)", fontSize:"20px"}}/>
                                <h4>{element?.raiting}</h4>
                            </Pegatin> 
                        </CardFilm> 
                        </div>
                        <div className='textDetalle'>
                            <h2>{element?.name}</h2>
                            <p>{element?.description}</p>
                            <Span>{element?.date}</Span>
                                <div className="containerButtonDe">
                                <button type="button" className="primary buttonCarrusel ButtonDetalle" data-bs-dismiss="modal"><i className="fas fa-play pr-2"></i>VER AHORA</button>
                                <button type="button" className="secondary buttonCarrusel ButtonDetalle"><i className="fas fa-plus"></i>VER MÁS TARDE</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detalle
