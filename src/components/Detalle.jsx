import React from 'react'
import '../layout/menu-styles/carrusel/carrusel.css'
import '../layout/all-films/detalle/detalle.css'
import { Span } from '../styles/tagsText'
import { CardFilm, Pegatin } from '../layout/all-films/card-film/CardFilm'
const Detalle = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>

            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered  modal-xl ">
                <div className="modal-content">
                    <div className="modal-header">
                        <i className="fas fa-times" data-bs-dismiss="modal" aria-label="Close"></i>
                    </div>
                    <div className="modal-body">
                        <div className='containerImg'>
                        <CardFilm className='imgDetalle'>
                            <Pegatin>
                                <i className="fas fa-star" style={{color: "var(--primary)", fontSize:"20px"}}/>
                                <h4 style={{ marginBottomB:"50px"}}>7.9</h4>
                            </Pegatin> 
                        </CardFilm> 
                        </div>
                        <div className='textDetalle'>
                            <h2>Titulo Pelicula</h2>
                            <p>Descripcion</p>
                            <Span>fechass</Span>
                                <div className="containerButtonDe">
                                <button type="button" className="primary buttonCarrusel ButtonDetalle" data-bs-dismiss="modal"><i className="fas fa-play pr-2"></i>VER AHORA</button>
                                <button type="button" className="secondary buttonCarrusel ButtonDetalle"><i className="fas fa-plus"></i>VER MÁS TARDE</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalle
