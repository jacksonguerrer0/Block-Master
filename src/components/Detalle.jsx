import React from 'react'
// import '../layout/all-films/detalle/detalle.css'
import { Span } from '../styles/tagsText'
import { CardFilm, Pegatin } from '../layout/all-films/card-film/CardFilm'
import { Link } from 'react-router-dom'
import { ContainerModal } from '../layout/all-films/detalle/Detalle'
const Detalle = ({element}) => {
    return (
        <ContainerModal>
        <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered  modal-xl ">
            <div className="modal-content">
                <div className="modal-header">
                    <i className="fas fa-times" data-bs-dismiss="modal" aria-label="Close"></i>
                </div>
                <div className="modal-body container-fluid">
                    <div className='containerImg'>
                    <CardFilm 
                    className='imgDetalle' 
                    imagen = { element?.image ? element?.image : `https://image.tmdb.org/t/p/w500`+ element?.poster_path}
                    >
                        <Pegatin 
                        style={element?.vote_average <= 7.0 ? {border: '2px solid var(--blue)'}:{border: '2px solid var(--primary)'} }>

                            <i className="fas fa-star" style={{color: "var(--primary)", fontSize:"20px"}}/>
                            <h4>{element?.vote_average}</h4>
                        </Pegatin> 
                    </CardFilm>
                    </div>
                    <div className='textDetalle'>
                        <h2>{element?.title}</h2>
                        <p>{element?.overview}</p>
                        <Span>{element?.release_date}</Span>
                            <div className="containerButtonDe">
                            <Link to={`/view/${element?.title}`}>
                            <button type="button" className="primary buttonCarrusel ButtonDetalle" data-bs-dismiss="modal" >
                                <i className="fas fa-play"></i>VER AHORA</button>
                            </Link>
                            <button type="button" className="secondary buttonCarrusel ButtonDetalle"><i className="fas fa-plus"></i>VER MÁS TARDE</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </ContainerModal>
    )
}

export default Detalle
